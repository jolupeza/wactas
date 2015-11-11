<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        Model::unguard();

        $this->truncateTables(array(
            'areas',
            'roles',
            'users',
            'password_resets',
//            'customers',
//            'employees',
//            'employee_emails',
//            'employee_phones',
//            'projects',
//            'minutes',
        ));

        $this->call('AreaTableSeeder');
        $this->call('RoleTableSeeder');
        $this->call('UserTableSeeder');
//        $this->call('CustomerTableSeeder');
//        $this->call('EmployeeTableSeeder');
//        $this->call('EmployeeEmailTableSeeder');
//        $this->call('EmployeePhoneTableSeeder');
//        $this->call('ProjectTableSeeder');
    }

    private function truncateTables(array $tables)
    {
        $this->checkForeignKeys(false);

        foreach ($tables as $table) {
            DB::table($table)->truncate();
        }

        $this->checkForeignKeys(true);
    }

    private function checkForeignKeys($check)
    {
        $check = $check ? '1' : '0';
        DB::statement("SET FOREIGN_KEY_CHECKS = $check;");
    }
}
