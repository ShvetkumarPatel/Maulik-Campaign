'use client';
const SocialMediaSection = () => {
 return (
<section className="py-16 bg-gray-100">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-bold text-center mb-12">
         Follow Me on Social Media
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* Facebook */}
<div className="bg-white rounded-xl p-6 shadow-lg text-center">
<h3 className="text-2xl font-bold text-center mb-4">Facebook</h3>
<iframe
             src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D1234567890%26id%3D61577681537831&show_text=true&width=500"
             width="100%"
             height="600"
             style={{ border: 'none', overflow: 'hidden' }}
             scrolling="no"
             frameBorder="0"
             allow="encrypted-media; picture-in-picture"
             allowFullScreen
></iframe>
</div>
         {/* Instagram */}
<div className="bg-white rounded-xl p-6 shadow-lg text-center">
<h3 className="text-2xl font-bold text-center mb-4">Instagram</h3>
<iframe
             src="https://www.instagram.com/p/DNlsMeuyPv2/embed"
             width="100%"
             height="600"
             style={{ border: 'none', overflow: 'hidden' }}
             scrolling="no"
             frameBorder="0"
             allow="encrypted-media; picture-in-picture"
             allowFullScreen
></iframe>
</div>
</div>
</div>
</section>
 );
};
export default SocialMediaSection;
