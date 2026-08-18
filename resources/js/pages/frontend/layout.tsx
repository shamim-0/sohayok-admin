import { Link, usePage } from '@inertiajs/react';
import { useState, ReactNode, useEffect } from 'react';
import logo from '../../images/logo-png.png';
import payment from '../../images/payment.png';
import { Facebook, Youtube } from 'lucide-react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const { footer, flash, auth } = usePage().props;

    const toggleMobileMenu = (): void => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = (): void => {
        setIsMobileMenuOpen(false);
    };


    useEffect(() => {
        if (flash.error) {
            toast.error(flash.error);
        }

        if (flash.success) {
            toast.success(flash.success);
        }
    }, [flash]);


    return (
        <>
            {/* Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* Animated Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,1,79,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,1,79,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

                {/* Pink Glow Effects */}
                <div className="absolute top-0 -left-32 w-96 h-96 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>
                <div className="absolute bottom-0 -right-32 w-96 h-96 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>

                {/* Floating Particles */}
                <div className="absolute top-20 left-1/4 w-2 h-2 bg-[#FF014F] rounded-full animate-float"></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#FF014F] rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 left-1/2 w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#FF014F]/30"></div>
                <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#FF014F]/30"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#FF014F]/30"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#FF014F]/30"></div>
            </div>

            {/* Header */}
            <header className="bg-[#0a0a0a] backdrop-blur-lg shadow-2xl sticky top-0 z-50 ">
                <div className="px-5">
                    {/* Desktop Header */}
                    <div className="hidden md:flex items-center justify-between py-4">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-3 group">
                            <img
                                src={logo}
                                alt="Physics Study BD"
                                className="h-12 transition-transform duration-300 group-hover:scale-110"
                            />
                        </Link>

                        {/* Navigation Links */}
                        <nav className="flex items-center space-x-8">
                            <Link
                                href="/courses"
                                className="text-gray-300 hover:text-[#FF014F] font-medium transition-all duration-300 hover:scale-105 relative group"
                            >
                                কোর্স
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF014F] group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link
                                href="/about-us"
                                className="text-gray-300 hidden hover:text-[#FF014F] font-medium transition-all duration-300 hover:scale-105 relative group"
                            >
                                আমাদের সম্পর্কে
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF014F] group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link
                                href="/notice"
                                className="text-gray-300 hover:text-[#FF014F] font-medium transition-all duration-300 hover:scale-105 relative group"
                            >
                                নোটিশ
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF014F] group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link
                                href="/instructors"
                                className="text-gray-300 hover:text-[#FF014F] font-medium transition-all duration-300 hover:scale-105 relative group"
                            >
                                ইন্সট্রাক্টর
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF014F] group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link
                                href="/contact"
                                className="text-gray-300 hover:text-[#FF014F] font-medium transition-all duration-300 hover:scale-105 relative group"
                            >
                                যোগাযোগ
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF014F] group-hover:w-full transition-all duration-300"></span>
                            </Link>

                            {/* Dashboard Link for Authenticated Users */}

                            <Link
                                href="/smart-test"
                                className="text-gray-300 hover:text-[#FF014F] font-medium transition-all duration-300 hover:scale-105 relative group"
                            >
                                স্মার্ট টেস্ট
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF014F] group-hover:w-full transition-all duration-300"></span>
                            </Link>

                        </nav>

                        {/* Conditional Button - Login or Dashboard */}
                        {auth.user ? (
                            // Dashboard Button for Authenticated Users
                            <Link
                                href="/student/dashboard"
                                className="px-8 py-2 bg-gradient-to-r from-[#ff014d1a] to-[#FF014F]/80  text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 border border-[#FF014F]/30 hover:border-[#FF014F]/60 shadow-lg shadow-[#FF014F]/20 hover:shadow-[#FF014F]/40 text-lg relative overflow-hidden group"
                            >
                                <span className="relative">ড্যাশবোর্ড</span>
                            </Link>
                        ) : (
                            // Login Button for Guests
                            <Link
                                href='/login'
                                className="px-8 py-2 bg-gradient-to-r from-[#ff014d1a] to-[#FF014F]/80  text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 border border-[#FF014F]/30 hover:border-[#FF014F]/60 shadow-lg shadow-[#FF014F]/20 hover:shadow-[#FF014F]/40 text-lg relative overflow-hidden group"
                            >
                                <span className="relative">লগইন</span>
                            </Link>
                        )}
                    </div>

                    {/* Mobile Header */}
                    <div className="flex md:hidden items-center justify-between py-4">
                        {/* Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="p-3 rounded-xl bg-[#0a0a0a] border border-[#FF014F]/20 text-gray-300 hover:text-[#FF014F] hover:border-[#FF014F]/40 transition-all duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <img
                                src={logo}
                                alt="Physics Study BD"
                               
                            />
                        </Link>

                        {/* Conditional Button - Login or Dashboard */}
                        {auth.user ? (
                            // Dashboard Button for Authenticated Users
                            <Link
                                href="/student/dashboard"
                                className="px-6 py-2.5 bg-gradient-to-r from-[#FF014F] to-[#FF014F]/80 text-white font-medium rounded-xl border border-[#FF014F]/30 text-sm hover:scale-105 transition-all duration-300"
                            >
                                ড্যাশবোর্ড
                            </Link>
                        ) : (
                            // Login Button for Guests
                            <Link
                                href='/login'
                                className="px-6 py-2.5 bg-gradient-to-r from-[#FF014F] to-[#FF014F]/80 text-white font-medium rounded-xl border border-[#FF014F]/30 text-sm hover:scale-105 transition-all duration-300"
                            >
                                লগইন
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-lg  border-[#FF014F]/20 rounded-xl mt-4 py-4">
                            <nav className="flex flex-col space-y-2">
                                <Link
                                    href="/courses"
                                    className="text-gray-300 hover:text-[#FF014F] font-medium py-3 px-6 rounded-lg hover:bg-[#FF014F]/10 transition-all duration-200 border-l-2 border-transparent hover:border-[#FF014F]"
                                    onClick={closeMobileMenu}
                                >
                                    কোর্স
                                </Link>
                                <Link
                                    href="/about-us"
                                    className="text-gray-300 hidden hover:text-[#FF014F] font-medium py-3 px-6 rounded-lg hover:bg-[#FF014F]/10 transition-all duration-200 border-l-2 border-transparent hover:border-[#FF014F]"
                                    onClick={closeMobileMenu}
                                >
                                    আমাদের সম্পর্কে
                                </Link>
                                <Link
                                    href="/notice"
                                    className="text-gray-300 hover:text-[#FF014F] font-medium py-3 px-6 rounded-lg hover:bg-[#FF014F]/10 transition-all duration-200 border-l-2 border-transparent hover:border-[#FF014F]"
                                    onClick={closeMobileMenu}
                                >
                                    নোটিশ
                                </Link>
                                <Link
                                    href="/instructors"
                                    className="text-gray-300 hover:text-[#FF014F] font-medium py-3 px-6 rounded-lg hover:bg-[#FF014F]/10 transition-all duration-200 border-l-2 border-transparent hover:border-[#FF014F]"
                                    onClick={closeMobileMenu}
                                >
                                    ইন্সট্রাক্টর
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-gray-300 hover:text-[#FF014F] font-medium py-3 px-6 rounded-lg hover:bg-[#FF014F]/10 transition-all duration-200 border-l-2 border-transparent hover:border-[#FF014F]"
                                    onClick={closeMobileMenu}
                                >
                                    যোগাযোগ
                                </Link>
                                <Link
                                    href="/smart-test"
                                    className="text-gray-300 hover:text-[#FF014F] font-medium py-3 px-6 rounded-lg hover:bg-[#FF014F]/10 transition-all duration-200 border-l-2 border-transparent hover:border-[#FF014F]"
                                    onClick={closeMobileMenu}
                                >
                                    স্মার্ট টেস্ট
                                </Link>

                                {/* Dashboard Link for Authenticated Users in Mobile Menu */}
                                {auth.user && (
                                    <Link
                                        href="/student/dashboard"
                                        className="text-gray-300 hover:text-[#FF014F] font-medium py-3 px-6 rounded-lg hover:bg-[#FF014F]/10 transition-all duration-200 border-l-2 border-transparent hover:border-[#FF014F]"
                                        onClick={closeMobileMenu}
                                    >
                                        ড্যাশবোর্ড
                                    </Link>
                                )}
                            </nav>
                        </div>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <div className="bg-[#0a0a0a] min-h-screen relative z-10">
                {children}
            </div>

            {/* Footer */}
            <footer className="bg-[#0a0a0a] text-white border-t border-[#FF014F]/20 relative">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Brand Section */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center space-x-3 mb-6">
                                <img
                                    src={'/storage/' + footer.logo_path}
                                    alt="Physics Study BD"
                                    className="h-12"
                                />
                            </div>
                            <p className="text-gray-300 mb-3 leading-relaxed">
                                {footer.brand_description}
                            </p>

                            <p className="text-gray-300 mb-3 leading-relaxed">লাইসেন্স নং : TRAD/DNCC/025037/2025</p>

                            {/* Google Play Button */}
                            <a
                                href={footer.play_store_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-3 bg-[#0a0a0a] hover:bg-[#FF014F]/10 border border-[#FF014F]/20 px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 group"
                            >
                                <svg className="w-6 h-6 text-[#FF014F]" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                </svg>
                                <div>
                                    <div className="text-xs text-gray-300">Get Our</div>
                                    <div className="text-sm font-semibold text-white">Mobile App</div>
                                </div>
                            </a>
                        </div>

                        {/* Contact Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6 text-[#FF014F] relative inline-block">
                                যোগাযোগ ও সোশ্যাল মিডিয়া
                                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#FF014F]"></span>
                            </h3>
                            <div className="space-y-3 text-gray-300">
                                <div className="flex items-start space-x-3 group hover:text-[#FF014F] transition-colors duration-200">
                                    <span className="text-[#FF014F]">📍</span>
                                    <span>{footer.address}</span>
                                </div>
                                <a href={'tel:' + footer.phone} className="flex items-center space-x-3 group hover:text-[#FF014F] transition-colors duration-200">
                                    <span className="text-[#FF014F]">📞</span>
                                    <span>{footer.phone}</span>
                                </a>
                                <a href={'mailto:' + footer.email} className="flex items-center space-x-3 group hover:text-[#FF014F] transition-colors duration-200">
                                    <span className="text-[#FF014F]">📧</span>
                                    <span>{footer.email}</span>
                                </a>
                            </div>
                            <div className='flex gap-4 mt-6'>
                                <a target='_blank' className='h-10 w-10 bg-[#ffffff1d] text-blue-500 rounded-full flex justify-center items-center' href={footer.facebook_url}> <Facebook /></a>
                                <a target='_blank' className='h-10 w-10 bg-[#ffffff1e] text-red-500 rounded-full flex justify-center items-center' href={footer.youtube_url}> <Youtube /></a>
                            </div>
                        </div>

                        {/* Support Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6 text-[#FF014F] relative inline-block">
                                সাপোর্ট / সহায়তা
                                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#FF014F]"></span>
                            </h3>
                            <div className="space-y-3 mb-6">
                                <Link href="/privacy-policy" className="block text-gray-300 hover:text-[#FF014F] transition-all duration-200 hover:translate-x-2">
                                    প্রাইভেসি পলিসি
                                </Link>
                                <Link href="/terms-conditions" className="block text-gray-300 hover:text-[#FF014F] transition-all duration-200 hover:translate-x-2">
                                    টার্মস এন্ড কন্ডিশন
                                </Link>
                                <Link href="/refund-policy" className="block text-gray-300 hover:text-[#FF014F] transition-all duration-200 hover:translate-x-2">
                                    রিফান্ড পলিসি
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6 text-[#FF014F] relative inline-block">
                                দ্রুত লিংক
                                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#FF014F]"></span>
                            </h3>
                            <div className="space-y-3">
                                <Link href="/about-us" className=" hidden text-gray-300 hover:text-[#FF014F] transition-all duration-200 hover:translate-x-2">
                                    আমাদের সম্পর্কে
                                </Link>
                                <Link href="/courses" className="block text-gray-300 hover:text-[#FF014F] transition-all duration-200 hover:translate-x-2">
                                    সকল কোর্স
                                </Link>
                                <Link href="/notice" className="block text-gray-300 hover:text-[#FF014F] transition-all duration-200 hover:translate-x-2">
                                    নোটিশ
                                </Link>
                                <Link href="/contact" className="block text-gray-300 hover:text-[#FF014F] transition-all duration-200 hover:translate-x-2">
                                    যোগাযোগ
                                </Link>
                                {/* Dashboard Link in Footer for Authenticated Users */}
                                {auth.user && (
                                    <Link href="/student/dashboard" className="block text-gray-300 hover:text-[#FF014F] transition-all duration-200 hover:translate-x-2">
                                        ড্যাশবোর্ড
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                   

                    {/* Bottom Bar */}
                    <div className="border-t border-[#FF014F]/20  text-center text-gray-400">
                     <img className='my-5 h-24 mx-auto rounded' src={payment} alt="" />
                        <p className="text-sm">{footer.copyright_text} </p>
                    </div>
                </div>
            </footer>

            <ToastContainer />

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </>
    );
}

