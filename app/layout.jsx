"use client";
import Link from "next/link";
import "./globals.css";
import { Roboto, Poppins, Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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
export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <html lang="en">
      <body className=" flex flex-col">
        <nav className="md:block hidden">
          <div className="flex justify-between items-center bg-[#f1f4fb]  px-18 py-8">
            <div
              className={`text-2xl font-bold tracking-widest text-[#091426] ${roboto.className}`}
            >
              <Link href={"/"}>BlogModern</Link>
            </div>
            <div>
              <ul className={`flex gap-8 text-lg transition-all duration-300`}>
                <li>
                  <Link
                    href={"/"}
                    className={` transition-all duration-300 ${poppins.className} ${pathname === "/" ? "text-[#4B41E1] border-b-3 " : "text-gray-600 hover:text-black"} `}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/about"}
                    className={` transition-all duration-300 ${poppins.className} ${pathname === "/about" ? "text-[#4B41E1] border-b-3 " : "text-gray-600 hover:text-black"} `}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/blog"}
                    className={` transition-all duration-300 ${poppins.className} ${pathname === "/blog" ? "text-[#4B41E1] border-b-3 " : "text-gray-600 hover:text-black"} `}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/contact"}
                    className={` transition-all duration-300 ${poppins.className} ${pathname === "/contact" ? "text-[#4B41E1] border-b-3 " : "text-gray-600 hover:text-black"} `}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <motion.div whileTap={{ scale: 1.05 }} whileHover={{ scale: 0.95 }}>
              <Link
                href={"/blog"}
                className={`${inter.className} hover:bg-[#4c41e1df] font-bold p-3 rounded-lg bg-[#4B41E1] text-white`}
              >
                Get Stared
              </Link>
            </motion.div>
          </div>
          <div className="flex justify-center items-center">
            <div
              className="bg-[#4B41E1] rounded-full opacity-30 mx-22 w-full h-[0.2px] "
            ></div>
          </div>
        </nav>
        <AnimatePresence>
          <nav className="md:hidden block">
            <div className="flex justify-between items-center px-8 py-4 sm:px-12 sm:py-8">
              <div
                className={`text-xl sm:text-2xl opaci4 font-bold tracking-widest text-[#091426] ${roboto.className}`}
              >
                <Link href={"/"}>BlogModern</Link>
              </div>
              <motion.div onClick={handleOpen} exit={{rotate:0}} animate={{rotate: open ? 360 : 0}}  initial={{rotate:0}} className="">
                {open ? <X /> : <Menu />}{" "}
              </motion.div>
            </div>
            <div className="flex justify-center items-center">
              <div className=" bg-[#4B41E1] opacity-30 h-[0.2px] rounded-full w-full mx-12"></div>
            </div>
            <div>
              {open && (
                <motion.div
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  className="flex fixed z-40 i0  justify-start "
                >
                  <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    exit={{ x: -100 }}
                    className="w-fit relative mx-6 flex justify-center flex-col items-center gap-6 p-12 rounded-xl my-2  bg-[#c4c0ff]"
                  >
                    <div className="absolute top-[20px] right-[20px]" onClick={handleOpen}>
                      <X />
                    </div>
                    <ul>
                      <li>
                        <Link
                          className={`text-lg text-[#091426] ${poppins.className} ${pathname === "/" ? "underline font-medium" : ""}`}
                          href={"/"}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`text-lg text-[#091426] ${poppins.className} ${pathname === "/about" ? "underline font-medium" : ""}`}
                          href={"/about"}
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`text-lg text-[#091426] ${poppins.className} ${pathname === "/blog" ? "underline font-medium" : ""}`}
                          href={"/blog"}
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`text-lg text-[#091426] ${poppins.className} ${pathname === "/contact" ? "underline font-medium" : ""}`}
                          href={"/contact"}
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={`/blog`}
                        className={`${inter.className} text-[#4c41e1df] font-bold p-3 rounded-lg text-2xl-[#4B41E1] bg-white`}
                      >
                        Get Started
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </nav>
        </AnimatePresence>
        <div className="min-h-screen">
          {children}
        </div>

        <footer className="bg-[#4c41e141] rounded-t-2xl p-12">
          <div className="flex justify-around flex-col md:flex-row items-center">
            <div className={`${poppins.className} font-bold text-2xl col-span-1`}>
              BlogModern
            </div>
            <div className="flex text-[#091426] flex-col md:flex-row gap-3">
              <Link className={`text-lg font-normal ${pathname === "/" ? `underline underline-offset-2 font-bold ${roboto.className}` : ""} ${roboto.className} `}  href={'/'}>Home</Link>
              <Link  className={`text-lg font-normal ${pathname === "/about" ? `underline underline-offset-2 font-bold ${roboto.className}` : ""} ${roboto.className} `} href={'/about'}>About</Link>
              <Link  className={`text-lg font-normal ${pathname === "/blog" ? `underline underline-offset-2 font-bold ${roboto.className}` : ""} ${roboto.className} `} href={'/blog'}>Blog</Link>
              <Link  className={`text-lg font-normal ${pathname === "/contact" ? `underline underline-offset-2 font-bold ${roboto.className}` : ""} ${roboto.className} `} href={'/contact'}>Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
