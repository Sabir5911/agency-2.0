"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { type CarouselApi } from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import data from "../../../public/links/data"
const profiles = [
  {
    name: "Sabir Ali",
    role: "Full Stack Web Developer",
    image: "/assets/team/sabir.jpg",
    user_links:data.sabir
  },
  {
    name: "Muttee Ur Rehman",
    role: "Backend Developer",
    image: "/assets/team/mutte.jpg",
    user_links: data.muttee
  },
  {
    name: "Abdullah Ahsan",
    role: "Frontend Developer",
    image: "/assets/team/hafiz2.jpg",
    user_links: data.abdullah
  },
  {
    name: "Munawar Abbas",
    role: "Frontend Developer",
    image: "/assets/team/munawar.jpg",
    user_links: data.munawar
  },
  {
    name: "Muhammed Talal",
    role: "Flutter Developer",
    image: "/assets/team/talal.png",
    user_links: data.talal
  },
  {
    name: "Haseeb Tariq",
    role: "Backend Developer",
    image: "/assets/team/haseeb.jpg",
    user_links: data.Hasseb
  },
  
];

export default function OurTeam() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isClient, setIsClient] = React.useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  console.log(current, count);
  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (!isClient) return null;

  const groupedProfiles = isMobile
  ? profiles.map((profile) => [profile]) 
  : profiles.reduce((result, _, index) => {
      if (index % 4 === 0) result.push(profiles.slice(index, index + 4)); 
      return result;
    }, [] as typeof profiles[]);

  return (
    <section
      title="Meet Our Team"
      className="flex flex-col items-center justify-center text-center mt-20 font-roboto " 
      id="reviews"
    >
      <div className="flex flex-col text-left justify-start relative w-full">
        <h2 className="uppercase text-6xl lg:text-7xl text-slate-900 font-extrabold absolute -z-10 -mt-5 tracking-wider">
          CODEMATE
        </h2>
        <h2 className="uppercase">Our Team</h2>
        <h2 className="scroll-m-20 pb-2 text-5xl font-semibold tracking-tight first:mt-0 global-text-color">
          Meet Our Expert
        </h2>
      </div>

      <Carousel setApi={setApi} className="flex w-full  justify-center mt-16 gap-1 ">
  <CarouselContent>
    {groupedProfiles.map((group, idx) => (
      <CarouselItem key={idx} className="flex gap-4 justify-center">
        {group.map((profile, index) => (
          <Card key={index} className="w-64 border-none text-white text-center bg-transparent font-roboto">
            <CardContent>
              <div className="flex flex-col items-center ">
                <Avatar>
                <AvatarImage src={profile.image} alt={profile.name}  width={100} height={100} className="rounded-full w-44"      />
                </Avatar>
                <h2 className="text-2xl font-bold mt-4">{profile.name}</h2>
                <p className="text-gray-400 text-sm">{profile.role}</p>
                <div className="flex mt-3 gap-3">

                  <Link          aria-label="Visit LinkedIn profile"  href={profile.user_links.linkedin} className="text-gray-400 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={20} aria-hidden="true"  />
                  </Link>

                  <Link          aria-label="Visit Twitter profile" href={profile.user_links.twitter} className="text-gray-400 hover:text-sky-400" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={20} aria-hidden="true"  />
                  </Link>
                  <Link        aria-label="Visit GitHub profile" href={profile.user_links.github} className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20}  aria-hidden="true" />
                  </Link>

                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious className="hidden md:flex bg-transparent"/>
        <CarouselNext  className=" hidden md:flex  bg-transparent"  />

</Carousel>
    </section>
  );
}
