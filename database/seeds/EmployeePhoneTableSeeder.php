<?php

use Wactas\Entities\EmployeePhone;

class EmployeePhoneTableSeeder extends BaseSeeder
{
    public function getModel()
    {
        return new EmployeePhone();
    }

    public function getDummyData(\Faker\Generator $faker, array $customValues = array())
    {
        return [
            'phone' => $faker->phoneNumber,
            'employee_id' => $this->getRandom('Employee')->id,
        ];
    }
}
