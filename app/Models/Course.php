<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'price',
        'offer_price',
        'status',
        'enrolled',
        'category_id',
        'description',
        'more_description',
        'thumbnail',
        'whatsapp_link',
        'facebook_link',
        'telegram_link',
        'routine_pdf',
        'how_to_buy'
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'offer_price' => 'decimal:2',
    ];

    protected $appends = ['is_popular', 'total_orders'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($course) {
            if (empty($course->slug)) {
                $course->slug = Str::slug($course->title);
            }
        });

        static::updating(function ($course) {
            if ($course->isDirty('title') && empty($course->getOriginal('slug'))) {
                $course->slug = Str::slug($course->title);
            }
        });
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getDiscountPercentageAttribute()
    {
        if ($this->offer_price && $this->price > 0) {
            return round((($this->price - $this->offer_price) / $this->price) * 100);
        }
        return 0;
    }

    public function getFinalPriceAttribute()
    {
        return $this->offer_price ?? $this->price;
    }

    public function getStatusBadgeAttribute()
    {
        $statuses = [
            'draft' => ['bg-gray-100 text-gray-800', 'ড্রাফট'],
            'published' => ['bg-green-100 text-green-800', 'প্রকাশিত'],
            'archived' => ['bg-red-100 text-red-800', 'আর্কাইভড']
        ];

        return $statuses[$this->status] ?? $statuses['draft'];
    }


    public function getThumbnailUrlAttribute()
    {
        if ($this->thumbnail && file_exists(public_path('uploads/' . $this->thumbnail))) {
            return asset('uploads/' . $this->thumbnail);
        }
        return 'https://via.placeholder.com/400x300?text=No+Thumbnail';
    }

    public function features()
    {
        return $this->hasMany(CourseFeature::class)->orderBy('order');
    }

    public function activeFeatures()
    {
        return $this->hasMany(CourseFeature::class)
            ->where('is_active', true)
            ->orderBy('order');
    }

    // Get routine PDF path
    public function getRoutinePdfPathAttribute()
    {
        return $this->routine_pdf ? asset('storage/' . $this->routine_pdf) : null;
    }



    public function instructors()
    {
        return $this->belongsToMany(Instructor::class, 'course_instructors')
            ->withPivot('order')
            ->withTimestamps()
            ->orderBy('order');
    }

    public function courseInstructors()
    {
        return $this->belongsToMany(Instructor::class)
            ->orderBy('order');
    }




    public function popularCourses()
    {
        return $this->hasMany(PopularCourse::class);
    }

    // Accessor to check if course is popular
    public function getIsPopularAttribute()
    {
        return $this->popularCourses()->exists();
    }


    public function promoCodes()
    {
        return $this->hasMany(PromoCode::class);
    }


    public function banner()
    {
        return $this->hasOne(Banner::class);
    }

    // Check if course is in banner
    public function getIsInBannerAttribute()
    {
        return $this->banner()->exists();
    }


    public function orders()
    {
        return $this->hasMany(Order::class);
    }


    public function getTotalOrdersAttribute()
    {
        return $this->orders()->count() + ($this->enrolled ?? 0);
    }

    public function exams()
    {
        return $this->hasMany(Exam::class);
    }
    public function exam()
    {
        return $this->hasOne(Exam::class)->where('status', 'active');
    }

}