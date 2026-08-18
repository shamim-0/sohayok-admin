import { usePage } from "@inertiajs/react";
import StudentDashboardLayout from "./layout";
import { ArrowRight, ArrowRightLeft } from "lucide-react";

export default function dashboard({enrolled}) {


    const {auth} = usePage().props;

    return (
        <StudentDashboardLayout>
            <div>
                <div className="bg-[#aaaaaa2f] border-[#FF014F]/20 rounded p-4 md:p-6 mb-4 md:mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                                স্বাগতম, {auth.user.name}! 👋
                            </h1>
                            <p className="text-gray-300 text-sm md:text-base">
                                তোমার আজকের লার্নিং জার্নি শুরু করো
                            </p>
                        </div>

                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
                    <div className="bg-[#9595952e] backdrop-blur-lg   rounded p-4 md:p-6">
                        <a href="/student/courses" className="flex items-center justify-between">
                            <div>
                                <div className="text-gray-400 text-xs md:text-sm">এনরোলড কোর্স</div>
                                <div className="text-xl md:text-2xl font-bold text-white mt-1">{enrolled}</div>
                            </div>
                            <div className="flex items-center text-[#FF014F]">
                                <a href="/student/courses" className="text-[#FF014F] block  underline text-lg md:text-xl">কোর্স দেখো </a>
                                <ArrowRight/> 
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </StudentDashboardLayout>
    )
}