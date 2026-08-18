import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { ArrowUpRight } from 'lucide-react';

export default function Instructor({ instructorcontent, instructors }) {
    // Instructor data


    return (
        <>
            <section className="relative overflow-hidden bg-[#0a0a0a] py-20">

                {/* Modern Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
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

                {/* Main Content Container */}
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-16 relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>

                        <h2 className="text-xl md:text-5xl font-bold mb-6 leading-tight">
                            <span className="relative text-white">
                                {instructorcontent.title_part_1}
                            </span>
                            <span className="ms-3 bg-gradient-to-r from-[#FF014F] via-[#FF014F] to-[#FF014F] bg-clip-text text-transparent mt-4">
                                {instructorcontent.title_part_2}
                            </span>
                        </h2>

                        <p className="md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                            {instructorcontent.subtitle_part_1}
                            <span className="text-[#FF014F] font-medium"> {instructorcontent.subtitle_part_2}</span>
                        </p>

                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                    </div>

                    {/* Instructors Slider */}
                    <div className="relative">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                }
                            }}
                            modules={[Autoplay, Pagination]}
                            className="instructorSwiper"
                        >
                            {instructors.map((instructor) => (
                                <SwiperSlide key={instructor.id}>
                                    <div className="group relative bg-[#8b84842a] backdrop-blur-sm rounded overflow-hidden shadow-2xl  border-[#FF014F]/20 hover:border-[#FF014F]/40 transition-all duration-500 hover:scale-105 cursor-pointer p-6">
                                        {/* Status Indicator */}
                                        <div className="absolute top-4 left-4">
                                            <div className="flex gap-1">
                                                <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse"></div>
                                                <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                                <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                            </div>
                                        </div>

                                        {/* Instructor Image */}
                                        <div className="relative mb-6">
                                            <div className="w-32 h-32 mx-auto relative">
                                                <img
                                                    src={'/storage/' + instructor.image}
                                                    alt={instructor.name}
                                                    className="w-full h-full object-cover rounded-full border-4 border-[#FF014F]/50 transition-all duration-500 group-hover:border-[#FF014F]"
                                                />
                                                {/* Online Status Indicator */}
                                                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0a0a0a]"></div>

                                                {/* Hover Effect Ring */}
                                                <div className="absolute inset-0 border-2 border-[#FF014F]/0 rounded-full group-hover:border-[#FF014F]/50 transition-all duration-500 group-hover:scale-110"></div>
                                            </div>
                                        </div>

                                        {/* Instructor Info */}
                                        <div className="text-center">
                                            {/* Name and Specialization */}
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF014F] transition-colors duration-300">
                                                {instructor.name}
                                            </h3>
                                            <p className="text-[#FF014F] text-sm font-semibold mb-3">
                                                {instructor.education}
                                            </p>

                                            <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                                                {instructor.bio}
                                            </p>

                                        </div>

                                        {/* Hover Indicator */}
                                        <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF014F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF014F]/0 via-[#FF014F]/5 to-[#FF014F]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                        {/* Bottom Gradient Border */}
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* Bottom decorative line with glow effect */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent opacity-40 shadow-lg shadow-[#FF014F]/30"></div>
            </section>

            <style>{`
                .instructorSwiper {
                    padding: 20px 10px 60px 10px;
                }

                .instructorSwiper .swiper-slide {
                    background-position: center;
                    border-radius: 1.5rem;
                    transition: all 0.3s ease;
                }

                .instructorSwiper .swiper-slide-active {
                    transform: scale(1.02);
                }

                /* Custom pagination bullets with modern pink theme */
                .instructorSwiper .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 1, 79, 0.3);
                    opacity: 0.7;
                    transition: all 0.3s ease;
                }

                .instructorSwiper .swiper-pagination-bullet-active {
                    background: #FF014F;
                    border-color: #FF014F;
                    opacity: 1;
                    transform: scale(1.3);
                    box-shadow: 0 0 20px rgba(255, 1, 79, 0.6);
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                /* Line clamp utility */
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                /* Smooth transitions for all interactive elements */
                * {
                    transition-property: color, background-color, border-color, transform, box-shadow;
                    transition-duration: 300ms;
                }
            `}</style>
        </>
    );
}