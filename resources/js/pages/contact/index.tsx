import React from 'react';
import { useForm, Head } from '@inertiajs/react';
import AppLayout from "../frontend/layout";

export default function Contact() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        mesage: ''
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/contact', {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <AppLayout>
            <Head>
                <title>যোগাযোগ করুন - আপনার ব্র্যান্ড</title>
                <meta name="description" content="আমাদের সাথে যোগাযোগ করুন। যেকোনো প্রশ্ন বা পরামর্শের জন্য আমরা এখানে আছি ২৪/৭ সাপোর্ট" />
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
                                যোগাযোগ
                            </span>
                            <span className="ms-3 bg-gradient-to-r from-[#FF014F] via-[#FF014F] to-[#FF014F] bg-clip-text text-transparent mt-4">
                                করুন
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                            আপনার যেকোনো প্রশ্ন বা পরামর্শের জন্য আমরা এখানে আছি
                            <span className="text-[#FF014F] font-medium"> ২৪/৭ সাপোর্ট</span>
                        </p>

                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Contact Form */}
                        <div className="group relative bg-[#89797913] backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-[#FF014F]/20 hover:border-[#FF014F]/40 transition-all duration-500 p-8">
                            <div className="absolute top-4 left-4">
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse"></div>
                                    <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-2 text-center">বার্তা পাঠান</h2>
                            <p className="text-gray-400 text-center mb-8">আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-white font-semibold mb-3">আপনার নাম *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#FF014F]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#FF014F] focus:outline-none transition-all duration-300"
                                        placeholder="আপনার পুরো নাম"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                    <div>
                                        <label className="block text-white font-semibold mb-3">ইমেইল এড্রেস *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#FF014F]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#FF014F] focus:outline-none transition-all duration-300"
                                            placeholder="your@email.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-white font-semibold mb-3">ফোন নম্বর *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={data.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#FF014F]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#FF014F] focus:outline-none transition-all duration-300"
                                            placeholder="০১XXX-XXXXXX"
                                        />
                                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-white font-semibold mb-3">আপনার বার্তা *</label>
                                    <textarea
                                        name="mesage"
                                        value={data.mesage}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#FF014F]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#FF014F] focus:outline-none transition-all duration-300 resize-none"
                                        placeholder="আপনার বার্তা এখানে লিখুন..."
                                    ></textarea>
                                    {errors.mesage && <p className="text-red-500 text-sm mt-1">{errors.mesage}</p>}
                                </div>

                                <button 
                                    type="submit"
                                    disabled={processing}
                                    className="group/btn relative w-full bg-gradient-to-r from-[#ff014d15] to-[#ff014d47] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FF014F]/25 border border-[#FF014F]/30 hover:border-[#FF014F]/60 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#53051d63] to-[#4f031a3c] blur-sm group-hover/btn:blur-md transition-all duration-300 opacity-50 group-hover/btn:opacity-75"></div>
                                    <span className="relative">
                                        {processing ? 'পাঠানো হচ্ছে...' : 'বার্তা পাঠান'}
                                    </span>
                                    {!processing && (
                                        <svg className="w-4 h-4 relative group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    )}
                                </button>
                            </form>

                            <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF014F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                        </div>

                        {/* Illustration */}
                        <div className="flex justify-center items-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF014F]/20 to-transparent rounded-2xl blur-2xl transform scale-110"></div>
                                <img
                                    src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-svg-download-png-2912018.png"
                                    alt="Contact Illustration"
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