<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LikesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function like(Request $request, Post $post)
    {

        // check if the user has already liked the post
        $like = $post->likes()->where('user_id', auth()->id())->first();
        if ($like) {
            $like->delete();
            return response(null, Response::HTTP_NO_CONTENT);
        }
        // create a new like
        $like = new Like();
        $like->user_id = auth()->id();
        $like->post_id = $post->id;
        $like->save();
        return response($like, Response::HTTP_CREATED);
    }
}
