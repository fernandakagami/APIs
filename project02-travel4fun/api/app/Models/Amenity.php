<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Pivots\HotelAmenity;

class Amenity extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public function hotels()
    {
        return $this->belongsToMany(Hotel::class, 'hotel_amenity')
                    ->using(HotelAmenity::class)
                    ->withPivot(['is_active'])
                    ->withTimestamps();
    }
}
