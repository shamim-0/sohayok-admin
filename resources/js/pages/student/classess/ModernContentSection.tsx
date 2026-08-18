import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

// Extracts a YouTube video ID from watch/short/embed URL formats
const extractYoutubeId = (url) => {
    if (!url) return '';
    if (url.includes('youtube.com/watch')) return url.split('v=')[1]?.split('&')[0] ?? '';
    if (url.includes('youtu.be/')) return url.split('youtu.be/')[1]?.split('?')[0] ?? '';
    if (url.includes('youtube.com/embed/')) return url.split('embed/')[1]?.split('?')[0] ?? '';
    return url;
};

const ModernContentSection = ({ lesson, onNextLesson, onPreviousLesson }) => {
    const [now, setNow] = useState(() => new Date());

    // 🕒 Tick every second while this lesson is a locked live stream, so the
    // countdown stays live and the player swaps in automatically once it starts.
    useEffect(() => {
        if (lesson?.video_type !== 'youtube_stream' || !lesson?.scheduled_at) return;
        const scheduledAt = new Date(lesson.scheduled_at);
        if (new Date() >= scheduledAt) return;

        const timer = setInterval(() => {
            const current = new Date();
            setNow(current);
            if (current >= scheduledAt) clearInterval(timer);
        }, 1000);
        return () => clearInterval(timer);
    }, [lesson?.id, lesson?.video_type, lesson?.scheduled_at]);

    if (!lesson) {
        return (
            <div className="flex items-center justify-center py-20 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="text-center">
                    <div className="w-20 h-20 bg-gray-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl opacity-40">📖</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">লেসন সিলেক্ট করুন</h3>
                    <p className="text-gray-400 text-sm">বাম পাশ থেকে একটি লেসন সিলেক্ট করে শুরু করুন</p>
                </div>
            </div>
        );
    }

    // Video player render function
    const renderVideoPlayer = (lesson) => {
        if (!lesson.video_url) {
            return (
                <div className="text-center py-8">
                    <div className="text-4xl mb-3 opacity-40">🎥</div>
                    <p className="text-gray-400">ভিডিও লিঙ্ক পাওয়া যায়নি</p>
                </div>
            );
        }

        const videoContainerClass = "bg-black rounded-lg overflow-hidden";

        switch (lesson.video_type) {
            case 'youtube':
                const videoId = lesson.video_url?.split('v=')[1]?.split('&')[0];
                return (
                    <div className={videoContainerClass}>
                        <div className="aspect-video w-full">
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                );

            case 'hls':
                return (
                    <div className={videoContainerClass}>
                        <div className="aspect-video w-full">
                            <video
                                controls
                                className="w-full h-full"
                                crossOrigin="anonymous"
                                controlsList="nodownload"
                            >
                                <source src={lesson.video_url} type="application/x-mpegURL" />
                                আপনার ব্রাউজার HLS ভিডিও সাপোর্ট করে না।
                            </video>
                        </div>
                    </div>
                );

            case 'youtube_stream': {
                const scheduledAt = lesson.scheduled_at ? new Date(lesson.scheduled_at) : null;
                const isLocked = scheduledAt && now < scheduledAt;

                if (isLocked) {
                    const totalSeconds = Math.max(0, Math.floor((scheduledAt - now) / 1000));
                    const days = Math.floor(totalSeconds / 86400);
                    const hours = Math.floor((totalSeconds % 86400) / 3600);
                    const minutes = Math.floor((totalSeconds % 3600) / 60);
                    const seconds = totalSeconds % 60;

                    return (
                        <div className="bg-gray-900 rounded-lg py-12 px-6 text-center">
                            <div className="text-5xl mb-4">🔴</div>
                            <h3 className="text-white font-bold text-lg mb-2">লাইভ ক্লাসটি এখনো শুরু হয়নি</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                শুরু হবে: {scheduledAt.toLocaleString('bn-BD', {
                                    day: 'numeric',
                                    month: 'long',
                                    hour: 'numeric',
                                    minute: '2-digit',
                                    hour12: true,
                                })}
                            </p>
                            <div className="flex justify-center gap-3">
                                {days > 0 && (
                                    <div className="bg-gray-800 rounded-lg px-4 py-2 min-w-[64px]">
                                        <div className="text-2xl font-bold text-[#FF014F]">{days}</div>
                                        <div className="text-xs text-gray-400">দিন</div>
                                    </div>
                                )}
                                <div className="bg-gray-800 rounded-lg px-4 py-2 min-w-[64px]">
                                    <div className="text-2xl font-bold text-[#FF014F]">{String(hours).padStart(2, '0')}</div>
                                    <div className="text-xs text-gray-400">ঘণ্টা</div>
                                </div>
                                <div className="bg-gray-800 rounded-lg px-4 py-2 min-w-[64px]">
                                    <div className="text-2xl font-bold text-[#FF014F]">{String(minutes).padStart(2, '0')}</div>
                                    <div className="text-xs text-gray-400">মিনিট</div>
                                </div>
                                <div className="bg-gray-800 rounded-lg px-4 py-2 min-w-[64px]">
                                    <div className="text-2xl font-bold text-[#FF014F]">{String(seconds).padStart(2, '0')}</div>
                                    <div className="text-xs text-gray-400">সেকেন্ড</div>
                                </div>
                            </div>
                        </div>
                    );
                }

                const streamVideoId = extractYoutubeId(lesson.video_url);
                return (
                    <div className={videoContainerClass}>
                        <div className="aspect-video w-full relative">
                            <div className="absolute top-2 left-2 z-10 bg-[#FF014F] text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1.5">
                                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                LIVE
                            </div>
                            <iframe
                                src={`https://www.youtube.com/embed/${streamVideoId}?autoplay=1&rel=0&modestbranding=1`}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                );
            }

            case 'googledrive':
                const driveId = lesson.video_url.match(/[-\w]{25,}/);
                if (driveId) {
                    return (
                        <div className={videoContainerClass}>
                            <div className="aspect-video w-full">
                                <iframe
                                    src={`https://drive.google.com/file/d/${driveId[0]}/preview`}
                                    className="w-full h-full"
                                    allow="autoplay"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    );
                }
                return (
                    <div className="text-center py-6">
                        <div className="text-3xl mb-2 opacity-60">🎥</div>
                        <a
                            href={lesson.video_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#FF014F] hover:bg-[#FF014F]/90 text-white px-4 py-2 rounded-lg font-medium text-xs inline-flex items-center gap-1"
                        >
                            <span>📎</span>
                            গুগল ড্রাইভ ভিডিও দেখুন
                        </a>
                    </div>
                );

            case 'facebook':
                return (
                    <div className="text-center py-6">
                        <div className="text-3xl mb-2 opacity-60">📱</div>
                        <h3 className="text-base font-bold text-white mb-2">ফেসবুক ভিডিও</h3>
                        <p className="text-gray-300 mb-3 text-xs">এই ভিডিওটি দেখতে ফেসবুক এ ভিজিট করুন</p>
                        <a
                            href={lesson.video_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#1877F2] hover:bg-[#1877F2] text-white px-4 py-2 rounded-lg font-medium text-xs inline-flex items-center gap-1"
                        >
                            <span>🔗</span>
                            ফেসবুকে ভিডিও দেখুন
                        </a>
                    </div>
                );

            default:
                return (
                    <div className="text-center py-6">
                        <div className="text-3xl mb-2 opacity-60">🎥</div>
                        <a
                            href={lesson.video_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#FF014F] hover:bg-[#FF014F]/90 text-white px-4 py-2 rounded-lg font-medium text-xs inline-flex items-center gap-1"
                        >
                            <span>🔗</span>
                            ভিডিও দেখুন
                        </a>
                    </div>
                );
        }
    };

    return (
        <div className="">
            <div className="max-w-4xl mx-auto">
                {lesson.content_type === 'video' && (
                    <div className="space-y-6">
                        <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50">
                            {renderVideoPlayer(lesson)}
                        </div>
                        
                        {lesson.description && (
                            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30">
                                <h3 className="text-white font-semibold text-lg mb-3">লেসন ডিটেইলস</h3>
                                <p className="text-gray-300 leading-relaxed">{lesson.description}</p>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center">
                            <button
                                onClick={onPreviousLesson}
                                className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-colors"
                            >
                                <span>←</span>
                                পূর্ববর্তী
                            </button>
                            <button
                                onClick={onNextLesson}
                                className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
                            >
                                পরবর্তী
                                <span>→</span>
                            </button>
                        </div>
                    </div>
                )}

                {lesson.content_type === 'quiz' && (
                    <div className="flex flex-col justify-center bg-gray-800 border border-gray-700 p-6 min-h-[420px] overflow-hidden">
                        <div className="text-center mb-6">
                            <div className="text-5xl mb-3 text-[#FF014F]">📝</div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {lesson.title}
                            </h3>
                            {lesson.description && (
                                <p className="text-gray-300 text-sm leading-snug max-w-2xl mx-auto">
                                    {lesson.description}
                                </p>
                            )}
                        </div>

                        {lesson.result ? (
                            <div className="max-w-4xl mx-auto">
                                <h5 className="text-white text-lg text-center mb-4 font-semibold">
                                    তুমি ইতিমধ্যে এই পরীক্ষাটিতে অংশগ্রহণ করেছো
                                </h5>

                                {lesson.result.passing_status === "failed" ? (
                                    <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 mb-6 text-center">
                                        <div className="text-red-400 font-bold text-base mb-1">
                                            দুঃখিত! তুমি পাস করতে পারোনি
                                        </div>
                                        <div className="text-red-300 text-sm">
                                            পাস করার জন্য ন্যূনতম {lesson.passing_mark || "প্রয়োজনীয়"} নাম্বার প্রয়োজন ছিল
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 mb-6 text-center">
                                        <div className="text-green-400 font-bold text-base">
                                            🎉 অভিনন্দন! তুমি পাস করেছো
                                        </div>
                                    </div>
                                )}

                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center">
                                        <div className="text-green-400 text-sm mb-0.5 font-medium">সঠিক</div>
                                        <div className="text-white font-bold text-lg">
                                            {lesson.result.total_correct}
                                        </div>
                                    </div>
                                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-center">
                                        <div className="text-red-400 text-sm mb-0.5 font-medium">ভুল</div>
                                        <div className="text-white font-bold text-lg">
                                            {lesson.result.total_wrong}
                                        </div>
                                    </div>
                                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-center">
                                        <div className="text-blue-400 text-sm mb-0.5 font-medium">নাম্বার</div>
                                        <div className="text-white font-bold text-lg">
                                            {lesson.result.obtained_marks}
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <Link
                                        href={`/student/quiz/results/${lesson.id}`}
                                        className="bg-[#FF014F] hover:bg-[#FF014F]/90 text-white px-6 py-3 rounded-lg font-medium text-sm inline-flex items-center gap-2"
                                    >
                                        <span>📄</span> উত্তরপত্র দেখুন
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="max-w-4xl mx-auto">
                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    <div className="bg-gray-700 rounded-lg p-3 text-center border border-gray-600">
                                        <div className="text-gray-400 text-sm mb-0.5 font-medium">সময়</div>
                                        <div className="text-white font-bold text-lg">{lesson.time}</div>
                                        <div className="text-gray-400 text-xs">মিনিট</div>
                                    </div>
                                    <div className="bg-gray-700 rounded-lg p-3 text-center border border-gray-600">
                                        <div className="text-gray-400 text-sm mb-0.5 font-medium">মোট মার্ক</div>
                                        <div className="text-white font-bold text-lg">{lesson.mark}</div>
                                    </div>
                                    <div className="bg-gray-700 rounded-lg p-3 text-center border border-gray-600">
                                        <div className="text-gray-400 text-sm mb-0.5 font-medium">পাসিং মার্ক</div>
                                        <div className="text-white font-bold text-lg">{lesson.passing_mark}</div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <Link
                                        href={`/student/class/start-quiz/${lesson.id}/${lesson.course_id}`}
                                        className="bg-[#FF014F] hover:bg-[#FF014F]/90 text-white px-6 py-3 rounded-lg font-medium text-sm inline-flex items-center gap-2"
                                    >
                                        <span>🚀</span> কুইজ শুরু করুন
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {(lesson.content_type === 'lecture_sheet' || lesson.content_type === 'slide') && (
                    <div className="flex flex-col justify-center bg-gray-800 border border-gray-700 p-2 min-h-[420px] text-center overflow-hidden">
                        <div className="text-5xl mb-4 text-[#FF014F]">📄</div>
                        <h3 className="text-xl font-bold text-white mb-3">
                            {lesson.title}
                        </h3>

                        {lesson.description && (
                            <p className="text-gray-300 text-sm mb-6 max-w-2xl mx-auto leading-relaxed">
                                {lesson.description}
                            </p>
                        )}

                        {lesson.file_path ? (
                            <>
                                <p className="text-gray-300 text-sm mb-6 max-w-2xl mx-auto">
                                    এই {getContentLabel(lesson.content_type)} ডাউনলোড করে নিন এবং আপনার স্টাডি শুরু করুন।
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                                    <a
                                        href={`/${lesson.file_path}`}
                                        download
                                        className="bg-[#FF014F] hover:bg-[#FF014F]/90 text-white px-5 py-3 rounded-lg font-medium text-sm inline-flex items-center gap-2"
                                    >
                                        <span className="text-base">📥</span>
                                        ডাউনলোড
                                    </a>

                                    <a
                                        href={`/${lesson.file_path}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-3 rounded-lg font-medium text-sm inline-flex items-center gap-2"
                                    >
                                        <span className="text-base">👁️</span>
                                        প্রিভিউ
                                    </a>
                                </div>

                                {lesson.file_name && (
                                    <p className="text-gray-400 mt-4 text-sm truncate">
                                        ফাইল: <span className="text-gray-300 font-medium">{lesson.file_name}</span>
                                    </p>
                                )}
                            </>
                        ) : (
                            <div className="mt-4">
                                <p className="text-gray-400 text-sm">
                                    এই {getContentLabel(lesson.content_type)} এর জন্য কোনো ফাইল পাওয়া যায়নি
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

// Helper function
const getContentLabel = (contentType) => {
    const labels = {
        video: 'ভিডিও',
        quiz: 'কুইজ',
        lecture_sheet: 'লেকচার শীট',
        slide: 'স্লাইড'
    };
    return labels[contentType] || 'কন্টেন্ট';
};

export default ModernContentSection;