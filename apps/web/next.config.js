/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {}, // Keep empty to avoid errors
    webpack: (config) => {
      return config; // Ensure Webpack is used
    },
  };
  
  export default nextConfig;
  