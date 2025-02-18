"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { type CarouselApi } from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa";
import Image from "next/image";;

import image from  "../../../public/assets/reviews/1.jpg"
import image2 from  "../../../public/assets/reviews/2.jpg"
import image3 from  "../../../public/assets/reviews/88791252.jpeg"

const testimonials = [
  {
    name: "Michael Chen",
    image:image,
    rating: 4,
    text: "If you have anything to do with Chakra UI / Nextjs related, give this guy a try, very helpful, knowledgeable and very friendly, 100% recommended! He just fixed a UI issue I had in my Chakra code for days, in just 2 hours lol",
    position: "Founder, StartUp Inc",
  },

  {
    name: "Zakaria Ba",
    image: image2,
    rating: 5,
    text: "Their Team is very professional and knowledgeable. They are very responsive and always available to help. I highly recommend them for your next project.",
    position: "AI Consultant, Fiver",
  },
  {
    name: "Hamza jabir",
    image: image3,
    rating: 5,
    text: "The team showed incredible expertise in both design and development. Our new website has significantly improved our online presence.",
    position: "COO, Digital Solutions",
  },


];

export default function Testimonial() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isClient, setIsClient] = React.useState(false); 

  React.useEffect(() => {
    if (current && count) {
      console.log(`Current slide: ${current} of ${count}`);
    }
    setIsClient(true); // Indicate that the component has mounted
  }, [current, count]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (!isClient) {
    return null;
  }

  return (
    <section className="text-white mt-20 px-6 md:px-16 flex flex-col items-center  font-roboto">
      <h2 className="text-gray-400 text-xs uppercase">Success Stories</h2>
      <h3 className="text-4xl font-bold mt-2 text-center">
        Hear from <span className="global-text-color">Our Clients</span>
      </h3>

      <Carousel opts={{ align: "start" }} className="max-w-md md:max-w-2xl flex lg:max-w-4xl  bg-[#020817]items-center mt-8" setApi={setApi}>
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="max-h-screen ">
              <div className="p-4">
                <Card className=" text-white bg-[#020817] border-none">
                  <CardContent className="flex flex-col justify-center md:flex-row items-center gap-4">
                    <Image
                      width={80}
                      height={80}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-40 md:w-24 md:h-24 rounded-full object-cover"
                      />
                    <div className="md:ml-6 mt-4 md:mt-0 max-w-xs md:max-w-none">
                      <div className="flex text-blue-600 mb-2">
                        {
                        Array.from({ length: testimonial.rating }, (_, i) => (
                          <FaStar key={i} size={16} />
                        ))
                        }
                      </div>
                      <blockquote className="mt-6 italic lg:max-w-lg">{testimonial.text}</blockquote>
                      <h4 className="mt-4 font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-gray-400 mt-2">{testimonial.position}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
          
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex bg-transparent"/>
        <CarouselNext  className=" hidden md:flex  bg-transparent"  />
      </Carousel>
    </section>
  );
}


