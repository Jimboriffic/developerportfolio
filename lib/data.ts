import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import landingPage from "@/public/landingPage.gif";
import movieDatabase from "@/public/movieDatabase.gif";
import roboFriends from "@/public/roboFriends.png";
import pokedex from "@/public/pokedex.png";

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
    title: "Complete Web Developer in 2020 course",
    location: "Udemy",
    description:
      "My background is in Tourism management and business administration. I got my bachelor's degree in 2014. After that I started working both in the Netherlands and abroad. I finished the Complete Web Developer by Andrea Neagoie in 2020 in a five month time span.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Online marketeer",
    location: "Rotterdam, The Netherlands",
    description:
      "I worked as a growth hacker at Vakanties.nl and after that I went to Amazon RBS (Retail business services) where I was employed for two years and focused mostly on cross channel communication between vendors and several marketplaces, before I made a switch to online marketing again. At Holland Watch Group I worked as a content marketeer in 2021 and 2022",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Rotterdam, The Netherlands",
    description:
      "I'm now a full-stack developer self study student. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
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
    imageUrl: landingPage,
    linkUrl: 'https://github.com/Jimboriffic/Split-landing-page',
  },
  {
    title: "Movie Database",
    description:
      "A movie database complete with images and description, made possible thanks to the moviedb api",
    tags: ["Javascript", "HTML", "CSS", "Vanilla JS", "API"],
    imageUrl: movieDatabase,
    linkUrl: "https://jimboriffic.github.io/moviedatabase.github.io/",
  },
  {
    title: "Robot friends",
    description:
      "My first React project. A simple database with search functionality",
    tags: ["React", "Javascript", "HTML", "CSS", "Typescript"],
    imageUrl: roboFriends,
    linkUrl: "https://jimboriffic.github.io/robovrienden/",
  },
  {
    title: "Pokédex",
    description:
      "First generation pokédex created using html, css, and javascript and the pokeapi",
    tags: ["HTML", "CSS", "Javascript", "API", "Async await"],
    imageUrl: pokedex,
    linkUrl: "https://github.com/Jimboriffic/first-gen-pokedex",
  }
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