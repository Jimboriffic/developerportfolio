// when interactivity from the user comes into play we add use client
"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mn-0"
    >
      <section
        className="group 
    bg-gray-100 
    max-w-[42rem] borderBlack rounded-lg
     overflow-hidden sm:pr-8 
     relative sm:h-[20rem] hover:bg-gray-200 border transition
      sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div
          className="pt-4 pb-7 px-6 sm:pl-10 sm:pr-2 sm:pt-10
        sm:max-w-[50%] flex flex-col h-full group-even:ml-[20rem] dark:bg-black/10"
        >
          <h3 className="text-2xl font-semibold dark:text-gray-100">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 pb-6 dark:text-gray-40 dark:text-white/90">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.6] px-2 py-2 text-[0.7rem] 
            uppercase tracking-wider
             text-white rounded-full
             mx-1"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="project I worked on"
          quality={90}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem]
    rounded-t-lg shadow-2xl 
    transition
    group-hover:scale-[1.04]
    group-hover:-translate-x-3
    group-hover:-translate-y-3
    group-hover:rotate-2

    group-even:group-hover:translate-x-3
    group-even:group-hover:translate-y-3
    group-even:group-hover:rotate-2

    group-even:right-[initial]
    group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
