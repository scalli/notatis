<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable =[
    'schoolname',
    'smartschoolplatform',
    'street',
    'number',
    'postcode',
    'city',
    'contact',  
    'tel',
    'email'
    ];
}
