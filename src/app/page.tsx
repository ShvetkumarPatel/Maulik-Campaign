"use client";

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes, FaGraduationCap, FaUsers, FaHandshake, FaHeart, FaLightbulb, FaChartLine, FaBus, FaHospital, FaHome, FaPhone, FaEnvelope, FaMapMarkerAlt, FaAward, FaHandHoldingHeart, FaBuilding, FaCar, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import useEmblaCarousel from 'embla-carousel-react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-white hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
    {children}
  </a>
);

const StatCard = ({ number, label, icon }: { number: string; label: string; icon: React.ReactNode }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4 mx-auto">
      <div className="text-white text-xl">{icon}</div>
    </div>
    <div className="text-center">
      <div className="text-3xl font-bold text-primary mb-2">{number}</div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  </div>
);

const AchievementCard = ({ title, description, icon, color }: { title: string; description: string; icon: React.ReactNode; color: string }) => (
  <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 ${color}`}>
    <div className="flex items-start space-x-4">
      <div className={`text-2xl ${color.replace('border-', 'text-')}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const VisionCard = ({ title, description, icon, bgColor }: { title: string; description: string; icon: React.ReactNode; bgColor: string }) => (
  <div className={`${bgColor} rounded-xl p-8 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-white/90 leading-relaxed">{description}</p>
  </div>
);

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [useFallbackCarousel, setUseFallbackCarousel] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: false
  });

  const heroImages = [
    { src: '/img/gallery-2.jpeg', alt: 'Community gallery image 1' },
    { src: '/img/gallery-6.jpeg', alt: 'Community gallery image 2' },
    { src: '/img/gallery-5.jpeg', alt: 'Community gallery image 3' },
    { src: '/img/gallery-11.jpeg', alt: 'Community gallery image 4' },
    { src: '/img/gallery-7.jpeg', alt: 'Community gallery image 5' },
  ];

  const galleryImages = Array.from({ length: 20 }, (_, i) => ({
    src: `/img/gallery-${i + 1}.jpeg`,
    alt: `Community gallery image ${i + 1}`,
  }));

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    } else {
      setCurrentSlide(prev => prev === 0 ? heroImages.length - 1 : prev - 1);
    }
  }, [emblaApi, heroImages.length]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    } else {
      setCurrentSlide(prev => prev === heroImages.length - 1 ? 0 : prev + 1);
    }
  }, [emblaApi, heroImages.length]);

  useEffect(() => {
    if (!emblaApi && !useFallbackCarousel) {
      setUseFallbackCarousel(true);
      return;
    }
    const interval = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      } else if (useFallbackCarousel) {
        setCurrentSlide(prev => prev === heroImages.length - 1 ? 0 : prev + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi, useFallbackCarousel, heroImages.length]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const navLinks = [
    { label: 'About Me', href: '#about' },
    { href: '#qualifications', label: 'Qualification' },
    { href: '#achievements', label: 'Achievement' },
    { href: '#vision', label: 'Vision' },
    { href: '#community', label: 'Community' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* ...existing code... */}

      {/* Community Gallery Section */}
      <section id="community" className="section-padding bg-gradient-to-r from-stone-50 to-neutral-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Community in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the real impact of community leadership and volunteerism in Airdrie
            </p>
          </div>
          {isClient && (
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
              <Masonry gutter="2rem">
                {galleryImages.map((image, index) => (
                  <div key={image.src} className="cursor-pointer group" onClick={() => { setLightboxIndex(index); setLightboxOpen(true); }}>
                    <div className="overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </div>
      </section>
      {/* ...existing code... */}

      {/* Lightbox - only render on client */}
      {isClient && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={galleryImages}
          index={lightboxIndex}
        />
      )}

      {/* Social Media Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Follow Me on Social Media
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Facebook */}
            <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="w-full max-w-md overflow-hidden rounded-lg mb-4">
                <Image
                  src="/facebook-box.jpg"
                  alt="Facebook"
                  width={800}
                  height={400}
                  className="rounded-lg w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <a
                href="https://www.facebook.com/people/Vote4Maulik/61577681537831/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Facebook"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md w-full text-center md:w-auto
                  transition-all duration-300 ease-in-out
                  hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
              >
                Visit Facebook
              </a>
            </div>
            {/* Instagram */}
            <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="w-full max-w-md overflow-hidden rounded-lg mb-4">
                <Image
                  src="/instagram-box.jpg"
                  alt="Instagram"
                  width={800}
                  height={400}
                  className="rounded-lg w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <a
                href="https://www.instagram.com/vote4maulik/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Instagram"
                className="inline-block px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md w-full text-center md:w-auto
                  transition-all duration-300 ease-in-out
                  hover:bg-pink-600 hover:scale-105 hover:shadow-lg"
              >
                Visit Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ...existing code... */}
    </div>
  );
};

export default Home;