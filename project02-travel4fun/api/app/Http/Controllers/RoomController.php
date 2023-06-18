<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Room;

class RoomController extends Controller
{
    public function index(int $id)
    {                
        return Room::where('hotel_id', $id)->get();
    }

    public function store(Request $request)
    {        
        $room = new Room;        
        $room->name = $request->input('name');
        $room->description = $request->input('description');
        $room->capacity = $request->input('capacity');
        $room->photos = $request->input('photos');
        $room->price = $request->input('price');        
        $room->hotel_id = $request->input("hotel_id");
        $room->save();

        return 'Room included.';
    }

    public function show(int $id)
    {        
        $room = Room::find($id);
        
        return $room;
    }

    public function update(Request $request, int $id)
    {
        $room = Room::findOrFail($id);

        $room->name = $request->input('name');
        $room->description = $request->input('description');
        $room->capacity = $request->input('capacity');
        $room->photos = $request->input('photos');
        $room->price = $request->input('price');        
        $room->hotel_id = $request->input("hotel_id");
        $room->save();

        return "Room updated";
    }

    public function destroy(int $id)
    {
        Room::destroy($id);
        return 'Room removed';
    }
}
