import { Link, usePage } from "@inertiajs/react";
import StudentDashboardLayout from "./layout";

export default function Courses({ courses }) {
    
    console.log(courses)

    return (
        <StudentDashboardLayout>
            <div>
                {/* Header Section */}
                <div className="bg-[#aaaaaa2f] border-[#FF014F]/20 rounded p-4 md:p-6 mb-4 md:mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                                আমার কোর্সসমূহ 📚
                            </h1>
                            <p className="text-gray-300 text-sm md:text-base">
                                তোমার এনরোল্ড কোর্সগুলো থেকে শেখা শুরু করো
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <div className="text-white bg-[#FF014F] px-4 py-2 rounded-lg text-sm">
                                মোট কোর্স: {courses.length}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((enrollment) => {
                        const course = enrollment.course;

                        return (
                            <div key={enrollment.id} className="bg-[#9595952e] backdrop-blur-lg rounded-lg overflow-hidden  transition-all duration-300">
                                <div className="relative   overflow-hidden">
                                    <img
                                        src={course.thumbnail || "/default-course-image.jpg"}
                                        alt={course.title}
                                        className="w-full h-full "
                                    />
                                </div>

                                {/* Course Content */}
                                <div className="p-4 md:p-6">
                                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                                        {course.title}
                                    </h3>


                                    {/* Action Buttons */}
                                    <div className="flex space-x-3">
                                        <div className="flex justify-between items-center w-full gap-2">
                                            <div className="flex-1">
                                                <Link href={`/student/class/${course.id}`}
                                                    className="w-full bg-[#FF014F] hover:bg-[#FF014F]/90 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center"
                                                >
                                                    <span>ক্লাস শুরু করো</span>
                                                    <span className="ml-2">📚</span>
                                                </Link>
                                            </div>
                                            <div className="flex-1 flex flex-col items-center">
                                               
                                                <Link href={`/student/exam/${course.id}`}
                                                    className="w-full bg-[#FF014F] hover:bg-[#FF014F]/90 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center"
                                                >
                                                    {course.exam && course.exam.status == 'active' ? "লিখিত পরীক্ষা চলছে" : "লিখিত পরীক্ষা নেই"}
                                                    
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-600">
                                        {course.whatsapp_link && (
                                            <a href={course.whatsapp_link} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                                                <i className="fa-brands text-3xl fa-whatsapp"></i>
                                            </a>
                                        )}
                                        {course.facebook_link && (
                                            <a href={course.facebook_link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                                                <i className="fa-brands fa-facebook text-3xl"></i>
                                            </a>
                                        )}
                                        {course.telegram_link && (
                                            <a href={course.telegram_link} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">
                                                <i className="fa-brands text-3xl fa-telegram"></i>
                                            </a>
                                        )}
                                    </div>

                                        {/* routine download button  */}
                                        <div className="flex justify-center mt-4">
                                            {course.routine_pdf && (
                                                <a href={'/storage/'+course.routine_pdf} download={course.routine_pdf} className="bg-[#FF014F] hover:bg-[#FF014F]/90 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center">
                                                    রুটিন ডাউনলোড করুন
                                                </a>
                                            )}
                                        </div>
                                   

                                </div>
                            </div>
                        );
                    })}
                </div>

                {courses.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">📚</div>
                        <h3 className="text-xl font-bold text-white mb-2">কোন কোর্স খুঁজে পাওয়া যায়নি</h3>
                        <p className="text-gray-400 mb-6">তুমি এখনো কোনো কোর্সে এনরোল করোনি</p>
                        <Link href='/courses' className="bg-[#FF014F] hover:bg-[#FF014F]/90 text-white px-6 py-3 rounded-lg font-medium">
                            কোর্স ব্রাউজ করো
                        </Link>
                    </div>
                )}
            </div>
        </StudentDashboardLayout>
    );
}