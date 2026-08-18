import React from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '../frontend/layout';

export default function About() {
    // Team members data
    const teamMembers = [
        {
            id: 1,
            name: "ড. আহমেদ হাসান",
            position: "প্রতিষ্ঠাতা ও সিইও",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
            bio: "১৫+ বছর অভিজ্ঞতা সহ সফটওয়্যার ইঞ্জিনিয়ার এবং এডুটেক বিশেষজ্ঞ",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            id: 2,
            name: "প্রফেসর নুসরাত জাহান",
            position: "একাডেমিক ডিরেক্টর",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
            bio: "শিক্ষা প্রযুক্তি এবং কারিকুলাম ডেভেলপমেন্টে ১২ বছর অভিজ্ঞতা",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            id: 3,
            name: "ইঞ্জিনিয়ার রাকিবুল ইসলাম",
            position: "হেড অব টেকনোলজি",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
            bio: "ফুল স্ট্যাক ডেভেলপমেন্ট এবং ক্লাউড আর্কিটেকচারে বিশেষজ্ঞ",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            id: 4,
            name: "সাবরিনা আক্তার",
            position: "স্টুডেন্ট সাকসেস ম্যানেজার",
            image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
            bio: "ক্যারিয়ার কাউন্সেলিং এবং স্টুডেন্ট সাপোর্টে ৮ বছর অভিজ্ঞতা",
            social: {
                linkedin: "#",
                twitter: "#"
            }
        }
    ];

    // Milestones data
    const milestones = [
        {
            year: "২০১৮",
            title: "যাত্রা শুরু",
            description: "মাত্র ৫০ জন শিক্ষার্থী নিয়ে যাত্রা শুরু"
        },
        {
            year: "২০১৯",
            title: "১০০০+ শিক্ষার্থী",
            description: "প্রথম বছরে ১০০০+ শিক্ষার্থী অর্জন"
        },
        {
            year: "২০২০",
            title: "অনলাইন প্ল্যাটফর্ম",
            description: "সম্পূর্ণ অনলাইন লার্নিং প্ল্যাটফর্ম চালু"
        },
        {
            year: "২০২১",
            title: "৫০+ কোম্পানি পার্টনার",
            description: "শীর্ষ টেক কোম্পানিগুলোর সাথে পার্টনারশিপ"
        },
        {
            year: "২০২২",
            title: "১০,০০০+ সাফল্য",
            description: "১০,০০০+ শিক্ষার্থীর ক্যারিয়ার সাফল্য"
        },
        {
            year: "২০২৩",
            title: "আন্তর্জাতিক স্বীকৃতি",
            description: "আন্তর্জাতিক পর্যায়ে স্বীকৃতি অর্জন"
        }
    ];

    // Values data
    const values = [
        {
            icon: "🎯",
            title: "গুণগত শিক্ষা",
            description: "শিল্পের চাহিদা অনুযায়ী সর্বোচ্চ মানের শিক্ষা প্রদান"
        },
        {
            icon: "🤝",
            title: "বিশ্বস্ততা",
            description: "শিক্ষার্থীদের সাফল্যের জন্য সম্পূর্ণ প্রতিশ্রুতিবদ্ধ"
        },
        {
            icon: "💡",
            title: "নতুনত্ব",
            description: "নতুন প্রযুক্তি এবং শেখার পদ্ধতি নিয়ে নিরবচ্ছিন্ন গবেষণা"
        },
        {
            icon: "🌍",
            title: "সুবিধাবঞ্চিতদের জন্য শিক্ষা",
            description: "সকলের জন্য শিক্ষা নিশ্চিত করতে বৃত্তি এবং বিশেষ সুবিধা"
        }
    ];

    return (
        <AppLayout>
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
                    
                    {/* Hero Section */}
                    <div className="text-center mb-20 relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                        
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            <span className="relative text-white">
                                আমাদের
                                {/* <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF014F] to-transparent"></span> */}
                            </span>
                            <span className="ms-3 bg-gradient-to-r from-[#FF014F] via-[#FF014F] to-[#FF014F] bg-clip-text text-transparent mt-4">
                                কথা
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                            আমরা একটি অগ্রণী শিক্ষা প্রযুক্তি প্রতিষ্ঠান যার লক্ষ্য প্রতিটি শিক্ষার্থীর মধ্যে লুকিয়ে থাকা সম্ভাবনাকে উন্মোচিত করা। 
                            ২০১৮ সাল থেকে আমরা ডিজিটাল শিক্ষার মাধ্যমে হাজারো শিক্ষার্থীর ক্যারিয়ার গঠনে সহায়তা করছি।
                            <span className="text-[#FF014F] font-medium"> এক্সপার্ট-লেড, ইন্ডাস্ট্রি ফোকাসড।</span>
                        </p>

                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                    </div>

                    {/* Mission Vision Section */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        <div className="group relative bg-[#7c777714] backdrop-blur-sm rounded overflow-hidden shadow-2xl   cursor-pointer p-8">
                            {/* Status Indicator */}
                            <div className="absolute top-4 left-4">
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse"></div>
                                    <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                </div>
                            </div>
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-2xl font-bold text-white mb-4">আমাদের লক্ষ্য</h3>
                            <p className="text-gray-400 leading-relaxed">
                                দক্ষিণ এশিয়ার প্রতিটি প্রতিভাবান ব্যক্তির কাছে মানসম্মত প্রযুক্তি শিক্ষা পৌঁছে দেওয়া। 
                                আমরা বিশ্বাস করি যে সঠিক শিক্ষা ও প্রশিক্ষণের মাধ্যমে任何人ই তাদের স্বপ্নের ক্যারিয়ার গড়ে তুলতে পারে।
                            </p>
                            {/* Hover Indicator */}
                            <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF014F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                        </div>
                        <div className="group relative bg-[#7c777714] backdrop-blur-sm rounded overflow-hidden shadow-2xl   cursor-pointer p-8">
                            {/* Status Indicator */}
                            <div className="absolute top-4 left-4">
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse"></div>
                                    <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                </div>
                            </div>
                            <div className="text-4xl mb-4">🔮</div>
                            <h3 className="text-2xl font-bold text-white mb-4">আমাদের ভিশন</h3>
                            <p className="text-gray-400 leading-relaxed">
                                ২০৩০ সালের মধ্যে দক্ষিণ এশিয়ার শীর্ষ ডিজিটাল স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম হওয়া। 
                                আমরা চাই আমাদের শিক্ষার্থীরা বিশ্বব্যাপী প্রতিযোগিতামূলক হয়ে উঠুক।
                            </p>
                            {/* Hover Indicator */}
                            <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF014F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="mb-20">
                        <div className="text-center mb-12 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                            <h2 className="text-4xl font-bold text-white mb-4">আমাদের মূল্যবোধ</h2>
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <div 
                                    key={index}
                                    className="group relative bg-[#8985851c] backdrop-blur-sm rounded overflow-hidden shadow-2xl  border-[#FF014F]/20 hover:border-[#FF014F]/40 transition-all duration-500 hover:scale-105 cursor-pointer p-6 text-center"
                                >
                                    {/* Status Indicator */}
                                    <div className="absolute top-4 left-4">
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse"></div>
                                            <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                            <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                        </div>
                                    </div>
                                    <div className="text-3xl mb-4">{value.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                    {/* Hover Indicator */}
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF014F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF014F]/0 via-[#FF014F]/5 to-[#FF014F]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div className="mb-20">
                        <div className="text-center mb-12 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                            <h2 className="text-4xl font-bold text-white mb-4">আমাদের যাত্রা</h2>
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                        </div>
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#FF014F] to-[#FF014F]/60"></div>
                            
                            {/* Milestones */}
                            <div className="space-y-12">
                                {milestones.map((milestone, index) => (
                                    <div 
                                        key={index}
                                        className={`relative flex items-center ${
                                            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                        }`}
                                    >
                                        {/* Content */}
                                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                            <div className="group relative bg-[#86838318] backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl  border-[#FF014F]/20 hover:border-[#FF014F]/40 transition-all duration-500 p-6">
                                                <div className="text-[#FF014F] font-bold text-lg mb-2">{milestone.year}</div>
                                                <h3 className="text-white font-semibold text-xl mb-2">{milestone.title}</h3>
                                                <p className="text-gray-400">{milestone.description}</p>
                                            </div>
                                        </div>
                                        
                                        {/* Dot */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FF014F] rounded-full border-4 border-[#0a0a0a]"></div>
                                    </div>
                                ))}
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

                /* Smooth transitions for all interactive elements */
                * {
                    transition-property: color, background-color, border-color, transform, box-shadow;
                    transition-duration: 300ms;
                }
            `}</style>
        </AppLayout>
    );
}