<?php

namespace App\Models;

use App\Scopes\TeacherScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Teacher extends User
{
    use HasFactory;

    protected $table = "users";

    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new TeacherScope());

    }

    public function remarks(){
        return $this->hasMany(Remark::class);
    }
}
