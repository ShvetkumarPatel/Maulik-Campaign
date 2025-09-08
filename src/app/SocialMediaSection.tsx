'use client';
import { FacebookEmbed, InstagramEmbed } from 'react-social-media-embed';
const SocialMediaSection = () => {
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
<FacebookEmbed
             url="https://www.facebook.com/share/p/1A4pKhDj6g/"
             width="100%"
           />
</div>
         {/* Instagram */}
<div className="bg-white rounded-xl p-6 shadow-lg">
<h3 className="text-2xl font-bold text-center mb-4">Instagram</h3>
<InstagramEmbed
             url="https://www.instagram.com/p/DNlsMeuyPv2/"
             width="100%"
           />
</div>
</div>
</div>
</section>
 );
};
export default SocialMediaSection;
