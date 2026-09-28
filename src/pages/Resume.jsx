import React from "react";
import { ScrollBasedVelocity } from "../components/ui/scroll-based-velocity";
import { Download } from "lucide-react";
const Resume = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-black px-6 pb-28 text-white">
      <ScrollBasedVelocity
        text="DOWNLOAD RESUME"
        default_velocity={2}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm md:text-7xl md:leading-[5rem]"
      />
      <a
      href="/resume.pdf"
      download="Sajid-Resume.pdf"
      className="flex items-center gap-2 rounded-full bg-red-600 px-7 py-3 font-medium text-white transition hover:bg-red-700"
    >
      <Download size={18} />
      Download Resume
    </a>
      
    </main>
  );
};

export default Resume;
