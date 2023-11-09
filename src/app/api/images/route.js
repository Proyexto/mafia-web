import { NextResponse } from "next/server";
import { mysql } from "@/libs/mysql";

export async function GET() {
  try {
    const responses = await mysql.query("SELECT * FROM `image`");

    return NextResponse.json(responses);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
