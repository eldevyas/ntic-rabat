<?php

namespace App\Http\Controllers;

use Carbon\Carbon;

use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Mail\emailVerification;
use App\Mail\forgetPasswordEmail;
// import forgetPasswordEmail
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
// import emailVerification
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'username' => 'required|string|unique:users',
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            // check if the email ends with @ofppt-edu.ma or @OFPPT-EDU.MA
            'email' => 'required|email|unique:users|ends_with:@ofppt-edu.ma,@OFPPT-EDU.MA',
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
        // send email verification
        $this->sendEmailVerification($request);

        return response()->json($success, 201);
    }


    public function sendEmailVerification(Request $request)
    {
        $token = Str::random(60);
        $code = rand(10000, 99999);
        DB::table('email_verifications')->insert([
            'email' => $request->email,
            'token' => $token,
            'code' => $code,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        // Send email
        try {
            Mail::to($request->email)->send(new emailVerification($request->email, $token, $code));
            $success['message'] = 'Email verification mail was sent to your email';
            return response()->json($success, 200);
        } catch (\Exception $e) {
            $success['message'] = 'Error sending email ' . $e->getMessage();
            return response()->json($success, 401);
        }
    }
    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->orWhere('username', $request->email)->first();
        if ($user && Auth::attempt([
            "email" => $user->email,
            "password" => $request->password,
        ])) {
            // is email verified
            $success['user'] = $user;
            // put the token inside $success['user']
            $success['user']['token'] = $user->createToken('api-application')->accessToken;
            // Whether has verified the email or not.
            $success['user']['email_verified'] = $user->email_verified_at ? true : false;
            $success['user']['role'] = $user->role_id == 2 ? 'admin' : 'stagiaire';
            return response()->json($success, 200);
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }
    public function show($username)
    {
        $user = User::where('username', $username)->first();
        if ($user) {
            return response()->json($user, 200);
        } else {
            return response()->json(['error' => 'User not found'], 404);
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
    public function forgetPassword(Request $request)
    {
        $email = $request->email;
        $user = User::where('email', $email)->first();
        if (!$user) {
            return response()->json([
                'message' => 'Email not found'
            ], 401);
        }

        $token = $user->createToken('api-application')->accessToken;
        $code = rand(10000, 99999);
        DB::table('password_resets')->where('email', $email)->delete();
        DB::table('password_resets')->insert([
            'email' => $user->email,
            'token' => $token,
            'code' => $code,
            'created_at' => Carbon::now()
        ]);
        // Send email
        try {
            Mail::to($email)->send(new forgetPasswordEmail($token, $code, $email));
            return response()->json([
                'message' => 'Reset password mail was sent to your email'
            ], 200);
            // delete all the values from the table
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error sending email' . $e->getMessage()
            ], 500);
        }
    }
    public function resetPasswordByToken(Request $request)
    {
        if (!$request->token || !$request->email) {
            return response()->json([
                'message' => 'Invalid request'
            ], 400);
        }
        $token = urldecode($request->token);
        $email = urldecode($request->email);
        $email = Crypt::decrypt($email);
        $user_token = DB::table('password_resets')->where('email', $email)->where('token', $token)
            ->first();
        if (!$user_token) {
            return response()->json([
                'message' => 'Invalid token'
            ], 404);
        } else {
            return response()->json([
                'message' => 'Valid token'
            ], 200);
        }
    }
    public function verifyEmailToken(Request $request)
    {
        if (!$request->token || !$request->email) {
            return response()->json([
                'message' => 'Invalid request'
            ], 400);
        }
        $token = urldecode($request->token);
        $email = urldecode($request->email);
        $email = Crypt::decrypt($email);
        $user_token = DB::table('email_verifications')->where('email', $email)->where('token', $token)
            ->first();
        if (!$user_token) {
            return response()->json([
                'message' => 'Invalid token'
            ], 404);
        } else {
            $user = User::where('email', $email)->first();
            $user->email_verified_at = Carbon::now();
            $user->save();
            return response()->json([
                'message' => 'Email verified successfully'
            ], 200);
        }
    }
    public function verifyEmailCode(Request $request)
    {
        if (!$request->code || !$request->email) {
            return response()->json([
                'message' => 'Invalid request'
            ], 400);
        }
        $code = $request->code;
        $email = $request->email;
        $user_token = DB::table('email_verifications')->where('email', $email)->where('code', $code)
            ->first();

        $Debug_Response = [
            "Response" => $user_token,
            "Email of Request" => $email,
            "Code of Request" => $code,
            "Email Found" => DB::table('email_verifications')->where('email', $email)->first(),
            "Code Found" => DB::table('email_verifications')->where('code', $code)->first(),
        ];

        if (!$user_token) {
            return response()->json([
                'message' => 'Invalid code - No match.',
                'debug' => $Debug_Response
            ], 401);
        } else if ($user_token) {
            $user = User::where('email', $email)->first();
            $user->email_verified_at = Carbon::now();
            $user->save();
            // delete all the values from the email_verifications table
            DB::table('email_verifications')->where('email', $email)->delete();
            return response()->json([
                'message' => 'Email verified successfully'
            ], 200);
        }
    }

    // Check if email is verified or not.
    public function checkEmailVerified(Request $request)
    {
        $email = $request->email;
        $user = User::where('email', $email)->first();

        // if user
        if ($user) {
            // if email verified
            if ($user->email_verified_at) {
                return response()->json([
                    'message' => 'Email verified',
                    'email_verified' => true
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Email not verified',
                    'email_verified' => false
                ], 200);
            }
        } else {
            return response()->json([
                'message' => 'Email not found',
                'email_verified' => false
            ], 404);
        }
    }

    public function UpdatePassword(Request $request)
    {
        $email = $request->email;
        $CurrentPassword = $request->CurrentPassword;
        // check if the old password is correct
        if (Hash::check($CurrentPassword, Auth::user()->password)) {
            $user = User::where('email', $email)->first();
            $user->password = Hash::make($request->NewPassword);
            $user->save();
            return response()->json([
                'message' => 'Password updated successfully'
            ], 200);
        } else {
            return response()->json([
                'message' => 'Current password is incorrect'
            ], 401);
        }
    }
}
