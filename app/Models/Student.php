<?php

namespace App\Models;

use App\Scopes\StudentScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Student extends User
{
    use HasFactory;

    protected $table = "users";

    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new StudentScope());
    }

    protected $fillable = [
        'class1_id'
    ];

    public function class1(){
        return $this->belongsTo(Class1::class);
    }

    public function remarks(){
        return $this->hasMany(Remark::class);
    }

    public function class1s(){
        return $this->hasMany(Class1::class);
    }
}
