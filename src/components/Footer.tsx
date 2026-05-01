const Footer = () => (
  <footer className="relative border-t border-primary/15 py-8 px-4 mt-12">
    <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span>SYSTEM ONLINE — 2026</span>
      </div>
      <div>
        Designed & Engineered by <span className="gradient-text font-bold">Muhammad Hassan</span>
      </div>
    </div>
  </footer>
);

export default Footer;
