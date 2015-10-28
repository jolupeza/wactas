<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmployeesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('employees', function(Blueprint $table)
		{
                    $table->increments('id');
                    $table->string('name', 100);
                    $table->string('job', 50);
                    $table->boolean('status')->default(false);
                    $table->integer('customer_id')->unsigned();
                    $table->foreign('customer_id')->references('id')->on('customers');
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
		Schema::drop('employees');
	}

}
