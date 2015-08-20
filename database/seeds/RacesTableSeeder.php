<?php

use Illuminate\Database\Seeder;

class RacesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('races')->insert(
        ['racer_id' => '1', 'won_date' => 1438741739282],
        ['racer_id' => '2', 'won_date' => 1438741739282],
        ['racer_id' => '2', 'won_date' => 1438741739282],
        ['racer_id' => '1', 'won_date' => 1438828139282],
        ['racer_id' => '3', 'won_date' => 1438828139282],
        ['racer_id' => '3', 'won_date' => 1438837216991]
      );
    }
}
