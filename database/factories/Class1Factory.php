<?php

namespace Database\Factories;

use App\Models\Schoolyear;
use Illuminate\Database\Eloquent\Factories\Factory;

class Class1Factory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'class1' => $this->faker->randomElement(['1A01','1A02','1A03','2A01','2A02','2A03', '1B01','1B02','2B01', '2B02']),
            'schoolyear_id' => Schoolyear::all()->random()->id
        ];
    }
}
