import { router } from "@inertiajs/react";
import { useState } from "react";
import StudentDashboardLayout from "../layout";

export default function Result({ result, questions }) {
    const [showAnswerSheet, setShowAnswerSheet] = useState(false);

    console.log('Result:', result);
    console.log('Questions:', questions);

    if (!result) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
                <div className="text-center">
                    <div className="text-6xl mb-4">😕</div>
                    <h1 className="text-2xl font-bold text-white mb-2">কোনো রেজাল্ট পাওয়া যায়নি</h1>
                    <p className="text-gray-400 mb-6">আপনি এখনো এই কুইজটি সম্পন্ন করেননি</p>
                    <button
                        onClick={() => router.get('/student/class')}
                        className="bg-[#FF014F] hover:bg-[#FF014F]/90 text-white px-6 py-3 rounded-lg font-medium"
                    >
                        ক্লাসরুমে ফিরে যান
                    </button>
                </div>
            </div>
        );
    }

    const {
        obtained_marks,
        total_marks,
        passing_status,
        total_correct,
        total_wrong,
        total_unanswered,
        total_questions,
        time_spent,
        negative_mark,
        submitted_at,
        answers
    } = result;

    const percentage = (obtained_marks / total_marks) * 100;
    const timeInMinutes = Math.floor(time_spent / 60);
    const timeInSeconds = time_spent % 60;
    const accuracy = total_correct > 0 ? (total_correct / (total_correct + total_wrong)) * 100 : 0;

    const optionLabels = ["ক", "খ", "গ", "ঘ"];
    const optionKeys = ["a", "b", "c", "d"];

    // Function to get user's answer for a question
    const getUserAnswer = (questionId) => {
        const answer = answers.find(a => a.question_id === questionId);
        return answer ? answer.selected : null;
    };

    // Function to check if answer is correct
    const isAnswerCorrect = (question) => {
        const userAnswer = getUserAnswer(question.id);
        return userAnswer === question.correct_answer;
    };

    return (
        <StudentDashboardLayout>
            <div className="min-h-screen  p-4 md:p-6">
                {/* Background Effects */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,1,79,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,1,79,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
                    <div className="absolute top-0 -left-32 w-96 h-96 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>
                    <div className="absolute bottom-0 -right-32 w-96 h-96 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>
                </div>

                {/* Header Section */}
                <div className="relative bg-[#aaaaaa2f] border border-[#FF014F]/20 rounded-xl p-6 mb-6 backdrop-blur-lg">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1">
                            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                কুইজ রেজাল্ট 🎯
                            </h1>
                            <p className="text-gray-300">
                                জমা দেওয়ার সময়: {new Date(submitted_at).toLocaleString('bn-BD')}
                            </p>
                        </div>

                        <div className={`px-6 py-3 rounded-lg text-center font-bold text-lg ${passing_status === 'passed'
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                : 'bg-red-500/20 text-red-400 border border-red-500/30'
                            }`}>
                            {passing_status === 'passed' ? '✅ পাস' : '❌ ফেল'}
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Main Result Card */}
                    <div className="bg-[#9595952e] backdrop-blur-lg rounded-xl p-6 mb-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Score Card */}
                            <div className="bg-[#00000036] rounded-xl p-6 text-center border border-gray-700">
                                <div className="text-5xl font-bold text-white mb-2">
                                    {obtained_marks}/{total_marks}
                                </div>
                                <div className="text-gray-400 text-lg">প্রাপ্ত নম্বর</div>
                                <div className="mt-4 text-2xl font-bold text-blue-400">
                                    {percentage.toFixed(1)}%
                                </div>
                            </div>

                            {/* Progress Circle */}
                            <div className="flex items-center justify-center">
                                <div className="relative w-48 h-48">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45" fill="none" stroke="#374151" strokeWidth="8" />
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="45"
                                            fill="none"
                                            stroke={passing_status === 'passed' ? "#10B981" : "#EF4444"}
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                            strokeDasharray={`${percentage * 2.827} 282.7`}
                                            transform="rotate(-90 50 50)"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                                        <div className={`text-3xl font-bold ${passing_status === 'passed' ? 'text-green-400' : 'text-red-400'
                                            }`}>
                                            {percentage.toFixed(0)}%
                                        </div>
                                        <div className="text-gray-400 text-sm">সাফল্যের হার</div>
                                    </div>
                                </div>
                            </div>

                            {/* Time & Accuracy */}
                            <div className="bg-[#00000036] rounded-xl p-6 border border-gray-700">
                                <div className="space-y-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-yellow-400">
                                            {timeInMinutes}:{timeInSeconds.toString().padStart(2, '0')}
                                        </div>
                                        <div className="text-gray-400 text-sm">সময় লেগেছে</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-purple-400">
                                            {accuracy.toFixed(1)}%
                                        </div>
                                        <div className="text-gray-400 text-sm">সঠিকতার হার</div>
                                    </div>
                                    {negative_mark > 0 && (
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-red-400">
                                                নেগেটিভ মার্ক: {negative_mark}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-[#9595952e] backdrop-blur-lg rounded-xl p-6 text-center">
                            <div className="text-3xl font-bold text-green-400 mb-2">{total_correct}</div>
                            <div className="text-gray-400 text-lg">সঠিক উত্তর</div>
                            <div className="text-green-400 text-sm mt-1">({((total_correct / total_questions) * 100).toFixed(1)}%)</div>
                        </div>
                        <div className="bg-[#9595952e] backdrop-blur-lg rounded-xl p-6 text-center">
                            <div className="text-3xl font-bold text-red-400 mb-2">{total_wrong}</div>
                            <div className="text-gray-400 text-lg">ভুল উত্তর</div>
                            <div className="text-red-400 text-sm mt-1">({((total_wrong / total_questions) * 100).toFixed(1)}%)</div>
                        </div>
                        <div className="bg-[#9595952e] backdrop-blur-lg rounded-xl p-6 text-center">
                            <div className="text-3xl font-bold text-yellow-400 mb-2">{total_unanswered}</div>
                            <div className="text-gray-400 text-lg">অনুত্তরিত</div>
                            <div className="text-yellow-400 text-sm mt-1">({((total_unanswered / total_questions) * 100).toFixed(1)}%)</div>
                        </div>
                        <div className="bg-[#9595952e] backdrop-blur-lg rounded-xl p-6 text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-2">{total_questions}</div>
                            <div className="text-gray-400 text-lg">মোট প্রশ্ন</div>
                        </div>
                    </div>

                    {/* Answer Sheet Toggle Button */}
                    <div className="text-center mb-6">
                        <button
                            onClick={() => setShowAnswerSheet(!showAnswerSheet)}
                            className="bg-[#FF014F] hover:bg-[#FF014F]/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
                        >
                            {showAnswerSheet ? '⬆️ উত্তরপত্র লুকান' : '📝 উত্তরপত্র দেখুন'}
                        </button>
                    </div>

                    {/* Answer Sheet */}
                    {showAnswerSheet && questions && (
                        <div className="bg-[#9595952e] backdrop-blur-lg rounded-xl p-6 mb-6">
                            <h3 className="text-white font-bold text-2xl mb-6 text-center border-b border-gray-700 pb-4">
                                📋 আপনার উত্তরপত্র
                            </h3>

                            <div className="space-y-6">
                                {questions.map((question, index) => {
                                    const userAnswer = getUserAnswer(question.id);
                                    const isCorrect = isAnswerCorrect(question);

                                    return (
                                        <div
                                            key={question.id}
                                            className={`bg-[#00000036] rounded-xl p-6 border-2 transition-all ${userAnswer
                                                    ? isCorrect
                                                        ? 'border-green-500/50 bg-green-500/5'
                                                        : 'border-red-500/50 bg-red-500/5'
                                                    : 'border-yellow-500/50 bg-yellow-500/5'
                                                }`}
                                        >
                                            {/* Question Header */}
                                            <div className="flex items-center justify-between mb-4">
                                                <h4 className="text-white font-semibold text-lg">
                                                    প্রশ্ন {index + 1}
                                                </h4>
                                                <div className="flex items-center gap-3">
                                                    {userAnswer ? (
                                                        isCorrect ? (
                                                            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                                                                ✅ সঠিক
                                                            </span>
                                                        ) : (
                                                            <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                                                                ❌ ভুল
                                                            </span>
                                                        )
                                                    ) : (
                                                        <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                                                            ⏳ অনুত্তরিত
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Question Text */}
                                            <p className="text-white text-lg leading-relaxed mb-6 bg-[#ffffff0d] p-4 rounded-lg border border-gray-600">
                                                {question.question}
                                            </p>

                                            {/* Options */}
                                            <div className="space-y-3">
                                                {optionKeys.map((opt, idx) => {
                                                    const isUserAnswer = userAnswer === opt;
                                                    const isCorrectAnswer = question.correct_answer === opt;

                                                    return (
                                                        <div
                                                            key={opt}
                                                            className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${isUserAnswer && isCorrectAnswer
                                                                    ? "bg-green-500/20 border-green-500 text-white"
                                                                    : isUserAnswer && !isCorrectAnswer
                                                                        ? "bg-red-500/20 border-red-500 text-white"
                                                                        : isCorrectAnswer
                                                                            ? "bg-green-500/10 border-green-500/50 text-white"
                                                                            : "bg-[#1f2937] border-gray-600 text-white"
                                                                }`}
                                                        >
                                                            <div className="flex items-center gap-4 flex-1">
                                                                <span
                                                                    className={`flex items-center justify-center w-10 h-10 rounded-lg border-2 text-sm font-bold ${isUserAnswer && isCorrectAnswer
                                                                            ? "bg-green-500 border-green-500 text-white"
                                                                            : isUserAnswer && !isCorrectAnswer
                                                                                ? "bg-red-500 border-red-500 text-white"
                                                                                : isCorrectAnswer
                                                                                    ? "bg-green-500/20 border-green-500 text-green-400"
                                                                                    : "border-gray-500 text-gray-300"
                                                                        }`}
                                                                >
                                                                    {optionLabels[idx]}
                                                                </span>
                                                                <span className="text-[15px] flex-1">
                                                                    {question[`option_${opt}`]}
                                                                </span>
                                                            </div>

                                                            {/* Status Indicators */}
                                                            <div className="flex items-center gap-2">
                                                                {isUserAnswer && (
                                                                    <span className="text-sm font-medium bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                                                                        আপনার উত্তর
                                                                    </span>
                                                                )}
                                                                {isCorrectAnswer && !isUserAnswer && (
                                                                    <span className="text-sm font-medium bg-green-500/20 text-green-400 px-2 py-1 rounded">
                                                                        সঠিক উত্তর
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <button
                            onClick={() => router.get(`/student/class/${result.course_id}?activelesson=${result.lesson_id}`)}
                            className="bg-[#FF014F] hover:bg-[#FF014F]/90 text-white px-8 py-3 rounded-lg font-medium transition-all"
                        >
                            ক্লাসরুমে ফিরে যান
                        </button>
                    </div>
                </div>
            </div>
        </StudentDashboardLayout>
    );
}