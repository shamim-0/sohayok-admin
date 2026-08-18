import { Link } from '@inertiajs/react';

const ModernHeader = ({ 
    lesson, 
    activeChapter, 
    chapters, 
    completedLessons, 
    loading, 
    onToggleLessonCompletion, 
    onToggleComments,
    showComments 
}) => {
    if (!lesson) return null;

    return (
        <div className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700/50 backdrop-blur-lg">
            <div className="px-2 py-1">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link 
                            href='/student/dashboard' 
                            className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                        >
                            <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-gray-600/50 transition-colors">
                                <i className="fa-solid fa-arrow-left text-sm"></i>
                            </div>
                            
                        </Link>
                        
                        <div className="h-6 w-px bg-gray-600 truncate"></div>
                        
                        <div className="flex-1 max-w-2xl">
                            <h1 className="text-white text-xs ">
                                {lesson.title} 
                            </h1>
                            
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={onToggleComments}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                                showComments 
                                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                                    : 'bg-gray-700/50 text-gray-300 border border-gray-600/50 hover:bg-gray-600/50'
                            }`}
                        >
                            <span className="text-base"><i className="fa-solid fa-comment"></i></span>
                            <span className="hidden sm:inline">
                                {showComments ? 'কমেন্টস' : 'কমেন্টস'}
                            </span>
                        </button>
                        
                        <button
                            onClick={() => onToggleLessonCompletion(lesson.id)}
                            disabled={loading}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                                completedLessons.has(lesson.id)
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                    : 'bg-orange-500/20 text-orange-400 border border-orange-500/30 hover:bg-orange-500/30'
                            } ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                            <span className="text-sm">
                                {completedLessons.has(lesson.id) ? '✓' : '○'}
                            </span>
                            <span className="hidden sm:inline">
                                {completedLessons.has(lesson.id) ? 'সম্পূর্ণ' : 'মার্ক করুন'}
                            </span>
                        </button>
                    </div>
                </div>
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

export default ModernHeader;