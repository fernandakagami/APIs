<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'password_confirmation' => 'required|string|min:6|same:password'
        ]);

        if ($validator->fails())
        {
            return response($validator->errors(), 400);
        }

        $request['password'] = Hash::make($request['password']);
        $request['remember_token'] = Str::random(10);
        
        $user = User::create($request->toArray());        
        $token = $user->createToken('api_token')->plainTextToken;        

        $response = ['api_token' => $token];   
        return response($response, 200);
    }

    public function show()
    {        
        $user = User::findOrFail(auth('sanctum')->user()->id);        
        return $user;
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',            
        ]);

        if ($validator->fails())
        {
            return response($validator->errors(), 400);
        }

        $user = User::findOrFail(auth('sanctum')->user()->id);

        $user->fill($request->all());
        $user->save();
        return "User updated";
    }

    public function updatePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required|string|min:6',
            'password_confirmation' => 'required|string|min:6|same:password'         
        ]);

        if ($validator->fails())
        {
            return response($validator->errors(), 400);
        }

        $user = User::findOrFail(auth('sanctum')->user()->id);

        $request['password'] = Hash::make($request['password']);
        $user->password = $request['password'];
        $user->save();
        return "Password updated";
    }

    public function destroy()
    {        
        User::destroy(auth('sanctum')->user()->id);
        return 'User removed';
    }
}
