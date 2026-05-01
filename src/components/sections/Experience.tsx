import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const logs = [
  { year: "2022", text: "Completed Computer Science — SNHSS Chithara" },
  { year: "2023", text: "Started BCA at PMSA Pookoya Thangal Memorial College" },
  { year: "2025", text: "Graduated BCA — Bachelor of Computer Application" },
  { year: "2025", text: "Certified: Python Full Stack Developer — Mashup Stack" },
  { year: "2025", text: "Certified: Ethical Hacking Associate — RedTeam Hacker Academy" },
  { year: "2025", text: "Built Smart Service Booking system with React + Django REST" },
];

const TypeLine = ({ year, text, delay }: { year: string; text: string; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const start = setTimeout(() => {
      const t = setInterval(() => {
        i++;
        setTyped(text.slice(0, i));
        if (i >= text.length) clearInterval(t);
      }, 22);
    }, delay);
    return () => clearTimeout(start);
  }, [inView, text, delay]);

  return (
    <div ref={ref} className="relative pl-10 pb-8 last:pb-0">
      {/* Timeline node */}
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-glow" />
      <div className="absolute left-[7px] top-6 bottom-0 w-px bg-gradient-to-b from-primary/60 to-transparent last:hidden" />

      <div className="glass rounded-lg p-4 font-mono text-sm relative overflow-hidden">
        <div className="flex items-baseline gap-3 flex-wrap">
          <span className="text-secondary font-bold">[{year}]</span>
          <span className="text-primary">&gt;&gt;</span>
          <span className="text-foreground">
            {typed}
            {typed.length < text.length && (
              <span className="inline-block w-1.5 h-3.5 bg-primary ml-0.5 animate-blink align-middle" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <SectionHeading code="05" title="System Logs" subtitle="Chronological trace" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-strong rounded-xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-2 pb-4 mb-6 border-b border-primary/20 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">tail -f</span>
            <span className="text-primary">/var/log/journey.log</span>
          </div>
          {logs.map((l, i) => (
            <TypeLine key={i} year={l.year} text={l.text} delay={i * 400} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
