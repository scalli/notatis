<?php

namespace Database\Seeders;

use App\Models\Class1;
use App\Models\Remark;
use App\Models\RemarkOption;
use App\Models\Schoolyear;
use App\Models\School;
use App\Models\Severity;
use App\Models\RankingSettings;
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

        $this->seedSchools();

        //Class1::factory()->count(10)->create();
        $this->seedClass1s();

        $this->seedRankingSettings();

        User::factory()->count(20)->create();
        //RemarkOption::factory()->count(6)->create();
        $this->seedRemarkOptions();
        $this->seedSeverities();
        Remark::factory()->count(200)->create();
    }


    public function seedSchools(){
            School::create([
                    'schoolname' => 'Middenschool Ninove',
                    'smartschoolplatform' => 'msninove',
                    'street' => 'Astridlaan',
                    'number' => '33',
                    'postcode' => '9400',
                    'city' => 'Ninove',
                    'contact' => 'Jimmy Schandevyl',  
                    'tel' => '054232628',
                    'email' => 'economaat@middenschool-ninove.be',
                    'language' => 'nl',
                    'schoolyear_filter' => '1',
            ]);
            School::create([
                    'schoolname' => 'GO MAD',
                    'smartschoolplatform' => 'gomad',
                    'street' => 'Forten',
                    'number' => '18',
                    'postcode' => '9200',
                    'city' => 'Dendermonde',
                    'contact' => 'Bart Roels',  
                    'tel' => '052232628',
                    'email' => 'economaat@gomad.be',
                    'language' => 'nl',
                    'schoolyear_filter' => '1',
            ]);
        }


    public function seedSchoolyears(){
        Schoolyear::create(['schoolyear' => '2019-2020']);
        Schoolyear::create(['schoolyear' => '2020-2021']);
        Schoolyear::create(['schoolyear' => '2021-2022']);
        Schoolyear::create(['schoolyear' => '2022-2023']);
    }

    public function seedRankingSettings(){
        RankingSettings::create([
            'ranking_start_total' => '1000',
            'one_penalty' => '2',
            'two_penalty' => '5',
            'three_penalty' => '10',
            'four_penalty' => '50',
            'ranking_start_date' => '1245',
            'ranking_end_date' => '7885',
            'last_updated' => '14195',
        ]);

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
