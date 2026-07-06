import { footerSocialLinks } from '@/data'
import React from 'react'
import { Heart } from "lucide-react";


const Footer = () => {
  return <footer className='border-t bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-7 py-12'>
    <div className='w-[80%] mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
            <a href="#home" className="flex items-center space-x-3">
                <div className="bg-purple-600 w-10 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AG</span>
                </div>

                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    Ankit <span className="text-purple-600">Gupta</span>
                </h1>
            </a>
            <div className='flex items-center gap-4'>
                {footerSocialLinks.map((link)=>{
                    return<a href={link.href} key={link.label} target='_blank' rel='noopener norefferer' className='w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-muted-foreground hover:text-blue-500 transition-colors'>
                        <link.icon className='w-5 h-5'/>
                    </a>
                })}
            </div>
            <p className='text-sm text-muted-foreground flex items-center gap-1'>
                Made with {''} <Heart className="w-4 h-4 text-destructive fill-destructive"/>
                By Ankit Gupta
            </p>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-300 dark:border-gray-800 text-center'>
            <p className='text-sm text-muted-foreground'>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
    </div>
  </footer>
}

export default Footer
