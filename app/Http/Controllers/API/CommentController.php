<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index(Request $request)
    {
        $lessonId = $request->query('lesson_id');
        $limit = $request->query('limit', 10);
        $offset = $request->query('offset', 0);

        $comments = Comment::with([
            'user:id,name,avatar',
            'replies.user:id,name,avatar' // eager load reply user
        ])
            ->where('lesson_id', $lessonId)
            ->orderBy('created_at', 'desc')
            ->skip($offset)
            ->take($limit)
            ->get()
            ->map(function ($comment) {
                return [
                    'id' => $comment->id,
                    'text' => $comment->text,
                    'user_id' => $comment->user_id,
                    'author' => $comment->user->name,
                    'avatar' => $comment->user->avatar,
                    'timestamp' => $comment->created_at->diffForHumans(),
                    'replies' => $comment->replies->map(function ($reply) {
                        return [
                            'id' => $reply->id,
                            'text' => $reply->text,
                            'user_id' => $reply->user_id,
                            'author' => $reply->user->name,
                            'avatar' => $reply->user->avatar,
                            'timestamp' => $reply->created_at->diffForHumans(),
                        ];
                    }),
                ];
            });

        return response()->json([
            'success' => true,
            'data' => $comments
        ]);
    }



    public function store(Request $request)
    {
        $request->validate([
            'text' => 'required|string',
            'lesson_id' => 'required|exists:lessons,id',
            'user_id' => 'required|exists:users,id',
        ]);

        $comment = new Comment();
        $comment->text = $request->input('text');
        $comment->lesson_id = $request->input('lesson_id');
        $comment->user_id = $request->input('user_id');
        $comment->save();

        return response()->json([
            'success' => true,
            'message' => 'Comment added successfully!',
            'data' => $comment
        ]);
    }


}
