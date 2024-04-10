"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm currently pursuing a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to pursue my
        passion for technology early in my teenage. I'm a Linux System Administrator{" "}
        <span className="font-medium">which means i love getting my hands dirty dealing with servers both on-premise and cloud !!</span>.{" "}
      </p>

      <p>
      I'm also an <span className="italic"> Aviation enthusiast </span> looking out for my private pilot license in the near future{" "}
      </p>
    </motion.section>
  );
}
