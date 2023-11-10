import { NextResponse } from "next/server";
import { mysql } from "@/libs/mysql";
import { generateToken } from "../../utils";

export async function POST(req) {
  try {
    const { id_img, email, username, pass } = await req.json();

    const checkExistence = await mysql.query(
      "SELECT id_user FROM users WHERE email = ? OR username = ?",
      [email, username]
    );

    if (checkExistence.length > 0) {
      return NextResponse.json(
        { error: "Ya existe un usuario con ese email" },
        { status: 409 }
      );
    }

    const responses = await mysql.query("INSERT INTO `users` SET ?", {
      email,
      username,
      pass,
      id_img: id_img.id,
    });

    return NextResponse.json({
      token: generateToken(responses.insertId),
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
