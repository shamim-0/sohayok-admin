import { Link } from '@inertiajs/react';
import React from 'react';

export default function Category({categorysection, categories}) {
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
                               {categorysection.title_part_1}
                            </span>
                            <span className="ms-3  bg-gradient-to-r from-[#FF014F] via-[#FF014F] to-[#FF014F] bg-clip-text text-transparent mt-4">
                                {categorysection.title_part_2}
                            </span>
                        </h2>

                        <p className="md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                             {categorysection.subtitle_part_1}
                            <span className="text-[#FF014F] font-medium">{categorysection.subtitle_part_2}</span>
                        </p>

                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {categories.map((category) => (
                            <Link  href={'/courses?category='+category.id} 
                                key={category.id}
                                className="group relative bg-[#837a7a22] backdrop-blur-sm rounded overflow-hidden shadow-2xl  border-[#FF014F]/20 hover:border-[#FF014F]/40 cursor-pointer"
                            >
                                {/* Background Pattern */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF014F]/5 to-[#FF014F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Content */}
                                <div className="relative p-6">
                                    {/* Status Indicator */}
                                    <div className="absolute top-4 left-4">
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse"></div>
                                            <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                            <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                        </div>
                                    </div>

                                    {/* Image Container */}
                                    <div className="relative mb-4">
                                        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#FF014F]/20 to-[#FF014F]/10 rounded-2xl flex items-center justify-center group-hover:from-[#FF014F]/30 group-hover:to-[#FF014F]/20 transition-all duration-500 border border-[#FF014F]/20">
                                            <img 
                                                src={'/storage/'+category.image} 
                                                alt={category.name}
                                                className="w-12 h-12 object-contain "
                                            />
                                        </div>
                                    </div>

                                    {/* Category Info */}
                                    <div className="text-center">
                                        <h3 className="md:text-xl font-bold text-white mb-2 group-hover:text-[#FF014F] transition-colors duration-300">
                                            {category.name}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4">
                                            {category.courses}
                                        </p>
                                        
                                        {/* Animated Underline */}
                                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#FF014F] to-transparent rounded-full mx-auto transform transition-all duration-300 group-hover:w-16 group-hover:bg-[#FF014F]"></div>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF014F]/0 via-[#FF014F]/5 to-[#FF014F]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Hover Indicator */}
                                <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF014F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                                {/* Bottom Gradient Border */}
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                            </Link>
                        ))}
                    </div>
                    
                   
                </div>

                {/* Bottom decorative line with glow effect */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent opacity-40 shadow-lg shadow-[#FF014F]/30"></div>
            </section>

            <style >{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
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