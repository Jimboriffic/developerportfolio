import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dadJokes from "@/public/landingPage.gif";
import randomChoice from "@/public/randomchoice.png";
import roboFriends from "@/public/roboFriends.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Udemy Course",
    location: "Online",
    description:
      "I finished the course in 3 months.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Online marketeer",
    location: "Rotterdam, The Netherlands",
    description:
      "I worked as a growth hacker for 1 year in 1 job and 1 year in another job as content marketeer.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Rotterdam, The Netherlands",
    description:
      "I'm now a full-stack developer trainee. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Split landing page",
    description:
      "Split landing page made with HTML, CSS and Javascript",
    tags: ["Vanilla JS", "HTML", "CSS", "Landing Page", "Design"],
    imageUrl: dadJokes,
  },
  {
    title: "Random Choice",
    description:
      "A small, but neat javascript app that lets the user input options. When enter is pressed a random option is selected",
    tags: ["Javascript", "HTML", "CSS", "Vanilla JS", "DOM manipulation"],
    imageUrl: randomChoice,
  },
  {
    title: "Robot friends",
    description:
      "My first React project. A simple database with search functionality",
    tags: ["React", "Javascript", "HTML", "CSS", "Typescript"],
    imageUrl: roboFriends,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;