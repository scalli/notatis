<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    const VERIFIED_USER = '1';
    const UNVERIFIED_USER = '0';

    const ADMIN_USER = 'true';
    const REGULAR_USER = 'false';

    const TEACHER_USER = '1';
    const STUDENT_USER = '0';

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */

    protected $dates = ['deleted_at'];
    protected $fillable = [
        'lastName',
        'firstName',
        'email',
        'password',
        'verified',
        'verification_token',
        'image',
        'admin',
        'role'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'verification_token'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function isVerified() {
        return $this->verified == USER::VERIFIED_USER;
    }

    public function isAdmin() {
        return $this->admin == User::ADMIN_USER;
    }

    public function isTeacher() {
        return $this->role == User::ADMIN_TEACHER;
    }

    public function isStudent() {
        return $this->role == User::ADMIN_STUDENT;
    }

    public static function generateVerificationCode () {
         Str::random(40);
    }
}
