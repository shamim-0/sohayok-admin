import { useEffect, useState } from "react";
import AppLayout from "@/pages/frontend/layout";
import { router } from "@inertiajs/react";


export default function Exam({ questions, time, negative, subject }) {
    const [answers, setAnswers] = useState({});
    const [secondsLeft, setSecondsLeft] = useState(time * 60);
    const [submitted, setSubmitted] = useState(false);

    // 🕒 Timer Countdown
    useEffect(() => {
        if (secondsLeft <= 0 && !submitted) {
            handleSubmit();
            return;
        }
        const timer = setInterval(() => setSecondsLeft((prev) => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [secondsLeft]);

    // 🧮 Format time
    const formatTime = (sec) => {
        const min = Math.floor(sec / 60);
        const s = sec % 60;
        return `${min}:${s < 10 ? "0" : ""}${s}`;
    };

    // 🧩 Handle answer selection
    const handleSelect = (questionId, optionKey) => {
        setAnswers({
            ...answers,
            [questionId]: optionKey,
        });
    };

    // 🧾 Submit Exam
    const handleSubmit = () => {
        setSubmitted(true);

        let correct = 0;
        let wrong = 0;

        questions.forEach((q) => {
            const userAns = answers[q.id];
            if (!userAns) return; // skipped

            if (userAns === q.correct_answer) {
                correct++;
            } else {
                wrong++;
            }
        });


        const markPerQuestion = 1;
        const obtain_mark =
            correct * markPerQuestion - wrong * (parseFloat(negative) || 0);

        const taken_time = time * 60 - secondsLeft;

        const resultData = {
            correct,
            wrong,
            obtain_mark,
            answersheet: answers,
            taken_time,
            subject
        };


        router.post("/self/exam-submit", resultData, {
            onSuccess: () => {
                console.log("✅ Exam submitted successfully!");
            },
            onError: (errors) => {
                console.error("❌ Submission failed:", errors);
            },
        });
    };

    return (
        <AppLayout>
            <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
                <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">{subject} - স্মার্ট টেস্ট</h2>
                        <div className="text-lg font-semibold text-[#FF014F]">
                            সময়: {formatTime(secondsLeft)}
                        </div>
                    </div>

                    {/* All Questions */}
                    <div className="space-y-8">
                        {questions.map((q, idx) => (
                            <div
                                key={q.id}
                                className="border border-gray-700 rounded-lg p-4 bg-gray-900/40"
                            >
                                <h3 className="font-semibold mb-4">
                                    {idx + 1}. {q.question}
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        { key: "A", text: q.option_a },
                                        { key: "B", text: q.option_b },
                                        { key: "C", text: q.option_c },
                                        { key: "D", text: q.option_d },
                                    ].map((opt) => (
                                        <label
                                            key={opt.key}
                                            className={`block border rounded-lg px-4 py-2 cursor-pointer transition ${answers[q.id] === opt.key
                                                    ? "border-[#FF014F] bg-gray-700"
                                                    : "border-gray-600 hover:bg-gray-700"
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name={`q_${q.id}`}
                                                value={opt.key}
                                                checked={answers[q.id] === opt.key}
                                                onChange={() =>
                                                    handleSelect(q.id, opt.key)
                                                }
                                                className="hidden"
                                            />
                                            <span className="font-medium text-[#FF014F] mr-2">
                                                {opt.key}.
                                            </span>
                                            {opt.text}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-10">
                        <button
                            onClick={handleSubmit}
                            disabled={submitted}
                            className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-500 font-semibold text-lg disabled:opacity-50"
                        >
                            {submitted ? "পরীক্ষা জমা দেওয়া হয়েছে" : "পরীক্ষা শেষ করুন"}
                        </button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
