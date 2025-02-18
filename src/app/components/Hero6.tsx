  import React from "react";
  import { MdEmail } from "react-icons/md";
  import { FaLinkedin } from "react-icons/fa";
  import { AiFillInstagram } from "react-icons/ai";
  import Link from "next/link";
  import links from "../../../public/links/data";

  import Contact from "./Contact";
  import Text2 from "./Text2";
import Head from "next/head";

  const data = {
    Heading: "Contact Us for Your",
    text1: "Connect with Us: Shape Your Digital Vision",
    text2:
      "Reach out today and let's bring your innovative app ideas to vibrant life together.",
  };
  
  export default function Hero6() {
    return <>
     <Head>
        <title>Contact Us - Code Mate Solutions</title>
        <meta name="description" content="Get in touch with Code Mate Solutions to bring your digital ideas to life. Contact us via email, LinkedIn, or Instagram." />
        <meta name="keywords" content="Code Mate, contact, LinkedIn, Instagram, email, web development, app development" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="w-full flex justify-center mt-20" id="contact">
        <div className="flex flex-col justify-between w-full md:flex-row">
          {/* Left Side - Text Content */}
          
          <div className="flex flex-col justify-start gap-2 flex-shrink-0 w-auto md:max-w-[450px]">
            <h2 className="m font-roboto scroll-m-20 text-4xl font-semibold lg:text-5xl">
              {data.Heading}
            </h2>

            <p className="flex font-roboto text-4xl lg:text-5xl font-semibold">Better <span className="ml-2"><Text2 /></span></p>

        

            <div className="mt-6 flex flex-row lg:flex-col gap-4 font-roboto cursor-pointer">
              {/* Email Section */}
              <Link
        href={`mailto:${links.codeMate.email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-muted-foreground hover:underline"
        aria-label="Send an email to Code Mate Solutions"
      >
        <div className="bg-[#0cc0df] rounded-full p-1 lg:p-2 flex items-center justify-center">
          <MdEmail size={20} aria-hidden="true" color="white" />
        </div>
        <span>Email Us</span>
      </Link>

              {/* LinkedIn Section */}
          
              <Link
        href={links.codeMate.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-muted-foreground hover:underline"
        aria-label="Visit Code Mate Solutions on LinkedIn"
      >
        <div className="bg-[#0cc0df] rounded-full p-1 lg:p-2 flex items-center justify-center">
          <FaLinkedin size={20} aria-hidden="true"  color="white" />
        </div>
        <span>LinkedIn</span>
      </Link>
      
              {/* Instagram Section */}
              <Link
        href={links.codeMate.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-muted-foreground hover:underline"
        aria-label="Follow Code Mate Solutions on Instagram"
      >
        <div className="bg-[#0cc0df] rounded-full p-1 lg:p-2 flex items-center justify-center">
          <AiFillInstagram size={20} aria-hidden="true" color='white'  />
        </div>
        <span>Instagram</span>
      </Link>
            </div>
          </div>
          <Contact />
        </div>
        </div>

        </>


  }
