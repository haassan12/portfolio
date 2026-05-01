import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

type Category = "All" | "Web" | "AI" | "Design";

const projects = [
  {
    title: "Neural Chat Engine",
    desc: "Multi-agent LLM platform with RAG, vector search and streaming responses.",
    tech: ["Python", "FastAPI", "LangChain", "React"],
    category: "AI" as Category,
    gradient: "from-primary/40 via-secondary/30 to-transparent",
  },
  {
    title: "OrbitDash Analytics",
    desc: "Realtime SaaS dashboard with custom charting and team workspaces.",
    tech: ["Next.js", "Postgres", "TypeScript"],
    category: "Web" as Category,
    gradient: "from-secondary/40 via-primary/30 to-transparent",
  },
  {
    title: "Vision Classifier",
    desc: "Computer vision model deployment with web inference UI.",
    tech: ["PyTorch", "FastAPI", "React"],
    category: "AI" as Category,
    gradient: "from-primary/50 to-secondary/30",
  },
  {
    title: "Quantum Folio",
    desc: "Cinematic studio website with WebGL hero and CMS integration.",
    tech: ["Three.js", "Framer Motion", "Sanity"],
    category: "Design" as Category,
    gradient: "from-secondary/50 to-primary/30",
  },
  {
    title: "Django Commerce",
    desc: "Full e-commerce platform with Stripe payments and admin tools.",
    tech: ["Django", "Postgres", "Stripe"],
    category: "Web" as Category,
    gradient: "from-primary/40 to-secondary/40",
  },
  {
    title: "Agent Lab UI",
    desc: "Visual builder for autonomous AI agent workflows and tool routing.",
    tech: ["React", "TypeScript", "WebSockets"],
    category: "AI" as Category,
    gradient: "from-secondary/40 to-primary/40",
  },
];

const filters: Category[] = ["All", "Web", "AI", "Design"];

const Projects = () => {
  const [filter, setFilter] = useState<Category>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <SectionHeading code="04" title="Lab Projects" subtitle="Experiment archive" />

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative px-5 py-2 rounded-full font-mono text-xs transition-all ${
                filter === f
                  ? "bg-primary/15 border border-primary/60 text-primary shadow-glow-soft"
                  : "glass border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              className="glass rounded-xl overflow-hidden group hover:border-primary/60 hover:shadow-glow transition-all duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Preview */}
              <div className={`relative h-44 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-display text-5xl font-black text-foreground/10 group-hover:text-foreground/20 transition-colors">
                    {p.title.split(" ").map((w) => w[0]).join("")}
                  </div>
                </div>
                <div className="scan-line opacity-50" />
                <div className="absolute top-3 left-3 font-mono text-[10px] glass-strong px-2 py-1 rounded text-primary">
                  {p.category.toUpperCase()}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-bold mb-2 group-hover:gradient-text transition-all">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a href="#" className="flex-1 glass-strong hover:border-primary/60 transition-colors px-3 py-2 rounded-lg font-mono text-xs flex items-center justify-center gap-1.5 text-primary">
                    <ExternalLink className="w-3.5 h-3.5" /> Live
                  </a>
                  <a href="#" className="flex-1 glass-strong hover:border-secondary/60 transition-colors px-3 py-2 rounded-lg font-mono text-xs flex items-center justify-center gap-1.5 text-secondary">
                    <Github className="w-3.5 h-3.5" /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
