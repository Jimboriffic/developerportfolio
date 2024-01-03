"use client";

import React, { useEffect, useState } from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa6";

export default function ThemeSwitch() {
const [theme, setTheme] =  useState<"light" | "dark">("light");

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme('light');
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;

        if (localTheme) {
            setTheme(localTheme);

        if (localTheme === 'dark') {
            document.documentElement.classList.add("dark");
        }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        document.documentElement.classList.add("dark");
        } else if 
        (window.matchMedia("(prefers-color-scheme: light)").matches) {
            setTheme("light");
        document.documentElement.classList.add("light");
        }

    }, []);

  return (
    <button className="fixed bottom-5 right-5 bg-white h-[3rem] w-[3rem]
    bg-opacity-80 backdrop-blir-[0.5rem] border border-white border-opacity-40
    shadow-2xl rounded-full flex items-center justify-center 
    hover:scale-[1.15]
    active:scale-[1.05] transition-all dark:bg-gray-950"
    onClick={toggleTheme}
    
    >
        {
        theme === 'light' ? (
            <MdOutlineLightMode /> ) : (
                <FaRegMoon />
        )
            }

    </button>
  )
}
