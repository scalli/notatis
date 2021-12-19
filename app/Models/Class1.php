<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Class1 extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'class1',
        'schoolyear_id'
    ];

    public function schoolyear(){
        return $this->belongsTo(Schoolyear::class);
    }

    public function students(){
        return $this->hasMany(Student::class);
    }
}
