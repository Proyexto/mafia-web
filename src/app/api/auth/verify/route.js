import { NextResponse } from "next/server";
import { verifyToken } from "@/app/api/utils/";

export async function POST(req) {
  try {
    const { token } = await req.json();
    const idUser = verifyToken(token)?.userId;

    if (!idUser) {
      return NextResponse.json(
        { error: "El token no es válido o ha expirado" },
        { status: 401 }
      );
    }

    return NextResponse.json({ message: "Token valido" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
