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
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails())
        {
            return response($response, Response::HTTP_UNPROCESSABLE_ENTITY); 
        }

        $request['password'] = Hash::make($request['password']);
        $request['remember_token'] = Str::random(10);
        
        $user = User::create($request->toArray());        
        $token = $user->createToken('api_token')->plainTextToken;
        $user->api_token = $token;
        $user->save();

        $response = ['api_token' => $token];        
        return response($response, 200);
    }

    public function show(int $id)
    {
        $user = User::findOrFail($id);        
        return $user;
    }

    public function update(Request $request, int $id)
    {
        $user = User::findOrFail($id);

        $user->fill($request->all());
        $user->save();
        return "User updated";
    }

    public function destroy(int $id)
    {
        User::destroy($id);
        return 'User removed';
    }
}
