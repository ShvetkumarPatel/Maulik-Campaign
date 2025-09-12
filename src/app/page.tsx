"use client";

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes, FaGraduationCap, FaUsers, FaHandshake, FaHeart, FaLightbulb, FaChartLine, FaBus, FaHospital, FaHome, FaPhone, FaEnvelope, FaMapMarkerAlt, FaAward, FaHandHoldingHeart, FaBuilding, FaCar, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import useEmblaCarousel from 'embla-carousel-react';
import SocialMediaSection from './SocialMediaSection';

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

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    } else {
      setCurrentSlide(prev => prev === 0 ? heroImages.length - 1 : prev - 1)
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
    } else {
      setCurrentSlide(prev => prev === heroImages.length - 1 ? 0 : prev + 1)
    }
  }, [emblaApi])

  // Auto-rotation effect
  useEffect(() => {
    if (!emblaApi && !useFallbackCarousel) {
      setUseFallbackCarousel(true)
      return
    }

    const interval = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext()
      } else if (useFallbackCarousel) {
        setCurrentSlide(prev => prev === heroImages.length - 1 ? 0 : prev + 1)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [emblaApi, useFallbackCarousel])

  // Track current slide
  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const navLinks = [
    {
      label: 'About Me',
      href: '#about',
      dropdown: [
        { href: '#issues', label: 'Issues' },
        { href: '#volunteer', label: 'Volunteer' },
        { href: '#events', label: 'Events' },
      ],
    },
    { href: '#qualifications', label: 'Qualification' },
    { href: '#achievements', label: 'Achievement' },
    { href: '#vision', label: 'Vision' },
    { href: '#community', label: 'Community' },
    { href: '#contact', label: 'Contact' },
  ];

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

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary via-blue-800 to-primary shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-white text-2xl font-bold flex items-center space-x-2">
              <FaHome className="text-secondary" />
              <span>Maulik Shah <span className="text-secondary font-semibold">for Airdrie</span></span>
            </a>
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  <NavLink href={link.href}>{link.label}</NavLink>
                  {link.dropdown && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 py-2 w-48 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
                      {link.dropdown.map((item) => (
                        <a key={item.href} href={item.href} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">{item.label}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        {/* Carousel Container */}
        {!useFallbackCarousel ? (
          <div className="embla" ref={emblaRef}>
            <div className="embla__container h-full">
              {heroImages.map((img, index) => (
                <div key={index} className="embla__slide relative w-full h-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={index === 0}
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full">
            {heroImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
        )}

        {/* Controls */}
        <button
          className="embla__prev absolute top-1/2 left-4 z-30 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-300"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>
        <button
          className="embla__next absolute top-1/2 right-4 z-30 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-300"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center space-y-2">
          <div className="text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
            {currentSlide + 1} / {heroImages.length}
          </div>
          <div className="flex space-x-1">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (emblaApi) {
                    emblaApi.scrollTo(index)
                  } else {
                    setCurrentSlide(index)
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                  ? 'bg-white scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* As Featured In Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">As Featured In</h2>
          <div className="flex justify-center items-center space-x-8">
            <p className="text-lg text-gray-600">Airdrie Life Magazine</p>
            <p className="text-lg text-gray-600">Airdrie Echo</p>
            <p className="text-lg text-gray-600">CTV News</p>
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Sign Up For Updates</h2>
          <p className="text-lg mb-8">Join the movement and get notified of events and updates.</p>
          <form className="max-w-md mx-auto">
            <div className="flex items-center">
              <input type="email" className="w-full px-4 py-2 rounded-l-md text-gray-800" placeholder="Enter your email" />
              <button type="submit" className="bg-secondary hover:bg-red-700 text-white px-6 py-2 rounded-r-md">Subscribe</button>
            </div>
          </form>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 via-red-50 to-red-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard number="20+" label="Years Experience" icon={<FaChartLine />} />
            <StatCard number="1000+" label="Families Helped" icon={<FaHandHoldingHeart />} />
            <StatCard number="1000+" label="Meals Distributed" icon={<FaHeart />} />
            <StatCard number="2015" label="Airdrie Resident" icon={<FaHome />} />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* About Section */}
        <section id="about" className="section-padding bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/img/maulik-shah.jpeg"
                  alt="Maulik Shah"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-2xl mx-auto"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-primary">My Story: Airdrie Is My Home</h2>
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  Since 2015, my family and I have proudly called Airdrie home. As a father of four and a loving husband, I am deeply invested in the future of our city—a future where all families can thrive and grow together.
                </p>
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  Recognizing the need for community support and connection, I co-founded the <strong>Indian Society of Airdrie (ISA)</strong>. This organization helps newcomers with employment, social integration, and business networking while fostering a sense of belonging and cultural continuity for all residents.
                </p>
                <div className="bg-gradient-to-r from-primary to-blue-800 text-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-secondary">Why I'm Running for Councilor</h3>
                  <p className="text-white/90">
                    I believe in putting Airdrie first. With my engineering background and community leadership experience, I'm ready to bring practical solutions and transparent governance to City Hall.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section id="qualifications" className="section-padding bg-gradient-to-r from-slate-50 via-gray-50 to-stone-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-primary">Professional Qualifications</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Licensed Professional Engineer with extensive experience in project planning and business development
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl text-primary mb-4">
                  <FaGraduationCap />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Education</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span><strong>Master of Science (MSc)</strong> in Mechanical Engineering from University of Manitoba</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span><strong>Licensed Professional Engineer (P.Eng.)</strong></span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl text-primary mb-4">
                  <FaBuilding />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Professional Experience</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span><strong>20+ years</strong> in Industrial Refrigeration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Specialized in Ice Hockey, Curling, Cold Storage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Food Distribution Centers & Processing Plants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Management experience in large organizations</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl text-primary mb-4">
                  <FaHandshake />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Leadership Skills</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Engineering Design & Project Planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Business Development & Strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Community Organization & Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Cross-cultural Communication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="section-padding bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-primary">Community Achievements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results for real people. Here's what I've accomplished for our community.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <AchievementCard
                title="Fight Against Hunger Drive"
                description="Powerful grassroots initiative providing free groceries to over 1,000 families since 2025. Addresses rising food insecurity due to inflation and post-COVID challenges."
                icon={<FaHandHoldingHeart />}
                color="border-green-500"
              />
              <AchievementCard
                title="Volunteer Appreciation Award Night"
                description="Organized significant event in December 2024 recognizing local volunteers. Premier Danielle Smith attended and presented awards to community leaders."
                icon={<FaAward />}
                color="border-blue-500"
              />
              <AchievementCard
                title="Free Dental Camp"
                description="Organized free dental camp for underprivileged kids in Airdrie in December 2024 in collaboration with Tooth Pal Pediatric Dental."
                icon={<FaHeart />}
                color="border-red-500"
              />
              <AchievementCard
                title="Food Bank Support"
                description="Organized food drives for Airdrie Food Bank and distributed free thermal bags to encourage local volunteers serving Airdrie communities."
                icon={<FaHandHoldingHeart />}
                color="border-purple-500"
              />
              <AchievementCard
                title="Cultural Integration Events"
                description="Hosted unique Indo-Canadian Stampede Breakfast and organized youth mentorship & senior support services for community integration."
                icon={<FaUsers />}
                color="border-red-500"
              />
              <AchievementCard
                title="Business & Employment Support"
                description="Organized Local Community Resources and Business Expo events. Assisted new immigrants with employment opportunities & social networking."
                icon={<FaBuilding />}
                color="border-indigo-500"
              />
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="section-padding bg-gradient-to-r from-primary via-blue-800 to-primary">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">My Vision for Airdrie</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Practical solutions for real community needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VisionCard
                title="Better Taxpayer Money Utilization"
                description="Work with Provincial Government for upgrades on Airdrie Community Health Centre and emergency health services."
                icon={<FaChartLine />}
                bgColor="bg-gradient-to-br from-emerald-600 to-emerald-700"
              />
              <VisionCard
                title="Airdrie First - Local Resources"
                description="Membership on Recreation Centers and better utilization of local resources before looking elsewhere."
                icon={<FaHome />}
                bgColor="bg-gradient-to-br from-blue-600 to-blue-700"
              />
              <VisionCard
                title="Improved Healthcare Access"
                description="Transportation to major hospitals from Airdrie and eliminate unnecessary trips to Calgary for different lab services."
                icon={<FaHospital />}
                bgColor="bg-gradient-to-br from-rose-600 to-rose-700"
              />
              <VisionCard
                title="Better Transportation"
                description="Improve transportation within Airdrie with transit running more efficiently, operating at a fuller capacity to maximize savings."
                icon={<FaBus />}
                bgColor="bg-gradient-to-br from-violet-600 to-violet-700"
              />
              <VisionCard
                title="Property Tax Relief"
                description="Initiative to freeze property taxes and foster better financial management."
                icon={<FaShieldAlt />}
                bgColor="bg-gradient-to-br from-amber-600 to-amber-700"
              />
              <VisionCard
                title="Enhanced Community Services"
                description="Food Bank availability on weekends, domestic abuse support, and comprehensive community services."
                icon={<FaLeaf />}
                bgColor="bg-gradient-to-br from-teal-600 to-teal-700"
              />
            </div>
          </div>
        </section>

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
      </main>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={galleryImages}
        index={lightboxIndex}
      />

      <SocialMediaSection />

      {/* Contact Section */}
      <footer id="contact" className="bg-gradient-to-r from-primary via-blue-800 to-primary text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Get in Touch</h2>
              <p className="text-lg mb-8 text-white/90">
                I want to hear from you. Please reach out with your questions, concerns, and ideas for a better Airdrie.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-secondary" />
                  <a href="mailto:Connect@Vote4Maulik.ca" className="hover:text-secondary transition-colors">Connect@Vote4Maulik.ca</a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-secondary" />
                  <a href="tel:+1-403-860-5465" className="hover:text-secondary transition-colors">+1 (403) 860-5465</a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-secondary" />
                  <span>Airdrie, Alberta - Our Community, Our Home, Our Future</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Why Choose Maulik Shah?</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Licensed Professional Engineer with 20+ years experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Proven community leader and organizer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Family man with deep roots in Airdrie since 2015</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Practical solutions for real community needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Transparent and accountable leadership</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p className="text-sm text-white/70">Paid for by the Maulik Shah for Airdrie Campaign</p>
            <p className="text-sm text-white/70">&copy; {new Date().getFullYear()} Maulik Shah for Airdrie. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
