import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] hidden md:block rounded-full transition-[width,height,background] duration-200"
        style={{
          left: pos.x,
          top: pos.y,
          width: hover ? 44 : 12,
          height: hover ? 44 : 12,
          transform: "translate(-50%, -50%)",
          background: hover ? "hsl(var(--primary) / 0.15)" : "hsl(var(--primary))",
          border: "1px solid hsl(var(--primary))",
          boxShadow: "0 0 16px hsl(var(--primary) / 0.8), 0 0 32px hsl(var(--primary) / 0.4)",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="pointer-events-none fixed z-[9999] hidden md:block w-1 h-1 rounded-full bg-primary-glow"
        style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};

export default CustomCursor;
