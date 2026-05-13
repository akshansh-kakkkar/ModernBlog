import Image from "next/image";
import { Roboto, Poppins, Inter } from "next/font/google";

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
export default function herosection() {
  return (
    <>
      <div className="bg-[#f1f4fb] mt-12 md:h-[87vh] w-full">
        <div className="flex gap-12 justify-between md:flex-row flex-col-reverse mx-12 lg:mx-26 h-full items-center">
          <div>
            <div className="flex items-center text-center md:items-start md:text-start flex-col gap-6">
              <div className={`bg-[#4c41e12e] text-md md:text-xl items-center flex w-fit px-8 py-2 rounded-full text-[#4c41e1df] ${inter.className} font-semibold  uppercase`}>Blogs at one Place</div>
              <div className={`md:text-6xl text-3xl font-semibold items-center text-[#091426] uppercase ${poppins.className}`}>Welcome to <span className="text-[#4c41e1df]">BlogModern</span> </div>
              <div className={`text-xl ${roboto.className} items-center font-medium text-[#091426]`}>
                BlogModern is the cleanest way to share what you know with others.
              </div>
            </div>
          </div>
          <div className="bg-[#E5EEFF] shadow-lg p-6 rounded-2xl">
            <Image
            className="rounded-xl"
              src="/images/hero.webp"
              alt="hero image"
              width={650}
              height={650}
            />
          </div>
        </div>
      </div>
    </>
  );
}
