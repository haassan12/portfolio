import { motion } from "framer-motion";
import portrait from "@/assets/hero-portrait.jpg";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { label: "Projects", value: 1, suffix: "+" },
  { label: "Certificates", value: 2, suffix: "" },
  { label: "Learning", value: 99, suffix: "%" },
];

const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="container max-w-6xl mx-auto">
        <SectionHeading code="02" title="AI Profile Panel" subtitle="Identity registry" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="glass rounded-2xl p-6 sm:p-10 grid md:grid-cols-[220px_1fr] gap-8 items-center relative overflow-hidden"
        >
          <div className="scan-line opacity-40" />
          <div className="relative mx-auto md:mx-0">
            <div className="absolute inset-0 -m-3 rounded-full bg-primary/30 blur-2xl" />
            <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-primary/60 shadow-glow">
              <img src={portrait} alt="Profile" loading="lazy" width={768} height={896} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 mix-blend-overlay" />
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs text-primary border border-primary/40 px-2 py-0.5 rounded">@muhammad_hassan</span>
              <span className="font-mono text-xs text-secondary border border-secondary/40 px-2 py-0.5 rounded">ROLE: FULL STACK DEV</span>
              <span className="font-mono text-xs text-muted-foreground border border-border px-2 py-0.5 rounded flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> ACTIVE
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl mb-3">
              Building <span className="gradient-text">full-stack web systems</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              BCA graduate and Python Full-Stack Web Developer based in{" "}
              <span className="text-primary">Kollam, Kerala</span>. I build database-driven and API-based
              applications using <span className="text-primary">React</span>,{" "}
              <span className="text-primary">Django REST Framework</span>, and{" "}
              <span className="text-secondary">MySQL</span> — with a working understanding of UI/UX
              design through Figma.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass-strong rounded-lg p-3 text-center"
                >
                  <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">
                    {s.value}{s.suffix}
                  </div>
                  <div className="font-mono text-[10px] sm:text-xs text-muted-foreground tracking-widest uppercase mt-1">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
