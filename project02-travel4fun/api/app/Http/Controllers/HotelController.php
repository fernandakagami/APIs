<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hotel;

class HotelController extends Controller
{
    public function index(Request $request)
    {        
        return Hotel::with('amenities')->where('users_id', $request->user()->id)->get();
    }

    public function store(Request $request)
    {        
        $hotel = new Hotel;
        $hotel->description = $request->input('description');
        $hotel->postal_code = $request->input('postal_code');
        $hotel->country_name = $request->input('country_name');
        $hotel->region_name = $request->input('region_name');
        $hotel->city = $request->input('city');
        $hotel->address = $request->input('address');
        $hotel->name = $request->input('name');
        $hotel->short_description = $request->input('short_description');
        $hotel->photos = $request->input('photos');
        $hotel->stars = $request->input('stars');        
        $hotel->categories_id = $request->input("category");
        $hotel->users_id = $request->user()->id;
        $hotel->save();

        $hotel->amenities()->attach($request->input('amenities'));     

        return 'Hotel included.';
    }

    public function show(int $id)
    {        
        $hotel = Hotel::with(['amenities', 'category'])->find($id);
        
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
