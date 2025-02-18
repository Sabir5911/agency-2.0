import React from "react";
import logo from "../../../public/assets/2.svg";
import Image from "next/image";
import CustomButton from "../lib/Button";
import Link from "next/link";


export default function Header() {

  return (

      <div className="  flex justify-between   py-16 items-center">
        <Link  href={"/"} className="cursor-pointer">
          <Image
            src={logo}
            width={90}
            height={90}
            alt="logo"
            className="w-[80px]"
          />
        </Link >
        
        <Link href="https://calendly.com/sabirali786692/30min" target="_blank">
        <CustomButton  text="Book Demo" size="default" variant="Blue" className=" rounded-md"/>
        </Link>

      </div>
  
  );
}
