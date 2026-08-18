import { Link, usePage } from '@inertiajs/react';
import { useState, ReactNode } from 'react';
import logo from '../../images/logo-png.png';

interface StudentDashboardLayoutProps {
    children: ReactNode;
}

export default function StudentDashboardLayout({ children }: StudentDashboardLayoutProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const [activeMenu, setActiveMenu] = useState<string>('');
    const { url } = usePage();

    const toggleMobileMenu = (): void => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = (): void => {
        setIsMobileMenuOpen(false);
    };





    const toggleSidebar = (): void => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const menuItems = [
        { id: 'home', label: 'হোম পেজ', icon: '🏠', href: '/' },
        { id: 'dashboard', label: 'ড্যাশবোর্ড', icon: '📊', href: '/student/dashboard' },
        { id: 'my-courses', label: 'আমার কোর্সসমূহ', icon: '📚', href: '/student/courses' },
        { id: 'smart-test', label: 'স্মার্ট টেস্ট', icon: '💡', href: '/smart-test' },
        { id: 'progress', label: 'প্রোগ্রেস', icon: '📈', href: '/student/progress' },
        { id: 'profile', label: 'প্রোফাইল', icon: '👤', href: '/student/profile' },
    ];

    return (
        <>
            {/* Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* Animated Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,1,79,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,1,79,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

                {/* Pink Glow Effects */}
                <div className="absolute top-0 -left-32 w-96 h-96 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>
                <div className="absolute bottom-0 -right-32 w-96 h-96 bg-[#FF014F]/10 rounded-full blur-[128px]"></div>

                {/* Floating Particles */}
                <div className="absolute top-20 left-1/4 w-2 h-2 bg-[#FF014F] rounded-full animate-float"></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#FF014F] rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 left-1/2 w-1.5 h-1.5 bg-[#FF014F] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#FF014F]/30"></div>
                <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#FF014F]/30"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#FF014F]/30"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#FF014F]/30"></div>
            </div>

            {/* Header */}
            <header className="bg-[#181717] backdrop-blur-lg shadow-2xl sticky top-0 z-50  border-[#FF014F]/20">
                <div className=" mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        {/* Left Section - Menu Toggle & Logo */}
                        <div className="flex items-center space-x-4">
                            {/* Sidebar Toggle Button */}
                            <button
                                onClick={toggleSidebar}
                                className="p-2 rounded-xl lg:hidden md:block bg-[#0a0a0a] border border-[#FF014F]/20 text-gray-300 hover:text-[#FF014F] hover:border-[#FF014F]/40 transition-all duration-200"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            {/* Logo */}
                            <Link href="/" className="flex items-center space-x-3 group">
                                <img
                                    src={logo}
                                    alt="Physics Study BD"
                                    className="h-8 md:h-10 transition-transform duration-300 group-hover:scale-110"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex flex-1 relative z-10 min-h-screen bg-[#0a0a0a]">
                {/* Sidebar Overlay */}
                {isSidebarOpen && (
                    <div 
                        className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                        onClick={toggleSidebar}
                    ></div>
                )}

                {/* Sidebar */}
                <aside className={`
                    bg-[#76727223] backdrop-blur-lg
                    fixed lg:static inset-y-0 left-0 z-40
                    transform transition-transform duration-300 ease-in-out
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
                    w-64 lg:w-72 flex-shrink-0 overflow-y-auto
                `}>
                    {/* Sidebar Header */}
                    <div className="p-4 md:p-6 border-b border-[#FF014F]/20">
                        <div className="flex items-center justify-between">
                            {/* <h2 className="text-lg font-semibold text-white">মেনু</h2> */}
                            <button
                                onClick={toggleSidebar}
                                className="p-1 rounded-lg bg-[#0a0a0a] border border-[#FF014F]/20 text-gray-300 hover:text-[#FF014F] hover:border-[#FF014F]/40 transition-all duration-200 lg:hidden"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="p-3 md:p-4 space-y-1 md:space-y-2">
                        {menuItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={`
                                    flex items-center space-x-3 px-3 py-2 md:px-4 md:py-3 rounded-xl transition-all duration-200 group text-sm md:text-base
                                    ${url === item.href 
                                        ? 'bg-[#9f2f5496] text-[#FF014F]' 
                                        : 'text-gray-300 hover:text-[#FF014F] hover:bg-[#FF014F]/10 border border-transparent'
                                    }
                                `}
                                onClick={() => {
                                    setActiveMenu(item.id);
                                    if (window.innerWidth < 1024) {
                                        toggleSidebar();
                                    }
                                }}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span className="font-medium flex-1">{item.label}</span>
                                {activeMenu === item.id && (
                                    <div className="w-2 h-2 bg-[#FF014F] rounded-full animate-pulse"></div>
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Quick Stats */}

                    {/* Logout Button */}
                    <div className="p-3 md:p-4 border-t border-[#FF014F]/20 mt-4">
                        <Link
                            href="/logout"
                            method="post"
                            className="flex w-full items-center space-x-3 px-3 py-2 md:px-4 md:py-3 rounded-xl text-gray-300 hover:text-[#FF014F] hover:bg-[#FF014F]/10 border border-transparent hover:border-[#FF014F]/20 transition-all duration-200 group text-sm md:text-base"
                        >
                            <span className="text-lg">🚪</span>
                            <span className="font-medium">লগ আউট</span>
                        </Link>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-auto">
                    <div className="p-4 md:p-6 lg:p-8">
                        {/* Welcome Section */}

                        {/* Main Content Area */}
                         {children}

                        
                        
                    </div>
                </main>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </>
    );
}