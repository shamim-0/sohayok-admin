import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Review({reviews, reviewcontent}) {

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <span 
                key={index}
                className={`text-lg ${
                    index < rating 
                        ? 'text-[#FF014F]' 
                        : 'text-gray-600'
                }`}
            >
                ★
            </span>
        ));
    };

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
                               {reviewcontent.title_part_1}
                            </span>
                            <span className="ms-3 bg-gradient-to-r from-[#FF014F] via-[#FF014F] to-[#FF014F] bg-clip-text text-transparent mt-4">
                                {reviewcontent.title_part_2}
                            </span>
                        </h2>

                        <p className="md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                            {reviewcontent.subtitle_part_1}
                            <span className="text-[#FF014F] font-medium"> {reviewcontent.subtitle_part_2}</span>
                        </p>

                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                    </div>

                    {/* Reviews Slider */}
                    <div className="relative">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 25,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                }
                            }}
                            modules={[Autoplay, Pagination]}
                            className="reviewSwiper"
                        >
                            {reviews && reviews?.map((review) => (
                                <SwiperSlide key={review.id}>
                                    <div className="group relative bg-[#99898917] backdrop-blur-sm rounded overflow-hidden shadow-2xl  border-[#FF014F]/20 hover:border-[#FF014F]/40 transition-all duration-500  cursor-pointer p-6 h-full">
                                        {/* Status Indicator */}
                                        <div className="absolute top-4 left-4">
                                            <div className="flex gap-1">
                                                <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse"></div>
                                                <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                                <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                            </div>
                                        </div>
                                        
                                        {/* Review Content */}
                                        <div className="flex flex-col h-full">
                                            {/* Quote Icon */}
                                            <div className="mb-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-[#FF014F]/20 to-[#FF014F]/10 rounded-full flex items-center justify-center border border-[#FF014F]/20">
                                                    <span className="text-2xl text-[#FF014F]">❝</span>
                                                </div>
                                            </div>

                                            {/* Review Text */}
                                            <div className="flex-1 mb-6">
                                                <p className="text-gray-300 leading-relaxed text-justify line-clamp-5">
                                                    "{review.comment}"
                                                </p>
                                            </div>

                                            {/* Student Info */}
                                            <div className="flex items-center gap-4">
                                                {/* Student Image */}
                                                <div className="relative">
                                                    <img 
                                                        src={'/storage/'+review.image} 
                                                        alt={review.name}
                                                        className="w-14 h-14 rounded-full object-cover border-2 border-gray-600 group-hover:border-[#FF014F] transition-all duration-300"
                                                    />
                                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0a0a0a]"></div>
                                                </div>
                                            </div>

                                            {/* Rating */}
                                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700/50">
                                                <div className="flex items-center gap-1">
                                                    {renderStars(review.rating)}
                                                </div>
                                                <div className="text-gray-400 text-sm">
                                                    {review.rating}.0/5.0
                                                </div>
                                            </div>
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
                .reviewSwiper {
                    padding: 20px 10px 60px 10px;
                }

                .reviewSwiper .swiper-slide {
                    background-position: center;
                    border-radius: 1.5rem;
                    transition: all 0.3s ease;
                    height: auto;
                }

                .reviewSwiper .swiper-slide-active {
                    transform: scale(1.02);
                }

                /* Custom pagination bullets with modern pink theme */
                .reviewSwiper .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 1, 79, 0.3);
                    opacity: 0.7;
                    transition: all 0.3s ease;
                }

                .reviewSwiper .swiper-pagination-bullet-active {
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
                .line-clamp-5 {
                    display: -webkit-box;
                    -webkit-line-clamp: 5;
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