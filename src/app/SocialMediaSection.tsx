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
             src="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/story.php?story_fbid=122127949958922717&id=61577681537831&show_text=true&width=500"
             width="500"
             height="600"
             style={{ border: "none", overflow: "hidden", margin: "0 auto" }}
             scrolling="no"
             frameBorder="0"
             allowFullScreen={true}
             allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
></iframe>
</div>
         {/* Instagram */}
<div className="bg-white rounded-xl p-6 shadow-lg text-center">
<h3 className="text-2xl font-bold text-center mb-4">Instagram</h3>
<iframe
             src="https://www.instagram.com/p/DNlsMeuyPv2/embed"
             width="400"
             height="480"
             frameBorder="0"
             scrolling="no"
             allowTransparency={true}
             allow="encrypted-media"
             style={{ margin: "0 auto" }}
></iframe>
</div>
</div>
</div>
</section>
 );
};
export default SocialMediaSection;
