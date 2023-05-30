<?php

namespace App\Models\Pivots;

use Illuminate\Database\Eloquent\Relations\Pivot;

class HotelAmenity extends Pivot
{
    protected $fillable = ['is_active'];

    public function hotel()
    {
        return $this->belongsTo(Hotel::class);
    }

    public function amenity()
    {
        return $this->belongsTo(amenity::class);
    }
}
