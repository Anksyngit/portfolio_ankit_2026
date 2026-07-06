"use client";
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { Sun, Moon } from "lucide-react";

const ThemeToggler = () => {
    const [mounted, setMounted] = useState(false);

    const {theme, setTheme, systemTheme}= useTheme();

    useEffect(()=>{
        const mountCheck = () =>{
            setMounted(true);
        };
        mountCheck();
    }, []);

    if(!mounted) return null;

    const currentTheme = theme === "system"? systemTheme : theme;

  return <button onClick={()=> setTheme(currentTheme==="dark"?"light":"dark")}
    className="p-2 transition w-10 h-10 cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center">
        
        {currentTheme === "dark"?(
            <Sun className="w-6 h-6 text-white"/>
        ):(
            <Moon className="w-6 h-6 text-black"/>
        )}
    </button>
};

export default ThemeToggler; 
