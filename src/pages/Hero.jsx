import React from "react";
import { KineticTextReveal } from "../components/ui/kinetic-text-reveal";
const Hero = () => {
  return (
    <div className="flex min-h-screen items-center justify-center text-center">
      <KineticTextReveal
        text={"Hi, I'm Sajid Shaik\nFull Stack Developer\nI build modern web applications."}
        splitBy="lines"
        direction="right"
        stagger={0.14}
        distance={22}
        className="text-4xl font-semibold leading-tight  "
      />
    </div>
  );
};

export default Hero;
