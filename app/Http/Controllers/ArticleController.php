<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleCollection;
use App\Models\Article;
use Illuminate\Http\Request;

/**
 * @group Articles
 */
class ArticleController extends Controller
{
    /**
     * Display a listing of the articles
     *
     * @authenticated
     *
     * @response {
     *     "data": [{
     *          id: 1,
     *          tag: "Featured",
     *          title: "Submit your watchlist and win USDT",
     *          author: "Arnulfo Ratke",
     *          cover_url: "https://m.foolcdn.com/media/dubs/images/stock_market_image.width-880.jpg",
     *          date: "2013-07-09T00:00:00.000000Z"
     *      }]
     * }
     */
    public function index(Request $request)
    {
        return new ArticleCollection(Article::latest()->paginate($request->query('limit')));
    }

    /**
     * Store a newly created resource in storage.
     */
//    public function store(Request $request)
//    {
//        //
//    }

    /**
     * Display the specified resource.
     */
//    public function show(string $id)
//    {
//        //
//    }

    /**
     * Update the specified resource in storage.
     */
//    public function update(Request $request, string $id)
//    {
//        //
//    }

    /**
     * Remove the specified resource from storage.
     */
//    public function destroy(string $id)
//    {
//        //
//    }
}
