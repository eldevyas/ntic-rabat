<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Role;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::with(['user', 'comments', 'likes'])->get();
        return response()->json($posts, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function TeamPosts()
    {
        // $teamPosts = Post::with(['user','comments','likes']);
        // get all posts where user role = 2
        $teamPosts = Post::with(['user', 'comments', 'likes'])->whereHas('user', function ($query) {
            $query->where('role_id', '=', Role::whereName('admin')->firstOrFail()->id);
        })->get();
        return response()->json($teamPosts, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->hasFile('cover')) {
            $file = $request->file('cover');
            $fileName = time() . '_' . Str::random(10) . '_' . $file->getClientOriginalName();
            $file->storeAs('public/images', $fileName);

            // Store the photo path in the database , and change the name of the photo to the current timestamp
            $photoPath = 'images/' . $fileName;
            // Perform database insertion logic here
        } else {
            return response()->json(['error' => 'No image found'], 403);
        }

        $post = new Post([
            'content' => $request->content,
            'description' => $request->description,
            'title' => $request->title,
            'user_id' => Auth::user()->id,
            "type" => "post",
        ]);

        $post->cover = $photoPath; // Append the cover property
        $post->cover = asset('storage/' . $post->cover);
        $post->save();

        // Append the cover property to the created post

        return response()->json($post, Response::HTTP_CREATED);
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        // show post with comments and likes
        $post = Post::with(['user', 'comments', 'likes'])->findOrFail($post->id);
        // with comments, we also want to show the user who made the comment
        $post->comments->load('user');
        // with likes, we also want to show the user who made the like
        return response()->json($post, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        // check if currently authenticated user is the owner of the post
        if (auth()->user()->id !== $post->user_id) {
            return response()->json(['error' => 'You can only edit your own posts.'], 403);
        }
        $post = Post::findOrFail($post->id);
        // update post content and updated_at
        $post->updated_at = now();
        $post->content = $request->content;
        $post->save();
        return response($post);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
