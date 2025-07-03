'use client';

import { FacebookEmbed, InstagramEmbed } from 'react-social-media-embed';

const SocialMediaSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Follow Me on Social Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-4">Facebook</h3>
            <FacebookEmbed url="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F61577681537831&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" />
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-4">Instagram</h3>
            <InstagramEmbed url="https://www.instagram.com/p/vote4maulik/" width="100%" />
          </div>
          {/* <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-4">X</h3>
            <a href="https://twitter.com/vote4maulik" target="_blank" rel="noopener noreferrer" className="twitter-timeline">Tweets by vote4maulik</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
