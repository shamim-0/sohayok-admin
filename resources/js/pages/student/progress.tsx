import { usePage, Link } from "@inertiajs/react";
import StudentDashboardLayout from "./layout";
import { useState } from "react";

interface Result {
    id: number;
    subject: string;
    correct: number;
    wrong: number;
    obtain_mark: number;
    taken_time: number;
    created_at: string;
    total_questions?: number;
}

export default function Progress() {
    const { results } = usePage<{ results: Result[] }>().props;
    const [selectedSubject, setSelectedSubject] = useState<string>('all');

    const formatTime = (seconds: number) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}m ${sec}s`;
    };

    // Calculate overall statistics
    const overallStats = {
        totalExams: results.length,
        totalCorrect: results.reduce((sum, res) => sum + res.correct, 0),
        totalWrong: results.reduce((sum, res) => sum + res.wrong, 0),
        totalMarks: results.reduce((sum, res) => sum + res.obtain_mark, 0),
        averageScore: results.length > 0 ? (results.reduce((sum, res) => sum + res.obtain_mark, 0) / results.length).toFixed(1) : 0,
        totalTime: results.reduce((sum, res) => sum + res.taken_time, 0)
    };

    // Filter results by subject
    const filteredResults = selectedSubject === 'all' 
        ? results 
        : results.filter(res => res.subject === selectedSubject);

    // Get unique subjects
    const subjects = ['all', ...new Set(results.map(res => res.subject))];

    // Prepare chart data
    const performanceData = results.slice(-10).map((res, index) => ({
        name: `Test ${index + 1}`,
        score: res.obtain_mark,
        correct: res.correct,
        wrong: res.wrong
    }));

    const subjectWiseData = subjects.filter(sub => sub !== 'all').map(subject => {
        const subjectResults = results.filter(res => res.subject === subject);
        const avgScore = subjectResults.length > 0 
            ? subjectResults.reduce((sum, res) => sum + res.obtain_mark, 0) / subjectResults.length 
            : 0;
        return {
            subject,
            avgScore: Math.round(avgScore),
            totalTests: subjectResults.length
        };
    });

    return (
        <StudentDashboardLayout>
            <section className="relative overflow-hidden bg-[#0a0a0a] min-h-screen py-8">

                {/* Modern Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,1,79,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,1,79,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
                    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>
                    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>
                    
                    {/* Floating Particles */}
                    <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#FF014F] rounded-full animate-float"></div>
                    <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#FF014F] rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Main Content Container */}
                <div className="relative z-10 max-w-7xl mx-auto px-4">

                    {/* Header */}
                    <div className="text-center mb-12 relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                        
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            <span className="text-white">📊 </span>
                            <span className="bg-gradient-to-r from-[#FF014F] via-[#FF014F] to-[#FF014F] bg-clip-text text-transparent">
                                প্রগ্রেস রিপোর্ট
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            আপনার এক্সাম পারফরম্যান্স এবং উন্নতির ধারা বিশ্লেষণ করুন
                        </p>

                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                    </div>

                    {/* Overall Statistics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-[#837a7a22] backdrop-blur-sm rounded-2xl p-6 border border-[#FF014F]/20 text-center">
                            <div className="text-3xl font-bold text-white mb-2">{overallStats.totalExams}</div>
                            <div className="text-gray-300 text-sm">মোট এক্সাম</div>
                        </div>
                        <div className="bg-[#837a7a22] backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 text-center">
                            <div className="text-3xl font-bold text-green-400 mb-2">{overallStats.totalCorrect}</div>
                            <div className="text-gray-300 text-sm">সঠিক উত্তর</div>
                        </div>
                        <div className="bg-[#837a7a22] backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 text-center">
                            <div className="text-3xl font-bold text-red-400 mb-2">{overallStats.totalWrong}</div>
                            <div className="text-gray-300 text-sm">ভুল উত্তর</div>
                        </div>
                        <div className="bg-[#837a7a22] backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-2">{overallStats.averageScore}</div>
                            <div className="text-gray-300 text-sm">গড় স্কোর</div>
                        </div>
                    </div>

                    {/* Subject Filter */}
                    <div className="mb-8">
                        <div className="bg-[#837a7a22] backdrop-blur-sm rounded-2xl p-6 border border-[#FF014F]/20">
                            <h3 className="text-white text-lg font-bold mb-4">বিষয় ফিল্টার</h3>
                            <div className="flex flex-wrap gap-2">
                                {subjects.map(subject => (
                                    <button
                                        key={subject}
                                        onClick={() => setSelectedSubject(subject)}
                                        className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                                            selectedSubject === subject
                                                ? 'bg-[#FF014F] border-[#FF014F] text-white'
                                                : 'bg-[#0a0a0a] border-[#FF014F]/30 text-gray-400 hover:border-[#FF014F]'
                                        }`}
                                    >
                                        {subject === 'all' ? 'সব বিষয়' : subject}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Performance Charts */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* Performance Trend */}
                        <div className="bg-[#837a7a22] backdrop-blur-sm rounded-2xl p-6 border border-[#FF014F]/20">
                            <h3 className="text-white text-lg font-bold mb-4">পারফরম্যান্স ট্রেন্ড</h3>
                            <div className="space-y-4">
                                {performanceData.map((test, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <span className="text-gray-300 text-sm w-20">{test.name}</span>
                                        <div className="flex-1 mx-4">
                                            <div className="w-full bg-gray-700 rounded-full h-3">
                                                <div 
                                                    className="bg-gradient-to-r from-[#FF014F] to-[#FF014F]/80 h-3 rounded-full transition-all duration-500"
                                                    style={{ width: `${(test.score / 100) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        <span className="text-white font-bold w-12 text-right">{test.score}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Subject-wise Performance */}
                        <div className="bg-[#837a7a22] backdrop-blur-sm rounded-2xl p-6 border border-[#FF014F]/20">
                            <h3 className="text-white text-lg font-bold mb-4">বিষয়ভিত্তিক পারফরম্যান্স</h3>
                            <div className="space-y-4">
                                {subjectWiseData.map((subject, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <span className="text-gray-300 text-sm flex-1">{subject.subject}</span>
                                        <div className="flex items-center gap-4 flex-1">
                                            <div className="w-full bg-gray-700 rounded-full h-3">
                                                <div 
                                                    className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full transition-all duration-500"
                                                    style={{ width: `${subject.avgScore}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-white font-bold w-12 text-right">{subject.avgScore}%</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Results Table */}
                    <div className="bg-[#837a7a22] backdrop-blur-sm rounded-2xl border border-[#FF014F]/20 overflow-hidden">
                        <div className="p-6 border-b border-[#FF014F]/20">
                            <h3 className="text-xl font-bold text-white">এক্সাম রেজাল্টস</h3>
                            <p className="text-gray-300">আপনার সকল এক্সামের বিস্তারিত ফলাফল</p>
                        </div>

                        {filteredResults.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="w-24 h-24 mx-auto mb-4 bg-[#FF014F]/10 rounded-full flex items-center justify-center border border-[#FF014F]/20">
                                    <svg className="w-12 h-12 text-[#FF014F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">কোনো রেজাল্ট পাওয়া যায়নি</h3>
                                <p className="text-gray-400">এখনো কোনো পরীক্ষা দেননি।</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-[#ffffff15]">
                                            <th className="py-4 px-6 text-left text-white font-bold">#</th>
                                            <th className="py-4 px-6 text-left text-white font-bold">বিষয়</th>
                                            <th className="py-4 px-6 text-center text-white font-bold">সঠিক</th>
                                            <th className="py-4 px-6 text-center text-white font-bold">ভুল</th>
                                            <th className="py-4 px-6 text-center text-white font-bold">নম্বর</th>
                                            <th className="py-4 px-6 text-center text-white font-bold">সময়</th>
                                            <th className="py-4 px-6 text-center text-white font-bold">তারিখ</th>
                                            <th className="py-4 px-6 text-center text-white font-bold">অ্যাকশন</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredResults.map((res, index) => (
                                            <tr 
                                                key={res.id} 
                                                className="border-b border-[#FF014F]/10 hover:bg-[#FF014F]/5 transition-all duration-300"
                                            >
                                                <td className="py-4 px-6">
                                                    <div className="w-8 h-8 bg-[#FF014F]/20 rounded-full flex items-center justify-center border border-[#FF014F]/30">
                                                        <span className="text-[#FF014F] text-sm font-bold">{index + 1}</span>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-[#FF014F]/10 rounded-lg flex items-center justify-center border border-[#FF014F]/20 mr-3">
                                                            <span className="text-[#FF014F] font-bold text-sm">
                                                                {res.subject.charAt(0)}
                                                            </span>
                                                        </div>
                                                        <span className="text-white font-medium">{res.subject}</span>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 text-center">
                                                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold border border-green-500/30">
                                                        {res.correct}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-center">
                                                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-bold border border-red-500/30">
                                                        {res.wrong}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-center">
                                                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-bold border border-blue-500/30">
                                                        {res.obtain_mark}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-center">
                                                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold border border-yellow-500/30">
                                                        {formatTime(res.taken_time)}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-center text-gray-300">
                                                    {new Date(res.created_at).toLocaleDateString("bn-BD")}
                                                </td>
                                                <td className="py-4 px-6 text-center">
                                                    <Link
                                                        href={`/self/result/${res.id}`}
                                                        className="inline-flex items-center bg-[#FF014F]/10 hover:bg-[#FF014F]/20 text-[#FF014F] px-4 py-2 rounded-lg border border-[#FF014F]/30 transition-all duration-300 hover:border-[#FF014F] font-semibold"
                                                    >
                                                        বিস্তারিত
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-gradient-to-br from-[#FF014F]/10 to-[#FF014F]/5 rounded-2xl p-6 border border-[#FF014F]/20">
                            <h4 className="text-white font-bold mb-2">সর্বোচ্চ স্কোর</h4>
                            <p className="text-3xl font-bold text-[#FF014F]">
                                 {results.length > 0 ? Math.max(...results.map(r => r.obtain_mark)) : 0}
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-2xl p-6 border border-green-500/20">
                            <h4 className="text-white font-bold mb-2">সর্বনিম্ন সময়</h4>
                            <p className="text-3xl font-bold text-green-400">
                                {results.length > 0 ? formatTime(Math.min(...results.map(r => r.taken_time))) : formatTime(0)}
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-2xl p-6 border border-blue-500/20">
                            <h4 className="text-white font-bold mb-2">মোট সময়</h4>
                            <p className="text-3xl font-bold text-blue-400">
                                {formatTime(overallStats.totalTime)}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(180deg); }
                }
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }
            `}</style>
        </StudentDashboardLayout>
    );
}