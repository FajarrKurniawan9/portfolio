"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "./FadeIn";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <SectionTitle
            title="Contact"
            subtitle="Ada pertanyaan atau ingin berkolaborasi? Hubungi saya!"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          {status === "success" ? (
            <div className="text-center py-12">
              <p className="text-green-400 text-xl font-semibold mb-2">
                Pesan terkirim!!
              </p>
              <p className="text-mist-400">
                Terima kasih sudah menghubungi saya. Saya akan segera membalas!
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-mist-500 hover:text-green-400 transition-colors"
              >
                Kirim pesan lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nama */}
              <div>
                <label className="block text-sm text-mist-400 mb-2">Nama</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Nama kamu"
                  className="w-full bg-mist-900/50 border border-mist-800 focus:border-green-500 rounded-xl px-4 py-3 text-white placeholder-mist-600 outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-mist-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="email@kamu.com"
                  className="w-full bg-mist-900/50 border border-mist-800 focus:border-green-500 rounded-xl px-4 py-3 text-white placeholder-mist-600 outline-none transition-colors"
                />
              </div>

              {/* Pesan */}
              <div>
                <label className="block text-sm text-mist-400 mb-2">
                  Pesan
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tulis pesanmu di sini..."
                  className="w-full bg-mist-900/50 border border-mist-800 focus:border-green-500 rounded-xl px-4 py-3 text-white placeholder-mist-600 outline-none transition-colors resize-none"
                />
              </div>

              {/* Tombol Submit */}
              <button
                type="submit"
                className="w-full py-3 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl transition-colors"
              >
                Kirim Pesan
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
