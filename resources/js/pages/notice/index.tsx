import React, { useState } from 'react';
import AppLayout from '../frontend/layout';
import { DownloadIcon, Link2, Link2Off } from 'lucide-react';

export default function Notice({ notices }) {
    const [selectedNotice, setSelectedNotice] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Notice data in Bengali
    // const notices = [
    //     {
    //         id: 1,
    //         title: "নতুন ব্যাচের রেজিস্ট্রেশন শুরু",
    //         description: "ওয়েব ডেভেলপমেন্ট এবং ডাটা সাইন্সের নতুন ব্যাচের রেজিস্ট্রেশন শুরু হয়েছে। আগ্রহী শিক্ষার্থীরা尽快 অ্যাপ্লাই করুন।",
    //         fullContent: "ওয়েব ডেভেলপমেন্ট এবং ডাটা সাইন্সের নতুন ব্যাচের রেজিস্ট্রেশন শুরু হয়েছে। আগ্রহী শিক্ষার্থীরা尽快 অ্যাপ্লাই করুন। রেজিস্ট্রেশন শেষ তারিখ: ৩০ ডিসেম্বর, ২০২৪। প্রয়োজনীয় documents: শিক্ষার্থী আইডি, ২ কপি পাসপোর্ট সাইজ ছবি, সর্বশেষ শিক্ষাগত qualification এর certificate।",
    //         date: "১৫ ডিসেম্বর, ২০২৪",
    //         priority: "high",
    //         isNew: true
    //     },
    //     {
    //         id: 2,
    //         title: "ঈদুল ফিতরের ছুটি",
    //         description: "ঈদুল ফিতর উপলক্ষ্যে ১০-১২ এপ্রিল পর্যন্ত সকল ক্লাস বন্ধ থাকবে।",
    //         fullContent: "ঈদুল ফিতর উপলক্ষ্যে ১০-১২ এপ্রিল পর্যন্ত সকল ক্লাস বন্ধ থাকবে। ১৩ এপ্রিল থেকে ক্লাস স্বাভাবিকভাবে চলবে। সকল শিক্ষার্থী এবং শিক্ষকদের জন্য শুভেচ্ছা। ছুটির পরে assignment submission date পরিবর্তন করা হবে না।",
    //         date: "৮ এপ্রিল, ২০২৪",
    //         priority: "medium",
    //         isNew: false
    //     },
    //     {
    //         id: 3,
    //         title: "মিড টার্ম পরীক্ষার সময়সূচী",
    //         description: "সমস্ত কোর্সের মিড টার্ম পরীক্ষার সময়সূচী প্রকাশিত হয়েছে।",
    //         fullContent: "সমস্ত কোর্সের মিড টার্ম পরীক্ষার সময়সূচী প্রকাশিত হয়েছে। পরীক্ষা শুরু হবে ১লা এপ্রিল থেকে। প্রতিটি পরীক্ষার duration ২ ঘন্টা। পরীক্ষার হলে শিক্ষার্থীদের নিজেদের ID card আনতে হবে। মোবাইল ফোন নিয়ে পরীক্ষার হলে প্রবেশ নিষিদ্ধ।",
    //         date: "২০ মার্চ, ২০২৪",
    //         priority: "high",
    //         isNew: true
    //     },
    //     {
    //         id: 4,
    //         title: "বৃত্তির আবেদন ফর্ম",
    //         description: "মেধাবী ও প্রয়োজনীয় শিক্ষার্থীদের জন্য বৃত্তির আবেদন ফর্ম প্রকাশিত হয়েছে।",
    //         fullContent: "মেধাবী ও প্রয়োজনীয় শিক্ষার্থীদের জন্য বৃত্তির আবেদন ফর্ম প্রকাশিত হয়েছে। শেষ তারিখ: ৩০ মার্চ, ২০২৪। আবেদনের জন্য প্রয়োজনীয় documents: আয় certificate, শিক্ষাগত qualification, recommendation letter। বৃত্তির পরিমাণ: টিউশন ফির ৫০% থেকে ১০০% পর্যন্ত।",
    //         date: "১৫ মার্চ, ২০২৪",
    //         priority: "high",
    //         isNew: false
    //     },
    //     {
    //         id: 5,
    //         title: "লাইভ সেশন সময় পরিবর্তন",
    //         description: "পরবর্তী সপ্তাহ থেকে কিছু লাইভ সেশনের সময় পরিবর্তন করা হয়েছে।",
    //         fullContent: "পরবর্তী সপ্তাহ থেকে কিছু লাইভ সেশনের সময় পরিবর্তন করা হয়েছে। নতুন সময়সূচী: সোমবার ও বুধবার সন্ধ্যা ৭:০০ টা থেকে ৯:০০ টা পর্যন্ত। সকল শিক্ষার্থীদের requested নতুন সময়সূচী অনুসরণ করতে হবে। recorded video পরে available হবে।",
    //         date: "১০ মার্চ, ২০২৪",
    //         priority: "medium",
    //         isNew: false
    //     }
    // ];

    // Function to get priority badge
    const getPriorityBadge = (priority) => {
        switch (priority) {
            case 'high':
                return {
                    text: 'জরুরী',
                    color: 'bg-[#FF014F]/20 text-[#FF014F] -[#FF014F]/30'
                };
            case 'medium':
                return {
                    text: 'গুরুত্বপূর্ণ',
                    color: 'bg-yellow-500/20 text-yellow-400 -yellow-500/30'
                };
            default:
                return {
                    text: 'সাধারণ',
                    color: 'bg-blue-500/20 text-blue-400 -blue-500/30'
                };
        }
    };

    // Function to handle notice click
    const handleNoticeClick = (notice) => {
        setSelectedNotice(notice);
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedNotice(null);
    };

    return (
        <AppLayout>
            <section className="relative overflow-hidden bg-[#0a0a0a] py-20 min-h-screen">

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
                    <div className="absolute top-0 left-0 w-32 h-32 -t-2 -l-2 -[#FF014F]/30"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 -t-2 -r-2 -[#FF014F]/30"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 -b-2 -l-2 -[#FF014F]/30"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 -b-2 -r-2 -[#FF014F]/30"></div>
                </div>

                {/* Main Content Container */}
                <div className="relative z-10 max-w-4xl mx-auto px-4">

                    {/* Header Section */}
                    <div className="text-center mb-12 relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            <span className="relative text-white">
                                নোটিস
                                {/* <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF014F] to-transparent"></span> */}
                            </span>
                            <span className="ms-3 bg-gradient-to-r from-[#FF014F] via-[#FF014F] to-[#FF014F] bg-clip-text text-transparent mt-4">
                                বোর্ড
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                            সকল গুরুত্বপূর্ণ নোটিশ এবং ঘোষণা
                            <span className="text-[#FF014F] font-medium"> সর্বশেষ আপডেট।</span>
                        </p>

                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                    </div>

                    {/* Notices List */}
                    <div className="space-y-4">
                        {notices.map((notice) => (
                            <div
                                key={notice.id}
                                onClick={() => handleNoticeClick(notice)}
                                className="group relative bg-[#8c828218] backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl  -[#FF014F]/20 hover:-[#FF014F]/40  p-6"
                            >
                                {/* Status Indicator */}
                                <div className="absolute top-4 left-4">
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse"></div>
                                        <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    {/* Left Section */}
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF014F]/20 to-[#FF014F]/10 flex items-center justify-center text-2xl  -[#FF014F]/20">
                                            📢
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-lg font-bold text-white group-hover:text-[#FF014F] transition-colors duration-300">
                                                    {notice.title}
                                                </h3>

                                                {notice.isNew && (
                                                    <span className="px-2 py-1 bg-green-500/20 text-green-400  -green-500/30 rounded-full text-xs font-semibold">
                                                        নতুন
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-gray-400 text-sm line-clamp-1">
                                                {notice.description}
                                            </p>

                                        </div>
                                    </div>

                                    {/* Right Section */}
                                    <div className="flex items-center gap-4">
                                        <div className="text-[#FF014F] transform group-hover:translate-x-1 transition-transform duration-300">
                                            →
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Indicator */}
                                <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF014F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF014F]/0 via-[#FF014F]/5 to-[#FF014F]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {notices.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">📭</div>
                            <h3 className="text-xl font-bold text-white mb-2">কোন নোটিস পাওয়া যায়নি</h3>
                            <p className="text-gray-400 mb-6">এখনো কোন নোটিস প্রকাশিত হয়নি</p>
                        </div>
                    )}
                </div>

                {/* Notice Modal */}
                {isModalOpen && selectedNotice && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <div className="relative bg-[#0a0a0a] rounded-3xl shadow-2xl  -[#FF014F]/20 max-w-2xl w-full max-h-[90vh] overflow-hidden">
                            {/* Modal Header */}
                            <div className="p-6 -b -[#FF014F]/20">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF014F]/20 to-[#FF014F]/10 flex items-center justify-center text-xl  -[#FF014F]/20">
                                            📢
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">
                                                {selectedNotice.title}
                                            </h2>
                                            <p className="text-gray-400 text-sm">{selectedNotice.date}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={closeModal}
                                        className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 overflow-y-auto max-h-[60vh]">
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                                        {selectedNotice.description}
                                    </p>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="p-5 -t -[#FF014F]/20 bg-[#0a0a0a]/80">
                                <div className="flex justify-between items-center">

                                    <div className='flex items-center gap-4'>
                                        <div>
                                            {
                                                selectedNotice.link ? <a href={selectedNotice.link}  className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#FF014F] to-[#FF014F]/80 rounded-xl hover:from-[#FF014F] hover:to-[#FF014F] transition-all duration-300 shadow-lg shadow-[#FF014F]/25 hover:shadow-[#FF014F]/40  -[#FF014F]/30 hover:-[#FF014F]/60"  target='_blank'><Link2 className='text-[#fff]'></Link2> </a> : ''
                                            }
                                        </div>
                                        <div>
                                            {
                                                selectedNotice.pdf_file ? <a href={'/storage/' + selectedNotice.pdf_file}   className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#FF014F] to-[#FF014F]/80 rounded-xl hover:from-[#FF014F] hover:to-[#FF014F] transition-all duration-300 shadow-lg shadow-[#FF014F]/25 hover:shadow-[#FF014F]/40  -[#FF014F]/30 hover:-[#FF014F]/60" target='_blank'><DownloadIcon className='text-[#fff]'></DownloadIcon> </a> : ''
                                            }
                                        </div>
                                    </div>
                                    <button
                                        onClick={closeModal}
                                        className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#FF014F] to-[#FF014F]/80 rounded-xl hover:from-[#FF014F] hover:to-[#FF014F] transition-all duration-300 shadow-lg shadow-[#FF014F]/25 hover:shadow-[#FF014F]/40  -[#FF014F]/30 hover:-[#FF014F]/60"
                                    >
                                        {/* Button Glow Effect */}
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF014F] to-[#FF014F] blur-sm group-hover:blur-md transition-all duration-300 opacity-50 group-hover:opacity-75"></div>
                                        <span className="relative">বন্ধ করুন</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Bottom decorative line with glow effect */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent opacity-40 shadow-lg shadow-[#FF014F]/30"></div>
            </section>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                /* Line clamp utility */
                .line-clamp-1 {
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                /* Smooth transitions for all interactive elements */
                * {
                    transition-property: color, background-color, -color, transform, box-shadow;
                    transition-duration: 300ms;
                }

                /* Custom scrollbar for modal */
                .overflow-y-auto::-webkit-scrollbar {
                    width: 6px;
                }

                .overflow-y-auto::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.1);
                    -radius: 3px;
                }

                .overflow-y-auto::-webkit-scrollbar-thumb {
                    background: rgba(255, 1, 79, 0.3);
                    -radius: 3px;
                }

                .overflow-y-auto::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 1, 79, 0.5);
                }
            `}</style>
        </AppLayout>
    );
}