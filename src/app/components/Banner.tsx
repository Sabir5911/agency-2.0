import Image from "next/image";
import logo from "../../../public/assets/2.svg";
import CustomButton from "../lib/Button";
import Link from "next/link";


export default function AIReplacementCTA() {
    return (
<div className="  hidden lg:flex  items-center justify-between mt-16 shadow-[#0cc0df] shadow-md p-6 rounded-lg max-w-4xl mx-auto font-roboto">
{/* Left Section */}
        <div className="flex items-start space-x-4">
          {/* Icon */}
          <div className="">
          <Image
            src={logo}
            width={90}
            height={90}
            alt="logo"
            className=" w-[80px]"
          />
        </div>
  
          {/* Text */}
          <div className="leading-[1.3] text-pretty font-medium text-white font-roboto">
            <p>🚀 Enhance Your Team with AI Solutions</p>
            <p>Optimize Operations with Smart Automation 💡</p>
            <p>Boost Efficiency and Reduce Costs with AI 📈</p>
          </div>
        </div>
  
        {/* Right Section - Button */}
        <Link href="https://calendly.com/sabirali786692/30min" target="_blank">
        <CustomButton text=" GET STARTED" size="lg" variant="Blue" className="" />

        </Link>
      
      </div>
    );
  }
  