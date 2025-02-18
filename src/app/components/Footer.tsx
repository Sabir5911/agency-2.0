
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import links from "../../../public/links/data";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0F1016] mt-16">
      <div className="max-w-screen-xl mx-auto py-6 px-5">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">©2025 Code Mate All Rights Reserved.</span>
          <ul className="flex gap-4">
            <li>
              <Link href={links.codeMate.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white hover:text-[#0cc0df]" />
              </Link>
            </li>
            <li>
              <Link href={`mailto:${links.codeMate.email}`} target="_blank" rel="noopener noreferrer">
                <MdEmail className="text-white hover:text-[#0cc0df]" />
              </Link>
            </li>
            <li>
              <Link href={links.codeMate.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white hover:text-[#0cc0df]" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
