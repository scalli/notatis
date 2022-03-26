<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('lastName');
            $table->string('firstName');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('username')->unique();
            $table->string('password');
            $table->string('language');
            $table->boolean('active');
            $table->string('lastLoginDate');
            $table->rememberToken();
            $table->string('verified')->default(User::UNVERIFIED_USER);
            $table->string('verification_token')->nullable(true);
            $table->string('image')->nullable();
            $table->string('admin')->default(User::REGULAR_USER);
            $table->string('role')->default(User::STUDENT_USER);
            $table->string('class1_id')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
