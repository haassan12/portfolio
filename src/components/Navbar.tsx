import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);

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
    setOpen(false);
  };

  return (
    <>
      {/* Desktop / tablet pill nav */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block glass-strong rounded-full px-2 py-2"
      >
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-2 px-4 border-r border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary shadow-glow animate-pulse" />
            <span className="font-mono text-xs text-primary">AI.SYS</span>
          </div>
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className={`relative px-3 lg:px-4 py-1.5 rounded-full text-xs lg:text-sm font-mono transition-colors ${
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

      {/* Mobile top bar */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-3 left-3 right-3 z-50 md:hidden flex items-center justify-between glass-strong rounded-full px-4 py-2"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary shadow-glow animate-pulse" />
          <span className="font-mono text-xs text-primary">AI.SYS</span>
        </div>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          className="text-primary p-1.5 rounded-full hover:bg-primary/10 transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.div>

      {/* Mobile dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-3 right-3 z-50 md:hidden glass-strong rounded-2xl p-3 flex flex-col gap-1"
          >
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={`text-left px-4 py-2.5 rounded-lg font-mono text-sm transition-colors ${
                  active === s.id
                    ? "text-primary bg-primary/15 border border-primary/40"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                }`}
              >
                {s.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
