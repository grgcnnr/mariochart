<?php

use Illuminate\Database\Seeder;

class RacersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('racers')->insert(
        ['name' => 'George', 'color' => '#88C425'],
        ['name' => 'Noel', 'color' => '#FF370F'],
        ['name' => 'Andy', 'color' => '#2FB8AC'],
      );
    }
}
