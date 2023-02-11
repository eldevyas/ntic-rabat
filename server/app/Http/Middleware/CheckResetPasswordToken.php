<?php

namespace App\Http\Middleware;

use Closure;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Crypt;

class CheckResetPasswordToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (!$request->has('email') || !$request->has('token')) {
            return response()->json([
                'message' => 'Invalid email or token'
            ], 400);
        }
        $email = urldecode($request->email);
        $email = Crypt::decrypt($email);
        $token = urldecode($request->token);
        $reset = DB::table('password_resets')->where([
            ['email', '=', $email],
            ['token', '=', $request->token],
        ])->first();
        if (!$reset) {
            return response()->json([
                'message' => 'Invalid email or token'
            ], 400);
        }

        if (Carbon::parse($reset->created_at)->addMinutes(30)->isPast()) {
            return response()->json([
                'message' => 'Token has expired',
                'token' => $token,
                'email' => $email,
            ], 400);
        }

        return $next($request);
    }
}
