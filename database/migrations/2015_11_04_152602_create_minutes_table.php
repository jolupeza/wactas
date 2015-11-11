<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMinutesTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('minutes', function (Blueprint $table) {
            $table->increments('id');
                        $table->string('name', 150);
                        $table->char('code', 20);
                        $table->string('site');
                        $table->string('office');
                        $table->dateTime('meeting_at');
                        $table->dateTime('next_meeting')->nullable();
                        $table->longText('objectives')->nullable();
                        $table->longText('agreements')->nullable();
                        $table->longText('requirements')->nullable();
                        $table->string('pdf')->nullable();
                        $table->integer('project_id')->unsigned();
                        $table->foreign('project_id')->references('id')->on('projects')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::drop('minutes');
    }
}
