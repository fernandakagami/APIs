<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Pivots\HotelAmenity;
class Hotel extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'categories_id', 'id');
    }

    public function amenities()
    {
        return $this->belongsToMany(Amenity::class, 'hotel_amenity')
                    ->using(HotelAmenity::class)
                    ->withPivot(['is_active'])
                    ->withTimestamps();
    }
}
