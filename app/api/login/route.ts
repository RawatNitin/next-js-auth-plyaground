import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === "rawat.nitin11@gmail.com" && password === "1234") {
    const response = NextResponse.json({ success: true });

    response.cookies.set("token", "fake-jwt-token", {
      httpOnly: true,
      path: "/",
    });

    return response;
  }

  return NextResponse.json({ success: false, status: "401" });
}
