<?php

use Wactas\Entities\Customer;
use Faker\Generator;

class CustomerTableSeeder extends BaseSeeder
{
    protected $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    protected $total = 5;

    public function getModel()
    {
        return new Customer();
    }

    public function getDummyData(Generator $faker, array $customValues = array())
    {
        return [
            'name' => $faker->company,
            'code' => $this->characters[rand(0, strlen($this->characters) - 1)].$this->characters[rand(0, strlen($this->characters) - 1)].$this->characters[rand(0, strlen($this->characters) - 1)],
            'address' => $faker->address,
            'logo' => $faker->imageUrl(120, 120),
            'status' => $faker->randomElement([false, false, true]),
        ];
    }
}
