import { NextResponse } from "next/server";
import { mysql } from "@/libs/mysql";

export async function POST(req) {
  try {
    const { id_img, email, username, pass } = await req.json();

    const responses = await mysql.query("INSERT INTO `users` SET ?", {
      email,
      username,
      pass,
      id_img: id_img.id_img,
    });
    // INSERT INTO `users`(`email`, `username`, `pass`, `id_img`) VALUES ( 'res.email', 'res.email', 'res.email', 2);
    return NextResponse.json(responses);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
