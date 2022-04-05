<?php

namespace Database\Factories;

use App\Models\RemarkOption;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class RemarkFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'date' => $this->faker->dateTime(),
            'extra_info' => $this->faker->paragraph(1),
            'remark' => $this->faker->randomElement(['late in class','homework not done','impolite', 'forgot diary', 'forgot learning materials', 'other']),
            'severity_id' => $this->faker->numberBetween(1,4),
            //'remarkoption_id' => RemarkOption::all()->random()->id,
            //'student_id' => User::all()->random()->id
            'student_id' => User::query()->where('role','=','0')->get(['id'])->random()->id,
            'teacher_id'=> User::query()->where('role','=','1')->get(['id'])->random()->id
        ];
    }
}
