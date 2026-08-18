import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import AppLayout from "@/pages/frontend/layout";

export default function Subject({ subject, topics }) {
    const [selectedTopic, setSelectedTopic] = useState('');
    const [questionCount, setQuestionCount] = useState(10);
    const [timeLimit, setTimeLimit] = useState(30);
    const [negativeMarking, setNegativeMarking] = useState(0.25); // Default 0.25 negative mark

    const handleStartExam = () => {
        const examUrl = `/self/start-exam?topic=${selectedTopic}&questions=${questionCount}&time=${timeLimit}&negative=${negativeMarking}&subject=${subject.name}`;
        window.location.href = examUrl;
    };

    const maxQuestions = 50;

    const formatNegativeMarking = (value) => {
        if (value === 0) return '০';
        if (value === 0.25) return '০.২৫';
        if (value === 0.50) return '০.৫০';
        if (value === 1) return '১';
        return value.toString();
    };

    return (
        <AppLayout>
            <section className="relative overflow-hidden bg-[#0a0a0a] py-20 min-h-screen">

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

                    {/* Subject Header */}
                    <div className="text-center mb-16 relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>

                        {/* Subject Icon and Name */}
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#FF014F]/20 to-[#FF014F]/10 rounded flex items-center justify-center border border-[#FF014F]/20 mr-4">
                                <img
                                    src={`/storage/${subject.icon}`}
                                    alt={subject.name}
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                            <div className="text-left">
                                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                    {subject.name} 
                                </h1>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                    </div>

                    {/* Main Content Layout */}
                    <div className='md:flex gap-6'>
                        {/* Topics Grid - Left Side (2/3 width) */}



                        <div className="w-full md:w-2/3 mb-8 md:mb-0 md:block hidden">

                            {topics.length === 0 && (
                                <div className="text-center py-12">
                                    <div className="w-24 h-24 mx-auto mb-4 bg-[#FF014F]/10 rounded-full flex items-center justify-center border border-[#FF014F]/20">
                                        <svg className="w-12 h-12 text-[#FF014F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">কোনো টপিক পাওয়া যায়নি</h3>
                                    <p className="text-gray-400">এই বিষয়ের টপিকগুলো খুব শিগগিরই যুক্ত করা হবে।</p>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2">
                                {topics.map((topic, index) => (
                                    <button
                                        key={topic.id}
                                        onClick={() => setSelectedTopic(topic.id)}
                                        className={`group relative bg-[#837a7a22] backdrop-blur-sm rounded overflow-hidden shadow  cursor-pointer transition-all duration-500 hover:transform hover:-translate-y-1 border-2 ${selectedTopic === topic.id
                                            ? 'border-[#FF014F] bg-[#FF014F]/10'
                                            : 'border-[#FF014F]/20 hover:border-[#FF014F]/40'
                                            }`}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF014F]/5 to-[#FF014F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="relative p-3">
                                            <div className="flex items-center justify-between">
                                                {selectedTopic === topic.id && (
                                                    <div className="w-2 h-2 bg-[#FF014F] rounded-full animate-pulse"></div>
                                                )}
                                            </div>
                                            <h3 className="text-white text-sm font-medium group-hover:text-[#FF014F] transition-colors duration-300 line-clamp-2 text-left">
                                                {topic.name}
                                            </h3>
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF014F]/0 via-[#FF014F]/5 to-[#FF014F]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Exam Configuration Panel - Right Side (1/3 width) */}
                        <div className='w-full md:w-1/3'>
                            <div className="bg-[#837a7a22] backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-[#FF014F]/20 p-6 sticky top-6">
                                {/* Panel Header */}
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-white mb-2">এক্সাম সেটআপ</h3>
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-[#FF014F] to-transparent rounded-full mx-auto"></div>
                                </div>

                                {/* Topic Selection */}
                                <div className="mb-6">
                                    <label className="block text-white text-sm font-medium mb-3">
                                        টপিক সিলেক্ট করো
                                    </label>
                                    <div className="relative">
                                        <select
                                            value={selectedTopic}
                                            onChange={(e) => setSelectedTopic(e.target.value)}
                                            className="w-full bg-[#0a0a0a] border border-[#FF014F]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF014F] transition-colors duration-300 appearance-none"
                                        >
                                            <option value="">একটি টপিক সিলেক্ট করো</option>
                                            {topics.map((topic) => (
                                                <option key={topic.id} value={topic.id}>
                                                    {topic.name}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                            <svg className="w-4 h-4 text-[#FF014F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Question Count */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <label className="block text-white text-sm font-medium">
                                            প্রশ্নের সংখ্যা
                                        </label>
                                        <span className="text-[#FF014F] text-sm font-bold">{questionCount}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="5"
                                        max={maxQuestions}
                                        value={questionCount}
                                        onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                                        <span>৫</span>
                                        <span>{maxQuestions}</span>
                                    </div>
                                </div>

                                {/* Time Limit */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <label className="block text-white text-sm font-medium">
                                            সময় (মিনিট)
                                        </label>
                                        <span className="text-[#FF014F] text-sm font-bold">{timeLimit} মি</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="60"
                                        step="1"
                                        value={timeLimit}
                                        onChange={(e) => setTimeLimit(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                                        <span>১ মি</span>
                                        <span>৬০ মি</span>
                                    </div>
                                </div>

                                {/* Negative Marking */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <label className="block text-white text-sm font-medium">
                                            নেগেটিভ মার্কিং
                                        </label>
                                        <span className="text-[#FF014F] text-sm font-bold">
                                            {formatNegativeMarking(negativeMarking)} মার্ক
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.25"
                                        value={negativeMarking}
                                        onChange={(e) => setNegativeMarking(parseFloat(e.target.value))}
                                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                                        <span>০</span>
                                        <span>০.২৫</span>
                                        <span>০.৫০</span>
                                        <span>০.৭৫</span>
                                        <span>১</span>
                                    </div>
                                    <div className="mt-2 text-xs text-gray-400 text-center">
                                        (প্রতি ভুল উত্তরে কাটা যাবে)
                                    </div>
                                </div>


                                {/* Start Exam Button */}
                                <button
                                    onClick={handleStartExam}
                                    disabled={!selectedTopic}
                                    className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 ${selectedTopic
                                        ? 'bg-gradient-to-r from-[#FF014F] to-[#FF014F]/80 hover:from-[#FF014F]/90 hover:to-[#FF014F] transform hover:-translate-y-1 shadow-lg shadow-[#FF014F]/20'
                                        : 'bg-gray-600 cursor-not-allowed opacity-50'
                                        }`}
                                >
                                    {selectedTopic ? 'এক্সাম শুরু করো' : 'টপিক সিলেক্ট করো'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


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

                /* Custom slider styles */
                .slider::-webkit-slider-thumb {
                    appearance: none;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: #FF014F;
                    cursor: pointer;
                    border: 2px solid #fff;
                    box-shadow: 0 0 10px rgba(255, 1, 79, 0.5);
                }

                .slider::-moz-range-thumb {
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: #FF014F;
                    cursor: pointer;
                    border: 2px solid #fff;
                    box-shadow: 0 0 10px rgba(255, 1, 79, 0.5);
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
        </AppLayout>
    );
}