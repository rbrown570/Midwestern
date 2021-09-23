<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Card;

class PageCards extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cardOne = Card::create([
            'card_heading' => 'Heading Two', 
            'card_paragraph' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est sed diam euismod.',
            'card_img_src' => '/assets/Talkie.png'
        ]);
        $cardTwo = Card::create([
            'card_heading' => 'Heading Two', 
            'card_paragraph' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor vehicula auctor.',
            'card_img_src' => '/assets/Rabbit.png'
        ]);
        $cardThree = Card::create([
            'card_heading' => 'Heading Two', 
            'card_paragraph' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et feugiat mi, et venenatis purus.',
            'card_img_src' => '/assets/Shield.png'
        ]);

    }
}
