"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "./FadeIn";
import { Button } from "@/components/ui/button";

const CONTACT_EMAIL = "mfajarkurniawa@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Panggil API Route kita — bukan EmailJS langsung!
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        // Tampilkan error message dari server
        setErrorMessage(data.error || "Terjadi kesalahan!");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setErrorMessage("Tidak dapat terhubung ke server!");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 md:px-16">
      {/* Radial glow accent */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-120 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary-glow)),transparent_70%)]"
        aria-hidden
      />

      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-foreground md:text-4xl">
              Let&apos;s build something.
            </h2>
            <p className="mt-3 font-mono text-xs text-primary">
              OPEN TO WORK · 2026 — available for freelance &amp; full-time opportunities
            </p>
            <Button
              variant="outline"
              nativeButton={false}
              className="mt-6 font-sans"
              render={<a href={`mailto:${CONTACT_EMAIL}`} />}
            >
              Or email me
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SectionTitle
            title="Contact"
            subtitle="Ada pertanyaan atau ingin berkolaborasi? Hubungi saya!"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          {status === "success" ? (
            <div className="py-12 text-center">
              <p className="mb-2 text-xl font-semibold text-primary">
                Pesan terkirim!!
              </p>
              <p className="text-muted-foreground">
                Terima kasih sudah menghubungi saya. Saya akan segera membalas!
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Kirim pesan lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nama */}
              <div>
                <label className="mb-2 block text-sm text-muted-foreground">
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Nama kamu"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground placeholder-muted-foreground/60 transition-colors outline-none focus:border-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="email@kamu.com"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground placeholder-muted-foreground/60 transition-colors outline-none focus:border-primary"
                />
              </div>

              {/* Pesan */}
              <div>
                <label className="mb-2 block text-sm text-muted-foreground">
                  Pesan
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tulis pesanmu di sini..."
                  className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-foreground placeholder-muted-foreground/60 transition-colors outline-none focus:border-primary"
                />
              </div>

              {/* Error message dari server */}
              {status === "error" && (
                <div className="rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3">
                  <p className="text-sm text-destructive">{errorMessage}</p>
                </div>
              )}

              {/* Tombol Submit */}
              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full font-sans"
              >
                {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
              </Button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
