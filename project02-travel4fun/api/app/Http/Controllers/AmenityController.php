<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Amenity;

class AmenityController extends Controller
{
    public function index(Request $request)
    {        
        return Amenity::all();
    }

    public function store(Request $request)
    {
        $amenity = new Amenity;
        $amenity->name = $request->input('name');
        $amenity->save();

        return 'Amenity created.';
    }

    public function show(int $id, Request $request)
    {        
        $amenity = Amenity::findOrFail($id);
        
        return $amenity;
    }

    public function update(Request $request, int $id)
    {
        $amenity = Amenity::findOrFail($id);

        $amenity->fill($request->all());
        $amenity->save();

        return "Amenity updated";
    }

    public function destroy(int $id)
    {
        Amenity::destroy($id);
        return 'Amenity removed';
    }

    public function hasAmenity(Request $request)
    {
        
    }
}
