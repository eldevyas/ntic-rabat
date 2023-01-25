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
            'username' => 'required|string|unique:users',
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'password_confirmation' => 'required|same:password',
        ]);
        if ($validation->fails()) {
            return response()->json($validation->errors(), 422);
        }
        $input = $request->all();
        $input['role_id'] = Role::whereName('stagiaire')->firstOrFail()->id;
        $input['password'] = bcrypt($input['password']);
        $user = new User();

        $user->username = $input['username'];
        $user->name = $input['firstname'] . ' ' . $input['lastname'];
        $user->first_name = $input['firstname'];
        $user->last_name = $input['lastname'];
        $user->email = $input['email'];
        $user->password = $input['password'];
        $user->role_id = $input['role_id'];
        $user->save();
        $success['token'] = $user->createToken('api-application')->accessToken;

        return response()->json($success, 201);
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

    // Check email method
    public function checkEmail($email)
    {
        $user = User::where('email', $email)->first();
        if ($user) {
            return response()->json([
                'message' => 'Email already exists'
            ], 409);
        } else {
            return response()->json([
                'message' => 'Email available'
            ], 200);
        }
    }

    // Check username method
    public function checkUsername($username)
    {
        $user = User::where('username', $username)->first();
        if ($user) {
            return response()->json([
                'message' => 'Username already exists'
            ], 409);
        } else {
            return response()->json([
                'message' => 'Username available'
            ], 200);
        }
    }
}