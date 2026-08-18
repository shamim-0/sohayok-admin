// resources/js/Pages/student/exam-show.jsx

import { usePage, Link } from "@inertiajs/react";
import { useState } from "react";
import StudentDashboardLayout from "./layout";
import axios from 'axios';

export default function ExamShow({ exam, course_id }) {
    const { auth } = usePage().props;
    const [file, setFile] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert('দয়া করে আপনার উত্তরপত্র আপলোড করুন');
            return;
        }

        setSubmitting(true);
        const formData = new FormData();
        formData.append('answer_file', file);

        try {
            await axios.post(`/student/written-exam/${course_id}/exam/${exam.id}/submit`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert('পরীক্ষা সফলভাবে সাবমিট করা হয়েছে!');
            window.location.href = `/student/exam/show/${course_id}/${exam.id}`;
        } catch (error) {
            alert('সাবমিট করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <StudentDashboardLayout>
            <div className="min-h-screen bg-[#0a0a0a] py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <div className="mb-6">
                        <Link
                            href={`/student/written-exam/${course_id}`}
                            className="inline-flex items-center text-[#FF014F] hover:text-[#FF014F]/80 transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            পরীক্ষা সমূহে ফিরুন
                        </Link>
                    </div>

                    {/* Exam Details */}
                    <div className="bg-[#181717] rounded-lg border border-[#FF014F]/20 overflow-hidden">
                        <div className="p-6 border-b border-[#FF014F]/20">
                            <div className="flex justify-between items-start flex-wrap gap-4">
                                <div>
                                    <span className="text-sm font-medium text-[#FF014F] bg-[#FF014F]/10 px-3 py-1 rounded-full">
                                        {exam.subject}
                                    </span>
                                    <h1 className="text-2xl md:text-3xl font-bold text-white mt-3">{exam.title}</h1>
                                </div>
                                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                                    exam.is_submitted ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                                    exam.is_expired ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                                    'bg-[#FF014F]/20 text-[#FF014F] border border-[#FF014F]/30'
                                }`}>
                                    {exam.is_submitted ? 'সাবমিট করা হয়েছে' :
                                     exam.is_expired ? 'মেয়াদ উত্তীর্ণ' :
                                     'সক্রিয়'}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Instruction */}
                            {exam.instruction && (
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-3">নির্দেশনা</h3>
                                    <div className="prose max-w-none text-gray-300 leading-relaxed">
                                        {exam.instruction}
                                    </div>
                                </div>
                            )}

                            {/* Question Paper */}
                            {exam.question_file && (
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-3">প্রশ্নপত্র</h3>
                                    <a
                                        href={`/storage/${exam.question_file}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-[#FF014F] hover:bg-[#FF014F]/80 text-white rounded-lg transition duration-200 transform hover:scale-105"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        প্রশ্নপত্র ডাউনলোড করুন
                                    </a>
                                </div>
                            )}

                            {/* Exam Info */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-[#0a0a0a] rounded-lg border border-[#FF014F]/20">
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">মোট মার্ক</div>
                                    <div className="text-2xl font-bold text-white">{exam.total_marks}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">পাশের মার্ক</div>
                                    <div className="text-2xl font-bold text-white">{exam.passing_marks}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">ডেডলাইন</div>
                                    <div className="text-lg font-semibold text-[#FF014F]">
                                        {new Date(exam.deadline).toLocaleString('bn-BD')}
                                    </div>
                                </div>
                            </div>

                            {/* Submission Form */}
                            {exam.can_submit && (
                                <form onSubmit={handleSubmit} className="space-y-4 p-5 bg-[#0a0a0a] rounded-lg border border-[#FF014F]/20">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            আপনার উত্তরপত্র আপলোড করুন (PDF/DOC)
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                onChange={(e) => setFile(e.target.files[0])}
                                                className="w-full px-4 py-3 bg-[#181717] border border-[#FF014F]/20 rounded-lg text-white focus:outline-none focus:border-[#FF014F] focus:ring-1 focus:ring-[#FF014F] transition-colors cursor-pointer"
                                                required
                                            />
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">
                                            সমর্থিত ফরম্যাট: PDF, DOC, DOCX (সর্বোচ্চ 10MB)
                                        </p>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full px-4 py-3 bg-[#FF014F] hover:bg-[#FF014F]/80 text-white font-medium rounded-lg transition duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {submitting ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                সাবমিট করা হচ্ছে...
                                            </span>
                                        ) : 'পরীক্ষা সাবমিট করুন'}
                                    </button>
                                </form>
                            )}

                            {/* Submission Result */}
                            {exam.is_submitted && exam.submission && (
                                <div className="p-5 bg-green-500/10 rounded-lg border border-green-500/30">
                                    <h3 className="text-lg font-semibold text-white mb-3">আপনার ফলাফল</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center pb-2 border-b border-green-500/20">
                                            <span className="text-gray-300">প্রাপ্ত মার্ক:</span>
                                            <span className={`text-2xl font-bold ${
                                                exam.submission.obtained_marks >= exam.passing_marks 
                                                    ? 'text-green-400' 
                                                    : 'text-red-400'
                                            }`}>
                                                {exam.submission.obtained_marks || 'মার্ক দেওয়া হয়নি'} 
                                                {exam.submission.obtained_marks && <span className="text-lg text-gray-400">/{exam.total_marks}</span>}
                                            </span>
                                        </div>
                                        {exam.submission.feedback && (
                                            <div>
                                                <div className="text-gray-300 mb-2 font-medium">ফিডব্যাক:</div>
                                                <p className="text-gray-400 leading-relaxed">{exam.submission.feedback}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </StudentDashboardLayout>
    );
}