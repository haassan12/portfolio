import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

type Category = "All" | "Web" | "AI" | "Design";

const projects = [
  {
    title: "Smart Service Booking & Management System",
    desc: "Full-stack service booking platform with JWT auth and role-based access for Admins, Service Providers, and Customers. CRUD APIs, dashboards with search/filter/pagination, double-booking prevention, and a basic recommendation engine based on ratings.",
    tech: ["React", "Django REST Framework", "Python", "MySQL", "Bootstrap", "JWT"],
    category: "Web" as Category,
    gradient: "from-primary/40 via-secondary/30 to-transparent",
  },
  {
    title: "J.A.R.V.I.S — Iron Man Gesture Control",
    desc: "Real-time hand gesture control system with a sci-fi HUD overlay. Uses webcam + MediaPipe to detect gestures (pinch, swipe, fist, point) and maps them to OS actions: mouse control, Chrome tab switching, scroll, and app launching. Neon skeleton overlay with rotating arc rings and scan-line FX.",
    tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "NumPy"],
    category: "AI" as Category,
    gradient: "from-secondary/40 via-accent/30 to-transparent",
  },
  {
    title: "Gaming Hub Website",
    desc: "Gaming community launch site with user registration, browseable game listings, and a Django REST backend. Includes auth flows, admin dashboard, static asset pipeline, and deployment-ready Procfile setup for production hosting.",
    tech: ["Django", "Python", "SQLite", "HTML/CSS", "JavaScript"],
    category: "Web" as Category,
    gradient: "from-accent/40 via-primary/30 to-transparent",
  },
];

const filters: Category[] = ["All", "Web", "AI"];

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
