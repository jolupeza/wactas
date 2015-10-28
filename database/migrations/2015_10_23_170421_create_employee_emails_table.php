<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmployeeEmailsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('employee_emails', function(Blueprint $table)
		{
                    $table->increments('id');
                    $table->string('email')->unique();
                    $table->integer('employee_id')->unsigned();
                    $table->foreign('employee_id')->references('id')->on('employees')->onDelete('cascade');
                    $table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('employee_emails');
	}

}
