import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import portrait from "@/assets/hero-portrait.jpg";
import { ArrowRight, Cpu } from "lucide-react";

const bootLines = [
  "> Initializing AI System...",
  "> Loading neural modules...",
  "> Access Granted ✓",
];

const Hero = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= bootLines.length) return;
    const t = setTimeout(() => setStep((s) => s + 1), step === 0 ? 600 : 700);
    return () => clearTimeout(t);
  }, [step]);

  const booted = step >= bootLines.length;

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6">
      <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Boot terminal + name */}
        <div className="order-2 lg:order-1">
          <div className="glass rounded-xl p-5 mb-8 font-mono text-sm sm:text-base relative overflow-hidden">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-primary/15">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-secondary/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
              <span className="ml-2 text-xs text-muted-foreground">ai-lab — boot.sh</span>
            </div>
            <div className="space-y-1.5 min-h-[6.5rem]">
              {bootLines.slice(0, step).map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={i === bootLines.length - 1 ? "text-primary text-glow" : "text-muted-foreground"}
                >
                  {l}
                </motion.div>
              ))}
              {!booted && <span className="inline-block w-2 h-4 bg-primary animate-blink align-middle" />}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: booted ? 1 : 0, y: booted ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xs sm:text-sm text-primary mb-3 tracking-widest uppercase">
              [USER_PROFILE_LOADED]
            </p>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-7xl leading-[1.05] mb-4 break-words">
              Hi, I'm{" "}
              <span className="gradient-text glitch inline-block">Muhammad Hassan</span>
            </h1>
            <p className="font-mono text-base sm:text-lg text-muted-foreground mb-8">
              <span className="text-primary">&gt;</span> Python Full Stack Developer{" "}
              <span className="text-secondary mx-2">|</span> React + Django
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="group relative px-7 py-3 rounded-full bg-primary text-primary-foreground font-mono text-sm font-semibold animate-pulse-glow overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Enter Lab
                </span>
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="group glass px-7 py-3 rounded-full font-mono text-sm font-semibold text-foreground hover:border-secondary/60 transition-colors flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right: holographic portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: booted ? 1 : 0, scale: booted ? 1 : 0.9 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Outer glow rings */}
            <div className="absolute inset-0 -m-8 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            <div className="absolute inset-0 -m-4 rounded-2xl bg-gradient-glow blur-2xl" />

            <div className="holo-frame w-[240px] sm:w-[320px] lg:w-[380px] aspect-[3/4] relative">
              <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-card">
                <img
                  src={portrait}
                  alt="Muhammad Hassan portrait"
                  width={768}
                  height={896}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-primary/30 via-transparent to-secondary/30" />
                <div className="scan-line" />
                {/* HUD corners labels */}
                <div className="absolute top-3 left-3 font-mono text-[10px] text-primary tracking-widest">ID://M-H-001</div>
                <div className="absolute top-3 right-3 font-mono text-[10px] text-secondary tracking-widest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> LIVE
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between font-mono text-[10px] text-muted-foreground">
                  <span>STATUS: ONLINE</span>
                  <span>v.2026</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-muted-foreground tracking-widest flex flex-col items-center gap-2"
      >
        <span>SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
