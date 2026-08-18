import { useState } from 'react';

export default function StartClass({ chapters }) {
    const [activeChapter, setActiveChapter] = useState(chapters[0]?.id || null);
    const [activeLesson, setActiveLesson] = useState(null);
    const [completedLessons, setCompletedLessons] = useState(new Set());
    const [expandedChapters, setExpandedChapters] = useState(new Set([chapters[0]?.id]));

    // Toggle chapter expansion
    const toggleChapter = (chapterId) => {
        setExpandedChapters(prev => {
            const newSet = new Set(prev);
            if (newSet.has(chapterId)) {
                newSet.delete(chapterId);
            } else {
                newSet.add(chapterId);
            }
            return newSet;
        });
    };

    // Get content type icon
    const getContentIcon = (contentType) => {
        const icons = {
            video: '🎥',
            quiz: '📝',
            lecture_sheet: '📄',
            slide: '📊'
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

    // Handle lesson completion
    const toggleLessonCompletion = (lessonId) => {
        setCompletedLessons(prev => {
            const newSet = new Set(prev);
            if (newSet.has(lessonId)) {
                newSet.delete(lessonId);
            } else {
                newSet.add(lessonId);
            }
            return newSet;
        });
    };

    // Calculate progress for a chapter
    const getChapterProgress = (chapter) => {
        if (!chapter.lessons || chapter.lessons.length === 0) return 0;
        const completed = chapter.lessons.filter(lesson => completedLessons.has(lesson.id)).length;
        return Math.round((completed / chapter.lessons.length) * 100);
    };

    // Calculate overall course progress
    const getOverallProgress = () => {
        const allLessons = chapters.flatMap(chapter => chapter.lessons || []);
        if (allLessons.length === 0) return 0;
        const completed = allLessons.filter(lesson => completedLessons.has(lesson.id)).length;
        return Math.round((completed / allLessons.length) * 100);
    };

    // Get current active lesson data
    const getActiveLessonData = () => {
        if (!activeLesson || !activeChapter) return null;
        
        const chapter = chapters.find(ch => ch.id === activeChapter);
        if (!chapter || !chapter.lessons) return null;
        
        const lesson = chapter.lessons.find(les => les.id === activeLesson);
        return lesson || null;
    };

    // Render video player based on video type
    const renderVideoPlayer = (lesson) => {
        if (!lesson.video_url) {
            return (
                <div className="text-center py-8">
                    <div className="text-6xl mb-4">🎥</div>
                    <p className="text-gray-400">ভিডিও লিঙ্ক পাওয়া যায়নি</p>
                </div>
            );
        }

        switch (lesson.video_type) {
            case 'youtube':
                const videoId = lesson.video_url?.split('v=')[1]?.split('&')[0];
                return (
                    <div className="aspect-video bg-black rounded-lg">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            className="w-full h-full rounded-lg"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                );

            case 'hls':
                return (
                    <div className="aspect-video bg-black rounded-lg">
                        <video
                            controls
                            className="w-full h-full rounded-lg"
                            crossOrigin="anonymous"
                        >
                            <source src={lesson.video_url} type="application/x-mpegURL" />
                            আপনার ব্রাউজার HLS ভিডিও সাপোর্ট করে না।
                        </video>
                    </div>
                );

            case 'googledrive':
                // Extract Google Drive file ID from URL
                const driveId = lesson.video_url.match(/[-\w]{25,}/);
                if (driveId) {
                    return (
                        <div className="aspect-video bg-black rounded-lg">
                            <iframe
                                src={`https://drive.google.com/file/d/${driveId[0]}/preview`}
                                className="w-full h-full rounded-lg"
                                allow="autoplay"
                                allowFullScreen
                            />
                        </div>
                    );
                }
                // Fallback to direct link
                return (
                    <div className="text-center py-8">
                        <div className="text-6xl mb-4">🎥</div>
                        <a 
                            href={lesson.video_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#FF014F] hover:bg-[#FF014F]/90 text-white px-6 py-3 rounded-lg font-medium inline-block"
                        >
                            গুগল ড্রাইভ ভিডিও দেখুন
                        </a>
                    </div>
                );

            case 'facebook':
                return (
                    <div className="text-center py-8">
                        <div className="text-6xl mb-4">📱</div>
                        <h3 className="text-xl font-bold text-white mb-4">ফেসবুক ভিডিও</h3>
                        <p className="text-gray-300 mb-6">এই ভিডিওটি দেখতে ফেসবুতে ভিজিট করুন</p>
                        <a 
                            href={lesson.video_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center space-x-2"
                        >
                            <span>ফেসবুকে ভিডিও দেখুন</span>
                            <span>🔗</span>
                        </a>
                    </div>
                );

            default:
                return (
                    <div className="text-center py-8">
                        <div className="text-6xl mb-4">🎥</div>
                        <a 
                            href={lesson.video_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#FF014F] hover:bg-[#FF014F]/90 text-white px-6 py-3 rounded-lg font-medium inline-block"
                        >
                            ভিডিও দেখুন
                        </a>
                    </div>
                );
        }
    };

    // Render lesson content based on type
    const renderLessonContent = (lesson) => {
        if (!lesson) {
            return (
                <div className="text-center py-8">
                    <div className="text-6xl mb-4">📖</div>
                    <p className="text-gray-400">কোনো লেসন সিলেক্ট করা হয়নি</p>
                    <p className="text-gray-500 text-sm mt-2">বাম পাশ থেকে একটি লেসন সিলেক্ট করুন</p>
                </div>
            );
        }

        switch (lesson.content_type) {
            case 'video':
                return (
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-white font-bold text-lg">
                                {lesson.title}
                            </h4>
                            <span className="bg-[#FF014F]/20 text-[#FF014F] px-3 py-1 rounded-full text-sm">
                                {lesson.video_type ? lesson.video_type.toUpperCase() : 'VIDEO'}
                            </span>
                        </div>
                        {renderVideoPlayer(lesson)}
                    </div>
                );

            case 'quiz':
                return (
                    <div className="text-center py-8">
                        <div className="text-6xl mb-4">📝</div>
                        <h3 className="text-xl font-bold text-white mb-2">{lesson.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="bg-[#9595952e] rounded p-4">
                                <div className="text-gray-400 text-sm">সময়</div>
                                <div className="text-white font-bold">{lesson.time} মিনিট</div>
                            </div>
                            <div className="bg-[#9595952e] rounded p-4">
                                <div className="text-gray-400 text-sm">মোট মার্ক</div>
                                <div className="text-white font-bold">{lesson.mark}</div>
                            </div>
                            <div className="bg-[#9595952e] rounded p-4">
                                <div className="text-gray-400 text-sm">পাসিং মার্ক</div>
                                <div className="text-white font-bold">{lesson.passing_mark}</div>
                            </div>
                        </div>
                        {lesson.negative_mark && (
                            <div className="bg-yellow-500/20 text-yellow-400 mx-5 p-3 rounded-lg mb-4 inline-block">
                                নেগেটিভ মার্ক: {lesson.negative_mark}
                            </div>
                        )}
                        <button className="bg-[#FF014F] hover:bg-[#FF014F]/90 text-white px-6 py-3 rounded-lg font-medium">
                            কুইজ শুরু করুন
                        </button>
                    </div>
                );

            case 'lecture_sheet':
            case 'slide':
                if (lesson.file_path) {
                    return (
                        <div className="text-center py-8">
                            <div className="text-6xl mb-4">📄</div>
                            <h3 className="text-xl font-bold text-white mb-2">{lesson.title}</h3>
                            <a 
                                href={`/${lesson.file_path}`}
                                download
                                className="bg-[#FF014F] hover:bg-[#FF014F]/90 text-white px-6 py-3 rounded-lg font-medium inline-block"
                            >
                                ডাউনলোড করুন
                            </a>
                            <p className="text-gray-400 mt-2">{lesson.file_name}</p>
                        </div>
                    );
                }
                return (
                    <div className="text-center py-8">
                        <div className="text-6xl mb-4">📄</div>
                        <h3 className="text-xl font-bold text-white mb-2">{lesson.title}</h3>
                        <p className="text-gray-400">লেকচার শীট</p>
                    </div>
                );

            default:
                return (
                    <div className="text-center py-8">
                        <div className="text-6xl mb-4">📖</div>
                        <h3 className="text-xl font-bold text-white mb-2">{lesson.title}</h3>
                        <p className="text-gray-400">কন্টেন্ট লোড হচ্ছে...</p>
                    </div>
                );
        }
    };

    return (
        <>
            <div className="min-h-screen bg-gray-900">
                {/* Header */}
                <div className="bg-[#aaaaaa2f] border-[#FF014F]/20 rounded p-4 md:p-6 mb-4 md:mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                                ক্লাসরুম 🎓
                            </h1>
                            <p className="text-gray-300 text-sm md:text-base">
                                তোমার লার্নিং জার্নি শুরু করো
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <div className="bg-[#FF014F]/20 text-[#FF014F] px-4 py-2 rounded-lg text-sm font-medium">
                                সামগ্রিক অগ্রগতি: {getOverallProgress()}%
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Side - Video Content */}
                    <div className="lg:w-2/3">
                        <div className="bg-[#9595952e] backdrop-blur-lg rounded-lg p-6">
                            <div className="bg-[#ffffff0d] rounded-lg p-4">
                                {renderLessonContent(getActiveLessonData())}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Chapters Accordion */}
                    <div className="lg:w-1/3">
                        <div className="bg-[#9595952e] backdrop-blur-lg rounded-lg p-4">
                            <h3 className="text-white font-bold text-lg mb-4 border-b border-gray-700 pb-2">
                                অধ্যায়সমূহ ({chapters.length})
                            </h3>
                            <div className="space-y-2 max-h-[600px] overflow-y-auto">
                                {chapters.map((chapter) => (
                                    <div
                                        key={chapter.id}
                                        className="border border-gray-600 rounded-lg overflow-hidden"
                                    >
                                        {/* Chapter Header */}
                                        <div
                                            className="p-3 cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors"
                                            onClick={() => toggleChapter(chapter.id)}
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center space-x-3">
                                                    <span className={`transform transition-transform ${
                                                        expandedChapters.has(chapter.id) ? 'rotate-90' : ''
                                                    }`}>
                                                        ▶
                                                    </span>
                                                    <h4 className="text-white font-medium text-sm">
                                                        {chapter.order}. {chapter.name}
                                                    </h4>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                                                        {chapter.lessons?.length || 0}
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            {/* Progress Bar */}
                                            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                                                <div 
                                                    className="bg-[#FF014F] h-2 rounded-full transition-all duration-300"
                                                    style={{ width: `${getChapterProgress(chapter)}%` }}
                                                ></div>
                                            </div>
                                            
                                            <div className="flex justify-between text-xs text-gray-400 mt-1">
                                                <span>{getChapterProgress(chapter)}% সম্পূর্ণ</span>
                                                <span>{chapter.lessons?.length || 0}টি লেসন</span>
                                            </div>
                                        </div>

                                        {/* Chapter Lessons - Collapsible */}
                                        {expandedChapters.has(chapter.id) && (
                                            <div className="bg-gray-900 p-2 space-y-2">
                                                {chapter.lessons?.sort((a, b) => a.order - b.order).map((lesson) => (
                                                    <div
                                                        key={lesson.id}
                                                        className={`border rounded p-3 cursor-pointer transition-all ${
                                                            activeLesson === lesson.id
                                                                ? 'border-[#FF014F] bg-[#FF014F]/10'
                                                                : 'border-gray-700 hover:border-gray-500'
                                                        }`}
                                                        onClick={() => {
                                                            setActiveChapter(chapter.id);
                                                            setActiveLesson(lesson.id);
                                                        }}
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center space-x-2">
                                                                <span className="text-sm">
                                                                    {getContentIcon(lesson.content_type)}
                                                                </span>
                                                                <div className="flex-1">
                                                                    <h5 className="text-white text-xs font-medium">
                                                                        {lesson.order}. {lesson.title}
                                                                    </h5>
                                                                    <p className="text-gray-400 text-xs">
                                                                        {getContentLabel(lesson.content_type)}
                                                                        {lesson.time && ` • ${lesson.time} মিনিট`}
                                                                        {lesson.video_type && ` • ${lesson.video_type}`}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    toggleLessonCompletion(lesson.id);
                                                                }}
                                                                className={`w-5 h-5 rounded border-2 flex items-center justify-center text-xs ${
                                                                    completedLessons.has(lesson.id)
                                                                        ? 'bg-[#FF014F] border-[#FF014F] text-white'
                                                                        : 'border-gray-500'
                                                                }`}
                                                            >
                                                                {completedLessons.has(lesson.id) && '✓'}
                                                            </button>
                                                        </div>
                                                    </div>
                                                )) || (
                                                    <div className="text-center py-4 text-gray-400 text-sm">
                                                        এই অধ্যায়ে কোনো লেসন নেই
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}