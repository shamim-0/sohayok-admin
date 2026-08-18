import { usePage } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ModernCommentsSection = ({ lesson }) => {
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [deleteConfirmId, setDeleteConfirmId] = useState(null);
    const [deleteType, setDeleteType] = useState(null); // 'comment' or 'reply'
    const [replyingTo, setReplyingTo] = useState(null);
    const [replyText, setReplyText] = useState('');

    const { auth } = usePage().props;

    useEffect(() => {
        fetchComments(5, 0);
    }, [lesson]);

    const fetchComments = async (limit = 10, start = 0, append = false) => {
        try {
            const res = await axios.get('/comments', {
                params: {
                    lesson_id: lesson.id,
                    limit,
                    offset: start,
                    with_replies: true
                },
            });

            const data = res.data.data;
            if (data.length < limit) setHasMore(false);

            setComments(prev => append ? [...prev, ...data] : data);
        } catch (error) {
            console.error('Failed to load comments:', error);
        }
    };

    const handleAddComment = async (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        const comment = {
            text: newComment,
            lesson_id: lesson.id,
        };

        try {
            await axios.post("/student/class/store-comment", comment);
            fetchComments(5, 0);
            setNewComment('');
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };

    const handleAddReply = async (parentId) => {
        if (!replyText.trim()) return;

        const reply = {
            text: replyText,
            lesson_id: lesson.id,
            comment_id: parentId,
        };

        try {
            await axios.post("/student/class/store-comment-reply", reply);
            fetchComments(5, 0);
            setReplyText('');
            setReplyingTo(null);
        } catch (error) {
            console.error('Error posting reply:', error);
        }
    };

    const handleDeleteComment = async (id) => {
        try {
            const res = await axios.delete(`/comment/${id}`);
            if (res.data.success) {
                // Remove comment from state without reloading
                setComments(prev => prev.filter(comment => comment.id !== id));
                setDeleteConfirmId(null);
                setDeleteType(null);
            }
        } catch (error) {
            console.error('Failed to delete comment:', error);
        }
    };

    const handleDeleteReply = async (id) => {
        try {
            const res = await axios.delete(`/reply/${id}`);
            if (res.data.success) {
                // Remove reply from state without reloading
                setComments(prev => 
                    prev.map(comment => ({
                        ...comment,
                        replies: comment.replies ? comment.replies.filter(reply => reply.id !== id) : []
                    }))
                );
                setDeleteConfirmId(null);
                setDeleteType(null);
            }
        } catch (error) {
            console.error('Failed to delete reply:', error);
        }
    };

    const openDeleteConfirmation = (id, type) => {
        setDeleteConfirmId(id);
        setDeleteType(type);
    };

    const closeDeleteConfirmation = () => {
        setDeleteConfirmId(null);
        setDeleteType(null);
    };

    const confirmDelete = () => {
        if (deleteType === 'comment') {
            handleDeleteComment(deleteConfirmId);
        } else if (deleteType === 'reply') {
            handleDeleteReply(deleteConfirmId);
        }
    };

    const handleLoadMore = () => {
        const newOffset = offset + 5;
        fetchComments(5, newOffset, true);
        setOffset(newOffset);
    };

    // Function to recursively find and remove a reply
    const removeReplyFromComments = (comments, replyId) => {
        return comments.map(comment => {
            if (comment.replies && comment.replies.length > 0) {
                return {
                    ...comment,
                    replies: comment.replies.filter(reply => reply.id !== replyId)
                };
            }
            return comment;
        });
    };

    // Recursive function to render comments and their replies
    const renderComment = (comment, depth = 0) => {
        const hasReplies = comment.replies && comment.replies.length > 0;
        const isReply = depth > 0;

        return (
            <div key={comment.id} className={`${isReply ? 'ml-12 mt-3' : ''}`}>
                <div className={`flex items-start justify-between ${isReply ? 'bg-gray-800/30 p-3 rounded-lg' : ''}`}>
                    <div className="flex gap-3 flex-1">
                        <img
                            src={comment.avatar}
                            alt="avatar"
                            className={`${isReply ? 'w-8 h-8' : 'w-10 h-10'} rounded-xl object-cover`}
                        />
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-white font-semibold text-sm">{comment.author}</span>
                                <span className="text-gray-400 text-xs">• {comment.timestamp}</span>
                                {isReply && (
                                    <span className="text-blue-400 text-xs">↳ replied</span>
                                )}
                            </div>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">{comment.text}</p>

                            {/* Reply button - only show for top-level comments (depth = 0) */}
                            {depth === 0 && (
                                <button
                                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                                    className="text-blue-400 hover:text-blue-300 text-xs font-medium flex items-center gap-1 mb-2"
                                >
                                    <i className="fa-solid fa-reply"></i>
                                    উত্তর দিন
                                </button>
                            )}

                            {/* Reply form */}
                            {replyingTo === comment.id && (
                                <div className="mt-3 flex gap-3">
                                    <img
                                        src={auth.user.avatar}
                                        alt="USER"
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <div className="flex-1">
                                        <div className="bg-gray-700/50 rounded-2xl p-1 border border-gray-600/50">
                                            <input
                                                type="text"
                                                value={replyText}
                                                onChange={(e) => setReplyText(e.target.value)}
                                                placeholder={`${comment.author} কে উত্তর দিন...`}
                                                className="w-full bg-transparent text-white px-4 py-2 text-sm focus:outline-none"
                                            />
                                        </div>
                                        <div className="flex justify-end gap-2 mt-2">
                                            <button
                                                onClick={() => setReplyingTo(null)}
                                                className="text-gray-400 hover:text-gray-200 text-xs px-3 py-1 rounded"
                                            >
                                                বাতিল
                                            </button>
                                            <button
                                                onClick={() => handleAddReply(comment.id)}
                                                disabled={!replyText.trim()}
                                                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-lg text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                উত্তর দিন
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Delete button - only show for comment author */}
                    {auth.user.id === comment.user_id && (
                        <div>
                            {isReply ? (
                                <button
                                    onClick={() => openDeleteConfirmation(comment.id, 'reply')}
                                    className="text-red-400 hover:text-red-300 text-xs transition-colors"
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            ) : (
                                <button
                                    onClick={() => openDeleteConfirmation(comment.id, 'comment')}
                                    className="text-red-400 hover:text-red-300 text-xs transition-colors"
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* Render replies recursively */}
                {hasReplies && (
                    <div className="mt-2 space-y-3 border-l-2 border-gray-600/30 pl-4 ml-2">
                        {comment.replies.map(reply => renderComment(reply, depth + 1))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div>
            {/* Delete Confirmation Modal */}
            {deleteConfirmId && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-800 rounded-2xl p-6 max-w-md w-full">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fa-solid fa-exclamation-triangle text-red-400 text-xl"></i>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">নিশ্চিত করুন</h3>
                            <p className="text-gray-300 text-sm mb-6">
                                {deleteType === 'comment' 
                                    ? 'আপনি কি এই কমেন্টটি ডিলিট করতে চান? এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না।'
                                    : 'আপনি কি এই উত্তরটি ডিলিট করতে চান? এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না।'
                                }
                            </p>
                            <div className="flex gap-3 justify-center">
                                <button
                                    onClick={closeDeleteConfirmation}
                                    className="px-6 py-2 text-gray-300 hover:text-white border border-gray-600 rounded-lg text-sm font-medium transition-colors"
                                >
                                    বাতিল
                                </button>
                                <button
                                    onClick={confirmDelete}
                                    className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors"
                                >
                                    ডিলিট করুন
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-4xl mx-auto bg-[#918f8f1e] p-5 rounded-md">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white font-bold text-xl">কমেন্টস</h3>
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                        {comments.length} টি কমেন্ট
                    </span>
                </div>

                {/* Add Comment Form */}
                <form onSubmit={handleAddComment} className="mb-8">
                    <div className="flex gap-4">
                        <img className="rounded-full w-12 h-12" src={auth.user.avatar} alt="USER" />
                        <div className="flex-1">
                            <div className="bg-gray-700/50 rounded-2xl p-1 border border-gray-600/50">
                                <input
                                    type="text"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="আপনার মতামত শেয়ার করুন..."
                                    className="w-full bg-transparent text-white px-4 py-3 text-sm focus:outline-none"
                                />
                            </div>
                            <div className="flex justify-end mt-3">
                                <button
                                    type="submit"
                                    disabled={!newComment.trim()}
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-xl font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                                >
                                    পোস্ট করুন
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

                {/* Comments List */}
                <div className="space-y-4">
                    {comments.length === 0 ? (
                        <div className="text-center py-12 text-gray-400">
                            <div className="w-16 h-16 bg-gray-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl"><i className="fa-solid fa-comment"></i></span>
                            </div>
                            <p className="text-lg mb-2">কোনো কমেন্ট নেই</p>
                            <p className="text-sm">প্রথম কমেন্ট করার মাধ্যমে আলোচনা শুরু করুন!</p>
                        </div>
                    ) : (
                        <>
                            {comments.map(comment => renderComment(comment))}

                            {hasMore && (
                                <div className="flex justify-center mt-6">
                                    <button
                                        onClick={handleLoadMore}
                                        className="text-blue-400 text-sm hover:underline"
                                    >
                                        আরও লোড করুন
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ModernCommentsSection;