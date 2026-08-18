import React, { useState } from 'react';
import { useForm, Head } from '@inertiajs/react';
import AppLayout from "../frontend/layout";

export default function AccountDeleteRequest() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    // Inertia useForm হুক
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '01800000000', // রিকোয়ারমেন্ট অনুযায়ী এটি ফাঁকা স্ট্রিলিংই থাকবে
        mesage: '' // স্পেলিং আপনার কন্টাক্ট ফর্মের মতোই 'mesage' রাখা হয়েছে
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // প্লেস্টোর পলিসির জন্য মেসেজের শুরুতে একটি ট্যাগ যুক্ত করে দেওয়া ভালো 
        // যাতে ব্যাকএন্ডে বা ইমেইলে আপনি আলাদা করতে পারেন এটি অ্যাকাউন্ট ডিলিট রিকোয়েস্ট
        const finalMessage = `[ACCOUNT DELETION REQUEST]\nReason: ${data.mesage}`;

        post('/contact', {
            // ডাটা পাঠানোর আগে মেসেজটি মডিফাই করে দেওয়া হলো
            data: {
                ...data,
                mesage: finalMessage
            },
            onSuccess: () => {
                reset();
                setIsSubmitted(true);
            },
        });
    };

    return (
        <AppLayout>
            <Head>
                <title>Account Deletion Request - Sohayok Edu</title>
                <meta name="description" content="Request to delete your Sohayok Edu account and associated data permanently." />
            </Head>

            <section className="relative overflow-hidden bg-[#0a0a0a] py-20 min-h-screen">

                {/* Modern Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,1,79,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,1,79,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
                    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>
                    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>
                    <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#FF014F] rounded-full animate-float"></div>
                    <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#FF014F] rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Main Content Container */}
                <div className="relative z-10 max-w-6xl mx-auto px-4">

                    {/* Header Section */}
                    <div className="text-center mb-16 relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            <span className="relative text-white">
                                Sohayok Edu
                            </span>
                            <span className="ms-3 bg-gradient-to-r from-[#FF014F] via-[#FF014F] to-[#FF014F] bg-clip-text text-transparent mt-4">
                                Account Deletion
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                            Request to remove your personal information and profile from our system.
                        </p>

                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Request Form */}
                        <div className="group relative bg-[#89797913] backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-[#FF014F]/20 hover:border-[#FF014F]/40 transition-all duration-500 p-8">
                            <div className="absolute top-4 left-4">
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse"></div>
                                    <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                </div>
                            </div>

                            {/* গুগল প্লে রিভিউয়ারদের জন্য ডেটা ডিলিশন নোটিশ */}
                            <div className="mb-6 p-4 bg-red-950/30 rounded-xl border border-[#FF014F]/30">
                                <p className="text-xs text-gray-300 leading-relaxed">
                                    <strong className="text-[#FF014F]">Important Notice:</strong> Upon submitting this request, your account, premium course progress, and related academic logs will be permanently deleted from our databases within 7 business days. This action is irreversible.
                                </p>
                            </div>

                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Input */}
                                    <div>
                                        <label className="block text-white font-semibold mb-3">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#FF014F]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#FF014F] focus:outline-none transition-all duration-300"
                                            placeholder="Your full name"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                    </div>

                                    {/* Email Input */}
                                    <div>
                                        <label className="block text-white font-semibold mb-3">Registered Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#FF014F]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#FF014F] focus:outline-none transition-all duration-300"
                                            placeholder="your-registered@email.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>

                                    {/* Reason (Message) Input */}
                                    <div>
                                        <label className="block text-white font-semibold mb-3">Reason for Deletion *</label>
                                        <textarea
                                            name="mesage"
                                            value={data.mesage}
                                            onChange={handleChange}
                                            required
                                            rows="4"
                                            className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#FF014F]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#FF014F] focus:outline-none transition-all duration-300 resize-none"
                                            placeholder="Please explain why you want to delete your account..."
                                        ></textarea>
                                        {errors.mesage && <p className="text-red-500 text-sm mt-1">{errors.mesage}</p>}
                                    </div>

                                    {/* Submit Button */}
                                    <button 
                                        type="submit"
                                        disabled={processing}
                                        className="group/btn relative w-full bg-gradient-to-r from-[#ff014d15] to-[#ff014d47] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FF014F]/25 border border-[#FF014F]/30 hover:border-[#FF014F]/60 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#53051d63] to-[#4f031a3c] blur-sm group-hover/btn:blur-md transition-all duration-300 opacity-50 group-hover/btn:opacity-75"></div>
                                        <span className="relative">
                                            {processing ? 'Processing...' : 'Submit Deletion Request'}
                                        </span>
                                        {!processing && (
                                            <svg className="w-4 h-4 relative group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        )}
                                    </button>
                                </form>
                            ) : (
                                /* সাকসেসফুলি সেন্ড হওয়ার পর মেসেজ */
                                <div className="text-center py-12">
                                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
                                        <svg className="h-8 w-8 text-green-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Request Received</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Your data deletion request for <span className="text-[#FF014F] font-semibold">{data.email}</span> has been securely transmitted. We will process your account deletion within 7 business days.
                                    </p>
                                </div>
                            )}

                            <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF014F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                        </div>

                        {/* Illustration Section */}
                        <div className="flex justify-center items-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF014F]/20 to-transparent rounded-2xl blur-2xl transform scale-110"></div>
                                <img
                                    src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-svg-download-png-2912018.png"
                                    alt="Account Deletion Illustration"
                                    className="relative z-10 w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-500"
                                />
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
            `}</style>
        </AppLayout>
    );
}