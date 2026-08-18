<div class="w-64 bg-white shadow-lg z-20">
    <div class="p-6 border-b border-gray-200">
        <div class="flex items-center">
            <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <h1 class="text-xl font-bold ml-3 text-gray-800">সহায়ক</h1>
        </div>
    </div>

    <div class="p-4">
        <div class="mb-8">
            <ul class="space-y-1">
                <li>
                    <a href="{{ route('admin.index') }}"
                        class="sidebar-item flex items-center px-4 py-3 text-gray-700 rounded-lg {{ request()->routeIs('admin.index') ? 'active' : '' }}">
                        <i class="fas fa-tachometer-alt mr-3 text-gray-500"></i>
                        <span>ড্যাশবোর্ড</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.courses.index') }}"
                        class="sidebar-item flex items-center px-4 py-3 text-gray-700 rounded-lg {{ request()->routeIs('admin.courses.index') ? 'active' : '' }}">
                        <i class="fas fa-book-open mr-3 text-gray-500"></i>
                        <span>কোর্সসমূহ</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.categories.index') }}"
                        class="sidebar-item flex items-center px-4 py-3 text-gray-700 rounded-lg {{ request()->routeIs('admin.categories.index') ? 'active' : '' }}">
                        <i class="fas fa-layer-group mr-3 text-gray-500"></i>
                        <span>ক্যাটাগরি</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.courses.popularcourse') }}"
                        class="sidebar-item flex items-center px-4 py-3 text-gray-700 rounded-lg {{ request()->routeIs('admin.courses.popularcourse') ? 'active' : '' }}">
                        <i class="fas fa-fire mr-3 text-gray-500"></i>
                        <span>জনপ্রিয় কোর্স</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.promo-codes.index') }}"
                        class="sidebar-item flex items-center px-4 py-3 text-gray-700 rounded-lg {{ request()->routeIs('admin.promo-codes.index') ? 'active' : '' }}">
                        <i class="fas fa-tag mr-3 text-gray-500"></i>
                        <span>প্রোমো কোড</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.orders.index') }}"
                        class="sidebar-item flex items-center px-4 py-3 text-gray-700 rounded-lg {{ request()->routeIs('admin.orders.index') ? 'active' : '' }}">
                        <i class="fas fa-tag mr-3 text-gray-500"></i>
                        <span>অর্ডার</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.notices.index') }}"
                        class="sidebar-item flex items-center px-4 py-3 text-gray-700 rounded-lg {{ request()->routeIs('admin.notices.index') ? 'active' : '' }}">
                        <i class="fas fa-bullhorn mr-3 text-gray-500"></i>
                        <span>নোটিশ</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.reviews.index') }}"
                        class="sidebar-item flex items-center px-4 py-3 text-gray-700 rounded-lg {{ request()->routeIs('admin.reviews.index') ? 'active' : '' }}">
                        <i class="fas fa-star mr-3 text-gray-500"></i>
                        <span>রিভিউ</span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="mb-8">
            <ul class="space-y-1">
                <li>
                    <a href="{{ route('admin.users.index') }}"
                        class="sidebar-item flex items-center px-4 py-3 text-gray-700 rounded-lg {{ request()->routeIs('admin.users.index') ? 'active' : '' }}">
                        <i class="fas fa-user-graduate mr-3 text-gray-500"></i>
                        <span>শিক্ষার্থীরা</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.instructors.index') }}"
                        class="sidebar-item flex items-center px-4 py-3 text-gray-700 rounded-lg {{ request()->routeIs('admin.instructors.index') ? 'active' : '' }}">
                        <i class="fas fa-chalkboard-teacher mr-3 text-gray-500"></i>
                        <span>শিক্ষক</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.banners.index') }}"
                        class="sidebar-item flex items-center px-4 py-3 text-gray-700 rounded-lg {{ request()->routeIs('admin.banners.index') ? 'active' : '' }}">
                        <i class="fas fa-image mr-3 text-gray-500"></i>
                        <span>ব্যানার</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.contact') }}"
                        class="sidebar-item flex items-center px-4 py-3 text-gray-700 rounded-lg {{ request()->routeIs('admin.contact') ? 'active' : '' }}">
                        <i class="fas fa-message mr-3 text-gray-500"></i>
                        <span>যোগাযোগ</span>
                    </a>
                </li>
            </ul>
        </div>

        <div>
            <h2 class="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">প্রশ্ন ব্যাংক</h2>
            <ul class="space-y-1">
                <li>
                    <a href="{{ route('admin.question.index') }}"
                        class="sidebar-item flex items-center px-4 py-3 text-gray-700 rounded-lg">
                        <i class="fas fa-question-circle mr-3 text-gray-500"></i>
                        <span>প্রশ্ন</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.subject.index') }}"
                        class="sidebar-item flex items-center px-4 py-3 text-gray-700 rounded-lg">
                        <i class="fas fa-book-open mr-3 text-gray-500"></i>
                        <span>বিষয়</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.topic.index') }}"
                        class="sidebar-item flex items-center px-4 py-3 text-gray-700 rounded-lg">
                        <i class="fas fa-list-alt mr-3 text-gray-500"></i>
                        <span>টপিক</span>
                    </a>
                </li>
            </ul>
        </div>

        <div>
            <h2 class="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">সেটিংস</h2>
            <ul class="space-y-1">
                <li>
                    <a href="{{ route('admin.panel.setting') }}"
                        class="sidebar-item flex items-center px-4 py-3 text-gray-700 rounded-lg ">
                        <i class="fas fa-cog mr-3 text-gray-500"></i>
                        <span>সেটিংস</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>