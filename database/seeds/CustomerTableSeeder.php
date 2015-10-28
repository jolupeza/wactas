<?php

use Wactas\Entities\Customer;
use Faker\Factory as Faker;
use Faker\Generator;

class CustomerTableSeeder extends BaseSeeder
{
    protected $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    public function getModel() 
    {
        return new Customer();
    }

    public function getDummyData(Generator $faker, array $customValues = array()) 
    {
        return [
            'name' => $faker->company,
            'code' => $this->characters[rand(0, strlen($this->characters) - 1)] . $this->characters[rand(0, strlen($this->characters) - 1)] . $this->characters[rand(0, strlen($this->characters) - 1)],
            'address' => $faker->address,
            'logo' => $faker->imageUrl(64, 64),
            'status' => $faker->randomElement([false, false, true])
        ];
    }
    
    public function run() 
    {
        $this->createMaster();
        $this->createMultiple(49);
    }

    private function createMaster() 
    {
        $faker = Faker::create();
        $this->create([
            'name' => 'Agencia Watson',
            'code' => 'AWT',
            'address' => 'Calle Pacarmarca',
            'logo' => $faker->imageUrl(64, 64),
            'status' => true,
            'master' => true
        ]);
    }

}