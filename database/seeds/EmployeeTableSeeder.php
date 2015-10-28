<?php

use Wactas\Entities\Employee;

class EmployeeTableSeeder extends BaseSeeder
{
    public function getModel() 
    {
        return new Employee();
    }
    
    public function getDummyData(\Faker\Generator $faker, array $customValues = array()) 
    {
        return [
            'name' => $faker->name,
            'job'  => ucfirst($faker->word),
            'status' => $faker->randomElement([false, false, true]),
            'customer_id' => $this->getRandom('Customer')->id
        ];
    }
}