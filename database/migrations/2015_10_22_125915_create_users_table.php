<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 60);
            $table->string('email')->unique();
            $table->string('job', 50);
            $table->string('password', 60);
            $table->string('avatar');
            $table->boolean('status')->default(false);
            $table->dateTime('last_login')->default('0000-00-00 00:00:00');
            $table->integer('role_id')->unsigned()->default(5);
            $table->foreign('role_id')->references('id')->on('roles');
            $table->integer('area_id')->unsigned();
            $table->foreign('area_id')->references('id')->on('areas');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::drop('users');
    }
}
