import { Link, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import AppLayout from "../frontend/layout";

interface Course {
    id: number;
    title: string;
    slug: string;
    thumbnail: string;
    classes: number;
    exams: number;
    offer_price: number;
    price: number;
    category_id: number;
    category?: {
        id: number;
        name: string;
    };
}

interface Category {
    id: number;
    name: string;
}

interface PageProps {
    courses: Course[];
    categories: Category[];
    [key: string]: any;
}

export default function Courses({ courses: initialCourses, categories }: PageProps) {
    const { props } = usePage<PageProps>();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [filteredCourses, setFilteredCourses] = useState<Course[]>(initialCourses);

    // Filter courses based on search term and category
    useEffect(() => {
        let filtered = initialCourses;

        if (searchTerm) {
            filtered = filtered.filter(course =>
                course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.category?.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory) {
            filtered = filtered.filter(course =>
                course.category_id.toString() === selectedCategory
            );
        }

        setFilteredCourses(filtered);
    }, [searchTerm, selectedCategory, initialCourses]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };

    const clearFilters = () => {
        setSearchTerm("");
        setSelectedCategory("");
    };

    return (
        <AppLayout>
            <section className="relative overflow-hidden bg-[#0a0a0a] py-20">

                {/* Modern Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Animated Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,1,79,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,1,79,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

                    {/* Pink Glow Effects */}
                    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>
                    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>

                    {/* Floating Particles */}
                    <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#FF014F] rounded-full animate-float"></div>
                    <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#FF014F] rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#FF014F]/30"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#FF014F]/30"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#FF014F]/30"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#FF014F]/30"></div>
                </div>

                {/* Main Content Container */}
                <div className="relative z-10 max-w-7xl mx-auto px-4">

                    {/* Filter Section */}
                    <div className="mb-8 p-6 bg-[#94909012] backdrop-blur-sm rounded">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                            {/* Search Input */}
                            <div className="flex-1 w-full md:w-auto">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search courses..."
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                        className="w-full px-4 py-3 bg-[#0a0a0a]  rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF014F]/60 focus:ring-2 focus:ring-[#FF014F]/20 transition-all duration-300"
                                    />
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FF014F]">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Category Filter */}
                            <div className="w-full md:w-64">
                                <select
                                    value={selectedCategory}
                                    onChange={handleCategoryChange}
                                    className="w-full px-4 py-3 bg-[#0a0a0a]   rounded text-white focus:outline-none focus:border-[#FF014F]/60 focus:ring-2 focus:ring-[#FF014F]/20 transition-all duration-300 appearance-none"
                                >
                                    <option value="">All Categories</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Clear Filters Button */}
                            {(searchTerm || selectedCategory) && (
                                <button
                                    onClick={clearFilters}
                                    className="px-6 py-3 bg-[#FF014F] text-white rounded-xl hover:bg-[#FF014F]/80 transition-all duration-300 font-semibold"
                                >
                                    Clear Filters
                                </button>
                            )}
                        </div>

                        {/* Results Count */}
                        <div className="mt-4 text-center">
                            <p className="text-gray-400">
                                Showing {filteredCourses.length} of {initialCourses.length} courses
                                {(searchTerm || selectedCategory) && (
                                    <span className="text-[#FF014F] ml-2">
                                        {searchTerm && `• Search: "${searchTerm}"`}
                                        {selectedCategory && `• Category: ${categories.find(cat => cat.id.toString() === selectedCategory)?.name}`}
                                    </span>
                                )}
                            </p>
                        </div>
                    </div>

                    {/* Courses Grid */}
                    {filteredCourses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                            {filteredCourses.map((course) => (
                                <Link
                                    href={'course/' + course.slug}
                                    key={course.id}
                                    className="group relative bg-[#94909012] backdrop-blur-sm rounded overflow-hidden shadow-2xl   cursor-pointer"
                                >
                                    {/* Course Image */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={course.thumbnail}
                                            alt={course.title}
                                            className="w-full"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                        {/* Category Badge */}
                                        {course.category && (
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-[#FF014F] text-white text-sm rounded-full backdrop-blur-sm">
                                                    {course.category.name}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Course Content */}
                                    <div className="p-5">
                                        {/* Course Title */}
                                        <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-[#FF014F] transition-colors duration-300">
                                            {course.title}
                                        </h3>

                                        {/* Course Stats */}
                                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[#FF014F] scale-150"> 🎓 </span>
                                                <span>{course.total_orders} জন ভর্তি হয়েছে</span>
                                            </div>
                                        </div>

                                        {/* Price Section */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-2xl font-bold text-[#FF014F]">
                                                    {course.offer_price == 0 ? 'ফ্রি' : course.offer_price + ' ৳'}
                                                </span>
                                                <span className="text-lg text-gray-400 line-through">
                                                    {course.price}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Enroll Button */}
                                        <button className="group/btn relative w-full bg-gradient-to-r from-[#ff014d15] to-[#ff014d47] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FF014F]/25 border border-[#FF014F]/30 hover:border-[#FF014F]/60 flex items-center justify-center gap-2">
                                            {/* Button Glow Effect */}
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#53051d63] to-[#4f031a3c] blur-sm group-hover/btn:blur-md transition-all duration-300 opacity-50 group-hover/btn:opacity-75"></div>
                                            <span className="relative">এখনি ভর্তি হও</span>
                                            <svg className="w-4 h-4 relative group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF014F]/0 via-[#FF014F]/5 to-[#FF014F]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                    {/* Hover Indicator */}
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF014F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                                    {/* Bottom Gradient Border */}
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        /* No Results Message */
                        <div className="text-center py-16">
                            <div className="text-[#FF014F] mb-4">
                                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">No courses found</h3>
                            <p className="text-gray-400 mb-6">
                                {searchTerm || selectedCategory
                                    ? "Try adjusting your search or filter criteria"
                                    : "No courses available at the moment"
                                }
                            </p>
                            {(searchTerm || selectedCategory) && (
                                <button
                                    onClick={clearFilters}
                                    className="px-6 py-3 bg-[#FF014F] text-white rounded-xl hover:bg-[#FF014F]/80 transition-all duration-300 font-semibold"
                                >
                                    Show All Courses
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* Bottom decorative line with glow effect */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent opacity-40 shadow-lg shadow-[#FF014F]/30"></div>
            </section>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                /* Line clamp utility */
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                /* Smooth transitions for all interactive elements */
                * {
                    transition-property: color, background-color, border-color, transform, box-shadow;
                    transition-duration: 300ms;
                }

                /* Custom select arrow */
                select {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23FF014F' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
                    background-position: right 0.5rem center;
                    background-repeat: no-repeat;
                    background-size: 1.5em 1.5em;
                    padding-right: 2.5rem;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
            `}</style>
        </AppLayout>
    )
}