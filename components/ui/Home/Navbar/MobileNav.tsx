import { NavLinks } from '@/Constant/Constant';
import Link from "next/link";
import React from 'react'
import { X } from "lucide-react";


type Props={
  showNav:boolean;
  closeNav:()=>void;
};

const MobileNav = ({closeNav,showNav}:Props) => {
    const sidebarOpenClose = showNav? "translate-x-0":"translate-x-[-100%]";

  return (
    <div>
      {/*OverLay*/}
      <div className={`fixed ${sidebarOpenClose} inset-0 transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>
      {/*navLinks*/}
      <div className={`text-white ${sidebarOpenClose} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-purple-700 space-y-6 z-[1050]`}>
        {NavLinks.map((link,index)=>{
          return (<Link key={index} href={link.href}>
            <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>{link.name}</p>
          </Link>
          );
        })}
      </div>
      {/*Close Icon*/}
      <X onClick={closeNav}
      className="fixed top-5 right-5 w-6 h-6 text-white cursor-pointer z-[1100]"/>   
    </div>
  )
}

export default MobileNav;
