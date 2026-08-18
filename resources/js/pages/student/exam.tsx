// resources/js/Pages/student/exam.jsx

import { usePage, Link } from "@inertiajs/react";
import { useState } from "react";
import StudentDashboardLayout from "./layout";

export default function Exam({ exams, course_id }) {
    const { auth } = usePage().props;
    const [selectedExam, setSelectedExam] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Filter options
    const [filter, setFilter] = useState('all'); // all, active, expired, submitted

    const getFilteredExams = () => {
        if (filter === 'active') {
            return exams.filter(exam => exam.can_submit);
        } else if (filter === 'expired') {
            return exams.filter(exam => exam.is_expired);
        } else if (filter === 'submitted') {
            return exams.filter(exam => exam.is_submitted);
        }
        return exams;
    };

    const filteredExams = getFilteredExams();

    // Filter counts
    const filterCounts = {
        all: exams.length,
        active: exams.filter(e => e.can_submit).length,
        expired: exams.filter(e => e.is_expired).length,
        submitted: exams.filter(e => e.is_submitted).length
    };

    const getStatusBadge = (exam) => {
        if (exam.is_submitted) {
            return {
                color: 'bg-green-500/20 text-green-400 border border-green-500/30',
                text: 'সাবমিট করা হয়েছে'
            };
        } else if (exam.is_expired) {
            return {
                color: 'bg-red-500/20 text-red-400 border border-red-500/30',
                text: 'মেয়াদ উত্তীর্ণ'
            };
        } else if (exam.can_submit) {
            return {
                color: 'bg-[#FF014F]/20 text-[#FF014F] border border-[#FF014F]/30',
                text: 'সাবমিট করা যায়'
            };
        } else {
            return {
                color: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
                text: exam.status === 'inactive' ? 'নিষ্ক্রিয়' : 'অপেক্ষমান'
            };
        }
    };

    const getRemainingTime = (exam) => {
        if (exam.is_expired) return 'মেয়াদ উত্তীর্ণ';
        if (exam.is_submitted) return 'সাবমিট করা হয়েছে';
        
        const deadline = new Date(exam.deadline);
        const now = new Date();
        const diffHours = Math.floor((deadline - now) / (1000 * 60 * 60));
        const diffDays = Math.floor(diffHours / 24);
        
        if (diffDays > 0) {
            return `${diffDays} দিন বাকি`;
        } else if (diffHours > 0) {
            return `${diffHours} ঘন্টা বাকি`;
        } else {
            return 'শেষ হতে যাচ্ছে';
        }
    };

    // Filter options for select box
    const filterOptions = [
        { value: 'all', label: 'সকল পরীক্ষা', count: filterCounts.all },
        { value: 'active', label: 'সক্রিয়', count: filterCounts.active },
        { value: 'expired', label: 'মেয়াদ উত্তীর্ণ', count: filterCounts.expired },
        { value: 'submitted', label: 'সাবমিটকৃত', count: filterCounts.submitted }
    ];

    return (
        <StudentDashboardLayout>
            <div className="min-h-screen bg-[#0a0a0a]">
                <div className="">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white">লিখিত পরীক্ষা সমূহ</h1>
                        <p className="text-gray-400 mt-2">আপনার কোর্সের সকল লিখিত পরীক্ষা এখানে দেখতে পাবেন</p>
                    </div>

                    {/* Filter Select Box */}
                    <div className="mb-6">
                        <div className="flex items-center space-x-3">
                            <label className="text-sm font-medium text-gray-300">ফিল্টার:</label>
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="bg-[#181717]  text-white text-sm rounded-lg focus:ring-[#FF014F] focus:border-[#FF014F] block px-4 py-2.5"
                            >
                                {filterOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label} ({option.count})
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Exams Grid */}
                    {filteredExams.length === 0 ? (
                        <div className="bg-[#181717] rounded-lg  p-12 text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <h3 className="mt-2 text-sm font-medium text-gray-300">কোন পরীক্ষা নেই</h3>
                            <p className="mt-1 text-sm text-gray-500">এই ক্যাটাগরিতে কোন পরীক্ষা পাওয়া যায়নি।</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {filteredExams.map((exam) => {
                                const status = getStatusBadge(exam);
                                return (
                                    <div
                                        key={exam.id}
                                        className="bg-[#181717] rounded-lg  hover:border-[#FF014F]/40 hover:shadow-lg transition-all duration-300 overflow-hidden group"
                                    >
                                        <div className="p-6">
                                            {/* Header - Subject and Status */}
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="text-xs font-semibold text-[#FF014F] bg-[#FF014F]/10 px-3 py-1 rounded-full">
                                                    {exam.subject}
                                                </span>
                                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${status.color}`}>
                                                    {status.text}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#FF014F] transition-colors">
                                                {exam.title}
                                            </h3>

                                            {/* Instruction Preview */}
                                            {exam.instruction && (
                                                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                                                    {exam.instruction}
                                                </p>
                                            )}

                                            {/* Divider */}
                                            <div className="border-t border-[#FF014F]/20 my-4"></div>

                                            {/* Exam Details */}
                                            <div className="space-y-3 mb-5">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-400">মোট মার্ক:</span>
                                                    <span className="font-semibold text-white">{exam.total_marks}</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-400">পাশের মার্ক:</span>
                                                    <span className="font-semibold text-white">{exam.passing_marks}</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-400">ডেডলাইন:</span>
                                                    <span className="text-sm text-gray-300">{exam.formatted_deadline}</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-400">অবস্থা:</span>
                                                    <span className={`font-semibold text-sm ${
                                                        exam.is_expired ? 'text-red-400' : 
                                                        exam.is_submitted ? 'text-green-400' : 
                                                        'text-[#FF014F]'
                                                    }`}>
                                                        {getRemainingTime(exam)}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Obtained Marks if submitted */}
                                            {exam.is_submitted && exam.submission && (
                                                <div className="mb-5 p-3 bg-[#0a0a0a] rounded-lg border border-[#FF014F]/20">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-sm text-gray-400">প্রাপ্ত মার্ক:</span>
                                                        <span className={`text-lg font-bold ${
                                                            exam.submission.obtained_marks >= exam.passing_marks 
                                                                ? 'text-green-400' 
                                                                : 'text-red-400'
                                                        }`}>
                                                            {exam.submission.obtained_marks || 'মার্ক দেওয়া হয়নি'}
                                                            {exam.submission.obtained_marks && `/${exam.total_marks}`}
                                                        </span>
                                                    </div>
                                                    {exam.submission.feedback && (
                                                        <p className="text-xs text-gray-500">
                                                            <span className="font-medium text-gray-400">ফিডব্যাক:</span> {exam.submission.feedback}
                                                        </p>
                                                    )}
                                                </div>
                                            )}

                                            {/* Action Buttons */}
                                            <div className="mt-4">
                                                {exam.can_submit ? (
                                                    <Link
                                                        href={`/student/exam/show/${course_id}/${exam.id}`}
                                                        className="block w-full text-center px-4 py-2.5 bg-[#FF014F] hover:bg-[#FF014F]/80 text-white font-medium rounded-lg transition duration-200 transform hover:scale-105"
                                                    >
                                                        পরীক্ষা শুরু করুন
                                                    </Link>
                                                ) : exam.is_submitted ? (
                                                   <></>
                                                ) : (
                                                    <button
                                                        disabled
                                                        className="block w-full text-center px-4 py-2.5 bg-gray-800 cursor-not-allowed text-gray-500 font-medium rounded-lg"
                                                    >
                                                        {exam.is_expired ? 'মেয়াদ উত্তীর্ণ' : 'পরীক্ষা উপলব্ধ নয়'}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </StudentDashboardLayout>
    );
}