<?php

use Faker\Generator;
use Faker\Factory as Faker;
use Wactas\Entities\Role;

class RoleTableSeeder extends BaseSeeder
{
    public function getDummyData(Generator $faker, array $customValues = array())
    {
        return $customValues;
    }

    public function getModel()
    {
        return new Role();
    }

    public function run()
    {
        $this->createRoles();
    }

    public function createRoles()
    {
        $roles = ['Administrator', 'Editor', 'Author', 'Contributor', 'Subscriber'];
        $faker = Faker::create();

        foreach ($roles as $role) {
            $this->create([
                'role' => $role,
                'status' => true,
                'description' => $faker->paragraph(1),
            ]);
        }
    }
}
