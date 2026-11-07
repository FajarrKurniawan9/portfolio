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
      className="border-b border-border bg-transparent px-4 py-16 sm:px-6 md:px-16 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <FadeIn delay={0}>
          <div className="flex flex-col items-start justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                <Terminal className="size-3 text-accent" />
                CONTACT // CONNECT
              </div>
              <h2 className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl">
                Get In Touch
              </h2>
              <p className="mt-1 font-mono text-xs text-muted-foreground sm:text-sm">
                Open for backend engineering projects, contracts, or technical discussions
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent" />
              <span>STATUS: AVAILABLE FOR WORK</span>
            </div>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          {/* Left specification / Direct mail channel */}
          <div className="space-y-6 md:col-span-5">
            <FadeIn delay={0.1}>
              <div className="border border-border bg-surface p-5 font-mono text-xs">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  DIRECT EMAIL
                </span>
                <p className="mt-2 text-sm font-medium text-foreground break-all">
                  {CONTACT_EMAIL}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Send a project brief or question directly to my inbox. I usually reply within 24 hours.
                </p>

                <div className="mt-5 border-t border-border pt-4">
                  <Button
                    variant="outline"
                    nativeButton={false}
                    className="w-full gap-2 rounded-none border border-border bg-surface font-mono text-xs text-foreground transition-colors hover:border-accent/60 hover:bg-surface-raised"
                    render={<a href={`mailto:${CONTACT_EMAIL}`} />}
                  >
                    <Mail className="size-3.5 text-muted-foreground" />
                    Open Mail Client
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="border border-border bg-surface p-4 font-mono text-[11px] text-muted-foreground space-y-2">
                <div className="flex justify-between">
                  <span>TIMEZONE:</span>
                  <span className="text-foreground">WIB (UTC+7)</span>
                </div>
                <div className="flex justify-between">
                  <span>PGP / SSL:</span>
                  <span className="text-foreground">ENCRYPTED AT REST</span>
                </div>
                <div className="flex justify-between">
                  <span>LOCATION:</span>
                  <span className="text-foreground">Malang, Indonesia</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right message dispatcher form */}
          <div className="md:col-span-7">
            <FadeIn delay={0.2}>
              {status === "success" ? (
                <div className="border border-border bg-surface p-8 font-mono text-center">
                  <CheckCircle2 className="mx-auto size-8 text-accent" />
                  <p className="mt-4 text-base font-medium text-foreground">
                    Message Delivered
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out! Your message was sent successfully. I will get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 border border-border bg-surface px-4 py-1.5 text-xs text-foreground transition-colors hover:border-accent"
                  >
                    Send Another Message &rarr;
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="border border-border bg-surface p-6 space-y-4"
                >
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Alex Morgan"
                      className="mt-1.5 min-h-[46px] w-full rounded-md border border-border bg-background px-3.5 py-2 font-mono text-base sm:text-xs text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. alex@example.com"
                      className="mt-1.5 min-h-[46px] w-full rounded-md border border-border bg-background px-3.5 py-2 font-mono text-base sm:text-xs text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      YOUR MESSAGE
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Share your project idea, requirements, or any questions..."
                      className="mt-1.5 w-full resize-none rounded-md border border-border bg-background px-3.5 py-2 font-mono text-base sm:text-xs text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent focus:outline-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="border border-rose-900/50 bg-rose-950/20 px-3 py-2 font-mono text-xs text-rose-300">
                      [ERROR]: {errorMessage}
                    </div>
                  )}

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="h-12 w-full gap-2 rounded-md border border-transparent bg-primary font-sans text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                    >
                      <Send className="size-3.5" />
                      {status === "loading" ? "Sending..." : "Send Message"}
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
