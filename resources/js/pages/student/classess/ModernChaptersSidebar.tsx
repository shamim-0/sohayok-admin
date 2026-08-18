import { useEffect, useState } from 'react';
import { FaYoutube, FaQuestionCircle, FaFileAlt } from "react-icons/fa";
import { MdSlideshow } from "react-icons/md";

const ModernChaptersSidebar = ({
    chapters,
    activeChapter,
    activeLesson,
    completedLessons,
    expandedChapters,
    loading,
    onToggleChapter,
    onSetActiveChapter,
    onSetActiveLesson,
    onToggleLessonCompletion,
    getChapterProgress,
    getOverallProgress
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [now, setNow] = useState(() => new Date());

    // 🕒 Refresh live-stream badges (LIVE / countdown) periodically
    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 30000);
        return () => clearInterval(timer);
    }, []);

    // For a youtube_stream lesson: null if not a stream, otherwise a badge
    // description — either "now live" or a countdown to scheduled_at.
    const getStreamBadge = (lesson) => {
        if (lesson.content_type !== 'video' || lesson.video_type !== 'youtube_stream') return null;
        if (!lesson.scheduled_at) return { text: '🔴 লাইভ', live: true };

        const scheduledAt = new Date(lesson.scheduled_at);
        if (now >= scheduledAt) return { text: '🔴 লাইভ', live: true };

        const totalMinutes = Math.max(0, Math.floor((scheduledAt - now) / 60000));
        const days = Math.floor(totalMinutes / 1440);
        const hours = Math.floor((totalMinutes % 1440) / 60);
        const minutes = totalMinutes % 60;

        let text;
        if (days > 0) text = `${days} দিন ${hours} ঘণ্টা বাকি`;
        else if (hours > 0) text = `${hours} ঘণ্টা ${minutes} মিনিট বাকি`;
        else text = `${minutes} মিনিট বাকি`;

        return { text, live: false };
    };

    // Get content type icon
    const getContentIcon = (contentType) => {
        const icons = {
            video: <FaYoutube className="text-white" />,
            quiz: <FaQuestionCircle className="text-white" />,
            lecture_sheet: <FaFileAlt className="text-white" />,
            slide: <MdSlideshow className="text-white" />
        };
        return icons[contentType] || '📖';
    };

    // Get content type label in Bengali
    const getContentLabel = (contentType) => {
        const labels = {
            video: 'ভিডিও',
            quiz: 'কুইজ',
            lecture_sheet: 'লেকচার শীট',
            slide: 'স্লাইড'
        };
        return labels[contentType] || 'কন্টেন্ট';
    };

    // Filter chapters and lessons based on search and filter
    const getFilteredChapters = () => {
        return chapters.map(chapter => {
            if (!chapter.lessons) return chapter;

            const filteredLessons = chapter.lessons.filter(lesson => {
                const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesFilter = filterType === 'all' || lesson.content_type === filterType;
                return matchesSearch && matchesFilter;
            });

            return {
                ...chapter,
                lessons: filteredLessons
            };
        }).filter(chapter =>
            chapter.lessons?.length > 0 ||
            chapter.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const filteredChapters = getFilteredChapters();

    return (
        <div className="w-full lg:w-96 xl:w-[420px] bg-gradient-to-b from-gray-900 to-gray-800 border-l border-gray-700/50 h-screen overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-gray-700/50">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-white font-bold text-xl">কোর্স কন্টেন্ট</h2>
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {getOverallProgress()}% সম্পূর্ণ
                    </div>
                </div>

                {/* Search and Filter */}
                <div className="space-y-3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="লেসন খুঁজুন..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        />
                        <span className="absolute right-3 top-3 text-gray-400">🔍</span>
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {['all', 'video', 'quiz', 'lecture_sheet', 'slide'].map(type => (
                            <button
                                key={type}
                                onClick={() => setFilterType(type)}
                                className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm font-medium transition-all ${filterType === type
                                        ? 'bg-blue-500 text-white shadow-lg'
                                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                                    }`}
                            >
                                {type === 'all' ? 'সব' : getContentLabel(type)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Progress Overview */}
            <div className="px-6 py-4 bg-gray-800/30 border-b border-gray-700/30">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span>মোট অগ্রগতি</span>
                    <span>{completedLessons.size} / {chapters.flatMap(ch => ch.lessons || []).length} লেসন</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-2">
                    <div
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-700 shadow-lg"
                        style={{ width: `${getOverallProgress()}%` }}
                    ></div>
                </div>
            </div>

            {/* Chapters List */}
            <div className="flex-1 overflow-auto">
                <div className="p-4 space-y-3">
                    {filteredChapters.map((chapter) => (
                        <div
                            key={chapter.id}
                            className="bg-gray-800/30 rounded-2xl border border-gray-700/30 overflow-hidden transition-all hover:border-gray-600/50"
                        >
                            {/* Chapter Header - Click to expand/collapse and NOT select chapter content */}
                            <div
                                className="p-4 cursor-pointer"
                                onClick={() => onToggleChapter(chapter.id)}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                                            <span className="text-white font-bold text-sm">
                                                {chapter.order}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold text-sm leading-tight">
                                                {chapter.name}
                                            </h4>
                                            <p className="text-gray-400 text-xs mt-1">
                                                {chapter.lessons?.length || 0} টি লেসন
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="bg-gray-700/50 rounded-lg px-2 py-1">
                                            <span className="text-gray-300 text-sm font-medium">
                                                {getChapterProgress(chapter)}%
                                            </span>
                                        </div>
                                        <span className={`transform transition-transform text-orange-500 ${expandedChapters.has(chapter.id) ? 'rotate-180' : ''
                                            }`}>
                                            ▼
                                        </span>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full bg-gray-700/50 rounded-full h-1.5">
                                    <div
                                        className="bg-gradient-to-r from-orange-500 to-red-500 h-1.5 rounded-full transition-all duration-700"
                                        style={{ width: `${getChapterProgress(chapter)}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Chapter Lessons - Click on lesson to select and show content */}
                            {expandedChapters.has(chapter.id) && (
                                <div className="bg-gray-900/50 p-3 space-y-2 border-t border-gray-700/30">
                                    {chapter.lessons?.sort((a, b) => a.order - b.order).map((lesson) => {
                                        const streamBadge = getStreamBadge(lesson);
                                        return (
                                        <div
                                            key={lesson.id}
                                            className={`p-3 rounded-xl cursor-pointer transition-all duration-300 border ${activeLesson === lesson.id
                                                    ? 'border-blue-500/50 bg-blue-500/10 shadow-lg'
                                                    : 'border-gray-600/30 bg-gray-700/20 hover:border-gray-500/50 hover:bg-gray-600/20'
                                                }`}
                                            onClick={() => {
                                                // When clicking a lesson, select it to show content
                                                onSetActiveLesson(lesson.id);
                                            }}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                                    <div className={`relative w-8 h-8 rounded-lg flex items-center justify-center text-sm ${activeLesson === lesson.id
                                                            ? 'bg-red-500/20 text-blue-400'
                                                            : 'bg-red-600/50 text-gray-400'
                                                        }`}>
                                                        {getContentIcon(lesson.content_type)}
                                                        {streamBadge?.live && (
                                                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse border border-gray-900" />
                                                        )}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h5 className={`font-medium text-sm truncate ${activeLesson === lesson.id ? 'text-white' : 'text-gray-300'
                                                            }`}>
                                                            {lesson.order}. {lesson.title}
                                                        </h5>
                                                        <div className="flex items-center gap-2 text-xs mt-1">
                                                            {streamBadge ? (
                                                                <span className={`px-2 py-1 rounded font-medium ${streamBadge.live
                                                                        ? 'bg-red-500/20 text-red-400'
                                                                        : 'bg-yellow-500/20 text-yellow-400'
                                                                    }`}>
                                                                    {streamBadge.text}
                                                                </span>
                                                            ) : (
                                                                <span className={`px-2 py-1 rounded ${activeLesson === lesson.id
                                                                        ? 'bg-blue-500/20 text-blue-400'
                                                                        : 'bg-gray-600/50 text-gray-400'
                                                                    }`}>
                                                                    {getContentLabel(lesson.content_type)}
                                                                </span>
                                                            )}
                                                            {lesson.time && (
                                                                <span className="text-gray-500 flex items-center gap-1">
                                                                    <span>⏱️</span>
                                                                    {lesson.time}ম
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onToggleLessonCompletion(lesson.id);
                                                    }}
                                                    disabled={loading}
                                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs transition-all ${completedLessons.has(lesson.id)
                                                            ? 'bg-green-500 border-green-500 text-white shadow-lg'
                                                            : 'border-gray-500 hover:border-gray-400'
                                                        } ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                                >
                                                    {completedLessons.has(lesson.id) && <span className="text-xs">✓</span>}
                                                </button>
                                            </div>
                                        </div>
                                        );
                                    })}
                                    {(!chapter.lessons || chapter.lessons.length === 0) && (
                                        <div className="text-center py-4 text-gray-400 text-sm">
                                            <div className="text-2xl mb-2">📭</div>
                                            এই অধ্যায়ে কোনো লেসন নেই
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}

                    {filteredChapters.length === 0 && (
                        <div className="text-center py-12 text-gray-400">
                            <div className="w-16 h-16 bg-gray-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🔍</span>
                            </div>
                            <p className="text-lg mb-2">কোনো রেজাল্ট পাওয়া যায়নি</p>
                            <p className="text-sm">অন্যান্য কীওয়ার্ড দিয়ে খুঁজুন</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ModernChaptersSidebar;