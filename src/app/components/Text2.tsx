"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function Text2() {
  return <>
  
  <TypeAnimation
            sequence={["Business ", 1000, "Websites", 1000, "Startup", 1000]}
            cursor={false}
            speed={50}
            className="flex h-[50px] max-w-sm font-roboto text-4xl font-semibold global-text-color lg:text-5xl"
            repeat={Infinity}
          />
  </>
}
