<?php

use Wactas\Entities\Project;

class ProjectTableSeeder extends BaseSeeder
{
    public function getModel() 
    {
        return new Project();
    }
    
    public function getDummyData(\Faker\Generator $faker, array $customValues = array()) 
    {
        return [
            'name' => $faker->sentence(2),
            'type' => $faker->randomElement(['DIG', 'DIG', 'CRE']),
            'description' => $faker->paragraph(3),
            'objectives' => $faker->paragraph(6),
            'status' => $faker->randomElement([false, false, true]),
            'customer_id' => $this->getRandom('Customer')->id
        ];
    }
}

