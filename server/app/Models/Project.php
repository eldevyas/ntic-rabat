<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable = [
        'title','description', 'image', 'url', 'github_url', 'developer_name', 'developer_image', 'developer_group','is_validated'
    ];
}
