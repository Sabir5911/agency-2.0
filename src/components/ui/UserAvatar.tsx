import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"
import { Card } from "./card"
import Link from "next/link";

interface Profile {
    name: string;
    role: string;
    image: string;
    user_links?: {
      linkedin: string;
      twitter: string;
      github: string;
    };
  };
  

const UserAvatar=({image,user_links,name,role}:Profile)=>{
    return  <Card className="w-64 border-none text-white text-center bg-transparent font-roboto">
    <div className="flex flex-col items-center">
        <Avatar className='w-36 h-36 rounded-full'>
          <AvatarImage src={`${image}`} alt="Bonnie Green" className='object-cover rounded-full' />
        </Avatar>
      <h2 className="text-2xl font-bold mt-4">{name}</h2>
      <p className="text-gray-400 text-sm">{role}</p>
      <div className="flex mt-3 gap-3">
        <Link href={`${user_links?.linkedin}`} className="text-gray-400 hover:text-blue-500"  target="_blank">
          <FaLinkedin size={20} />
        </Link>
        <Link href={`${user_links?.twitter}`} className="text-gray-400 hover:text-sky-400"  target="_blank">
          <FaTwitter size={20} />
        </Link>
        <Link href={`${user_links?.github}`} className="text-gray-400 hover:text-gray-300"  target="_blank">
          <FaGithub size={20} />
        </Link>
    
      </div>
    </div>
  </Card>
  }
  

  export default UserAvatar