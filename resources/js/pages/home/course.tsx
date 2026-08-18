import { router, Link } from '@inertiajs/react';

import banner from '../../images/1000277200.png';
import { User2Icon } from 'lucide-react';




export default function Course({ courses, coursecontent }) {
    // Course data

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
                                {coursecontent.title_part_1}
                            </span>
                            <span className="ms-3 bg-gradient-to-r from-[#FF014F] via-[#FF014F] to-[#FF014F] bg-clip-text text-transparent mt-4">
                                {coursecontent.title_part_2}
                            </span>
                        </h2>
                        <p className="md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                            {coursecontent.subtitle_part_1}
                            <span className="text-[#FF014F] font-medium">{coursecontent.subtitle_part_2}</span>
                        </p>

                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                    </div>





                    {/* Courses Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        {courses.map((course) => (
                            <Link
                                href={'course/' + course.course.slug}
                                key={course.id}
                                className="group relative bg-[#94909012] backdrop-blur-sm rounded overflow-hidden shadow-2xl  border-[#FF014F]/20 hover:border-[#FF014F]/40 cursor-pointer"
                            >
                                {/* Course Image */}
                                <div className="relative  overflow-hidden">
                                    <img
                                        src={course.course.thumbnail}
                                        alt={course.course.title}
                                        className="w-full "
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>


                                </div>

                                {/* Course Content */}
                                <div className="p-5">
                                    {/* Course Title */}
                                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-[#FF014F] transition-colors duration-300">
                                        {course.course.title}
                                    </h3>

                                    {/* Course Stats */}
                                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#FF014F] scale-150"> 🎓 </span>
                                            <span>{course.course.total_orders} জন ভর্তি হয়েছে</span>
                                        </div>
                                    </div>

                                    {/* Price Section */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-[#FF014F]">
                                                {course.course.offer_price == 0 ? 'ফ্রি' : course.course.offer_price + ' ৳'} 
                                            </span>
                                            <span className="text-lg text-gray-400 line-through">
                                                {course.course.price}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Enroll Button */}
                                    <button className="group/btn relative w-full bg-gradient-to-r from-[#ff014d15] to-[#ff014d47] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FF014F]/25  border-[#FF014F]/30 hover:border-[#FF014F]/60 flex items-center justify-center gap-2">
                                        {/* Button Glow Effect */}
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#53051d63] to-[#4f031a3c] blur-sm group-hover/btn:blur-md transition-all duration-300 opacity-50 group-hover/btn:opacity-75"></div>
                                        <span className="relative">এখনি ভর্তি হও</span>
                                        <svg className="w-4 h-4 relative group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF014F]/0 via-[#FF014F]/5 to-[#FF014F]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

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

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                /* Line clamp utility */
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
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