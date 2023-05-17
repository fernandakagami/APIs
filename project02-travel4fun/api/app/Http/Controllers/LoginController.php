<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!Hash::check($request->password, $user->password)) {
            $response = ["message" => "Password or User not exist"];                       
        }

        $token = $user->createToken('api_token')->plainTextToken;        
        $user->api_token = $token;
        $user->save();
        
        $response = ['api_token' => $token];
        return response($response, 200);        
    } 

    public function logout(Request $request) {  
        $user = User::where('api_token', $request->user()->api_token)->first();
        $user->api_token = null;
        $user->save();
        $response = ['message' => 'You have been successfully logged out!'];
        return response($response, 200);
    }
}
