<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->increments('id');
                        $table->string('name', 100);
                        $table->enum('type', ['DIG', 'CRE']);
                        $table->text('description')->nullable();
                        $table->longText('objectives')->nullable();
                        $table->boolean('status')->default(false);
                        $table->tinyInteger('correlative')->default(0);
                        $table->integer('customer_id')->unsigned();
                        $table->foreign('customer_id')->references('id')->on('customers');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::drop('projects');
    }
}
