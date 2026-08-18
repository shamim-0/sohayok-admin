import React, { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { CheckCircle, Download, Share2, Calendar, Home, BookOpen } from 'lucide-react';
import AppLayout from '../frontend/layout';

export default function EnrollmentSuccess({ order }) {
    const [countdown, setCountdown] = useState(10);
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    const copyOrderId = async () => {
        try {
            await navigator.clipboard.writeText(order.order_id);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const shareOrder = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `কোর্স এনরোলমেন্ট - ${order.course.title}`,
                    text: `আমি ${order.course.title} কোর্সে এনরোল করেছি! অর্ডার আইডি: ${order.order_id}`,
                    url: window.location.href,
                });
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else {
            copyOrderId();
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'completed': return 'সফল';
            case 'failed': return 'ব্যর্থ';
            default: return 'পেন্ডিং';
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed': return 'text-green-500';
            case 'failed': return 'text-red-500';
            default: return 'text-yellow-500';
        }
    };

    return (
        <AppLayout>
            <Head title="এনরোলমেন্ট সফল হয়েছে" />
            
            <section className="relative overflow-hidden bg-[#0a0a0a] min-h-screen py-8">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,1,79,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,1,79,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
                    <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>
                    <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-green-500/10 rounded-full blur-[128px]"></div>
                </div>

                <div className="relative z-10 max-w-md mx-auto px-4">
                    {/* Success Header */}
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <div className="relative">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-8 h-8 text-green-500" />
                                </div>
                                <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
                            </div>
                        </div>
                        
                        <h1 className="text-2xl font-bold text-white mb-2">
                            এনরোলমেন্ট সফল হয়েছে!
                        </h1>
                        
                        <p className="text-gray-300 mb-1">
                            আপনি <span className="text-[#FF014F] font-semibold">{order.course.title}</span> কোর্সে এনরোল করেছেন
                        </p>
                        <p className="text-gray-400 text-sm">
                            আপনার পেমেন্ট ভেরিফিকেশন চলছে
                        </p>
                    </div>

                    {/* Order Summary Card */}
                    <div className="bg-gray-900/80 backdrop-blur-lg rounded-xl border border-gray-800 p-6 mb-6">
                       

                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-400 text-sm">অর্ডার আইডি</span>
                                <span className="text-white font-mono text-sm">{order.order_id}</span>
                            </div>
                            
                            <div className="flex justify-between">
                                <span className="text-gray-400 text-sm">কোর্স</span>
                                <span className="text-white text-sm text-right">{order.course.title}</span>
                            </div>
                            
                            <div className="flex justify-between">
                                <span className="text-gray-400 text-sm">তারিখ</span>
                                <span className="text-white text-sm flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {new Date(order.created_at).toLocaleDateString('bn-BD')}
                                </span>
                            </div>
                            
                            <div className="flex justify-between">
                                <span className="text-gray-400 text-sm">স্ট্যাটাস</span>
                                <span className={`text-sm font-semibold ${getStatusColor(order.status)}`}>
                                    {getStatusText(order.status)}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Payment Details Card */}
                    <div className="bg-gray-900/80 backdrop-blur-lg rounded-xl border border-gray-800 p-6 mb-6">
                        <h3 className="text-lg font-bold text-white mb-4">পেমেন্ট বিবরণ</h3>
                        
                        <div className="space-y-2">
                            <div className="flex justify-between py-1">
                                <span className="text-gray-300 text-sm">কোর্স মূল্য</span>
                                <span className="text-white text-sm">৳{order.amount}</span>
                            </div>
                            <div className="flex justify-between py-1">
                                <span className="text-gray-300 text-sm">আফার মূল্য</span>
                                <span className="text-white text-sm">৳{parseInt( order.final_amount) + parseInt(order.discount) }</span>
                            </div>
                            
                            {order.discount > 0 && (
                                <div className="flex justify-between py-1">
                                    <span className="text-gray-300 text-sm">প্রোমো ডিস্কাউন্ট</span>
                                    <span className="text-green-500 text-sm">-৳{order.discount}</span>
                                </div>
                            )}
                            
                            <div className="flex justify-between py-2 border-t border-gray-700 mt-2">
                                <span className="text-white font-semibold">মোট পেমেন্ট</span>
                                <span className="text-[#FF014F] font-bold">৳{order.final_amount}</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <Link
                            href="/student/dashboard"
                            className="w-full flex items-center justify-center bg-[#FF014F] hover:bg-[#e60045] text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                        >
                            <Home className="w-4 h-4 mr-2" />
                            ড্যাশবোর্ডে যান
                        </Link>
                        
                        <Link
                            href="/courses"
                            className="w-full flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                        >
                            <BookOpen className="w-4 h-4 mr-2" />
                            আরও কোর্স দেখুন
                        </Link>
                    </div>

                    {/* Help Text */}
                    <p className="text-center text-gray-400 text-xs mt-6">
                        কোনো সমস্যা হলে?{' '}
                        <Link href="/contact" className="text-[#FF014F] hover:underline">
                            সাপোর্ট টিমে যোগাযোগ করুন
                        </Link>
                    </p>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent opacity-40"></div>
            </section>
        </AppLayout>
    );
}