"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload} from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  
  return (
    <section 
    ref={ref} 
    id="home" 
    className="mb-28 max-w-[50rem] text-center sm:text-right scroll-mt-[100rem] transition">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image 
              src="https://images.unsplash.com/profile-1697733267783-fde4f06bcd22image?bg=fff&crop=faces&dpr=2&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="James profile photo"
              width="120"
              height="120"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl sm:center"
            />

          </motion.div>

          <motion.span 
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            ✌🏼
          </motion.span>
        </div>
      </div>

      
        <motion.h1 
        className="max-w-2xl mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm James.</span> I'm a{" "}
          <span className="font-bold">full-stack developer</span> that has started {" "}
          <span className="font-bold">his web dev career</span> this year. I enjoy
          building <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline"> React (Next.js)</span>.
        </motion.h1>

        <motion.div className="flex flex-row sm:flex-row items-center justify-center gap-2 px-4
        text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y:0 }}
        transition={{
        delay: 0.2,
        transition: 0.5,
          }}
        >

          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
            focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition outline-none focus:scale-110 hover-scale-110
            hover:bg-gray-950 active:scale-105 transition scroll-mt-20">
            Contact me here <BsArrowRight 
            className="opacity-70 group:hover:translate-x-1 transition" />
            
          </Link>

          
            <a 
      
            className="group bg-white text-black px-7 py-3 flex items-center 
            gap-2 rounded-full outline-none focus:scale-110
            hover:scale-110 hover:bg-white active:scale-105 hover:text-gray-950
             opacity-60 group-hover:translate-y-1 transition cursor-pointer border border-black/10"
              href="/CV.pdf"
              download 
              >
              Download CV <HiDownload />
            </a>

            <a className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/70 
             "
             href="https://linkedin.com" target="_blank">
            <BsLinkedin />
            </a>

            <a className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/70"
              href="https://github.com/Jimboriffic" target="_blank">
            <FaGithubSquare />
            </a>
          
       
      </motion.div>
    </section>
  );
}