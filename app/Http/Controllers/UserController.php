<?php

namespace App\Http\Controllers;

use App\Events\OnlineUser;
use App\User;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        $credentials = request(['email', 'password']);

        if (!Auth::attempt($credentials)) {
            return 0;
        }

        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;

        $token->save();
        
        setcookie(
            $name = "token",
            $value = $tokenResult->accessToken,
            $expire = time() + 43200,
            $path = "/",
            $domain = null,
            $secure = false,
            $httponly = true
        );
        return $user;
    }
    public function cikis()
    {
        if (Auth::check()) {
            Auth::user()->token()->delete();
            setcookie('token', null, -1, '/');
        }
        return 1;
    }
    public function getUser()
    {
        $loginUser = Auth::user();
        $user =  User::where('id', '!=', $loginUser['id'])
            ->get();
        return $user;
    }
}
