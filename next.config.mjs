/** @type {import('next').NextConfig} */
import dotenv from "dotenv";
import { join } from "path";

dotenv.config({ path: join(process.cwd(), "env.local") });

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: `/api/:path*`,
  //       destination: `/api/:path*`,
  //     },
  //     {
  //       source: `/:path*`,
  //       destination: `${PLATFORM_URL}/:path*`,
  //     },
  //   ];
  // },
};

export default nextConfig;
