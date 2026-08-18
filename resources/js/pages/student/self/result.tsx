import { Link, usePage } from "@inertiajs/react";
import AppLayout from "@/pages/frontend/layout";

interface Question {
    id: number;
    question: string;
    option_a: string;
    option_b: string;
    option_c: string;
    option_d: string;
    correct_answer: string;
}

interface ResultProps {
    result: {
        id: number;
        subject: string;
        correct: number;
        wrong: number;
        obtain_mark: number;
        answersheet: Record<number, string>;
        taken_time: number;
    };
    questions: Question[];
}

export default function Result() {
    const { result, questions } = usePage().props as ResultProps;

    const formatTime = (seconds: number) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}m ${sec}s`;
    };

    const getAnswerLabel = (ansKey: string) => {
        switch (ansKey) {
            case "A": return "option_a";
            case "B": return "option_b";
            case "C": return "option_c";
            case "D": return "option_d";
            default: return "";
        }
    };

    return (
        <AppLayout>
            <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
                <div className="max-w-5xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        {result.subject} - পরীক্ষার ফলাফল
                    </h2>

                    {/* Summary */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 text-center">
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold">সঠিক উত্তর</h3>
                            <p className="text-2xl mt-2 text-green-400">{result.correct}</p>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold">ভুল উত্তর</h3>
                            <p className="text-2xl mt-2 text-red-400">{result.wrong}</p>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold">প্রাপ্ত নম্বর</h3>
                            <p className="text-2xl mt-2 text-blue-400">{result.obtain_mark}</p>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold">সময়</h3>
                            <p className="text-2xl mt-2 text-yellow-400">{formatTime(result.taken_time)}</p>
                        </div>
                    </div>

                    {/* Answer Sheet */}
                    <h3 className="text-2xl font-semibold mb-4">উত্তর তালিকা</h3>

                    <div className="space-y-6">
                        {questions.map((q, i) => {
                            const userAnswerKey = result.answersheet[q.id];
                            const correctAnswerKey = q.correct_answer;
                            const userSelectedOption = getAnswerLabel(userAnswerKey);
                            const correctOption = getAnswerLabel(correctAnswerKey);

                            return (
                                <div
                                    key={q.id}
                                    className="bg-gray-700 p-5 rounded-lg border border-gray-600"
                                >
                                    <h4 className="text-lg font-semibold mb-3">
                                        {i + 1}. {q.question}
                                    </h4>
                                    <div className="grid gap-2">
                                        {(["A", "B", "C", "D"] as const).map((opt) => {
                                            const optKey = getAnswerLabel(opt);
                                            const isUserSelected = userAnswerKey === opt;
                                            const isCorrect = correctAnswerKey === opt;

                                            return (
                                                <div
                                                    key={opt}
                                                    className={`px-4 py-2 rounded-md border transition 
                                                    ${isCorrect
                                                            ? "border-green-500 bg-green-700/20"
                                                            : isUserSelected
                                                                ? "border-red-500 bg-red-700/20"
                                                                : "border-gray-600 bg-gray-800 hover:bg-gray-700"
                                                        }`}
                                                >
                                                    <span className="font-medium">{opt}:</span>{" "}
                                                    {q[optKey as keyof Question]}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Feedback */}
                                    <div className="mt-3 text-sm">
                                        {userAnswerKey === correctAnswerKey ? (
                                            <span className="text-green-400 font-medium">✅ সঠিক উত্তর</span>
                                        ) : (
                                            <span className="text-red-400 font-medium">
                                                ❌ ভুল উত্তর (সঠিক: {correctAnswerKey})
                                            </span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center my-5">
                        <Link href='/student/progress' className="px-5 py-2 bg-[#B2063C]">তোমার প্রোগ্রেস দেখো</Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
