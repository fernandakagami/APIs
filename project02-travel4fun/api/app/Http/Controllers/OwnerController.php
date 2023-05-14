<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Owner;

class OwnerController extends Controller
{
    public function index()
    {
        return Owner::all();
    }

    public function store(Request $request)
    {
        Owner::create($request->except('_token'));
        return 'Hotel owner included.';
    }

    public function show(int $id)
    {
        $owner = Owner::findOrFail($id);
        
        return $owner;
    }

    public function update(Request $request, int $id)
    {
        $owner = Owner::findOrFail($id);

        $owner->fill($request->all());
        $owner->save();

        return "Hotel owner updated";
    }

    public function destroy(int $id)
    {
        Owner::destroy($id);
        return 'Hotel owner removed';
    }
}
