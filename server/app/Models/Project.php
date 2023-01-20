z<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable = [
        'title','description', 'image', 'url', 'source_code_url', 'developer_name','is_validated', 'developer_image'
    ];
}