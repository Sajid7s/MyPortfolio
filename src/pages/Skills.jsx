import React from "react";
import { WheelCarousel } from "../components/ui/wheel-carousel";

const Skills = () => {
  const projects = [
    {
      label: "JAVA PROGRAMMING",
      image: "https://images.unsplash.com/photo-1536148935331-408321065b18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww",
      imageAlt: "Java Programming",
    },
    {
      label: "SPRING BOOT",
      image: "https://imgs.search.brave.com/wFaaOvkhrH8qt1EllU7YT8CmGEhlWhKXgOJG1AIW6JQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcHJp/bmcuaW8vaW1nL3By/b2plY3RzL3Nwcmlu/Zy1ib290LnN2Zw",
      imageAlt: "Spring Boot",
    },
    {
      label: "SQL",
      image: "https://i.pinimg.com/736x/59/f5/43/59f543cc253d7a6f0611b4c958fd3340.jpg",
      imageAlt: "SQL",
    },
    {
      label: "REACT. JS",
      image: "https://i.pinimg.com/736x/4d/db/da/4ddbda12a5746cf6f8d5fa19e6c63291.jpg",
      imageAlt: "React.js",
    },
    {
      label: "HTML",
      image: "https://i.pinimg.com/1200x/01/4e/7c/014e7c41682d5e1f96bfd171b52988e9.jpg",
      imageAlt: "Hyper Text MarkUp Language",
    },
    {
      label: "JAVA SCRIPT",
      image: "https://i.pinimg.com/736x/27/36/e4/2736e4d47f6dd69e6698c8df36d00244.jpg",
      imageAlt: "java Script",
    },

  ];

  return (
    <div className="h-[680px] w-full items-center justify-center">
      <WheelCarousel items={projects} />
    </div>
    
  );
};

export default Skills;
