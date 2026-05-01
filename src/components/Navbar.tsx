import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Logs" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 200;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass-strong rounded-full px-2 py-2"
    >
      <div className="flex items-center gap-1">
        <div className="hidden sm:flex items-center gap-2 px-4 border-r border-primary/20">
          <div className="w-2 h-2 rounded-full bg-primary shadow-glow animate-pulse" />
          <span className="font-mono text-xs text-primary">AI.SYS</span>
        </div>
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => go(s.id)}
            className={`relative px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-mono transition-colors ${
              active === s.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {active === s.id && (
              <motion.span
                layoutId="navActive"
                className="absolute inset-0 rounded-full bg-primary/15 border border-primary/40"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{s.label}</span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
