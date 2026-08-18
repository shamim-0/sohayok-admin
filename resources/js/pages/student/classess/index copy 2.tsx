import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function StartClass({ chapters, studentProgress, course_id, currentActiveLesson }) {
    const [activeChapter, setActiveChapter] = useState(chapters[0]?.id || null);
    const [activeLesson, setActiveLesson] = useState(currentActiveLesson);
    const [completedLessons, setCompletedLessons] = useState(new Set());
    const [expandedChapters, setExpandedChapters] = useState(new Set([chapters[0]?.id]));
    const [chapterProgress, setChapterProgress] = useState({});
    const [loading, setLoading] = useState(false);



    // Initialize progress from backend
    useEffect(() => {
        if (studentProgress && studentProgress.lessons) {
            const completed = new Set();
            Object.keys(studentProgress.lessons).forEach(lessonId => {
                if (studentProgress.lessons[lessonId].is_completed) {
                    completed.add(parseInt(lessonId));
                }
            });
            setCompletedLessons(completed);
        }

        if (studentProgress && studentProgress.chapters) {
            const progressMap = {};
            Object.keys(studentProgress.chapters).forEach(chapterId => {
                progressMap[chapterId] = studentProgress.chapters[chapterId];
            });
            setChapterProgress(progressMap);
        }



    }, [studentProgress, currentActiveLesson]);




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

    const getCsrfToken = () => {
        try {
            const metaTag = document.querySelector('meta[name="csrf-token"]');
            return metaTag ? metaTag.getAttribute('content') : '';
        } catch (error) {
            console.warn('CSRF token not available:', error);
            return '';
        }
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

    // Save progress to database
    const saveProgressToServer = async (lessonId, isCompleted) => {

        try {
            setLoading(true);
            const activeLessonData = getActiveLessonData();

            const response = await fetch('/student/progress/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': getCsrfToken(),
                },
                body: JSON.stringify({
                    course_id: course_id,
                    chapter_id: activeChapter,
                    lesson_id: lessonId,
                    is_completed: isCompleted
                })
            });

            const result = await response.json();

            if (!result.success) {
                console.error('Progress save failed:', result.message);
                // Revert UI changes if save failed
                setCompletedLessons(prev => {
                    const newSet = new Set(prev);
                    if (newSet.has(lessonId)) {
                        newSet.delete(lessonId);
                    } else {
                        newSet.add(lessonId);
                    }
                    return newSet;
                });

                alert('প্রোগ্রেস সেভ করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
            } else {
                // Update chapter progress from server response if needed
                if (result.chapterProgress) {
                    setChapterProgress(prev => ({
                        ...prev,
                        [activeChapter]: result.chapterProgress
                    }));
                }
            }
        } catch (error) {
            console.error('Error saving progress:', error);
            // Revert UI changes on error
            setCompletedLessons(prev => {
                const newSet = new Set(prev);
                if (newSet.has(lessonId)) {
                    newSet.delete(lessonId);
                } else {
                    newSet.add(lessonId);
                }
                return newSet;
            });
            alert('নেটওয়ার্ক সমস্যা। আবার চেষ্টা করুন।');
        } finally {
            setLoading(false);
        }
    };

    // Handle lesson completion
    const toggleLessonCompletion = async (lessonId) => {
        if (loading) return;

        const newCompletedState = !completedLessons.has(lessonId);

        // Optimistic UI update
        setCompletedLessons(prev => {
            const newSet = new Set(prev);
            if (newSet.has(lessonId)) {
                newSet.delete(lessonId);
            } else {
                newSet.add(lessonId);
            }
            return newSet;
        });

        // Save to server
        await saveProgressToServer(lessonId, newCompletedState);
    };

    // Calculate progress for a chapter
    const getChapterProgress = (chapter) => {
        // Use server-side progress if available
        if (chapterProgress[chapter.id]) {
            return Math.round(chapterProgress[chapter.id].progress_percentage);
        }

        // Fallback to client-side calculation
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
                            className="w-full h-full"
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
                            className="w-full h-full"
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

    // Fixed Sticky Header Component
    const StickyLessonHeader = ({ lesson }) => {
        if (!lesson) return null;

        return (
            <div className="sticky top-0 z-50 bg-[#1f2937] border-b border-gray-700 shadow-lg">
                <div className="px-4 py-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        {/* Lesson Title */}
                        <div className="flex-1">
                            <h4 className="text-white font-bold text-lg md:text-xl truncate">
                                {lesson.title}
                            </h4>
                            <p className="text-gray-400 text-sm">
                                {getContentLabel(lesson.content_type)}
                                {lesson.time && ` • ${lesson.time} মিনিট`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Fixed Content Section - Same height for all content types
    const FixedContentSection = ({ lesson }) => {
        if (!lesson) {
            return (
                <div className="flex items-center justify-center pb-20 md:min-h-[500px]">
                    <div className="text-center">
                        <div className="text-6xl mb-4">📖</div>
                        <p className="text-gray-400 text-lg">কোনো লেসন সিলেক্ট করা হয়নি</p>
                        <p className="text-gray-500 text-sm mt-2">বাম পাশ থেকে একটি লেসন সিলেক্ট করুন</p>
                    </div>
                </div>
            );
        }

        return (
            <div className="md:min-h-[500px] flex flex-col">
                {/* Video Content */}
                {lesson.content_type === 'video' && (
                    <div className="flex-1 flex flex-col">
                        <div className="flex-1 bg-black rounded overflow-hidden">
                            {renderVideoPlayer(lesson)}
                        </div>

                    </div>
                )}

                {/* Quiz Content */}
                {lesson.content_type === 'quiz' && (
                    <div className="flex-1 flex flex-col justify-center bg-[#9595952e] rounded p-6">
                        <div className="text-center mb-8">
                            <div className="text-6xl mb-4">📝</div>
                            <h3 className="text-2xl font-bold text-white mb-4">{lesson.title}</h3>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                            <div className="bg-[#ffffff0d] rounded-lg p-4 text-center">
                                <div className="text-gray-400 text-sm mb-2">সময়</div>
                                <div className="text-white font-bold text-xl">{lesson.time} মিনিট</div>
                            </div>
                            <div className="bg-[#ffffff0d] rounded-lg p-4 text-center">
                                <div className="text-gray-400 text-sm mb-2">মোট মার্ক</div>
                                <div className="text-white font-bold text-xl">{lesson.mark}</div>
                            </div>
                            <div className="bg-[#ffffff0d] rounded-lg p-4 text-center">
                                <div className="text-gray-400 text-sm mb-2">পাসিং মার্ক</div>
                                <div className="text-white font-bold text-xl">{lesson.passing_mark}</div>
                            </div>
                        </div>

                        <div className="text-center mt-auto pb-10">
                            <Link href={`/student/class/start-quiz/${lesson.id}/${lesson.course_id}`} className="bg-[#FF014F] hover:bg-[#FF014F]/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
                                🚀 কুইজ শুরু করুন
                            </Link>
                        </div>
                    </div>
                )}

                {/* PDF/Slide Content */}
                {(lesson.content_type === 'lecture_sheet' || lesson.content_type === 'slide') && (
                    <div className="flex-1 flex flex-col justify-center bg-[#9595952e] rounded p-6 text-center">
                        <div className="text-6xl mb-6">📄</div>
                        <h3 className="text-2xl font-bold text-white mb-4">{lesson.title}</h3>

                        {lesson.file_path ? (
                            <>
                                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                    এই {getContentLabel(lesson.content_type)} ডাউনলোড করে নিন এবং আপনার স্টাডি শুরু করুন।
                                </p>
                                <div className="flex gap-4 justify-center items-center mt-auto">
                                    <a
                                        href={`/${lesson.file_path}`}
                                        download
                                        className="bg-[#FF014F] hover:bg-[#FF014F]/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                                    >
                                        <span className="text-lg">📥</span>
                                        <span>ডাউনলোড করুন</span>
                                    </a>
                                    <a
                                        href={`/${lesson.file_path}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#FF014F] hover:bg-[#FF014F]/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                                    >
                                        <span className="text-lg">👁️</span>
                                        <span>প্রিভিউ দেখুন</span>
                                    </a>
                                </div>
                                {lesson.file_name && (
                                    <p className="text-gray-400 mt-4">
                                        ফাইল: <span className="text-gray-300">{lesson.file_name}</span>
                                    </p>
                                )}
                            </>
                        ) : (
                            <div className="mt-auto">
                                <p className="text-gray-400">এই {getContentLabel(lesson.content_type)} এর জন্য কোনো ফাইল পাওয়া যায়নি</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-900">

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Side - Fixed Content Area */}
                <div className="lg:w-2/3">
                    <div className="bg-[#9595952e] backdrop-blur-lg overflow-hidden">
                        {/* Sticky Header - Always visible at top */}
                        <StickyLessonHeader lesson={getActiveLessonData()} />

                        {/* Fixed Content - Same height for all types */}
                        <FixedContentSection lesson={getActiveLessonData()} />
                    </div>
                </div>

                {/* Right Side - Chapters Accordion */}
                <div className="lg:w-1/3">
                    <div className="bg-[#9595952e] backdrop-blur-lg p-4 sticky top-4 md:max-h-[calc(100vh-120px)] max-h-[calc(100vh-200px)] overflow-y-auto">
                        <div className="  ">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-white font-bold text-xl">
                                    অধ্যায়সমূহ ({chapters.length})
                                </h3>
                                <div className="flex items-center gap-3">
                                    <span className="text-gray-300 text-sm">সামগ্রিক অগ্রগতি:</span>
                                    <span className="text-green-400 font-bold text-lg">{getOverallProgress()}%</span>
                                </div>
                            </div>


                        </div>
                        <div className="space-y-2">
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
                                                <span className={`transform transition-transform ${expandedChapters.has(chapter.id) ? 'rotate-90' : ''
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
                                                    className={`border rounded p-3 cursor-pointer transition-all ${activeLesson === lesson.id
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
                                                            disabled={loading}
                                                            className={`w-5 h-5 rounded border-2 flex items-center justify-center text-xs ${completedLessons.has(lesson.id)
                                                                ? 'bg-[#FF014F] border-[#FF014F] text-white'
                                                                : 'border-gray-500'
                                                                } ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
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
    );
}