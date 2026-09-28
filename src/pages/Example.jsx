import { useRef } from "react";
import { ScrollSplitCard } from "../components/ui/scroll-split-card";

export function Example() {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      data-lenis-prevent
      className="relative h-dvh w-full overflow-y-auto overscroll-contain [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
    >
      <h1 className="elegant-text pt-12 text-center text-7xl font-medium">
        Projects
      </h1>
      <ScrollSplitCard
        containerRef={containerRef}
        imageSrc="https://images.unsplash.com/photo-1777483956355-8f03576dba2e?q=80&w=1190&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        cards={[
          {
            heading: "Academic Project",
            title: "Cloud Security Threat Detection using ML",
            description:
              " Python, Django, Scikit-learn, XGBoost, LightGBM, MySQL",
            liveUrl: "",
            bgColor: "#e2e2e2",
            textColor: "#111111",
          },
          {
            heading: "Personal Project",
            title: "E-Commerce Web Application",
            description: "React.js, JavaScript, HTML, CSS, Tailwind CSS",
            liveUrl: "https://basic-e-com.netlify.app/",
            bgColor: "#1a5bcf",
            textColor: "#ffffff",
          },
          {
            heading: "Personal Project",
            title: "ChatBox clone as Whatsapp",
            description: "Spring Boot, SQL, Java, React, JavaScript",
            liveUrl: "",
            bgColor: "#1c1c1c",
            textColor: "#ffffff",
          },
        ]}
      />
    </div>
  );
}
export default Example;
