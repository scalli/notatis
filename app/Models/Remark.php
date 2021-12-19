<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Remark extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $dates = ['deleted_at'];
    protected $fillable =[
        'date',
        'extra_info',
        'remark',
        'severity_id',
        'remarkoption_id',
        'student_id',
        'teacher_id'
    ];

    public function severity(){
        return $this->belongsTo(Severity::class);
    }

    public function remarkoption(){
        return $this->belongsTo(RemarkOption::class);
    }

    public function student(){
        return $this->belongsTo(Student::class);
    }

    public function teacher(){
        return $this->belongsTo(Teacher::class);
    }
}
