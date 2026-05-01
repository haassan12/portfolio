import { motion } from "framer-motion";

const SectionHeading = ({ code, title, subtitle }: { code: string; title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-10 sm:mb-12 flex flex-col items-start"
  >
    <div className="flex items-center gap-3 mb-3 font-mono text-xs tracking-widest text-primary">
      <span className="w-8 h-px bg-primary" />
      <span>// SECTION_{code}</span>
      {subtitle && <span className="text-muted-foreground">— {subtitle}</span>}
    </div>
    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
      <span className="gradient-text">{title}</span>
    </h2>
  </motion.div>
);

export default SectionHeading;
