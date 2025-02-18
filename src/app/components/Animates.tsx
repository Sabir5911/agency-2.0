"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function Animates() {
  return<>
     <TypeAnimation
     
          sequence={["Application", 1000, "Websites", 1000, "& others", 1000]}
          cursor={false}
          speed={50}
          className="flex h-[50px] font-roboto  text-4xl font-semibold global-text-color lg:text-6xl"
          repeat={Infinity}
        />
  </>
}
