import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Transmission sent", { description: "Signal received. I'll respond within 24h." });
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  const fieldClass =
    "w-full bg-background/40 border border-border rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:shadow-glow-soft transition-all";

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <SectionHeading code="06" title="Control Panel" subtitle="Open transmission" />

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 sm:p-8 space-y-5 relative overflow-hidden"
          >
            <div className="scan-line opacity-30" />
            <div className="flex items-center gap-2 font-mono text-xs text-primary mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              CHANNEL_OPEN
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Name</label>
              <input required name="name" placeholder="Your name" className={fieldClass} />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Email</label>
              <input required type="email" name="email" placeholder="you@domain.com" className={fieldClass} />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Message</label>
              <textarea required name="message" rows={5} placeholder="Compose your transmission..." className={`${fieldClass} resize-none`} />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full group relative overflow-hidden rounded-lg bg-primary text-primary-foreground font-mono text-sm font-bold py-3.5 animate-pulse-glow disabled:opacity-60"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Send className={`w-4 h-4 ${sending ? "animate-pulse" : "group-hover:translate-x-1 transition-transform"}`} />
                {sending ? "TRANSMITTING..." : "SEND TRANSMISSION"}
              </span>
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-xl mb-2 gradient-text">Direct Link</h3>
              <p className="text-sm text-muted-foreground mb-5 font-mono">
                Available for collaborations, freelance and AI-driven product builds.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Mail, label: "haassan369@gmail.com", href: "mailto:haassan369@gmail.com" },
                  { icon: Github, label: "github.com/hassan", href: "https://github.com/" },
                  { icon: Linkedin, label: "linkedin.com/in/hassan", href: "https://linkedin.com/" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="glass-strong rounded-lg px-4 py-3 flex items-center gap-3 font-mono text-sm hover:border-primary/60 hover:text-primary transition-all group"
                  >
                    <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 font-mono text-xs">
              <div className="flex justify-between mb-2"><span className="text-muted-foreground">STATUS</span><span className="text-primary">● AVAILABLE</span></div>
              <div className="flex justify-between mb-2"><span className="text-muted-foreground">RESPONSE</span><span>&lt; 24H</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">TIMEZONE</span><span>UTC+05:00</span></div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
