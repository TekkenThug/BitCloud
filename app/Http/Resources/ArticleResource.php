<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'author' => $this->user->first_name.' '.$this->user->last_name,
            'id' => $this->id,
            'date' => $this->created_at,
            'tag' => $this->articleTag->label,
            'cover_url' => $this->cover_url,
            'title' => $this->title,
        ];
    }
}
