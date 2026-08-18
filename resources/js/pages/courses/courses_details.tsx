import React, { useState } from 'react';
import AppLayout from "../frontend/layout";
import { ArrowBigDown, Folder, Video } from 'lucide-react';
import { Link } from '@inertiajs/react';

interface Instructor {
    id: number;
    name: string;
    education: string;
    image: string;
}

interface Feature {
    icon: string;
    title: string;
    value: string;
}

interface Lesson {
    content_type: string;
    title: string;
}

interface Chapter {
    id: number;
    name: string;
    lessons: Lesson[];
}

interface Course {
    title: string;
    description: string;
    more_description: string;
    thumbnail: string;
    how_to_buy: string;
    offer_price: number;
    price: number;
    routine_pdf: string;
    instructors: Instructor[];
    features: Feature[];
}

interface CourseDetailsProps {
    course: Course;
    chapters: Chapter[];
}

export default function CourseDetails({ course, chapters, instructors, isEnrolled }: CourseDetailsProps) {
    const [activeSection, setActiveSection] = useState('details');
    const [openFolders, setOpenFolders] = useState<{ [key: number]: boolean }>({});

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const toggleFolder = (folderId: number) => {
        setOpenFolders(prev => ({
            ...prev,
            [folderId]: !prev[folderId]
        }));
    };

    return (
        <AppLayout>
            <section className="relative overflow-hidden bg-[#0a0a0a] py-8 md:py-20 min-h-screen pb-20 md:pb-0">

                {/* Modern Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,1,79,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,1,79,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
                    <div className="absolute top-1/4 -left-32 w-64 h-64 md:w-96 md:h-96 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>
                    <div className="absolute bottom-1/4 -right-32 w-64 h-64 md:w-96 md:h-96 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>
                </div>

                {/* Fixed Enroll Button for Mobile */}
                <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
                    <div className="bg-gradient-to-t from-[#0a0a0a] to-transparent pt-4 pb-6 px-4">


                        {
                            isEnrolled ?

                                <Link href={`/student/courses`} className="group/btn relative w-full bg-gradient-to-r from-[#FF014F] to-[#e0003d] text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FF014F]/25 flex items-center justify-center gap-2">
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#53051d] to-[#4f031a] blur-sm group-hover/btn:blur-md transition-all duration-300 opacity-50 group-hover/btn:opacity-75"></div>
                                    <span className="relative text-base font-bold">ক্লাস শুরু করো</span>
                                    <svg className="w-5 h-5 relative group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>

                                : <Link href={`/enroll/${course.slug}`} className="group/btn relative w-full bg-gradient-to-r from-[#FF014F] to-[#e0003d] text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FF014F]/25 flex items-center justify-center gap-2">
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#53051d] to-[#4f031a] blur-sm group-hover/btn:blur-md transition-all duration-300 opacity-50 group-hover/btn:opacity-75"></div>
                                    <span className="relative text-base font-bold">এখনি ভর্তি হও - ৳ {course.offer_price}</span>
                                    <svg className="w-5 h-5 relative group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                        }


                        {/* <Link href={`/enroll/${course.slug}`} className="group/btn relative w-full bg-gradient-to-r from-[#FF014F] to-[#e0003d] text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FF014F]/25 flex items-center justify-center gap-2">
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#53051d] to-[#4f031a] blur-sm group-hover/btn:blur-md transition-all duration-300 opacity-50 group-hover/btn:opacity-75"></div>
                            <span className="relative text-base font-bold">এখনি ভর্তি হও - ৳ {course.offer_price}</span>
                            <svg className="w-5 h-5 relative group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link> */}
                    </div>
                </div>

                {/* Main Content Container */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                        {/* Left Column - 2/3 width */}
                        <div className="lg:col-span-2">
                            <div className="group relative bg-[#88828217] backdrop-blur-sm rounded overflow-hidden mb-6 shadow-2xl p-4 md:p-6">
                                <div className="absolute top-4 left-4">
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse"></div>
                                        <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                </div>

                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                                    {course.title}
                                </h1>

                                <img className='mb-5 md:hidden' src={course.thumbnail} alt={course.title} />

                                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                                    {course.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pb-4">
                                    {[
                                        { id: 'details', label: 'কোর্স ডিটেইলস' },
                                        { id: 'content', label: 'কোর্স কন্টেন্ট' },
                                        { id: 'instructors', label: 'শিক্ষক প্যানেল' },
                                        { id: 'routine', label: 'রুটিন' }
                                    ].map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`px-3 py-2 text-xs sm:text-sm rounded-lg font-semibold transition-all duration-300 ${activeSection === item.id
                                                ? 'bg-[#FF014F] text-white'
                                                : 'text-white hover:text-white hover:bg-[#FF014F]/20'
                                                }`}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>


                            <div className='md:hidden'>
                                {
                                    course.how_to_buy && (
                                        <div className="group relative mt-5 bg-[#9c959518] backdrop-blur-sm rounded overflow-hidden shadow-2xl">
                                            <h3 className="text-base p-4 sm:text-lg md:text-xl font-bold text-red-600 mb-3 md:mb-4">
                                                কোর্সটি কিভাবে কিনবেন
                                            </h3>
                                            <iframe
                                                className='w-full h-60'
                                                src={`https://www.youtube.com/embed/${course.how_to_buy}`}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen>
                                            </iframe>
                                        </div>
                                    )
                                }
                            </div>

                            <div className="space-y-6">
                                <div id="details" className="group relative bg-[#918c8c0b] backdrop-blur-sm rounded overflow-hidden shadow-2xl p-4 md:p-6">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">কোর্স পরিচিতি</h3>
                                    <p className="text-white leading-relaxed text-sm sm:text-base whitespace-pre-line">
                                        {course.more_description}
                                    </p>
                                </div>

                                <div id="content" className="group relative bg-[#7b797913] backdrop-blur-sm rounded overflow-hidden shadow-2xl p-4 md:p-6">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">কোর্স কনটেন্ট</h3>

                                    <div className="space-y-3 md:space-y-4">
                                        {chapters.map((folder) => (
                                            <div key={folder.id} className="rounded overflow-hidden">
                                                <button
                                                    onClick={() => toggleFolder(folder.id)}
                                                    className="w-full px-3 sm:px-4 md:px-6 py-3 bg-[#0a0a0a]/60 hover:bg-[#FF014F]/10 transition-all duration-300 flex items-center justify-between text-left"
                                                >
                                                    <span className="text-white font-semibold text-sm sm:text-base flex items-center gap-2 md:gap-3">
                                                        <Folder size={18} className="flex-shrink-0" />
                                                        {folder.name}
                                                    </span>
                                                    <span className={`transform transition-transform duration-300 ${openFolders[folder.id] ? 'rotate-180' : ''}`}>
                                                        <ArrowBigDown size={20} className="text-white" />
                                                    </span>
                                                </button>

                                                {openFolders[folder.id] && (
                                                    <div className="bg-[#0a0a0a]/40 p-3 md:p-4 space-y-2 md:space-y-3">
                                                        {folder.lessons.map((item, index) => (
                                                            <div key={index} className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-[#0a0a0a]/60 hover:bg-[#FF014F]/10 transition-all duration-300">
                                                                {item.content_type === 'video' && <Video size={16} className="text-red-400 flex-shrink-0" />}
                                                                {item.content_type === 'lecture_sheet' && <span className="text-blue-400 text-sm">📄</span>}
                                                                {item.content_type === 'slide' && <span className="text-blue-400 text-sm">🖼️</span>}
                                                                {item.content_type === 'quiz' && <span className="text-green-400 text-sm">❓</span>}
                                                                <span className="text-white text-sm sm:text-base">{item.title}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Instructors Section */}
                                <div id="instructors" className="group relative bg-[#74707016] backdrop-blur-sm rounded overflow-hidden shadow-2xl p-4 md:p-6">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">আমাদের শিক্ষক প্যানেল</h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                        {instructors.map((instructor) => (
                                            <div key={instructor.id} className="group relative bg-[#7d797925] rounded p-4 md:p-6 hover:border-[#FF014F]/40 transition-all duration-300 text-center">
                                                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 relative">
                                                    <img
                                                        src={'/storage/' + instructor.instructor.image}
                                                        alt={instructor.instructor.name}
                                                        className="w-full h-full object-cover rounded-full border-2 border-[#FF014F]/50"
                                                    />
                                                    <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-[#0a0a0a]"></div>
                                                </div>
                                                <h4 className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">{instructor.instructor.name}</h4>
                                                <p className="text-[#e3d9dc] text-xs md:text-sm">{instructor.instructor.education}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Routine Section */}
                                <div id="routine" className="group relative bg-[#7978782a] backdrop-blur-sm rounded overflow-hidden my-5 shadow-2xl p-4 md:p-6">
                                    <div className="text-center py-6 md:py-8">
                                        <div className="text-4xl md:text-6xl mb-3 md:mb-4">📅</div>
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">রুটিন দেখুন</h3>
                                        <p className="text-white mb-4 md:mb-6 text-sm md:text-base">কোর্সের সম্পূর্ণ রুটিন ডাউনলোড করুন</p>
                                        <a target='_blank' download={true} href={'/storage/' + course.routine_pdf} className="bg-[#FF014F] text-white px-6 py-2 md:px-8 md:py-3 rounded-xl font-semibold hover:bg-[#e0003d] transition-all duration-300 text-sm md:text-base">
                                            রুটিন ডাউনলোড করুন
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - 1/3 width */}
                        <div className="lg:col-span-1">
                            {/* Course Image & Price - Hidden on mobile since button is fixed */}
                            <div className="hidden md:block group relative bg-[#746f6f2f] backdrop-blur-sm rounded overflow-hidden shadow-2xl mb-6 p-5">
                                <img
                                    src={course.thumbnail}
                                    alt="Course"
                                    className="w-full h-32 sm:h-40 md:h-48 object-cover"
                                />
                                <div className='px-4 md:px-6 pt-5 pb-2' >
                                    <div className="flex items-center gap-2 text-white">
                                        <span className="text-[#FF014F] scale-150"> 🎓 </span>
                                        <span>{course.total_orders} জন ভর্তি হয়েছে</span>
                                    </div>
                                </div>
                                <div className="px-4 md:px-6 pt-4">
                                    <div className="flex items-center justify-between mb-3 md:mb-4">
                                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF014F]">{course.offer_price == 0 ? 'ফ্রি' : course.offer_price + ' ৳'}</span>
                                        <span className="text-white line-through text-sm md:text-base">৳ {course.price}</span>
                                    </div>

                                    {
                                        isEnrolled ?

                                            <Link href={`/student/courses`} className="group/btn relative w-full bg-gradient-to-r from-[#ff014d15] to-[#ff014d47] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FF014F]/25 flex items-center justify-center gap-2">
                                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#53051d63] to-[#4f031a3c] blur-sm group-hover/btn:blur-md transition-all duration-300 opacity-50 group-hover/btn:opacity-75"></div>
                                                <span className="relative text-sm sm:text-base">ক্লাস শুরু করো</span>
                                                <svg className="w-4 h-4 relative group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </Link>

                                            :

                                            <Link href={`/enroll/${course.slug}`} className="group/btn relative w-full bg-gradient-to-r from-[#ff014d15] to-[#ff014d47] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FF014F]/25 flex items-center justify-center gap-2">
                                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#53051d63] to-[#4f031a3c] blur-sm group-hover/btn:blur-md transition-all duration-300 opacity-50 group-hover/btn:opacity-75"></div>
                                                <span className="relative text-sm sm:text-base">এখনি ভর্তি হও</span>
                                                <svg className="w-4 h-4 relative group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </Link>
                                    }

                                </div>
                            </div>

                            {/* Features List */}
                            <div className="group relative bg-[#9c959518] backdrop-blur-sm rounded overflow-hidden shadow-2xl p-4 md:p-6">
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 md:mb-4">ফিচার সমূহ</h3>
                                <div className="space-y-2 md:space-y-3">
                                    {course.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-[#0a0a0a]/60 hover:bg-[#FF014F]/10 transition-all duration-300">
                                            <i className={`${feature.icon} text-white`}></i>
                                            <div>
                                                <span className="text-white text-sm md:text-base">{feature.title}</span>
                                                <span className="text-white text-sm md:text-base ms-3">{feature.value}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* course ti kivabe kinben section  */}

                            <div className='hidden md:block'>
                                {
                                course.how_to_buy && (
                                    <div className="group relative mt-5 bg-[#9c959518] backdrop-blur-sm rounded overflow-hidden shadow-2xl">
                                        <h3 className="text-base p-4 sm:text-lg md:text-xl font-bold text-red-600 mb-3 md:mb-4">
                                            কোর্সটি কিভাবে কিনবেন
                                        </h3>
                                        <iframe
                                            className='w-full h-60'
                                            src={`https://www.youtube.com/embed/${course.how_to_buy}`}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                )
                            }
                            </div>


                        </div>
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
            `}</style>
        </AppLayout>
    );
}