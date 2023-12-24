<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('articles')->insert([
            'title' => 'Learn about UI8 coin and earn an All-Access Pass',
            'cover_url' => 'https://www.shutterstock.com/image-illustration/top-12-cryptocurrency-tokens-by-600nw-2300861397.jpg',
            'user_id' => 1,
            'article_tag_id' => 1
        ]);

        DB::table('articles')->insert([
            'title' => 'Submit your watchlist and win USDT',
            'cover_url' => 'https://www.investopedia.com/thmb/WmfAdzhHGSnSEbyz3wYWrODrCCk=/4000x2667/filters:no_upscale():max_bytes(150000):strip_icc()/Primary-Image-how-to-invest-in-web-3-0-in-2023-7480982-787d9b953b4944f9b8ed25a284228269.jpg',
            'user_id' => 2,
            'article_tag_id' => 2
        ]);

        DB::table('articles')->insert([
            'title' => 'Submit your watchlist and win USDT',
            'cover_url' => 'https://m.foolcdn.com/media/dubs/images/stock_market_image.width-880.jpg',
            'user_id' => 1,
            'article_tag_id' => 1
        ]);
    }
}
