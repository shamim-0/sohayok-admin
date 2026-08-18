import { Button } from '@/components/ui/button';
import { Head, Link } from '@inertiajs/react';
import logo from '../../images/logo-png.png';
import { useState } from 'react';

interface LoginProps {
    status?: string;
    canRegister: boolean;
}

export default function Login({ status, canRegister }: LoginProps) {
    const [isLoading, setIsLoading] = useState(false);
    
    const handleGoogleLogin = () => {
        setIsLoading(true);
        window.location.href = '/auth/google';
    };

    return (
        <div className="min-h-screen w-full relative flex items-center justify-center p-4 bg-[#0a0a0a]">
            
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

            <div className="relative z-10 w-full max-w-md">
                <Head title="লগইন" />

                {/* Modern Glassmorphism Card */}
                <div className="bg-[#d8d2d21e] backdrop-blur-xl rounded shadow-2xl  border-[#FF014F]/20 p-8">
                    
                    {/* Logo Section */}
                    <div className="mb-8 flex flex-col items-center">
                        <Link href="/">
                            <div className="mb-6 p-4 rounded-2xl">
                                <img
                                    src={logo}
                                    className=" h-16"
                                    alt="Logo"
                                />
                            </div>
                        </Link>
                        <h1 className="text-3xl font-bold text-white mb-3">
                            লগইন
                        </h1>
                        <p className="text-gray-400 text-center text-sm leading-relaxed">
                            আপনার একাডেমিক অ্যাকাউন্টে অ্যাক্সেস করুন এবং শিক্ষার যাত্রা শুরু করুন
                        </p>
                    </div>

                    {/* Login Button */}
                    <div className="space-y-6">
                        <button
                            onClick={handleGoogleLogin}
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-3 py-4 px-6 text-white font-semibold rounded-xl transition-all duration-300 transform   border-[#b92753] bg-[#fafafa36]"
                        >
                            {isLoading ? (
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 border-2 border-[#FF014F]/30 border-t-[#FF014F] rounded-full animate-spin"></div>
                                    লগইন হচ্ছে...
                                </div>
                            ) : (
                                <>
                                    <img
                                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                                        alt="গুগল"
                                        className="w-5 h-5"
                                    />
                                    গুগলের মাধ্যমে লগইন করুন
                                </>
                            )}
                        </button>

                        {/* Status Message */}
                        {status && (
                            <div className="p-4 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl">
                                <div className="text-sm font-medium text-green-100 text-center">
                                    {status}
                                </div>
                            </div>
                        )}

                        {/* Additional Info */}
                        <div className="text-center">
                            <p className="text-gray-500 text-xs">
                                লগইন করলে আপনি আমাদের{' '}
                                <Link href="/terms" className="text-[#FF014F] hover:underline">
                                    শর্তাবলী
                                </Link>{' '}
                                এবং{' '}
                                <Link href="/privacy" className="text-[#FF014F] hover:underline">
                                    গোপনীয়তা নীতি
                                </Link>{' '}
                                মেনে নিচ্ছেন
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} একাডেমি। সকল অধিকার সংরক্ষিত।
                    </p>
                    <div className="mt-2 flex justify-center space-x-4">
                        <Link href="/help" className="text-gray-500 hover:text-[#FF014F] text-xs transition-colors">
                            সাহায্য
                        </Link>
                        <Link href="/contact" className="text-gray-500 hover:text-[#FF014F] text-xs transition-colors">
                            যোগাযোগ
                        </Link>
                        <Link href="/privacy" className="text-gray-500 hover:text-[#FF014F] text-xs transition-colors">
                            গোপনীয়তা
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                /* Smooth transitions */
                * {
                    transition-property: color, background-color, border-color, transform, box-shadow;
                    transition-duration: 300ms;
                }
            `}</style>
        </div>
    );
}