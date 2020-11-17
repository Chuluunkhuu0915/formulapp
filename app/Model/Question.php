<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = ['title', 'slug', 'body', 'category_id', 'user_id'];
    // protected $guarded = [];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($question) {
            $question->slug = str_slug($question->title);
        });
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function catergory()
    {
        return $this->belongsTo(Category::class);
    }
    public function replies()
    {
        return $this->hasMany(Reply::class);
    }
    public function getRouteKeyName()
    {
        return 'slug';
    }
    public function getPathAttribute()
    {
        return "/question/$this->slug";
    }
}
