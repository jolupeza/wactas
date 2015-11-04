<?php

use Faker\Generator;
use Faker\Factory as Faker;
use Wactas\Entities\User;

class UserTableSeeder extends BaseSeeder
{
    public function getDummyData(Generator $faker, array $customValues = array())
    {
        return [
            'name' => $faker->name,
            'email' => $faker->email,
            'password' => bcrypt('secret'),
            'avatar' => $faker->imageUrl(64, 64),
            'status' => $faker->randomElement([false, false, true]),
        ];
    }

    public function getModel()
    {
        return new User();
    }

    public function run()
    {
        $this->createAdmin();
        $this->createMultiple(49);
    }

    public function createAdmin()
    {
        $faker = Faker::create();

        $this->create([
            'name' => 'Sudo',
            'email' => 'joseluis@watson.pe',
            'password' => bcrypt('admin'),
            'avatar' => $faker->imageUrl(64, 64),
            'status' => true,
            'role_id' => 1,
        ]);
    }
}
