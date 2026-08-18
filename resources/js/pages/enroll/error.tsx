import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { XCircle, ArrowLeft, Home, RotateCcw } from 'lucide-react';
import AppLayout from '../frontend/layout';

export default function EnrollmentCancel({ course }) {
    return (
        <AppLayout>
            <Head title="পেমেন্ট বাতিল হয়েছে" />
            
            <section className="relative overflow-hidden bg-[#0a0a0a] min-h-screen py-8">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,1,79,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,1,79,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
                    <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>
                    <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-yellow-500/10 rounded-full blur-[128px]"></div>
                </div>

                <div className="relative z-10 max-w-md mx-auto px-4">
                    {/* Cancel Header */}
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <div className="relative">
                                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center">
                                    <XCircle className="w-8 h-8 text-yellow-500" />
                                </div>
                            </div>
                        </div>
                        
                        <h1 className="text-2xl font-bold text-white mb-2">
                            পেমেন্ট বাতিল হয়েছে
                        </h1>
                        
                        <p className="text-gray-300 mb-1">
                            তোমার পেমেন্ট প্রসেস বাতিল করেছেন
                        </p>
                        <p className="text-gray-400 text-sm">
                            তুমি যেকোনো সময় আবার চেষ্টা করতে পারবে
                        </p>
                    </div>

                    {/* Course Info Card */}
                    {course && (
                        <div className="bg-gray-900/80 backdrop-blur-lg rounded-xl border border-gray-800 p-6 mb-6">
                            <h3 className="text-lg font-bold text-white mb-4">কোর্স বিবরণ</h3>
                            
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-400 text-sm">কোর্স নাম</span>
                                    <span className="text-white text-sm text-right">{course.title}</span>
                                </div>
                                
                                
                                
                               
                            </div>
                        </div>
                    )}

                    {/* Message Card */}
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
                        <div className="flex items-start gap-3">
                            <div className="bg-yellow-500/20 p-2 rounded-lg mt-1">
                                <XCircle className="w-5 h-5 text-yellow-400" />
                            </div>
                            <div>
                                <h4 className="text-yellow-400 font-semibold mb-1">পেমেন্ট বাতিল</h4>
                                <p className="text-yellow-300 text-sm">
                                    তোমার পেমেন্ট প্রসেস বাতিল হয়েছে। তুমি পরে আবার চেষ্টা করতে পারবে। 
                                    কোনো টাকা পেমেন্ট করা হয়নি।
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        {course && (
                            <Link
                                href={`/enroll/${course.slug}`}
                                className="w-full flex items-center justify-center bg-[#FF014F] hover:bg-[#e60045] text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                            >
                                <RotateCcw className="w-4 h-4 mr-2" />
                                আবার এনরোল করো
                            </Link>
                        )}
                        
                        <Link
                            href="/"
                            className="w-full flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                        >
                            <Home className="w-4 h-4 mr-2" />
                            হোম পেজে যাও
                        </Link>

                        <Link
                            href="/courses"
                            className="w-full flex items-center justify-center border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            সকল কোর্স দেখো
                        </Link>
                    </div>

                    {/* Help Text */}
                    <p className="text-center text-gray-400 text-xs mt-6">
                        কোনো সমস্যা হলে?{' '}
                        <Link href="/contact" className="text-[#FF014F] hover:underline">
                            সাপোর্ট টিমে যোগাযোগ করো
                        </Link>
                    </p>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent opacity-40"></div>
            </section>
        </AppLayout>
    );
}