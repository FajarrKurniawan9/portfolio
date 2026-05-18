import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // 1. Ambil data dari request body
    const body = await request.json();
    const { name, email, message } = body;

    // 2. Validasi data
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Semua field harus diisi!" },
        { status: 400 },
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Format email tidak valid!" },
        { status: 400 },
      );
    }

    // 3. Kirim email via EmailJS
    const emailjsResponse = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: name,
            from_email: email,
            message: message,
          },
        }),
      },
    );

    if (!emailjsResponse.ok) {
      throw new Error("Gagal mengirim email");
    }

    // 4. Kirim response sukses
    return NextResponse.json(
      { success: true, message: "Pesan berhasil dikirim!" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan server!" },
      { status: 500 },
    );
  }
}
