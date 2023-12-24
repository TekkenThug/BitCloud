<?php

namespace App\Services;

use App\Models\Article;

class ArticleService {
    public function getArticles(): array
    {
        $articles = Article::with('user')->with('articleTag')->get();

        return $articles->map(function ($article) {
            return [
                'author' => $article->user->first_name . " " . $article->user->last_name,
                'id' => $article->id,
                'date' => $article->created_at,
                'tag' => $article->articleTag->label,
                'cover_url' => $article->cover_url,
                'title' => $article->title,
            ];
        })->toArray();
    }
}
