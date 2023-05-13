<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hotel;

class HotelController extends Controller
{
    public function index()
    {
        return Hotel::all();
    }

    public function store(Request $request)
    {
        Hotel::create($request->except('_token'));
        return 'Hotel included.';
    }

    public function show(int $id)
    {
        $hotel = Hotel::findOrFail($id);
        
        return $hotel;
    }

    public function update(Request $request, int $id)
    {
        $hotel = Hotel::findOrFail($id);

        $hotel->fill($request->all());
        $hotel->save();

        return "Hotel updated";
    }

    public function destroy(int $id)
    {
        Hotel::destroy($id);
        return 'Hotel removed';
    }

}
