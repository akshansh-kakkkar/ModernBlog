"use client";
import { blog } from "../data/blog";
import Image from "next/image";
import { Roboto, Poppins, Inter } from "next/font/google";
import { MoveRight } from "lucide-react";
import {motion, scale} from "framer-motion"
import Link from "next/link";
const roboto = Roboto({
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["500", "700"],
  subsets: ["latin"],
});
const inter = Inter({
  weight: ["100", "700"],
  subsets: ["latin"],
});
export default function blogs() {
  return (
    <div>
      <div className="mx-12 my-12">
        <div className="flex justify-center items-center flex-row gap-4">
          <div className="bg-[#4c41e1df] w-2 rounded-xl h-24"></div>
          <div
            className={`lg:text-5xl md:text-3xl sm:text-2xl text-xl font-bold text-[#091426] tracking-widest uppercase ${roboto.className}`}
          >
            Insights for modern learners
          </div>
        </div>
      </div>
      <div className="flex gap-22 mx-12 xl:ml-8 my-12 xl:justify-start justify-center items-center flex-wrap">
        {blog.map((blogs) => (
          <Link  key={blogs.id} href={`/blog/${blogs.slug}`}>
          <motion.div className="bg-[#f1f4fb] hover:scale-[104%] transition-all duration-400 cursor-pointer group-hover:translate-y-2 group relative flex flex-col w-[350px] justify-center sm:w-[390px] h-[500px] p-2 sm:p-12 shadow ">
            <div className="relative w-[300px]   object-cover h-[220px]">
              <Image
                fill
                className="rounded-md object-cover"
                alt={blogs.title}
                src={blogs.image}
              />
            </div>
            <div className="flex items-center gap-4 my-4">
              <div className={`${poppins.className} bg-[#cbc2f7] text-[#4c41e1df] px-4 py-1 rounded-full`}>{blogs.time}</div>
              <div className={`uppercase ${inter.className} text-[#4c41e1df] font-[600]`}>{blogs.author}</div>
            </div>
            <div className={`text-2xl text-[#091426] ${poppins.className} w-70 font-bold`}>
              {blogs.title}
            </div>
            <div>
              {blogs.description}
            </div>
            <div className="mt-auto text-right flex justify-end gap-4 transition-all duration-500 md:group-hover:opacity-100 md:opacity-0 cursor-pointer text-[#4c41e1df] pt-6"><span>Click here to read more</span><span><MoveRight color={"#4c41e1df"}/></span></div>
          </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
