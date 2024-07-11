import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "/shri-2024-perfomance"
};
export default million.next(nextConfig);
