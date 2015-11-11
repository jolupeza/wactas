<?php

use Wactas\Entities\EmployeeEmail;

class EmployeeEmailTableSeeder extends BaseSeeder
{
    protected $total = 100;

    public function getModel()
    {
        return new EmployeeEmail();
    }

    public function getDummyData(\Faker\Generator $faker, array $customValues = array())
    {
        return [
            'email' => $faker->email,
            'employee_id' => $this->getRandom('Employee')->id,
        ];
    }
}
