import Head from "next/head";
import React from "react";
import Hero6 from "./components/Hero6";
import Hero from "./components/Hero";
import Testimonial from "./components/Reviews";
import OurTeam from "./components/ourTeam";
import StatsBanner from "./components/StarBanner";
import AIReplacementCTA from "./components/Banner";
import Services from "./components/ServicesCard";

export default function WhatWeDo() {
  return (
    <>
      <Head>
        <title>What We Do | Code Mate Solutions</title>
        <meta
          name="description"
          content="Discover the services offered by Code Mate Solutions. We specialize in software development and IT solutions."
        />
        <meta
          name="keywords"
          
          content="software development, IT solutions, Code Mate Solutions, AI, web development"
        />
        <meta property="og:title" content="What We Do | Code Mate Solutions" />
        <meta
          property="og:description"
          content="Discover the services offered by Code Mate Solutions. We specialize in software development and IT solutions."
        />
        <meta
          property="og:url"
          content="https://codematesoultions.vercel.app/what-we-do"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://codematesoultions.vercel.app/banner.png"
        />
      </Head>
      <div>

        <Hero />
        <StatsBanner />
        <Services />

        <AIReplacementCTA />
        <Testimonial />
        <OurTeam />
        <Hero6 />
      </div>
    </>
  );
}
