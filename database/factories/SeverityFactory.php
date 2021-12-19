<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class SeverityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'severity_score' => $this->faker->randomElement([1,2,3,4]),
            'severity_description' => $this->faker->paragraph(1)
        ];
    }
}
