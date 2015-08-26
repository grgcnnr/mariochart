<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;



class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        // $this->call(UserTableSeeder::class);
        DB::table('racers')->truncate();
        DB::table('racers')->insert([
          ['name' => 'George', 'color' => '#88C425'],
          ['name' => 'Noel', 'color' => '#FF370F'],
          ['name' => 'Andy', 'color' => '#2FB8AC']
        ]);

        DB::table('races')->truncate();
        DB::table('races')->insert([
          ['racer_id' => '1', 'won_date' => 1438741739],
          ['racer_id' => '2', 'won_date' => 1438741739],
          ['racer_id' => '2', 'won_date' => 1438741739],
          ['racer_id' => '1', 'won_date' => 1438828139],
          ['racer_id' => '3', 'won_date' => 1438828139],
          ['racer_id' => '3', 'won_date' => 1438837216]
        ]);
        Model::reguard();
    }
}
