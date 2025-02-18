import React from "react";
import Image from "next/image";
import image from "../../../public/assets/Company-cuate.svg";
import CustomButton from "../lib/Button";
import Link from "next/link";
import Animates from "./Animates";

export default function Hero() {
  const data = {
    Heading: "Code Mate Agency",
    text2:"Unlock Infinite Possibilities: Transform Your Digital Future with Cutting-Edge Web, App, and AI Development!",
  };

  return (
    <div className="flex flex-col gap-y-16 mt-20 justify-between items-center overflow-hidden md:flex-row " >
      {/* Left Text Section */}
      <div className="max-w-xl gap-3 lg:gap-5 px-4 flex flex-col  animate-fadeIn">
        <h1 className="w-full font-roboto text-white  text-4xl font-semibold lg:text-6xl ">
          {data.Heading}
        </h1>

        {/* Animated Typing Effect */}
      <Animates />

        <p className="max-w-xs text-sm mt-3 text-muted-foreground">{data.text2}</p>

        {/* Button */}
        <div className="animate-fadeIn">
          <Link href="/what-we-do"  rel="canonical">
          
            <CustomButton
              text="Explore More"
              size="lg"
              variant="Blue"
              className="mt-5 uppercase"
            />
          </Link>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex justify-center items-center ">
  <Image
    src={image}
    width={600}
    height={600}
    alt="mobile pic"
    className=""
    priority={true} 
  />
</div>

    </div>
  );
}
