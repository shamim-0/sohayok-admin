import { useState, useEffect } from 'react';
import ModernChaptersSidebar from './ModernChaptersSidebar';
import ModernCommentsSection from './ModernCommentsSection';
import ModernContentSection from './ModernContentSection';
import ModernHeader from './ModernHeader';

export default function StartClass({ chapters, studentProgress, course_id }) {
    const [activeChapter, setActiveChapter] = useState(null);
    const [activeLesson, setActiveLesson] = useState(null);
    const [completedLessons, setCompletedLessons] = useState(new Set());
    const [expandedChapters, setExpandedChapters] = useState(new Set());
    const [chapterProgress, setChapterProgress] = useState({});
    const [loading, setLoading] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const [error, setError] = useState(null);

    // Initialize progress from backend
    useEffect(() => {
        try {
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

            setIsInitialized(true);
        } catch (err) {
            console.error('Error initializing progress:', err);
            setError('প্রোগ্রেস লোড করতে সমস্যা হয়েছে');
            setIsInitialized(true);
        }
    }, [studentProgress]);

    // Auto-expand first chapter when page loads
    // useEffect(() => {
    //     if (chapters && chapters.length > 0) {
    //         setExpandedChapters(new Set([chapters[0].id]));
    //     }
    // }, [chapters]);

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

    // Save progress to database
    const saveProgressToServer = async (lessonId, isCompleted) => {
        if (!course_id || !activeChapter) {
            console.error('Missing course_id or activeChapter');
            return false;
        }

        try {
            setLoading(true);
            const response = await fetch('/student/progress/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': getCsrfToken(),
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    course_id: course_id,
                    chapter_id: activeChapter,
                    lesson_id: lessonId,
                    is_completed: isCompleted
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            if (!result.success) {
                console.error('Progress save failed:', result.message);
                return false;
            } else {
                if (result.chapterProgress) {
                    setChapterProgress(prev => ({
                        ...prev,
                        [activeChapter]: result.chapterProgress
                    }));
                }
                return true;
            }
        } catch (error) {
            console.error('Error saving progress:', error);
            return false;
        } finally {
            setLoading(false);
        }
    };

    // Handle lesson completion
    const toggleLessonCompletion = async (lessonId) => {
        if (loading || !lessonId) return;

        const newCompletedState = !completedLessons.has(lessonId);

        // Optimistic update
        setCompletedLessons(prev => {
            const newSet = new Set(prev);
            if (newSet.has(lessonId)) {
                newSet.delete(lessonId);
            } else {
                newSet.add(lessonId);
            }
            return newSet;
        });

        const success = await saveProgressToServer(lessonId, newCompletedState);

        if (!success) {
            // Revert on failure
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
        }
    };

    // Calculate progress for a chapter
    const getChapterProgress = (chapter) => {
        if (!chapter) return 0;

        if (chapterProgress[chapter.id]) {
            return Math.round(chapterProgress[chapter.id].progress_percentage);
        }

        if (!chapter.lessons || chapter.lessons.length === 0) return 0;
        const completed = chapter.lessons.filter(lesson => completedLessons.has(lesson.id)).length;
        return Math.round((completed / chapter.lessons.length) * 100);
    };

    // Calculate overall course progress
    const getOverallProgress = () => {
        if (!chapters || chapters.length === 0) return 0;
        const allLessons = chapters.flatMap(chapter => chapter.lessons || []);
        if (allLessons.length === 0) return 0;
        const completed = allLessons.filter(lesson => completedLessons.has(lesson.id)).length;
        return Math.round((completed / allLessons.length) * 100);
    };

    // Get current active lesson data
    const getActiveLessonData = () => {
        if (!activeLesson || !activeChapter || !chapters) return null;

        const chapter = chapters.find(ch => ch.id === activeChapter);
        if (!chapter || !chapter.lessons) return null;

        const lesson = chapter.lessons.find(les => les.id === activeLesson);
        return lesson || null;
    };

    // Navigation functions
    const goToNextLesson = () => {
        if (!chapters || !activeChapter || !activeLesson) return;

        const currentChapter = chapters.find(ch => ch.id === activeChapter);
        if (!currentChapter?.lessons) return;

        const currentIndex = currentChapter.lessons.findIndex(lesson => lesson.id === activeLesson);
        if (currentIndex < currentChapter.lessons.length - 1) {
            setActiveLesson(currentChapter.lessons[currentIndex + 1].id);
        } else {
            const currentChapterIndex = chapters.findIndex(ch => ch.id === activeChapter);
            if (currentChapterIndex < chapters.length - 1) {
                const nextChapter = chapters[currentChapterIndex + 1];
                setActiveChapter(nextChapter.id);
                if (nextChapter.lessons && nextChapter.lessons.length > 0) {
                    setActiveLesson(nextChapter.lessons[0].id);
                }
                setExpandedChapters(prev => new Set([...prev, nextChapter.id]));
            }
        }
    };

    const goToPreviousLesson = () => {
        if (!chapters || !activeChapter || !activeLesson) return;

        const currentChapter = chapters.find(ch => ch.id === activeChapter);
        if (!currentChapter?.lessons) return;

        const currentIndex = currentChapter.lessons.findIndex(lesson => lesson.id === activeLesson);
        if (currentIndex > 0) {
            setActiveLesson(currentChapter.lessons[currentIndex - 1].id);
        } else {
            const currentChapterIndex = chapters.findIndex(ch => ch.id === activeChapter);
            if (currentChapterIndex > 0) {
                const prevChapter = chapters[currentChapterIndex - 1];
                setActiveChapter(prevChapter.id);
                const prevLessons = prevChapter.lessons || [];
                if (prevLessons.length > 0) {
                    setActiveLesson(prevLessons[prevLessons.length - 1].id);
                }
                setExpandedChapters(prev => new Set([...prev, prevChapter.id]));
            }
        }
    };

    // Handle chapter selection from sidebar
    const handleSetActiveChapter = (chapterId) => {
        setActiveChapter(chapterId);
        const chapter = chapters.find(ch => ch.id === chapterId);
        if (chapter?.lessons?.length > 0) {
            // When a chapter is selected, automatically select and show the first lesson
            setActiveLesson(chapter.lessons[0].id);
        } else {
            // If no lessons in chapter, clear active lesson
            setActiveLesson(null);
        }
        // Auto-expand the selected chapter
        setExpandedChapters(prev => new Set([...prev, chapterId]));
    };

    // Handle lesson selection from sidebar
    const handleSetActiveLesson = (lessonId) => {
        setActiveLesson(lessonId);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Also ensure the parent chapter is set
        const lessonChapter = chapters.find(ch =>
            ch.lessons?.some(lesson => lesson.id === lessonId)
        );
        if (lessonChapter) {
            setActiveChapter(lessonChapter.id);
            setExpandedChapters(prev => new Set([...prev, lessonChapter.id]));
        }
    };

    // Loading State
    if (!isInitialized) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="text-white text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-lg">লোড হচ্ছে...</p>
                </div>
            </div>
        );
    }

    // Error State
    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="bg-red-900/50 backdrop-blur-sm rounded-xl p-8 text-center max-w-md border border-red-500">
                    <svg className="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h2 className="text-xl font-bold text-white mb-2">ত্রুটি</h2>
                    <p className="text-gray-300 mb-4">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                    >
                        পুনরায় চেষ্টা করুন
                    </button>
                </div>
            </div>
        );
    }

    // Empty State - No Chapters
    if (!chapters || chapters.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 text-center max-w-md border border-gray-700">
                    <svg className="w-20 h-20 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <h2 className="text-2xl font-bold text-white mb-3">কোন অধ্যায় পাওয়া যায়নি</h2>
                    <p className="text-gray-400 mb-6">এই কোর্সে এখনো কোন অধ্যায় যুক্ত করা হয়নি। দয়া করে পরে আবার চেক করুন।</p>
                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                        পিছনে যান
                    </button>
                </div>
            </div>
        );
    }

    // Empty State - No Lessons in Any Chapter
    const hasAnyLesson = chapters.some(chapter => chapter.lessons && chapter.lessons.length > 0);
    if (!hasAnyLesson) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 text-center max-w-md border border-gray-700">
                    <svg className="w-20 h-20 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h2 className="text-2xl font-bold text-white mb-3">কোন পাঠ পাওয়া যায়নি</h2>
                    <p className="text-gray-400 mb-6">এই কোর্সের অধ্যায়গুলোতে এখনো কোন পাঠ যুক্ত করা হয়নি।</p>
                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                        পিছনে যান
                    </button>
                </div>
            </div>
        );
    }

    const activeLessonData = getActiveLessonData();

    return (
        <div className="flex flex-col lg:flex-row bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                <ModernHeader
                    lesson={activeLessonData}
                    activeChapter={activeChapter}
                    chapters={chapters}
                    completedLessons={completedLessons}
                    loading={loading}
                    onToggleLessonCompletion={toggleLessonCompletion}
                    onToggleComments={() => setShowComments(!showComments)}
                    showComments={showComments}
                    overallProgress={getOverallProgress()}
                />

                <div className="flex-1 flex flex-col lg:flex-row">
                    {/* Video/Lesson Content */}
                    <div className="flex-1 flex flex-col">
                        {activeLessonData ? (
                            <ModernContentSection
                                lesson={activeLessonData}
                                onNextLesson={goToNextLesson}
                                onPreviousLesson={goToPreviousLesson}
                            />
                        ) : (
                            <div className=" md:flex hidden items-center justify-center h-full min-h-[400px] bg-gray-900/50 m-6 rounded-xl">
                                <div className="text-center">
                                    <svg className="w-20 h-20 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <h3 className="text-white text-xl font-bold mb-3">স্বাগতম!</h3>
                                    <p className="text-gray-400 mb-2">শুরু করতে বাম পাশের সাইডবার থেকে একটি চ্যাপ্টার সিলেক্ট করুন</p>
                                    <p className="text-gray-500 text-sm">চ্যাপ্টারে ক্লিক করলে লেসন দেখাবে, তারপর যেকোনো লেসনে ক্লিক করলে কন্টেন্ট দেখাবে</p>
                                </div>
                            </div>
                        )}

                        {/* Comments Section */}
                        {showComments && activeLessonData && (
                            <ModernCommentsSection lesson={activeLessonData} />
                        )}
                    </div>

                    {/* Chapters Sidebar */}
                    <ModernChaptersSidebar
                        chapters={chapters}
                        activeChapter={activeChapter}
                        activeLesson={activeLesson}
                        completedLessons={completedLessons}
                        expandedChapters={expandedChapters}
                        loading={loading}
                        onToggleChapter={toggleChapter}
                        onSetActiveChapter={handleSetActiveChapter}
                        onSetActiveLesson={handleSetActiveLesson}
                        onToggleLessonCompletion={toggleLessonCompletion}
                        getChapterProgress={getChapterProgress}
                        getOverallProgress={getOverallProgress}
                    />
                </div>
            </div>
        </div>
    );
}