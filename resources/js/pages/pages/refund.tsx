import AppLayout from "../frontend/layout";

export default function RefundPolicy() {
    const refundData = {
        introduction: "সহায়ক' SOHAYOK-এর নিম্নলিখিত শর্তে কোর্স ফি ফেরতযোগ্য। অনুগ্রহ করে ফেরতের জন্য আবেদন করার আগে এই নীতিগুলো ভালোভাবে পড়ে নিন। সর্বশেষ হালনাগাদ: ডিসেম্বর ১১/১১/২০২৫",
        
        eligibility: {
            eligible: [
                "কোর্স কেনার ১৪ দিনের মধ্যে ফেরতের জন্য আবেদন করতে হবে",
                "কোর্সের ২০% এর কম কন্টেন্ট এক্সেস করা হলে", 
                "টেকনিক্যাল সমস্যার কারণে কোর্স এক্সেস করতে না পারলে (আমাদের টিম যাচাই করবে)"
            ],
            notEligible: [
                "কোর্সের ২০% এর বেশি সম্পন্ন করা",
                "ডাউনলোডযোগ্য ম্যাটেরিয়াল ডাউনলোড করা", 
                "১৪ দিনের বেশি সময় পার হয়ে গেলে"
            ]
        },
        
        process: {
            howToApply: [
                "sohayokstorage@gmail.com এ ইমেইল করো",
                "ইমেইলের সাবজেক্ট লিখো: 'ফেরত আবেদন - [কোর্সের নাম]'",
                "তোমার পূর্ণ নাম ও যোগাযোগ তথ্য",
                "কোর্স নাম ও ক্রয়ের তারিখ", 
                "ফেরতের কারণ",
                "লেনদেনের রেফারেন্স নম্বর"
            ],
            processingTime: [
                "আবেদন পাবার ৫ কর্মদিবসের মধ্যে রিভিউ করা হবে",
                "অনুমোদিত হলে ৭-১৪ কর্মদিবসে ফেরত প্রক্রিয়া সম্পন্ন হবে"
            ]
        },
        
        specialCases: {
            multiplePayment: "একই কোর্সে একাধিকবার পেমেন্ট করা হলে, অতিরিক্ত টাকা ১০ কর্মদিবসে ফেরত দেওয়া হবে (কোনো ফি কাটা হবে না)।",
            courseCancellation: "আমাদের পক্ষ থেকে কোর্স বাতিল করলে বা বড় ধরনের পরিবর্তন করলে, শিক্ষার্থীদের পূর্ণ ফেরত বা ক্রেডিট দেওয়া হবে (পছন্দ অনুযায়ী)।"
        },
        
    
    };

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
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    
                    {/* Hero Section */}
                    <div className="text-center mb-16 relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                        
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            <span className="relative text-white">
                                ফেরত
                            </span>
                            <span className="ms-3 bg-gradient-to-r from-[#FF014F] via-[#FF014F] to-[#FF014F] bg-clip-text text-transparent mt-4">
                                নীতি
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                            {refundData.introduction}
                        </p>

                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                    </div>

                    {/* Eligibility Section */}
                    <div className="mb-16">
                        <div className="text-center mb-8 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                            <h2 className="text-3xl font-bold text-white mb-4">১. ফেরত পাওয়ার যোগ্যতা</h2>
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                        </div>

                        {/* Eligible Cases */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-green-400 mb-4">ফেরতযোগ্য ক্ষেত্র:</h3>
                            <div className="bg-[#7c777714] backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                                <div className="space-y-3">
                                    {refundData.eligibility.eligible.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 text-gray-300">
                                            <span className="text-green-400 mt-1">✓</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Not Eligible Cases */}
                        <div>
                            <h3 className="text-xl font-bold text-red-400 mb-4">ফেরত অযোগ্য ক্ষেত্র:</h3>
                            <div className="bg-[#7c777714] backdrop-blur-sm rounded-2xl p-6 border border-red-500/20">
                                <div className="space-y-3">
                                    {refundData.eligibility.notEligible.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 text-gray-300">
                                            <span className="text-red-400 mt-1">✗</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Refund Process Section */}
                    <div className="mb-16">
                        <div className="text-center mb-8 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                            <h2 className="text-3xl font-bold text-white mb-4">২. ফেরত প্রক্রিয়া</h2>
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                        </div>

                        {/* How to Apply */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-blue-400 mb-4">২.১ কিভাবে আবেদন করবেন:</h3>
                            <div className="bg-[#7c777714] backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
                                <div className="space-y-3">
                                    {refundData.process.howToApply.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 text-gray-300">
                                            <span className="text-blue-400 mt-1">{index + 1}.</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Processing Time */}
                        <div>
                            <h3 className="text-xl font-bold text-yellow-400 mb-4">২.২ প্রক্রিয়াকরণ সময়:</h3>
                            <div className="bg-[#7c777714] backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
                                <div className="space-y-3">
                                    {refundData.process.processingTime.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 text-gray-300">
                                            <span className="text-yellow-400 mt-1">⏱️</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Special Cases Section */}
                    <div className="mb-16">
                        <div className="text-center mb-8 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                            <h2 className="text-3xl font-bold text-white mb-4">৪. বিশেষ ক্ষেত্রে ফেরত</h2>
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Multiple Payment */}
                            <div className="bg-[#7c777714] backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                                <h3 className="text-lg font-bold text-purple-400 mb-3">৪.১ একাধিক পেমেন্ট:</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {refundData.specialCases.multiplePayment}
                                </p>
                            </div>

                            {/* Course Cancellation */}
                            <div className="bg-[#7c777714] backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20">
                                <h3 className="text-lg font-bold text-orange-400 mb-3">৪.২ কোর্স বাতিল/পরিবর্তন:</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {refundData.specialCases.courseCancellation}
                                </p>
                            </div>
                        </div>
                    </div>



                    {/* Update Notice */}

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