import { NextResponse } from "next/server";
import { mysql } from "@/libs/mysql";
import { generateToken, verifyToken } from "@/app/api/utils/";

export async function POST(req, res) {
  try {
    const { token } = res.params;
    const { newPass } = await req.json();
    const idUser = verifyToken(token)?.userId;

    if (!idUser) {
      return NextResponse.json(
        { error: "El token no es válido o ha expirado" },
        { status: 401 }
      );
    }

    const responses = await mysql.query(
      "UPDATE `users` SET pass = ? WHERE `id_user` = ?",
      [newPass, idUser]
    );

    if (responses.affectedRows === 0) {
      return NextResponse.json(
        { error: "No existe un usuario con ese id" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: "Contraseña actualizada",
      token: generateTemporalToken(getUser[0].id_user),
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
