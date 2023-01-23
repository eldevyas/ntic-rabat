<?php

namespace App\Http\Controllers;
use App\Models\Role;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
        if ($validation->fails()) {
            return response()->json($validation->errors(), 422);
        }
        $input = $request->all();
        $input['role_id'] = Role::whereName('stagiaire')->firstOrFail()->id;
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] = $user->createToken('api-application')->accessToken;
        $success['name'] = $user->name;
        return response()->json($success, 200);
    }
    public function login(Request $request)
    {
        if (Auth::attempt([
            "email" => $request->email,
            "password" => $request->password
        ])) {
            $user = Auth::user();
            $success['token'] = $user->createToken('api-application')->accessToken;
            $success['name'] = $user->name;
            $success['user'] = $user;
            // put the token inside $success['user']
            $success['user']['token'] = $success['token'];
            return response()->json($success, 200);
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
}