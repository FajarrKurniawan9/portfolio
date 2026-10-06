import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

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

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY; // Optional accessToken for secure server calls

    if (!serviceId || !templateId || !publicKey) {
      return NextResponse.json(
        {
          success: false,
          error: "Konfigurasi EmailJS belum lengkap di environment server (.env.local).",
        },
        { status: 500 },
      );
    }

    // Prepare payload for EmailJS API
    const payload: Record<string, unknown> = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        message: message,
      },
    };

    // If privateKey (accessToken) is set in EmailJS dashboard
    if (privateKey) {
      payload.accessToken = privateKey;
    }

    const emailjsResponse = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    if (!emailjsResponse.ok) {
      const errorText = await emailjsResponse.text();
      console.error("[EmailJS API Error]:", errorText);

      // Provide clear diagnostic guidance in response
      let clientMsg = "Gagal mengirim pesan via EmailJS.";
      if (errorText.includes("service ID not found")) {
        clientMsg = "EmailJS Service ID tidak ditemukan atau telah kedaluwarsa. Periksa kembali di dashboard EmailJS.";
      } else if (errorText.includes("non-browser environments is currently disabled")) {
        clientMsg = "Akses API server ditolak: Aktifkan 'Allow EmailJS API requests from non-browser environments' atau isi EMAILJS_PRIVATE_KEY di dashboard.";
      }

      return NextResponse.json(
        { success: false, error: clientMsg, detail: errorText },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Pesan berhasil dikirim!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("[Contact API Catch Error]:", error);
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan internal server." },
      { status: 500 },
    );
  }
}
