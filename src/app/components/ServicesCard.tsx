
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import Link from "next/link";

const servicesData = [
  {
    title: "Web Development",
    description: "Either 3D website or Full-Stack Application with modern design, we’ve got you covered!",
    buttonColor: "border-blue-600 text-white hover:bg-[#0cc0df] hover:text-white bg-transparent border border-[#0cc0df] text-white",
    features: [
      "3D Experience Websites",
      "Full Stack Applications",
      "Ecommerce Stores",
      "SEO Optimized",
      "Aesthetic Figma Designs"
    ]
  },
  {
    title: "Social Media Marketing",
    description: "Whether it’s viral campaigns or targeted ads with custom content, you're at the right place!",
    buttonColor: "bg-[#0cc0df] text-white hover:bg-[#0cc0df] ",
    features: [
      "Meta & Google Campaigns",
      "Organic Followers",
      "Lead Generation",
      "Branding & Viral Content"
    ],

  },
  {
    title: "App Development",
    description: "We build all kinds of apps—AI-powered, startup apps, or tailored to any niche. Let’s bring your idea to life!",
    buttonColor: "border-blue-600 text-white hover:bg-[#0cc0df] hover:text-white bg-transparent border border-[#0cc0df] text-white",
    features: [
      "Android & iOS",
      "AI-Powered Apps",
      "Blockchain & Web 3.0",
      "Flutter & iOS",
      "Cross-Platform"
    ]
  }
];

interface serviceProps {
  index: number;
  title: string;
  features: string[];
  description: string;
  buttonColor: string;
}

const Card = ({ features, index, title, description, buttonColor }: serviceProps) => {


  return (
    <div
      key={index}

      className={`p-6 rounded-lg shadow-md flex flex-col gap-1 mt-8 `}
    >
      <h3 className="text-xl font-semibold ">{title}</h3>
      <p className=" mt-2 font-light text-sm max-w-[240px] text-muted-foreground">{description}</p>

      <Link href="https://calendly.com/sabirali786692/30min" target="_blank">
        <Button className={` mt-6  ${buttonColor} hover:scale-100 group ho w-full  flex gap-2`} size={"default"}>
          <FaRocket className=" transition-transform duration-300 group-hover:translate-x-2" />
          <text>Get Started</text>
        </Button>
      </Link>

      <ul className=" mt-6 text-left text-sm space-y-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-x-5">
            <FaCheck />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>

  );
};
const Services = () => {

  return (
    <section className=" text-center  overflow-hidden mt-16 lg:mt-32">
      <div

        className="text-center"
      >
        <h3 className="text-gray-500 text-sm uppercase">Our Popular Services</h3>
        <h4 className="text-4xl font-bold mt-2">
          Development & <span className="global-text-color">Marketing</span>
        </h4>
      </div>

      {/* Cards Animation */}
      <div className="flex  justify-around mx-auto text-left flex-wrap">
        {servicesData.map((service, index) => (
          <Card key={index} index={index}  {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
