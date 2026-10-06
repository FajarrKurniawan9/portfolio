"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Mail, Send, Terminal, CheckCircle2 } from "lucide-react";

const CONTACT_EMAIL = "fajar.krnwn08@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Gagal mengirim pesan.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Terjadi kesalahan. Coba lagi nanti."
      );
    }
  };

  return (
    <section
      id="contact"
      aria-label="Direct Communication & Dispatch"
      className="border-b border-white/[0.06] bg-zinc-950 px-6 py-24 md:px-16"
    >
      <div className="mx-auto max-w-4xl">
        <FadeIn delay={0}>
          <div className="flex flex-col items-start justify-between gap-4 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                <Terminal className="size-3 text-zinc-400" />
                INITIATE HANDSHAKE // DISPATCH
              </div>
              <h2 className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                Get In Touch
              </h2>
              <p className="mt-1 font-mono text-xs text-zinc-500 sm:text-sm">
                Tersedia untuk proyek backend berkinerja tinggi, kontrak, atau konsultasi arsitektur
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              <span>STATUS: ACCEPTING INQUIRIES</span>
            </div>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          {/* Left specification / Direct mail channel */}
          <div className="space-y-6 md:col-span-5">
            <FadeIn delay={0.1}>
              <div className="border border-white/[0.08] bg-black p-5 font-mono text-xs">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                  DIRECT CHANNEL
                </span>
                <p className="mt-2 text-sm font-medium text-white break-all">
                  {CONTACT_EMAIL}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                  Kirim brief proyek atau spesifikasi teknis langsung ke inbox. Respon dijamin dalam &lt; 24 jam kerja.
                </p>

                <div className="mt-5 border-t border-white/[0.08] pt-4">
                  <Button
                    variant="outline"
                    nativeButton={false}
                    className="w-full gap-2 rounded-none border border-white/10 bg-zinc-900/50 font-mono text-xs text-zinc-200 transition-colors hover:border-white/20 hover:bg-zinc-900 hover:text-white"
                    render={<a href={`mailto:${CONTACT_EMAIL}`} />}
                  >
                    <Mail className="size-3.5 text-zinc-400" />
                    Open Default Mail Client
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="border border-white/[0.06] bg-zinc-900/20 p-4 font-mono text-[11px] text-zinc-500 space-y-2">
                <div className="flex justify-between">
                  <span>TIMEZONE:</span>
                  <span className="text-zinc-400">WIB (UTC+7)</span>
                </div>
                <div className="flex justify-between">
                  <span>PGP / SSL:</span>
                  <span className="text-zinc-400">ENCRYPTED AT REST</span>
                </div>
                <div className="flex justify-between">
                  <span>LOCATION:</span>
                  <span className="text-zinc-400">Malang, Indonesia</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right message dispatcher form */}
          <div className="md:col-span-7">
            <FadeIn delay={0.2}>
              {status === "success" ? (
                <div className="border border-white/[0.1] bg-black p-8 font-mono text-center">
                  <CheckCircle2 className="mx-auto size-8 text-emerald-400" />
                  <p className="mt-4 text-base font-medium text-white">
                    [DISPATCH_ACK]: Payload Delivered
                  </p>
                  <p className="mt-2 text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
                    Pesan telah terkirim ke server. Saya akan meninjau dan merespon kembali secepatnya.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 border border-white/10 bg-zinc-900 px-4 py-1.5 text-xs text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
                  >
                    Kirim Dispatch Baru &rarr;
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="border border-white/[0.08] bg-black p-6 space-y-4"
                >
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                      SENDER_IDENTIFIER (NAME)
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe / Tech Lead"
                      className="mt-1.5 w-full rounded-none border border-white/[0.1] bg-zinc-950 px-3.5 py-2 font-mono text-xs text-white placeholder-zinc-700 transition-colors focus:border-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                      REPLY_ENDPOINT (EMAIL)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. lead@company.org"
                      className="mt-1.5 w-full rounded-none border border-white/[0.1] bg-zinc-950 px-3.5 py-2 font-mono text-xs text-white placeholder-zinc-700 transition-colors focus:border-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                      PAYLOAD_BODY (MESSAGE)
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Sampaikan cakupan proyek, arsitektur yang diinginkan, atau pertanyaan teknis..."
                      className="mt-1.5 w-full resize-none rounded-none border border-white/[0.1] bg-zinc-950 px-3.5 py-2 font-mono text-xs text-white placeholder-zinc-700 transition-colors focus:border-white focus:outline-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="border border-rose-900/50 bg-rose-950/20 px-3 py-2 font-mono text-xs text-rose-400">
                      [ERROR]: {errorMessage}
                    </div>
                  )}

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full gap-2 rounded-none border border-white bg-white font-sans text-xs font-medium text-black transition-colors hover:bg-zinc-200"
                    >
                      <Send className="size-3.5" />
                      {status === "loading" ? "Dispatching Payload..." : "Transmit Message"}
                    </Button>
                  </div>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
