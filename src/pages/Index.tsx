import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const SpaceScene = lazy(() => import("@/components/SpaceScene"));

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <Suspense fallback={<div className="fixed inset-0 -z-10 bg-background bg-grid" />}>
        <SpaceScene />
      </Suspense>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
