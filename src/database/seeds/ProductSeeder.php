<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $product = new \App\Product([
            'id' => 1,
            'name' => '川端莉緒',
            'price' => 100
          ]);
       $product->save();
   }
}
