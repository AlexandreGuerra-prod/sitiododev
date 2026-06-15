import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ mensagem: "A API ESTÁ VIVA E FUNCIONANDO!" });
}