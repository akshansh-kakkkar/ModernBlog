"use client"
import { SendHorizonal } from 'lucide-react'
import React from 'react'
import { Roboto, Poppins, Inter } from 'next/font/google';
import {motion} from "framer-motion";
const roboto = Roboto({
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["100", "700"],
  subsets: ["latin"],
});
const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export default function page(){

  return (
    <div className='flex mx-12 lg:flex-row flex-col justify-center my-12 items-center'>
      <div className='w-[50vw] lg:flex hidden flex-col gap-5'>
        <h2 className={`${roboto.className} text-6xl text-[#091426] w-[40vw] font-bold`}>Let's build the future of blogs together.</h2>
        <div className={`${inter.className} font-normal text-[#45474C] text-md w-[37vw]`}>Have a question about our platform or want to partner with us? Please fill this form and we will reach out to you as soon as possible. We are looking forward to connect with you!</div>
      </div>
      <div className='bg-white  border-1 rounded-sm p-12 border-[#C5C6CD]'>
        <form action="" className='flex gap-8 flex-col'>
          <div className='flex flex-col justify-center'>
            <label htmlFor="" className='text-lg '>Full Name</label>
            <input placeholder='John Doe' className={`border-1 p-2 rounded-sm border-[#C5C6CD] outline-none`} type="text" />
          </div>
          <div className='flex flex-col'>
            <label className={`text-lg`} htmlFor="">Email</label>
            <input type="email" placeholder='jhondoe@gmail.com' className={`border-1 rounded-sm p-2 border-[#C5C6CD] outline-none`} />
          </div>
          <div className='flex flex-col'>
            <label className={`text-lg `} htmlFor="">Message</label>
            <textarea placeholder='enter your comment here...' className='p-3 outline-none border-1 max-h-40 border-[#C5C6CD] rounded-sm' rows={6} name="" id=""></textarea>
          </div>
          <div className='flex justify-center w-full'>
            <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}}  className='bg-[#4B41E1] cursor-pointer gap-5 flex justify-center items-center text-white text-2xl w-full py-4 rounded-md'>Send Message <span><SendHorizonal color='white' /></span></motion.button>
          </div>
          <div className={`text-md  text-[#45474C]`}>
            By Clicking on Send Message you are agreeing to give me extra pinapples xd.
          </div>
        </form>
      </div>
    </div>
  )
}
