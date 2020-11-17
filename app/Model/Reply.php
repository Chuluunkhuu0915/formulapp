<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    protected $guarded = [];
    public function question()
    {
        return $this->belongsTo(Question::class);
    }
    // Нэг хэрэглэгч олон сэтгэгдэл үлдээж болно
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Нэг сэтгэгдэл дээр олон хэрэглэгч like дарж болно
    public function like()
    {
        return $this->hasMany(Like::class);
    }
}
