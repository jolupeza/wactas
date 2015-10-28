<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmployeePhonesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('employee_phones', function(Blueprint $table)
		{
			$table->increments('id');
                        $table->string('phone', 50);
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
		Schema::drop('employee_phones');
	}

}
