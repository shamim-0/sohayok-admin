import { useState, useEffect } from "react";
import { router, usePage } from "@inertiajs/react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Exam({ questions, exam }) {
    const [answers, setAnswers] = useState<{ question_id: number; selected: string }[]>([]);
    const [timeLeft, setTimeLeft] = useState(exam.time * 60); // exam.time is in minutes
    const [submitted, setSubmitted] = useState(false);

    const { flash } = usePage().props;

    // Timer countdown
    useEffect(() => {
        if (submitted) return;
        if (timeLeft <= 0) {
            handleSubmit();
            return;
        }

        const interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
        return () => clearInterval(interval);
    }, [timeLeft, submitted]);


    useEffect(() => {
        if (flash.error) {
            toast.error(flash.error);
        }

        if (flash.success) {
            toast.success(flash.success);
        }
    }, [flash]);



    const formatTime = (sec: number) => {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m}:${s < 10 ? "0" + s : s}`;
    };

    const handleAnswer = (questionId: number, selected: string) => {
        setAnswers((prev) => {
            const existing = prev.find((a) => a.question_id === questionId);
            if (existing) {
                return prev.map((a) => (a.question_id === questionId ? { ...a, selected } : a));
            }
            return [...prev, { question_id: questionId, selected }];
        });
    };

    // Calculate results before submission
    const calculateResults = () => {
        let correct = 0;
        let wrong = 0;
        let unanswered = 0;

        questions.forEach(question => {
            const userAnswer = answers.find(a => a.question_id === question.id);

            if (!userAnswer) {
                unanswered++;
            } else if (userAnswer.selected === question.correct_answer) {
                correct++;
            } else {
                wrong++;
            }
        });

        return { correct, wrong, unanswered };
    };

    const handleSubmit = () => {
        if (submitted) return;
        setSubmitted(true);

        const { correct, wrong, unanswered } = calculateResults();

        // Calculate marks with negative marking
        let totalMarks = correct;
        if (exam.negative_mark) {
            totalMarks = correct - (wrong * parseFloat(exam.negative_mark));
            totalMarks = Math.max(0, totalMarks); // Ensure marks don't go below 0
        }

        const resultData = {
            lesson_id: exam.id,
            course_id: exam.course_id,
            answers,
            negative_mark: exam.negative_mark,
            total_correct: correct,
            total_wrong: wrong,
            total_unanswered: unanswered,
            total_marks: exam.mark,
            total_questions: questions.length,
            obtained_marks: totalMarks,
            passing_status: totalMarks >= exam.passing_mark ? 'passed' : 'failed',
            time_spent: (exam.time * 60) - timeLeft, // in seconds
        };

        console.log('Submitting quiz data:', resultData);

        router.post('/student/class/submit-quiz', resultData, {
            onSuccess: () => {
                console.log('Quiz submitted successfully');
            },
            onError: (errors) => {
                console.error('Quiz submission failed:', errors);
                alert('কুইজ জমা দিতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
                setSubmitted(false);
            }
        });
    };

    const optionLabels = ["ক", "খ", "গ", "ঘ"];
    const optionKeys = ["a", "b", "c", "d"];

    const answeredCount = answers.length;
    const progress = (answeredCount / questions.length) * 100;

    // Calculate current results for display
    const currentResults = calculateResults();

    return (
        <div className="min-h-screen bg-gray-900 p-4 md:p-6">
            {/* Background Effects */}
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
            </div>

            {/* Header Section */}
            <div className="relative bg-[#aaaaaa2f] border border-[#FF014F]/20 rounded-xl p-6 mb-6 backdrop-blur-lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {exam.title} 📝
                        </h1>
                        <p className="text-gray-300">
                            মোট প্রশ্ন: {questions.length}টি • সময়: {exam.time} মিনিট • পাসিং মার্ক: {exam.passing_mark}
                            {exam.negative_mark && ` • নেগেটিভ মার্ক: ${exam.negative_mark}`}
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Timer */}
                        <div className="bg-[#FF014F]/20 text-[#FF014F] px-4 py-3 rounded-lg text-center min-w-[120px]">
                            <div className="text-sm text-gray-300">সময় বাকি</div>
                            <div className="text-xl font-bold">{formatTime(timeLeft)}</div>
                        </div>

                        {/* Progress */}
                        <div className="bg-[#FF014F]/20 text-[#FF014F] px-4 py-3 rounded-lg text-center min-w-[120px]">
                            <div className="text-sm text-gray-300">অগ্রগতি</div>
                            <div className="text-xl font-bold">{answeredCount}/{questions.length}</div>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                            className="bg-[#FF014F] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>{Math.round(progress)}% সম্পূর্ণ</span>
                        <span>{answeredCount}টি উত্তর দেওয়া হয়েছে</span>
                    </div>
                </div>
            </div>

            {/* Main Content - All Questions */}
            <div className="max-w-6xl mx-auto">
                <div className="bg-[#9595952e] backdrop-blur-lg rounded-xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-white font-bold text-xl">
                            সব প্রশ্ন ({questions.length}টি)
                        </h3>
                        <span className="bg-[#FF014F]/20 text-[#FF014F] px-3 py-1 rounded-full text-sm">
                            {Math.round(progress)}% সম্পূর্ণ
                        </span>
                    </div>

                    {/* All Questions List */}
                    <div className="space-y-6">
                        {questions.map((q, index) => {
                            const selected = answers.find(a => a.question_id === q.id)?.selected;

                            return (
                                <div
                                    key={q.id}
                                    className="bg-[#00000036] rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200"
                                >
                                    {/* Question Header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-white font-semibold text-lg">
                                            প্রশ্ন {index + 1}
                                        </h4>
                                        {selected && (
                                            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                                                উত্তর দেওয়া হয়েছে ✅
                                            </span>
                                        )}
                                    </div>

                                    {/* Question Text */}
                                    <p className="text-white text-lg leading-relaxed mb-6 bg-[#ffffff0d] p-4 rounded-lg border border-gray-600">
                                        {q.question}
                                    </p>

                                    {/* Options */}
                                    <div className="space-y-3">
                                        {optionKeys.map((opt, idx) => {
                                            const isSelected = selected === opt;
                                            const isCorrect = q.correct_answer === opt;

                                            return (
                                                <label
                                                    key={opt}
                                                    className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-200 border-2 text-[#ffffffa4] ${isSelected && 'bg-green-500/10 border-green-500 text-white'}`}
                                                    onClick={() => handleAnswer(q.id, opt)}
                                                >
                                                    <div className="flex items-center gap-4 flex-1">
                                                        <span
                                                            className={`flex items-center justify-center w-10 h-10 rounded-lg border-2 text-sm font-bold transition-all ${isSelected && 'bg-green-500 border-green-500 text-white' }`}
                                                        >
                                                            {optionLabels[idx]}
                                                        </span>
                                                        <span className="text-[15px] flex-1">
                                                            {q[`option_${opt}`]}
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="radio"
                                                        name={`question_${q.id}`}
                                                        checked={isSelected}
                                                        readOnly
                                                        className="hidden"
                                                    />
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Submit Button Section */}
                    <div className="mt-8 pt-6 border-t border-gray-700">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                            <div className="text-center lg:text-left">
                                {answeredCount === questions.length ? (
                                    <div className="text-green-400 text-lg font-semibold">
                                        ✅ সব প্রশ্নের উত্তর দেওয়া হয়েছে
                                    </div>
                                ) : (
                                    <div className="text-gray-300">
                                        <span className="text-yellow-400 font-semibold">{questions.length - answeredCount}টি</span> প্রশ্নের উত্তর বাকি
                                    </div>
                                )}

                                {/* Current Results Preview */}
                              
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={submitted}
                                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all min-w-[200px] ${submitted
                                    ? "bg-gray-400 cursor-not-allowed text-white"
                                    : "bg-gradient-to-r from-[#FF014F] to-pink-600 text-white hover:shadow-lg hover:scale-105 shadow-lg"
                                    }`}
                            >
                                {submitted ? "Submitted" : "Submit Exam"}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
}