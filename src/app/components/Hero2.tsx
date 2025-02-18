import React from "react";
import Image from "next/image";
import image4 from "../../../public/assets/Mobile development-amico (1).svg";
import DevmateLanding from "./CodeMate";

export default function Hero2() {
  return (
    <div className="flex-col flex justify-between  gap-y-16 overflow-hidden md:flex-row  " >
      {/* Left Section (Text) */}
      <div className="text-center">
        <DevmateLanding />
      </div>

      {/* Right Section (Image) */}
      <div className="">
        <Image src={image4} width={550} height={550} alt="Design" priority={false} />
      </div>
    </div>
  );
}
