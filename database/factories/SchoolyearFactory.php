<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class SchoolyearFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'schoolyear' => $this->faker->randomElement(['2021-2022','2020-2021','2019-2020'])
        ];
    }
}
