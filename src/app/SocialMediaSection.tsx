'use client';
import { useState } from 'react';
import { FacebookEmbed, InstagramEmbed } from 'react-social-media-embed';
const SocialMediaSection = () => {
 const [fbError, setFbError] = useState(false);
 return (
<section className="py-16 bg-gray-100">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-bold text-center mb-12">
         Follow Me on Social Media
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* Facebook */}
<div className="bg-white rounded-xl p-6 shadow-lg">
<h3 className="text-2xl font-bold text-center mb-4">Facebook</h3>
           {!fbError ? (
<FacebookEmbed
               url="https://www.facebook.com/people/Vote4Maulik/61577681537831/"
               width="100%"
               onError={() => setFbError(true)} // fallback trigger
             />
           ) : (
<div className="text-center">
<p className="mb-4 text-gray-600">Unable to load Facebook feed.</p>
<a
                 href="https://www.facebook.com/people/Vote4Maulik/61577681537831/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
>
                 Visit My Facebook
</a>
</div>
           )}
</div>
         {/* Instagram */}
<div className="bg-white rounded-xl p-6 shadow-lg">
<h3 className="text-2xl font-bold text-center mb-4">Instagram</h3>
<InstagramEmbed
             url="https://www.instagram.com/vote4maulik/"
             width="100%"
           />
</div>
</div>
</div>
</section>
 );
};
export default SocialMediaSection;
