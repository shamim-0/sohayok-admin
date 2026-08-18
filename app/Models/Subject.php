<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'icon', 'order'];

    public function getIconUrlAttribute()
    {
        return $this->icon ? asset('storage/' . $this->icon) : asset('default-icon.png');
    }


    public function topics()
    {
        return $this->hasMany(Topic::class)->orderBy('order');
    }

}
