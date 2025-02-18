import React from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  size?: "default" | "sm" | "lg" | "icon" | "xs";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "Blue";
  className?: string;
  onClick?: () => void;
}



export default function CustomButton({
  text,
  size = "default",
  variant = "default",
  className = "",
  onClick,
  ...res
}: Props) {
  return (
    <Button
      onClick={onClick}
      type="button"
      size={size}

      variant={variant}
      aria-label={text} // Accessibility improvement
      className={`flex items-center gap-2 transition-all duration-300 group ${className} text-white bg-[#0cc0df] hover:bg-[#009bb3] focus:ring-2 focus:ring-[#007a8a]`}
      {...res}
   >
      <span>{text}</span>
      <IoIosArrowRoundForward
        size={25}
        className="transition-transform duration-300 group-hover:translate-x-2 font-bold"
      />
    </Button>
  );
}
