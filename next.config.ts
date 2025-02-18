import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env:{
    NEXT_PUBLIC_SITE_NAME: "CodeMate",
    NEXT_PUBLIC_SITE_ICON: "/favicon.ico",

  },
  images: {
    domains: ["randomuser.me","cdn.pixabay.com"],
  },
};

export default nextConfig;
