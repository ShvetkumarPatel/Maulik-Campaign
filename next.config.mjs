/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
 output: 'export', // needed for static export
 images: {
   unoptimized: true, // GitHub Pages doesn’t support Image Optimization
 },
 assetPrefix: isProd ? '/Maulik-Campaign/' : '', // 👈 replace with your repo name
 basePath: isProd ? '/Maulik-Campaign' : '', // 👈 replace with your repo name
}
export default nextConfig