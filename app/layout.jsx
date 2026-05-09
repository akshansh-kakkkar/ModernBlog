"use client"
import Link from "next/link";
import "./globals.css";
import { Roboto, Poppins, Inter } from 'next/font/google'
import { usePathname } from "next/navigation";

const roboto = Roboto({
  subsets : ["latin"]
})
const poppins = Poppins({
  weight  : ["500", "700"],
  subsets : ["latin"]
})
const inter = Inter({
  weight : ["100", "700"],
  subsets : ["latin"]
})
export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <nav>
          <div className="flex justify-between items-center  px-18 py-8">
            <div className={`text-2xl font-bold tracking-widest text-[#091426] ${roboto.className}`} ><Link href={'/'}>BlogModern</Link></div>
            <div>
              <ul className={`flex gap-8 text-lg transition-all duration-300`}>
                <li>
                  <Link href={"/"} className={` transition-all duration-300 ${poppins.className} ${pathname==='/' ? "text-[#4B41E1] border-b-3 " : "text-gray-600 hover:text-black"} `}>Home</Link>
                </li>
                <li>
                  <Link href={"/about"}className={` transition-all duration-300 ${poppins.className} ${pathname==='/about' ? "text-[#4B41E1] border-b-3 " : "text-gray-600 hover:text-black"} `}>About</Link>
                </li>
                <li>
                  <Link href={"/blog"} className={` transition-all duration-300 ${poppins.className} ${pathname==='/blog' ? "text-[#4B41E1] border-b-3 " : "text-gray-600 hover:text-black"} `}>Blog</Link>
                </li>
                <li>
                  <Link href={"/contact"} className={` transition-all duration-300 ${poppins.className} ${pathname==='/contact' ? "text-[#4B41E1] border-b-3 " : "text-gray-600 hover:text-black"} `}>Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <Link href={"/email"} className={`${inter.className} hover:bg-[#4c41e1df] font-bold p-3 rounded-lg bg-[#4B41E1] text-white`}>Get Stared</Link>
            </div>
           
          </div>
           <div className="flex justify-center items-center">
            <div className="bg-[#4B41E1] rounded-full mx-22 w-full h-[0.5px] ">

            </div>
           </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
