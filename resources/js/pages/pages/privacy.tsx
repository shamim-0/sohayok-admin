import AppLayout from "../frontend/layout";

export default function PrivacyPolicy() {
    const privacyData = {
        introduction: "By using the SOHAYOK website, mobile app, or any of our services, you agree to the terms of this Privacy Policy. We take the privacy and security of your personal information seriously. Last updated: November 11, 2025",

        sections: [
            {
                title: "Information We Collect",
                content: "We collect information such as your name, email address, phone number, educational details, and usage data when you register on our platform or use our services. If you sign in with Google, we receive your name, email address, and profile picture from your Google account. We also automatically collect technical information such as device type, operating system, IP address, and app usage logs to help us maintain and improve the service."
            },
            {
                title: "How We Use Your Information",
                content: "We use your information only to provide educational services, process payments, offer customer support, improve our platform, prevent fraud, and communicate important updates. We do not use your data for any purpose unrelated to providing and improving our services, and we never share your personal information with unauthorized third parties."
            },
            {
                title: "Data Security",
                content: "We protect your information using SSL encryption, secure servers, and modern security protocols. Access to personal data is restricted to authorized personnel only, and our systems are regularly monitored and audited to guard against unauthorized access, alteration, or disclosure."
            },
            {
                title: "Cookies Policy",
                content: "We use cookies and similar technologies to improve your experience, remember your preferences, and keep you securely signed in. This helps our website function properly and allows us to provide more relevant content. You can control or disable cookies at any time through your browser or device settings."
            },
            {
                title: "Third-Party Services",
                content: "We work only with trusted service providers who follow applicable data protection rules. These include Google (for sign-in/authentication) and SSLCommerz (for secure payment processing). These providers process limited data strictly to perform the services we request, and we do not sell or rent your personal information to any third party for advertising or marketing purposes."
            },
            {
                title: "Data Retention",
                content: "We retain your personal information only for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Once data is no longer needed for these purposes, it is securely deleted or anonymized."
            },
            {
                title: "Account & Data Deletion",
                content: "You may request deletion of your account and associated personal data at any time by emailing us at sohayokstorage@gmail.com with the subject 'Account Deletion Request'. We will verify your request and permanently delete your data within 30 days, except where retention is required by law (e.g., financial transaction records)."
            },
            {
                title: "Children's Privacy",
                content: "Our services are not directed at children under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected such information, we will take steps to delete it promptly."
            },
            {
                title: "Your Rights",
                content: "You have the right to access, correct, update, or delete your personal information, and to object to or restrict certain processing of your data. You may exercise these rights at any time by contacting our Data Protection Officer. Your rights are protected under the Bangladesh Digital Security Act 2018 and applicable data protection regulations."
            },
            {
                title: "Changes to This Policy",
                content: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with a revised 'last updated' date, and significant changes will be communicated to you directly where appropriate."
            }
        ],

        dataProtection: [
            "Data Retention: We keep your information only for as long as it is necessary",
            "Data Sharing: We never share your information without your explicit permission, except as required to provide our services or comply with the law",
            "Security: We maintain the highest standard of data protection using encryption and secure infrastructure",
            "Transparency: We present our data practices clearly and transparently in this policy"
        ],

        userRights: [
            "Right to Access: View the personal information we have collected about you",
            "Right to Rectification: Request correction of inaccurate or incomplete information",
            "Right to Erasure: Request deletion of your personal data and account",
            "Right to Object: Object to or restrict certain processing of your data"
        ],

        legalInfo: {
            laws: [
                "Bangladesh Digital Security Act 2018",
                "Personal Data Protection Guidelines",
                "International Data Protection Standards (e.g., GDPR principles)"
            ],
            contact: {
                email: "sohayokstorage@gmail.com",
                phone: "+8801969-525350",
                address: "Dhaka, Bangladesh, 1500",
            }
        },

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
                <div className="relative z-10 max-w-4xl mx-auto px-4">

                    {/* Hero Section */}
                    <div className="text-center mb-16 relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            <span className="relative text-white">
                                Privacy
                            </span>
                            <span className="ms-3 bg-gradient-to-r from-[#FF014F] via-[#FF014F] to-[#FF014F] bg-clip-text text-transparent mt-4">
                                Policy
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                            {privacyData.introduction}
                        </p>

                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                    </div>

                    {/* Data Protection Principles */}
                    <div className="mb-16">
                        <div className="text-center mb-8 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                            <h2 className="text-3xl font-bold text-white mb-4">Data Protection Principles</h2>
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                        </div>
                        <div className="bg-[#7c777714] backdrop-blur-sm rounded-2xl p-8 border border-[#FF014F]/20">
                            <div className="grid gap-4">
                                {privacyData.dataProtection.map((principle, index) => (
                                    <div key={index} className="flex items-start gap-3 text-gray-300">
                                        <span className="text-[#FF014F] mt-1">•</span>
                                        <span>{principle}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* User Rights */}
                    <div className="mb-16">
                        <div className="text-center mb-8 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                            <h2 className="text-3xl font-bold text-white mb-4">User Rights</h2>
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                        </div>
                        <div className="bg-[#7c777714] backdrop-blur-sm rounded-2xl p-8 border border-[#FF014F]/20">
                            <div className="grid gap-4">
                                {privacyData.userRights.map((right, index) => (
                                    <div key={index} className="flex items-start gap-3 text-gray-300">
                                        <span className="text-green-400 mt-1">✓</span>
                                        <span>{right}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Privacy Policy Sections */}
                    <div className="mb-16">
                        <div className="text-center mb-8 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                            <h2 className="text-3xl font-bold text-white mb-4">Privacy Policy Details</h2>
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                        </div>
                        <div className="space-y-8">
                            {privacyData.sections.map((section, index) => (
                                <div key={index} className="bg-[#7c777714] backdrop-blur-sm rounded-2xl p-8 border border-[#FF014F]/20">
                                    <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {section.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legal & Contact Information */}
                    <div className="mb-16">
                        <div className="text-center mb-8 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                            <h2 className="text-3xl font-bold text-white mb-4">Legal Information & Contact</h2>
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF014F] to-transparent"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Legal Information */}
                            <div className="bg-[#7c777714] backdrop-blur-sm rounded-2xl p-8 border border-[#FF014F]/20">
                                <h3 className="text-xl font-bold text-white mb-4">Legal Provisions</h3>
                                <div className="space-y-3">
                                    {privacyData.legalInfo.laws.map((law, index) => (
                                        <div key={index} className="flex items-start gap-3 text-gray-300">
                                            <span className="text-[#FF014F] mt-1">⚖️</span>
                                            <span>{law}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="bg-[#7c777714] backdrop-blur-sm rounded-2xl p-8 border border-[#FF014F]/20">
                                <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3 text-gray-300">
                                        <span className="text-[#FF014F]">📧</span>
                                        <span>{privacyData.legalInfo.contact.email}</span>
                                    </div>
                                    <div className="flex items-start gap-3 text-gray-300">
                                        <span className="text-[#FF014F]">📞</span>
                                        <span>{privacyData.legalInfo.contact.phone}</span>
                                    </div>
                                    <div className="flex items-start gap-3 text-gray-300">
                                        <span className="text-[#FF014F]">🏢</span>
                                        <span>{privacyData.legalInfo.contact.address}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


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

                /* Smooth transitions for all interactive elements */
                * {
                    transition-property: color, background-color, border-color, transform, box-shadow;
                    transition-duration: 300ms;
                }
            `}</style>
        </AppLayout>
    );
}
