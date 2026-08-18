import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

import thumblain from '../../images/1000277200.png'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Link } from '@inertiajs/react';

export default function Banner({ banner, hero }) {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (hero && hero.length > 0) {
      const formattedCourses = hero.map(data => ({
        id: data.id,
        image: data.course?.thumbnail,
        slug: data.course?.slug || '',
        title: data.course?.title || 'Untitled Course' // Added title for display
      }));
      setCourses(formattedCourses);
    }
  }, [hero]);




  return (
    <>
      <section className="relative overflow-hidden bg-[#0a0a0a] pb-20 pt-44 mt-[-7rem] banner">

        {/* Background Elements - PRO Stream Style */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,1,79,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,1,79,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

          {/* Pink Glow Effects */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>

          {/* Floating Particles */}
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#FF014F] rounded-full animate-float"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#FF014F] rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#FF014F]/30"></div>
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#FF014F]/30"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#FF014F]/30"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#FF014F]/30"></div>
        </div>

        {/* Main Slider Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>

            <h1 className="text-lg lg:text-4xl font-bold mb-6 leading-tight">
              <span className="relative text-white">
                {banner.title}
              </span>
              <span className="block bg-gradient-to-r from-[#FF014F] via-[#FF014F] to-[#FF014F] bg-clip-text text-transparent mt-4">
                {banner.subtitle}
              </span>
            </h1>



            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
          </div>

          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="educationalSwiper"
            breakpoints={{
              640: {
                coverflowEffect: {
                  rotate: 5,
                  stretch: -30,
                  depth: 150,
                  modifier: 1.5,
                }
              },
              1024: {
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 200,
                  modifier: 2,
                }
              }
            }}
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <Link href={"/course/" + course.slug} className="relative rounded overflow-hidden cursor-pointer transform transition-all duration-500  group">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                 

                  <div className="absolute inset-0 border border-[#FF014F] opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded"></div>

                  {/* Status Indicator */}
                  <div className="absolute top-4 left-4">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-[#FF014F] rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>

                  {/* Course Title */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="md:text-2xl font-bold text-white mb-3 transform transition-transform duration-300 group-hover:translate-y-1">
                      {course.title}
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[#FF014F] to-transparent rounded-full transform transition-all duration-300 group-hover:w-20 group-hover:bg-[#FF014F]"></div>
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-[#FF014F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Glow Line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF014F] to-transparent opacity-40"></div>
      </section>

      <style>{`
        .educationalSwiper .swiper-slide {
          background-position: center;
          width: 480px;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        
        .educationalSwiper .swiper-slide-active {
          transform: scale(1.08);
          z-index: 2;
        }
        
        .educationalSwiper .swiper-slide-shadow-left,
        .educationalSwiper .swiper-slide-shadow-right {
          background-image: none !important;
        }
        
        /* Modern Pagination */
        .educationalSwiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          border: none;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        
        .educationalSwiper .swiper-pagination-bullet-active {
          background: #FF014F;
          opacity: 1;
          transform: scale(1.4);
          box-shadow: 0 0 15px rgba(255, 1, 79, 0.8);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .educationalSwiper .swiper-slide {
            width: 350px;
          }
          
          .educationalSwiper .swiper-slide img {
            // height: 280px;
          }
        }
        
        @media (max-width: 480px) {
          .educationalSwiper .swiper-slide {
            width: 300px;
          }
          
          .educationalSwiper .swiper-slide img {
            // height: 240px;
          }
        }
      `}</style>
    </>
  );
}