<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Race extends Model
{
    public $timestamps = false;
    protected $table ='races';
    protected $guarded = ['id'];

}
