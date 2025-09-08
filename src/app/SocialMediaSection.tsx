'use client';
import Image from 'next/image';
const SocialMediaSection = () => {
 return (
<section className="py-16 bg-gray-100">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-bold text-center mb-12">
         Follow Me on Social Media
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* Facebook */}
<div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center">
<Image
             src="/fbimage.jpg"
             alt="Facebook"
             width={400}
             height={200}
             className="rounded-lg mb-4"
           />
<a
             href="https://www.facebook.com/people/Vote4Maulik/61577681537831/"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
>
             Visit Facebook
</a>
</div>
         {/* Instagram */}
<div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center">
<Image
             src="/igimage.jpg"
             alt="Instagram"
             width={400}
             height={200}
             className="rounded-lg mb-4"
           />
<a
             href="https://www.instagram.com/vote4maulik/"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition"
>
             Visit Instagram
</a>
</div>
</div>
</div>
</section>
 );
};
export default SocialMediaSection;
