import { NextResponse } from "next/server";
import { mysql } from "@/libs/mysql";

export async function GET(res, { params }) {
  try {
    const responses = await mysql.query(
      "SELECT * FROM `image` WHERE `id_img` = ?",
      [params.id]
    );

    return NextResponse.json(responses);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
