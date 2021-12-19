<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class RemarkOptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'option' => $this->faker->randomElement(['late in class','homework not done','impolite', 'forgot diary', 'forgot learning materials','other'])
        ];
    }
}
