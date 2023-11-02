import { NextResponse } from "next/server";
import { mysql } from "@/libs/mysql";
import { jwt } from "jwt";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const responses = await mysql.query("SELECT id FROM users WHERE email=? AND password=?", {
      email,
      password,
    });
    // INSERT INTO `users`(`email`, `username`, `pass`, `id_img`) VALUES ( 'res.email', 'res.email', 'res.email', 2);
    return NextResponse.json(responses);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}