<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Annonce;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Resources\AnnonceResource;
use App\Http\Resources\AnnonceCollection;

class AnnonceController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->only(['store', 'update', 'destroy']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $annonces = Annonce::all();
        return AnnonceResource::collection($annonces);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->email) {

            // find user by email
            $user = User::where('email', $request->email)->first();
            $admin_id = DB::table('roles')->where('name', 'admin')->first()->id;
            if ($user->role_id == $admin_id) {
                $annonce = Annonce::create($request->all());
                return new AnnonceResource($annonce);
            } else {
                return response("You are not allowed to create an announce.", 401);
            }
        }
        // return json response
        return response("You are not allowed to create an announce.", 401);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Annonce  $annonce
     * @return \Illuminate\Http\Response
     */
    public function show(Annonce $annonce)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Annonce  $annonce
     * @return \Illuminate\Http\Response
     */
    public function edit(Annonce $annonce)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Annonce  $annonce
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Annonce $annonce)
    {
        $user = User::where('email', $request->email)->first();
        $admin_id = DB::table('roles')->where('name', 'admin')->first()->id;
        if ($user->role_id == $admin_id) {
            $annonce->update($request->all());
            return new AnnonceResource($annonce);
        } else {
            return response("You are not allowed to update an annonce", 401);
        }
        return response("You are not allowed to update an annonce", 401);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Annonce  $annonce
     * @return \Illuminate\Http\Response
     */
    public function destroy(Annonce $annonce, Request $request)
    {
        $user = User::where('email', $request->email)->first();
        $admin_id = DB::table('roles')->where('name', 'admin')->first()->id;
        if ($user->role_id == $admin_id) {

            $annonce->delete();
            return response("Annonce deleted successfully", 200);
        } else {
            return response("You are not allowed to update an annonce", 401);
        }
        return response("You are not allowed to update an annonce", 401);
    }
}