import { NextResponse } from "next/server";
import { mysql } from "@/libs/mysql";
import jwt from "jsonwebtoken";
import { generateToken, getSecretKey, verifyToken } from "@/app/api/utils/";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    console.log(email, password);
    const responses = await mysql.query(
      "SELECT id_user FROM users WHERE email = ? AND pass = ?",
      [email, password]
    );
    if (responses.length === 0) {
      return NextResponse.json(
        { error: "Usuario o contraseña incorrectos" },
        { status: 401 }
      );
    }
    return NextResponse.json(generateToken(responses[0].id_user));
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
