import AppLayout from "../frontend/layout";

export default function TermsAndConditions() {
    const termsData = {
        introduction: "'সহায়ক' SOHAYOK এর ওয়েবসাইট, মোবাইল অ্যাপ বা অন্য কোনো সেবা ব্যবহার করার মাধ্যমে আপনি নিচের শর্তগুলোতে সম্মতি প্রদান করছেন। অনুগ্রহ করে ব্যবহারের আগে এই নীতিগুলো ভালোভাবে পড়ে নিন।",
        
        termsList: [
            "আমাদের ক্লাস, সাজেশন ও শিক্ষাসামগ্রী শুধুমাত্র ব্যক্তিগত শেখার উদ্দেশ্যে ব্যবহার করা যাবে",
            "কোনো কনটেন্ট অনুমতি ছাড়া কপি, রেকর্ড, বা পুনঃপ্রচার করা যাবে না",
            "লগইন তথ্য (User ID ও Password) অন্যের সঙ্গে শেয়ার করা নিষিদ্ধ",
            "সমস্ত কোর্স, বই ও সেবার মূল্য 'সহায়ক' SOHAYOK কর্তৃক নির্ধারিত এবং একবার সাবস্ক্রিপশন বা বুকিং সম্পন্ন হলে তা ফেরতযোগ্য নয়",
            "পেমেন্ট সিকিউরভাবে অনুমোদিত গেটওয়ের মাধ্যমে সম্পন্ন হয় (যেমন SSLCommerz, bKash, Nagad ইত্যাদি)",
            "কনটেন্ট মালিকানা 'সহায়ক' SOHAYOK-এর সমস্ত ক্লাস, ভিডিও, বই, ডিজাইন ও লোগো আমাদের কপিরাইট সুরক্ষিত সম্পদ",
            "অনুমতি ছাড়া এগুলোর যেকোনো অনুলিপি বা পুনর্বিতরণ আইনি অপরাধ হিসেবে গণ্য হবে",
            "আমরা সঠিক ও নির্ভুল তথ্য প্রদানের সর্বোচ্চ চেষ্টা করি, তবে কোনো ভুল বা প্রযুক্তিগত সমস্যার কারণে সৃষ্ট ক্ষতির দায় 'সহায়ক' SOHAYOK বহন করবে না",
            "'সহায়ক' SOHAYOK প্রয়োজন অনুসারে যেকোনো সময় এই শর্তাবলি পরিবর্তন বা হালনাগাদ করতে পারে",
            "নতুন নীতিমালা প্রকাশের পর তাৎক্ষণিকভাবে তা কার্যকর হবে"
        ],
        
        contact: {
            email: "sohayokstorage@gmail.com",
            note: "যেকোনো প্রশ্ন বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন"
        },
        
        updateNotice: "সর্বশেষ হালনাগাদ: ডিসেম্বর ১১/১১/২০২৫"
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
                                সেবা ও
                            </span>
                            <span className="ms-3 bg-gradient-to-r from-[#FF014F] via-[#FF014F] to-[#FF014F] bg-clip-text text-transparent mt-4">
                                শর্তাবলী
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                            {termsData.introduction}
                        </p>

                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                    </div>

                    {/* Terms List Section */}
                    <div className="mb-16">
                        <div className="text-center mb-8 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                            <h2 className="text-3xl font-bold text-white mb-4">আমাদের শর্তাবলী</h2>
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                        </div>

                        <div className="bg-[#7c777714] backdrop-blur-sm rounded-2xl p-8 border border-[#FF014F]/20">
                            <div className="space-y-4">
                                {termsData.termsList.map((term, index) => (
                                    <div key={index} className="flex items-start gap-4 text-gray-300">
                                        <span className="text-[#FF014F] font-bold text-lg min-w-6">{index + 1}.</span>
                                        <span className="text-lg leading-relaxed">{term}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="mb-16">
                        <div className="text-center mb-8 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                            <h2 className="text-3xl font-bold text-white mb-4">যোগাযোগ</h2>
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                        </div>
                        
                        <div className="bg-[#7c777714] backdrop-blur-sm rounded-2xl p-8 border border-[#FF014F]/20 text-center">
                            <div className="text-3xl mb-4">📧</div>
                            <h3 className="text-2xl font-bold text-white mb-4">সাপোর্ট ইমেইল</h3>
                            <p className="text-gray-300 text-lg mb-4">
                                {termsData.contact.email}
                            </p>
                            <p className="text-gray-400">
                                {termsData.contact.note}
                            </p>
                        </div>
                    </div>

                    {/* Update Notice */}
                    <div className="text-center bg-[#7c777714] backdrop-blur-sm rounded-2xl p-8 border border-[#FF014F]/20">
                        <h3 className="text-2xl font-bold text-white mb-4">নীতি হালনাগাদ</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            'সহায়ক' SOHAYOK প্রয়োজন অনুসারে যেকোনো সময় এই শর্তাবলি পরিবর্তন বা হালনাগাদ করতে পারে। নতুন নীতিমালা প্রকাশের পর তাৎক্ষণিকভাবে তা কার্যকর হবে।
                        </p>
                        <div className="text-[#FF014F] font-semibold">
                            {termsData.updateNotice}
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