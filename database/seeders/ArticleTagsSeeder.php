<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ArticleTagsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('article_tags')->insert([
            'label' => 'Featured',
            'description' => 'Actual articles',
        ]);

        DB::table('article_tags')->insert([
            'label' => 'New',
            'description' => 'New articles',
        ]);
    }
}
