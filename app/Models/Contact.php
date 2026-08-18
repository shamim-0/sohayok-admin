<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'mesage',
        'status',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'status' => 'integer',
    ];

    /**
     * Get status text
     */
    public function getStatusTextAttribute(): string
    {
        return $this->status === 1 ? 'Read' : 'Unread';
    }

    /**
     * Get created date in human readable format
     */
    public function getCreatedAtFormattedAttribute(): string
    {
        return $this->created_at->format('M d, Y h:i A');
    }

    /**
     * Scope a query to only include unread messages.
     */
    public function scopeUnread($query)
    {
        return $query->where('status', 0);
    }

    /**
     * Scope a query to only include read messages.
     */
    public function scopeRead($query)
    {
        return $query->where('status', 1);
    }

    /**
     * Mark message as read
     */
    public function markAsRead(): bool
    {
        return $this->update(['status' => 1]);
    }

    /**
     * Mark message as unread
     */
    public function markAsUnread(): bool
    {
        return $this->update(['status' => 0]);
    }
}