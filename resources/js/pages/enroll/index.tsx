import React, { useState } from 'react';
import { Head, useForm, router } from '@inertiajs/react';
import AppLayout from "../frontend/layout";
import { Check, X, Tag, Smartphone, Wallet, CreditCard } from 'lucide-react';

export default function CourseDetails({ course }) {
    const [selectedMethod, setSelectedMethod] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [couponCode, setCouponCode] = useState('');
    const [couponLoading, setCouponLoading] = useState(false);
    const [couponApplied, setCouponApplied] = useState(false);
    const [couponMessage, setCouponMessage] = useState('');

    const { data, setData, post, processing, errors } = useForm({
        course_id: course.id,
        payment_method: '',
        account_number: '',
        phone_number: '',
        transaction_id: '',
        amount: course.price,
        final_amount: course.offer_price,
        used_coupon: '',
        discount: course.discount,
        promo_code_id: null,
        college_name: '',
        district_name: '',
        hsc_batch: '',
    });

    const handlePaymentMethodSelect = (method) => {
        setSelectedMethod(method);
        setData('payment_method', method);

        // Clear fields when switching to SSLCommerz
        if (method === 'sslcommerz') {
            setData('phone_number', '');
            setData('transaction_id', '');
        }
    };

    const applyCoupon = async () => {
        if (!couponCode.trim()) return;

        setCouponLoading(true);
        setCouponMessage('');

        await router.post('/enroll/validate-coupon', {
            code: couponCode,
            course_id: course.id
        }, {
            onSuccess: (page) => {
            }
        });
    };


    const submitEnrollmentFree = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsSubmitting(true);

        post('/enroll/free', {
            onSuccess: (response) => {
            },
            onError: () => {
                setIsSubmitting(false);
            }
        });
    };

    const submitEnrollment = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsSubmitting(true);

        // For SSLCommerz, we'll handle it differently - redirect to payment gateway
        if (selectedMethod === 'sslcommerz') {
            post('/enroll/sslcommerz-init', {
                onSuccess: (response) => {
                    // This should redirect to SSLCommerz payment page
                },
                onError: () => {
                    setIsSubmitting(false);
                }
            });
        } else {
            // For mobile payment methods
            post('/enroll/process', {
                onSuccess: (response) => {
                },
                onError: () => {
                    setIsSubmitting(false);
                }
            });
        }
    };

    const paymentMethods = [
        {
            id: 'bkash',
            name: 'bKash',
            number: '01818473320', // merchant number
            icon: <Smartphone className="w-5 h-5" />,
            instructions: [
                'আপনার bKash অ্যাপটি খুলুন',
                '"Payment" নির্বাচন করুন',
                'Merchant Number দিন: 01818473320',
                'টাকার পরিমাণ লিখুন',
                'Reference এ আপনার নাম বা আইডি লিখুন (যদি প্রযোজ্য হয়)',
                'আপনার bKash PIN দিন',
                'ট্রানজেকশন আইডি (TrxID) কপি করুন'
            ]
        }
        ,
        {
            id: 'nagad',
            name: 'Nagad',
            number: '01329435038',
            icon: <Wallet className="w-5 h-5" />,
            instructions: [
                'আপনার Nagad মোবাইল মেনুতে যান',
                '"Send Money" নির্বাচন করুন',
                'Nagad অ্যাকাউন্ট নম্বর দিন',
                'টাকার পরিমাণ লিখুন',
                'আপনার Nagad PIN নম্বর দিন',
                'ট্রানজেকশন আইডি (TrxID) কপি করুন'
            ]
        },
        {
            id: 'sslcommerz',
            name: 'SSLCommerz',
            number: '',
            icon: <CreditCard className="w-5 h-5" />,
            instructions: [
                'কার্ড/ব্যাংক/মোবাইল ব্যাংক দিয়ে পেমেন্ট করুন',
                'সিকিউর SSLCommerz পেমেন্ট গেটওয়ে',
                'ভিসা, মাস্টারকার্ড, অ্যামেরিকান এক্সপ্রেস',
                'বাংলাদেশের সকল ব্যাংক কার্ড সাপোর্টেড',
                'মোবাইল ব্যাংক (bKash, Nagad, Rocket)',
                'ইনস্ট্যান্ট পেমেন্ট কনফার্মেশন'
            ]
        }
    ];

    const renderPaymentForm = () => {
        if (selectedMethod === 'sslcommerz') {
            return (
                <div className="space-y-6">
                    <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            {paymentMethods.find(m => m.id === selectedMethod)?.icon}
                            {paymentMethods.find(m => m.id === selectedMethod)?.name} নির্দেশাবলী
                        </h4>
                        <ul className="text-gray-300 text-sm space-y-2">
                            {paymentMethods.find(m => m.id === selectedMethod)?.instructions.map((instruction, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-[#FF014F] mr-2 mt-1">•</span>
                                    {instruction}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#FF014F]/10 border border-[#FF014F]/30 rounded-xl p-4">
                        <div className="flex justify-between items-center">
                            <span className="text-white font-semibold">পরিশোধ করতে হবে:</span>
                            <span className="text-2xl font-bold text-[#FF014F]">
                                ৳{course.offer_price}
                            </span>
                        </div>
                        <p className="text-gray-300 text-sm mt-1 text-center">
                            SSLCommerz এর মাধ্যমে সিকিউর পেমেন্ট করুন
                        </p>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-500/20 p-2 rounded-lg">
                                <CreditCard className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h5 className="text-white font-semibold">সিকিউর পেমেন্ট</h5>
                                <p className="text-blue-300 text-sm">SSLCommerz বাংলাদেশের সবচেয়ে বিশ্বস্ত পেমেন্ট গেটওয়ে</p>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#FF014F] hover:bg-[#e60045] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                প্রসেস হচ্ছে...
                            </>
                        ) : (
                            <>
                                SSLCommerz এ পেমেন্ট করুন - ৳{data.final_amount}
                            </>
                        )}
                    </button>
                </div>
            );
        }

        // For mobile payment methods
        return (
            <div className="space-y-6">
                <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        {paymentMethods.find(m => m.id === selectedMethod)?.icon}
                        {paymentMethods.find(m => m.id === selectedMethod)?.name} নির্দেশাবলী
                    </h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                        {paymentMethods.find(m => m.id === selectedMethod)?.instructions.map((instruction, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-[#FF014F] mr-2 mt-1">•</span>
                                {instruction}
                            </li>
                        ))}
                    </ul>
                    <p className="text-[#FF014F] font-semibold mt-3">
                        টাকা পেমেন্ট করুন: {paymentMethods.find(m => m.id === selectedMethod)?.number}
                    </p>
                </div>

                <div className="bg-[#FF014F]/10 border border-[#FF014F]/30 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                        <span className="text-white font-semibold">পরিশোধ করতে হবে:</span>
                        <span className="text-2xl font-bold text-[#FF014F]">
                            {course.offer_price === 0 ? 'ফ্রি' : course.offer_price + ' ৳'}
                        </span>
                    </div>
                    <p className="text-gray-300 text-sm mt-1 text-center">
                        সঠিক এই পরিমাণ টাকা পেমেন্ট করুন
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label className="block text-white text-sm font-medium mb-2">
                            আপনার {selectedMethod === 'bkash' ? 'bKash' : 'Nagad'} নম্বর
                        </label>
                        <input
                            type="text"
                            value={data.phone_number}
                            onChange={e => setData('phone_number', e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#FF014F] focus:outline-none"
                            placeholder="০১XXXXXXXXX"
                            required
                        />
                        {errors.phone_number && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone_number}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-white text-sm font-medium mb-2">
                            ট্রানজেকশন আইডি (TrxID)
                        </label>
                        <input
                            type="text"
                            value={data.transaction_id}
                            onChange={e => setData('transaction_id', e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#FF014F] focus:outline-none"
                            placeholder="TrxID লিখুন"
                            required
                        />
                        {errors.transaction_id && (
                            <p className="text-red-500 text-sm mt-1">{errors.transaction_id}</p>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FF014F] hover:bg-[#e60045] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                    {isSubmitting ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            প্রসেস হচ্ছে...
                        </>
                    ) : (
                        <>
                            এনরোলমেন্ট সম্পন্ন করুন - ৳{data.final_amount}
                        </>
                    )}
                </button>
            </div>
        );
    };

    return (
        <AppLayout>
            <Head title={`${course.title} - এনরোল করুন`} />

            <section className="relative overflow-hidden bg-[#0a0a0a] py-8 md:py-20 min-h-screen">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,1,79,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,1,79,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
                    <div className="absolute top-1/4 -left-32 w-64 h-64 md:w-96 md:h-96 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>
                    <div className="absolute bottom-1/4 -right-32 w-64 h-64 md:w-96 md:h-96 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="">

                        <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-800 p-6">
                            <h2 className="text-2xl font-bold text-white mb-6">কোর্সে এনরোল করুন</h2>

                            {/* মূল্য প্রদর্শন */}
                            <div className="bg-gray-800/50 rounded-xl p-5 mb-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-300">আসল মূল্য:</span>
                                    <span className="text-xl text-gray-400 line-through">৳{course.price == 0 ? 'ফ্রি' : course.price + ' ৳'}</span>
                                </div>

                                {course.discount > 0 && (
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-gray-300">ছাড়:</span>
                                        <span className="text-green-400 font-semibold">-{course.discount} ৳</span>
                                    </div>
                                )}

                                <div className="flex justify-between items-center border-t border-gray-700 pt-4">
                                    <span className="text-white font-semibold text-lg">মোট পরিশোধ:</span>
                                    <span className="text-2xl font-bold text-[#FF014F]">{course.offer_price == 0 ? 'ফ্রি' : course.offer_price + ' ৳'}</span>
                                </div>
                            </div>

                            {/* কুপন সেকশন */}

                            {
                                course.offer_price > 0 && (
                                    <>
                                        <div className="mb-6">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Tag className="w-5 h-5 text-[#FF014F]" />
                                                <span className="text-white font-medium">প্রোমো কোড প্রয়োগ করুন</span>
                                            </div>

                                            <div className="flex gap-2">
                                                <div className="flex-1">
                                                    <input
                                                        type="text"
                                                        value={couponCode}
                                                        onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                                                        placeholder="প্রোমো কোড লিখুন"
                                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#FF014F] focus:outline-none placeholder-gray-500"
                                                    />
                                                </div>
                                                <button
                                                    onClick={applyCoupon}
                                                    disabled={couponLoading || !couponCode.trim()}
                                                    className="bg-[#FF014F] hover:bg-[#e60045] text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50 flex items-center gap-2 transition-colors"
                                                >
                                                    {couponLoading ? 'অপেক্ষা করুন...' : 'অ্যাপ্লাই'}
                                                </button>
                                            </div>

                                            {couponMessage && (
                                                <div className={`mt-2 text-sm ${couponApplied ? 'text-green-400' : 'text-red-400'}`}>
                                                    {couponMessage}
                                                </div>
                                            )}
                                        </div>
                                    </>

                                )
                            }



                            {
                                course.offer_price > 0 && (
                                    <>
                                        <div className="mb-6">
                                            <h3 className="text-lg font-semibold text-white mb-4">পেমেন্ট মেথড নির্বাচন করুন</h3>
                                            <div className="grid grid-cols-1 gap-3">
                                                {paymentMethods.map((method) => (
                                                    <div
                                                        key={method.id}
                                                        onClick={() => handlePaymentMethodSelect(method.id)}
                                                        className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedMethod === method.id
                                                            ? 'border-[#FF014F] bg-[#FF014F]/10'
                                                            : 'border-gray-700 hover:border-gray-600'
                                                            }`}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className={`p-2 rounded-lg ${selectedMethod === method.id
                                                                ? 'bg-[#FF014F] text-white'
                                                                : 'bg-gray-800 text-gray-400'
                                                                }`}>
                                                                {method.icon}
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="text-white font-semibold">{method.name}</h4>
                                                                {method.number && (
                                                                    <p className="text-gray-400 text-sm"> {method.number}</p>
                                                                )}
                                                                {method.id === 'sslcommerz' && (
                                                                    <p className="text-green-400 text-sm">কার্ড/ব্যাংক/মোবাইল ব্যাংক</p>
                                                                )}
                                                            </div>
                                                            <div className="ml-auto">
                                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedMethod === method.id
                                                                    ? 'border-[#FF014F] bg-[#FF014F]'
                                                                    : 'border-gray-600'
                                                                    }`}>
                                                                    {selectedMethod === method.id && (
                                                                        <Check className="w-3 h-3 text-white" />
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )
                            }



                            {
                                course.offer_price > 0 && (
                                    <>

                                        {selectedMethod && (
                                            <form onSubmit={submitEnrollment}>
                                                {renderPaymentForm()}
                                                <p className="text-gray-400 text-sm text-center mt-4">
                                                    {selectedMethod === 'sslcommerz'
                                                        ? 'SSLCommerz এর মাধ্যমে সিকিউর পেমেন্ট সম্পন্ন হবে'
                                                        : 'পেমেন্ট সম্পন্ন হলে স্বয়ংক্রিয়ভাবে কনফার্মেশন মেসেজ পাবেন'
                                                    }
                                                </p>
                                            </form>
                                        )}

                                        {!selectedMethod && (
                                            <div className="text-center py-8">
                                                <Wallet className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                                                <p className="text-gray-400">এনরোল করতে পেমেন্ট মেথড নির্বাচন করুন</p>
                                            </div>
                                        )}
                                    </>
                                )
                            }


                            {
                                course.offer_price == 0 && (
                                    <>
                                        <form onSubmit={submitEnrollmentFree} className="space-y-6">
                                            <div>
                                                <label className="block text-white text-sm font-medium mb-2">
                                                    আপনার ফোন নাম্বার
                                                </label>
                                                <input
                                                    type="text"
                                                    value={data.phone_number}
                                                    onChange={e => setData('phone_number', e.target.value)}
                                                    placeholder="ফোন নাম্বার"
                                                    className="bg-gray-800 w-full p-2  focus:outline-0 text-gray-400 placeholder:text-gray-500 border border-gray-600 focus:ring-2 focus:ring-[#FF014F] focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white text-sm font-medium mb-2">
                                                    আপনার কলেজের নাম
                                                </label>
                                                <input
                                                    type="text"
                                                    value={data.college_name}
                                                    onChange={e => setData('college_name', e.target.value)}
                                                    placeholder="কলেজের নাম"
                                                    className="bg-gray-800 w-full p-2 focus:outline-0 text-gray-400 placeholder:text-gray-500 border border-gray-600 focus:ring-2 focus:ring-[#FF014F] focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white text-sm font-medium mb-2">
                                                    আপনার জেলার নাম
                                                </label>
                                                <input
                                                    type="text"
                                                    value={data.district_name}
                                                    onChange={e => setData('district_name', e.target.value)}
                                                    placeholder="জেলার নাম"
                                                    className="bg-gray-800 w-full p-2 focus:outline-0 text-gray-400 placeholder:text-gray-500 border border-gray-600 focus:ring-2 focus:ring-[#FF014F] focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white text-sm font-medium mb-2">
                                                    আপনার এইচএসসি ব্যাচ
                                                </label>
                                                <input
                                                    type="text"
                                                    value={data.hsc_batch}
                                                    onChange={e => setData('hsc_batch', e.target.value)}
                                                    placeholder="এইচএসসি ব্যাচ"
                                                    className="bg-gray-800 w-full p-2 focus:outline-0 text-gray-400 placeholder:text-gray-500 border border-gray-600 focus:ring-2 focus:ring-[#FF014F] focus:border-transparent"
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full bg-[#FF014F] hover:bg-[#e60045] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                                            >
                                                এনরোল করুন
                                            </button>
                                        </form>
                                    </>
                                )
                            }

                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent opacity-40 shadow-lg shadow-[#FF014F]/30"></div>
            </section>
        </AppLayout>
    );
}