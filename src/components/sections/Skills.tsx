import { motion } from "framer-motion";
import { Code2, Database, Wrench, Brain } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const modules = [
  {
    icon: Code2,
    name: "Frontend",
    color: "primary",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Bootstrap"],
  },
  {
    icon: Database,
    name: "Backend",
    color: "secondary",
    items: ["Python", "Django", "Django REST Framework", "JWT Auth", "REST APIs"],
  },
  {
    icon: Wrench,
    name: "Database & Tools",
    color: "primary",
    items: ["MySQL", "Firebase", "Git", "GitHub"],
  },
  {
    icon: Brain,
    name: "UI / UX & Security",
    color: "secondary",
    items: ["Figma", "Wireframing", "Prototyping", "Ethical Hacking", "Pen Testing"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="container max-w-6xl mx-auto">
        <SectionHeading code="03" title="AI Modules" subtitle="Capability matrix" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {modules.map((m, i) => {
            const Icon = m.icon;
            const accent = m.color === "primary" ? "text-primary" : "text-secondary";
            const border = m.color === "primary" ? "hover:border-primary/60" : "hover:border-secondary/60";
            const glow = m.color === "primary" ? "hover:shadow-glow" : "hover:shadow-glow-secondary";
            return (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`glass rounded-xl p-6 transition-all duration-300 ${border} ${glow} group relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 font-mono text-[10px] text-muted-foreground p-3">
                  M-0{i + 1}
                </div>
                <div className={`w-12 h-12 rounded-lg glass-strong flex items-center justify-center mb-4 ${accent} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={`font-display text-lg font-bold mb-4 ${accent}`}>{m.name}</h3>
                <ul className="space-y-1.5">
                  {m.items.map((it) => (
                    <li key={it} className="font-mono text-xs text-muted-foreground flex items-center gap-2">
                      <span className={`w-1 h-1 rounded-full ${m.color === "primary" ? "bg-primary" : "bg-secondary"}`} />
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between font-mono text-[10px]">
                  <span className="text-muted-foreground">STATUS</span>
                  <span className={accent}>● ONLINE</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
