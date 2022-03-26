<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RankingSettings extends Model
{
    use HasFactory;

        protected $fillable = [
        'ranking_start_total',
        'one_penalty',
        'two_penalty',
        'three_penalty', 
        'four_penalty',
        'ranking_start_date',
        'ranking_end_date',
        'last_updated'
    ];
}
