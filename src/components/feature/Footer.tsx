import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [formState, setFormState] = useState<"idle" | "success">("idle");
  const [charCount, setCharCount] = useState(0);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "";
    if (message.length > 500) return;

    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value ?? "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value ?? "";
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)?.value ?? "Website enquiry";
    const body = `${message}\n\nFrom: ${name}\nEmail: ${email}`;
    window.location.href = `mailto:okankurt@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormState("success");
    form.reset();
    setCharCount(0);
  };

  return (
    <footer id="contact" className="bg-[#050505] border-t border-dark-500/30">

      {/* ── Contact Section ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left — Heading & info */}
          <div className="w-full lg:w-[42%] flex-shrink-0">
            <p className="section-label mb-4">GET IN TOUCH</p>
            <h2 className="text-3xl md:text-4xl font-display font-700 text-white mb-5 leading-tight">
              Got an idea?<br />
              <span className="teal-gradient-text">Let's build it.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              I work on engineering problems that require practical thinking, fast prototyping, and real-world constraints. Drop me a message and I'll get back to you.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:okankurt@gmail.com"
                className="flex items-center gap-3 group cursor-pointer"
              >
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-teal-500/10 border border-teal-500/20 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-all">
                  <i className="ri-mail-line text-teal-400 text-sm" />
                </span>
                <span className="text-sm text-gray-400 group-hover:text-teal-400 transition-colors">
                  okankurt@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-teal-500/10 border border-teal-500/20">
                  <i className="ri-map-pin-line text-teal-400 text-sm" />
                </span>
                <span className="text-sm text-gray-400">Istanbul, Turkey — Available globally</span>
              </div>
              <a
                href="https://www.linkedin.com/in/okan-kurt-4aaa0b27/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group cursor-pointer"
              >
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-teal-500/10 border border-teal-500/20 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-all">
                  <i className="ri-linkedin-line text-teal-400 text-sm" />
                </span>
                <span className="text-sm text-gray-400 group-hover:text-teal-400 transition-colors">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="w-full lg:flex-1">
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-dark-700/50 border border-teal-500/20 rounded-2xl">
                <span className="w-14 h-14 flex items-center justify-center rounded-full bg-teal-500/15 border border-teal-500/30 mb-5">
                  <i className="ri-check-line text-teal-400 text-2xl" />
                </span>
                <h3 className="text-lg font-display font-700 text-white mb-2">Email app opened</h3>
                <p className="text-sm text-gray-400 mb-6">Review the message in your email app and press send.</p>
                <button
                  onClick={() => setFormState("idle")}
                  className="btn-outline px-5 py-2 rounded-full text-xs font-semibold cursor-pointer whitespace-nowrap"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                {/* Name + Email row */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full bg-dark-700/60 border border-dark-500/60 hover:border-dark-400/80 focus:border-teal-500/60 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-dark-700/60 border border-dark-500/60 hover:border-dark-400/80 focus:border-teal-500/60 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What's this about?"
                    className="w-full bg-dark-700/60 border border-dark-500/60 hover:border-dark-400/80 focus:border-teal-500/60 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="message" className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">
                      Message
                    </label>
                    <span className={`text-[10px] ${charCount > 480 ? "text-rose-400" : "text-gray-600"}`}>
                      {charCount}/500
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={500}
                    placeholder="Tell me about your project, idea, or challenge..."
                    onChange={(e) => setCharCount(e.target.value.length)}
                    className="w-full bg-dark-700/60 border border-dark-500/60 hover:border-dark-400/80 focus:border-teal-500/60 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={charCount > 500}
                  className="btn-primary flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm cursor-pointer whitespace-nowrap self-start disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <>
                    <span>Open Email App</span>
                    <span className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-send-plane-line" />
                    </span>
                  </>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="border-t border-dark-500/40" />
      </div>

      {/* Middle Row */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Navigation
          </p>
          <ul className="flex flex-col gap-2.5">
            {[
              { label: "Home", to: "/" },
              { label: "Portfolio", to: "/portfolio" },
              { label: "Skills", id: "skills" },
              { label: "About", id: "about" },
            ].map((item) =>
              item.to ? (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.label}>
                  <button
                    onClick={() => handleScrollTo(item.id!)}
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Contact
          </p>
          <ul className="flex flex-col gap-2.5">
            <li>
              <a
                href="mailto:okankurt@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400 transition-colors cursor-pointer"
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-mail-line" />
                </span>
                okankurt@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/okan-kurt-4aaa0b27/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400 transition-colors cursor-pointer"
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-linkedin-line" />
                </span>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Location &amp; Status
          </p>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-4 flex items-center justify-center">
              <i className="ri-map-pin-line text-teal-500" />
            </span>
            <span className="text-sm text-gray-400">Istanbul, Turkey</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center">
              <i className="ri-global-line text-teal-500" />
            </span>
            <span className="text-sm text-gray-400">Available globally</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="border-t border-dark-500/40 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {currentYear} Okan Kurt. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/okan-kurt-4aaa0b27/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-teal-400 transition-colors cursor-pointer"
            >
              <i className="ri-linkedin-fill text-base" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
