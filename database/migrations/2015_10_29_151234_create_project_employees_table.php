<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('project_employees', function (Blueprint $table) {
                    $table->increments('id');
                    $table->integer('employee_id')->unsigned();
                    $table->foreign('employee_id')->references('id')->on('employees');
                    $table->integer('project_id')->unsigned();
                    $table->foreign('project_id')->references('id')->on('projects');
                    $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::drop('project_employees');
    }
}
