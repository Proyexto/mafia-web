import { NextResponse } from "next/server";
import { mysql } from "@/libs/mysql";
import { generateTemporalToken } from "@/app/api/utils/";

export async function POST(req) {
  try {
    const { email } = await req.json();

    const getUser = await mysql.query(
      "SELECT id_user FROM users WHERE email = ?",
      [email]
    );

    if (getUser.length === 0) {
      return NextResponse.json(
        { error: "No existe un usuario con ese email" },
        { status: 401 }
      );
    }

    return NextResponse.json(generateTemporalToken(getUser[0].id_user));
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
