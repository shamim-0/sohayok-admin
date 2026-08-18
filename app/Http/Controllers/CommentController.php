<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Reply;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
        ]);

        $comment = new Comment();
        $comment->text = $request->input('text');
        $comment->lesson_id = $request->input('lesson_id');
        $comment->user_id = Auth::id(); // এখানে id না, user_id হবে
        $comment->save();

        return response()->json([
            'success' => true,
            'message' => 'Comment added successfully!',
            'data' => $comment
        ]);
    }


    public function destroy($id)
    {
        $comment = Comment::findOrFail($id);

        // শুধুমাত্র নিজের কমেন্ট মুছতে পারবে
        if ($comment->user_id !== auth()->id()) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized to delete this comment.',
            ], 403);
        }

        $comment->delete();

        return response()->json([
            'success' => true,
            'message' => 'Comment deleted successfully!',
        ]);
    }
    public function destroy_reply($id)
    {

      

        $reply = Reply::findOrFail($id);
        $reply->delete();
        return response()->json([
            'success' => true,
            'message' => 'Reply deleted successfully!',
        ]);
    }




    public function store_reply(Request $request)
    {
        $reply = new Reply();
        $reply->text = $request->text;
        $reply->comment_id = $request->comment_id;
        $reply->user_id = Auth::id();
        $reply->save();

        return response()->json([
            'success' => true,
            'message' => 'Reply added successfully!',
            'data' => $reply
        ]);
    }


}
