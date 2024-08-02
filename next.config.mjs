// /** @type {import('next').NextConfig} */
// import dotenv from "dotenv";
// import { join } from "path";

// dotenv.config({ path: join(process.cwd(), "env.local") });

// const nextConfig = {
//   reactStrictMode: true,
//   async rewrites() {
//     return [
//       {
//         source: "/api/auth/:path*",
//         destination: "/api/auth/:path*",
//       },
//     ];
//   },
//   env: {
//     NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
//     GOOGLE_ID: process.env.GOOGLE_ID,
//     GOOGLE_SECRET: process.env.GOOGLE_SECRET,
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
