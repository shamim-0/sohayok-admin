import { router, usePage } from "@inertiajs/react";
import StudentDashboardLayout from "./layout";
import { useState, useRef } from "react";

export default function Profile({ user }) {
    const { auth } = usePage().props;
    const [isEditing, setIsEditing] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [avatarPreview, setAvatarPreview] = useState(user.avatar || '');
    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        current_education: user.current_education || '',
        institute_name: user.institute_name || '',
        avatar: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAvatarClick = () => {
        if (isEditing) {
            fileInputRef.current?.click();
        }
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type
            const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
            if (!validTypes.includes(file.type)) {
                alert('দুঃখিত! শুধুমাত্র JPG, PNG, GIF বা WebP ইমেজ ফাইল অনুমোদিত।');
                return;
            }

            // Validate file size (max 2MB)
            if (file.size > 2 * 1024 * 1024) {
                alert('দুঃখিত! ইমেজ ফাইলের সাইজ 2MB এর কম হতে হবে।');
                return;
            }

            // Create preview
            const reader = new FileReader();
            reader.onload = (e) => {
                setAvatarPreview(e.target.result);
            };
            reader.readAsDataURL(file);

            // Set file in form data
            setFormData(prev => ({
                ...prev,
                avatar: file
            }));
        }
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        setIsUploading(true);

        const submitData = new FormData();
        submitData.append('name', formData.name);
        submitData.append('phone', formData.phone);
        submitData.append('current_education', formData.current_education);
        submitData.append('institute_name', formData.institute_name);

        if (formData.avatar) {
            submitData.append('avatar', formData.avatar);
        }

        // Use Inertia's post method
        router.post('/student/profile', submitData, {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                setIsUploading(false);
                setIsEditing(false);
                setFormData({
                    name: user.name || '',
                    email: user.email || '',
                    phone: user.phone || '',
                    current_education: user.current_education || '',
                    institute_name: user.institute_name || '',
                    avatar: null
                });
                setAvatarPreview(user.avatar || '');
            },
            onError: (errors) => {
                setIsUploading(false);
                console.error('Profile update errors:', errors);
                // You can show error messages to the user here
            },
            onFinish: () => {
                setIsUploading(false);
            }
        });
    };



    const removeAvatar = () => {
        setAvatarPreview('');
        setFormData(prev => ({
            ...prev,
            avatar: null
        }));
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <StudentDashboardLayout>
            <div className="mx-auto">
                {/* Header Section */}
                <div className="bg-[#aaaaaa2f] border-[#FF014F]/20 rounded p-4 md:p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                                প্রোফাইল
                            </h1>
                            <p className="text-gray-300 text-sm md:text-base">
                                তোমার প্রোফাইল তথ্য দেখো এবং এডিট করো
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <button
                                onClick={() => setIsEditing(!isEditing)}
                                className="bg-[#FF014F] hover:bg-[#FF014F]/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                            >
                                {isEditing ? 'বাতিল করুন' : 'এডিট করুন'}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Profile Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#9595952e] backdrop-blur-lg rounded-lg p-6 text-center">
                            {/* Avatar Upload Section */}
                            <div className="mb-4 relative">
                                <div
                                    className={`w-32 h-32 mx-auto bg-gradient-to-br from-[#FF014F] to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold cursor-pointer transition-all duration-300 ${isEditing ? 'hover:ring-4 hover:ring-[#FF014F]/50' : ''
                                        }`}
                                    onClick={handleAvatarClick}
                                >
                                    {avatarPreview ? (
                                        <img
                                            src={avatarPreview}
                                            alt={user.name}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    ) : (
                                        user.name?.charAt(0)?.toUpperCase() || 'U'
                                    )}

                                    {/* Upload Overlay */}
                                    {isEditing && (
                                        <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                            <div className="text-center text-white">
                                                <i className="fas fa-camera text-xl mb-1"></i>
                                                <p className="text-xs">ছবি পরিবর্তন</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* File Input (Hidden) */}
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleAvatarChange}
                                    accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                                    className="hidden"
                                />

                                {/* Remove Avatar Button */}
                                {isEditing && avatarPreview && (
                                    <button
                                        type="button"
                                        onClick={removeAvatar}
                                        className="mt-2 text-red-400 hover:text-red-300 text-sm flex items-center justify-center mx-auto"
                                    >
                                        <i className="fas fa-trash mr-1"></i>
                                        ছবি সরান
                                    </button>
                                )}

                                {/* Upload Instructions */}
                                {isEditing && (
                                    <p className="text-gray-400 text-xs mt-2">
                                        JPG, PNG, GIF, WebP <br />
                                        সর্বোচ্চ 2MB
                                    </p>
                                )}
                            </div>

                            {/* User Info */}
                            <h2 className="text-xl font-bold text-white mb-2">
                                {user.name || 'নাম নেই'}
                            </h2>
                            <p className="text-gray-300 text-sm mb-4">
                                {user.email}
                            </p>

                            {/* Stats */}
                            <div className="bg-[#ffffff1a] rounded-lg p-4 mt-4">
                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div>
                                        <div className="text-white font-bold text-lg">
                                            {user.enrolled_courses_count || 0}
                                        </div>
                                        <div className="text-gray-400 text-xs">
                                            কোর্স
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-lg">
                                            {user.completed_courses_count || 0}
                                        </div>
                                        <div className="text-gray-400 text-xs">
                                            সম্পন্ন
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Details */}
                    <div className="lg:col-span-2">
                        <div className="bg-[#9595952e] backdrop-blur-lg rounded-lg p-6">
                            <h3 className="text-lg font-bold text-white mb-6 border-b border-gray-600 pb-3">
                                প্রোফাইল তথ্য
                            </h3>

                            {isEditing ? (
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Name */}
                                        <div className="md:col-span-2">
                                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                                পুরো নাম
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#ffffff1a] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF014F] transition-colors"
                                                placeholder="আপনার পুরো নাম লিখুন"
                                                required
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="md:col-span-2">
                                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                                ইমেইল ঠিকানা
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                readOnly
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#ffffff1a] border cursor-not-allowed border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF014F] transition-colors"
                                                placeholder="আপনার ইমেইল ঠিকানা"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                                ফোন নম্বর
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#ffffff1a] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF014F] transition-colors"
                                                placeholder="০১XXXXXXXXX"
                                            />
                                        </div>

                                        {/* Current Education */}
                                        <div>
                                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                                বর্তমান শিক্ষাগত অবস্থা
                                            </label>
                                            <select
                                                name="current_education"
                                                value={formData.current_education}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#ffffff1a] border border-gray-600 rounded-lg px-4 text-white py-3 focus:outline-none focus:border-[#FF014F] transition-colors"
                                            >
                                                <option value="">নির্বাচন করুন</option>
                                                <option value="school">স্কুল</option>
                                                <option value="college">কলেজ</option>
                                                <option value="university">বিশ্ববিদ্যালয়</option>
                                                <option value="other">অন্যান্য</option>
                                            </select>
                                        </div>

                                        {/* Institute Name */}
                                        <div className="md:col-span-2">
                                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                                শিক্ষা প্রতিষ্ঠানের নাম
                                            </label>
                                            <input
                                                type="text"
                                                name="institute_name"
                                                value={formData.institute_name}
                                                onChange={handleInputChange}
                                                className="w-full bg-[#ffffff1a] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF014F] transition-colors"
                                                placeholder="আপনার শিক্ষা প্রতিষ্ঠানের নাম"
                                            />
                                        </div>
                                    </div>

                                    {/* Form Actions */}
                                    <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-600">
                                        <button
                                            type="submit"
                                            disabled={isUploading}
                                            className="bg-[#FF014F] hover:bg-[#FF014F]/90 disabled:bg-[#FF014F]/50 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center"
                                        >
                                            {isUploading ? (
                                                <>
                                                    <i className="fas fa-spinner fa-spin mr-2"></i>
                                                    সংরক্ষণ হচ্ছে...
                                                </>
                                            ) : (
                                                'সংরক্ষণ করুন'
                                            )}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setIsEditing(false)}
                                            disabled={isUploading}
                                            className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-500 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                                        >
                                            বাতিল করুন
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="space-y-6">
                                    {/* Personal Information */}
                                    <div>
                                        <h4 className="text-md font-semibold text-[#FF014F] mb-3">ব্যক্তিগত তথ্য</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-gray-400 text-sm">পুরো নাম</label>
                                                <p className="text-white font-medium">{user.name || 'নেই'}</p>
                                            </div>
                                            <div>
                                                <label className="text-gray-400 text-sm">ইমেইল</label>
                                                <p className="text-white font-medium">{user.email}</p>
                                            </div>
                                            <div>
                                                <label className="text-gray-400 text-sm">ফোন নম্বর</label>
                                                <p className="text-white font-medium">{user.phone || 'নেই'}</p>
                                            </div>
                                            <div>
                                                <label className="text-gray-400 text-sm">অ্যাকাউন্ট তৈরি</label>
                                                <p className="text-white font-medium">
                                                    {new Date(user.created_at).toLocaleDateString('bn-BD')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Education Information */}
                                    <div>
                                        <h4 className="text-md font-semibold text-[#FF014F] mb-3">শিক্ষাগত তথ্য</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-gray-400 text-sm">বর্তমান শিক্ষা</label>
                                                <p className="text-white font-medium">
                                                    {user.current_education ?
                                                        user.current_education === 'school' ? 'স্কুল' :
                                                            user.current_education === 'college' ? 'কলেজ' :
                                                                user.current_education === 'university' ? 'বিশ্ববিদ্যালয়' :
                                                                    user.current_education
                                                        : 'নেই'}
                                                </p>
                                            </div>
                                            <div>
                                                <label className="text-gray-400 text-sm">শিক্ষা প্রতিষ্ঠান</label>
                                                <p className="text-white font-medium">{user.institute_name || 'নেই'}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email Verification Status */}
                                    <div className="bg-[#ffffff1a] rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h5 className="text-white font-medium mb-1">ইমেইল ভেরিফিকেশন</h5>
                                                <p className="text-gray-400 text-sm">
                                                    {user.email_verified_at ?
                                                        'আপনার ইমেইল ভেরিফাইড' :
                                                        'আপনার ইমেইল ভেরিফাইড হয়নি'
                                                    }
                                                </p>
                                            </div>
                                            <div className={`px-3 py-1 rounded-full text-xs font-medium ${user.email_verified_at ?
                                                'bg-green-500/20 text-green-400' :
                                                'bg-yellow-500/20 text-yellow-400'
                                                }`}>
                                                {user.email_verified_at ? 'ভেরিফাইড' : 'পেন্ডিং'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </StudentDashboardLayout>
    );
}