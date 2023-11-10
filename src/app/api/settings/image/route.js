import { NextResponse } from "next/server";
import { mysql } from "@/libs/mysql";
import { verifyToken } from "@/app/api/utils/";

export async function POST(req) {
  try {
    const { idImage, token } = await req.json();
    const idUser = verifyToken(token)?.userId;

    if (!idUser) {
      return NextResponse.json(
        { error: "El token no es válido o ha expirado" },
        { status: 401 }
      );
    }

    const responses = await mysql.query(
      "UPDATE `users` SET id_img = ? WHERE `id_user` = ?",
      [idImage, idUser]
    );

    return NextResponse.json({ message: "Imagen Cambiada" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
