<?php

namespace Database\Seeders;

use App\Models\Class1;
use App\Models\Remark;
use App\Models\RemarkOption;
use App\Models\Schoolyear;
use App\Models\Severity;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        //DB::statement('SET FOREIGN_KEY_CHECKS = 0');

        DB::table('schoolyears')->truncate();
        DB::table('class1s')->truncate();
        DB::table('users')->truncate();
        DB::table('remarks')->truncate();
        DB::table('remark_options')->truncate();


        $userquantity = 5;


        //Schoolyear::factory()->count(5)->create();
        $this->seedSchoolyears();

        //Class1::factory()->count(10)->create();
        $this->seedClass1s();

        User::factory()->count(20)->create();
        //RemarkOption::factory()->count(6)->create();
        $this->seedRemarkOptions();
        $this->seedSeverities();
        Remark::factory()->count(200)->create();
    }

    public function seedSchoolyears(){
        Schoolyear::create(['schoolyear' => '2019-2020']);
        Schoolyear::create(['schoolyear' => '2020-2021']);
        Schoolyear::create(['schoolyear' => '2021-2022']);
        Schoolyear::create(['schoolyear' => '2022-2023']);
    }

    public function seedRemarkOptions(){
        RemarkOption::create(['option' => 'impolite']);
        RemarkOption::create(['option' => 'did not do homework']);
        RemarkOption::create(['option' => 'missing learning materials']);
        RemarkOption::create(['option' => 'late in class']);
    }

    public function seedClass1s(){
        for($i=1; $i<=4; $i++){
            Class1::create(['class1' => '1A01', 'schoolyear_id' => $i]);
            Class1::create(['class1' => '1A02', 'schoolyear_id' => $i]);
            Class1::create(['class1' => '1A03', 'schoolyear_id' => $i]);
            Class1::create(['class1' => '1A04', 'schoolyear_id' => $i]);
            Class1::create(['class1' => '1A05', 'schoolyear_id' => $i]);
            Class1::create(['class1' => '2A01', 'schoolyear_id' => $i]);
            Class1::create(['class1' => '2A02', 'schoolyear_id' => $i]);
            Class1::create(['class1' => '2A03', 'schoolyear_id' => $i]);
            Class1::create(['class1' => '2A04', 'schoolyear_id' => $i]);
            Class1::create(['class1' => '2A05', 'schoolyear_id' => $i]);
            Class1::create(['class1' => '1B01', 'schoolyear_id' => $i]);
            Class1::create(['class1' => '1B02', 'schoolyear_id' => $i]);
            Class1::create(['class1' => '2B01', 'schoolyear_id' => $i]);
            Class1::create(['class1' => '2B02', 'schoolyear_id' => $i]);
        }
    }

    public function seedSeverities(){
        Severity::create(['severity_score' => 1, 'severity_description' => 'just a remark']);
        Severity::create(['severity_score' => 2, 'severity_description' => 'low severity']);
        Severity::create(['severity_score' => 3, 'severity_description' => 'medium severity']);
        Severity::create(['severity_score' => 4, 'severity_description' => 'severe incident']);
    }
}
