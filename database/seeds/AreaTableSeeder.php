<?php

use Wactas\Entities\Area;

class AreaTableSeeder extends BaseSeeder
{
    public function getModel()
    {
        return new Area();
    }

    public function getDummyData(\Faker\Generator $faker, array $customValues = array())
    {
        return $customValues;
    }

    public function run()
    {
        $this->createAreas();
    }

    private function createAreas()
    {
        $areas = ['Administración', 'Diseño', 'Desarrollo'];

        foreach ($areas as $area) {
            $this->create([
                'name' => $area,
            ]);
        }
    }
}
