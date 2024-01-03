"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About", 1);

  return (
    <motion.section
      className="mb-2 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="About"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After working as a TEFL teacher and{" "}
        <span className="font-medium">Online Marketeer</span>, I decided to
        pursue my passion for development. I completed a Udemy course on web
        development and learned{" "}
        <span className="font-medium">
          the basics of HTML, CSS and React.JS
        </span>
        . <span className="italic">My favorite part of development</span> is
        seeing your creations gradually come into existence. I{" "}
        <span className="underline">love</span> seeing a project come together
        after a lot of puzzling. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">junior position or a traineeship</span> as
        a software developer. I'd like to transition from being a consumer of
        information to a creator of experiences.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, skateboarding and snowboarding, and spending time with my
        girlfriend and friends. I also enjoy{" "}
        <span className="font-medium">languages</span>. I am currently improving{" "}
        <span className="font-medium">both my Spanish and German</span>. Besides
        that, I love listening to and creating music.
      </p>
    </motion.section>
  );
}
