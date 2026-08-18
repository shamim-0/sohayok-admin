
import AuthenticatedSessionController from '@/actions/Laravel/Fortify/Http/Controllers/AuthenticatedSessionController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    return (
        <>
            <Head title="Log in" />
            
            {/* Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none bg-[#0a0a0a]">
                {/* Animated Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
                
                {/* Red Glow Effects */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-600/10 rounded-full blur-[128px]"></div>
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-red-500/10 rounded-full blur-[128px]"></div>
                
                {/* Floating Particles */}
                <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-float"></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-red-600 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-red-500/30"></div>
                <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-red-500/30"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-red-500/30"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-red-500/30"></div>
            </div>

            <div className="min-h-screen flex items-center justify-center p-6 relative z-10">
                <div className="w-full max-w-md">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-3 mb-6">
                            
                            <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                                PRO <span className="text-white">STREAM</span>
                            </span>
                        </div>
                        
                       
                    </div>

                    {/* Login Form */}
                    <div className=" backdrop-blur-sm   rounded-2xl p-8 shadow-2xl shadow-red-500/10">
                        <Form
                            {...AuthenticatedSessionController.store.form()}
                            resetOnSuccess={['password']}
                            className="flex flex-col gap-6"
                        >
                            {({ processing, errors }) => (
                                <>
                                    <div className="grid gap-6">
                                        {/* Email Field */}
                                        <div className="grid gap-3">
                                            <Label htmlFor="email" className="text-gray-300 font-medium">
                                                Email address
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    required
                                                    autoFocus
                                                    tabIndex={1}
                                                    autoComplete="email"
                                                    placeholder="email@example.com"
                                                    className="bg-black border-0 py-5 text-white placeholder:text-gray-500 "
                                                />
                                                <div className="absolute inset-0 rounded-lg bg-red-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                            <InputError message={errors.email} />
                                        </div>

                                        {/* Password Field */}
                                        <div className="grid gap-3">
                                            <div className="flex items-center">
                                                <Label htmlFor="password" className="text-gray-300 font-medium">
                                                    Password
                                                </Label>
                                               
                                            </div>
                                            <div className="relative">
                                                <Input
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    required
                                                    tabIndex={2}
                                                    autoComplete="current-password"
                                                    placeholder="Enter your password"
                                                     className="bg-black border-0 py-5 text-white placeholder:text-gray-500 "
                                                />
                                                <div className="absolute inset-0 rounded-lg bg-red-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                            <InputError message={errors.password} />
                                        </div>

                                        {/* Remember Me */}
                                        <div className="flex items-center space-x-3">
                                            <Checkbox
                                                id="remember"
                                                name="remember"
                                                tabIndex={3}
                                                className="border-gray-600 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
                                            />
                                            <Label htmlFor="remember" className="text-gray-300 cursor-pointer">
                                                Remember me
                                            </Label>
                                        </div>

                                        {/* Submit Button */}
                                        <Button
                                            type="submit"
                                            className="w-full mt-2 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 border border-red-500/30 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40"
                                            tabIndex={4}
                                            disabled={processing}
                                            data-test="login-button"
                                        >
                                            {processing ? (
                                                <>
                                                    <LoaderCircle className="h-4 w-4 animate-spin mr-2" />
                                                    Signing in...
                                                </>
                                            ) : (
                                                'Sign in to your account'
                                            )}
                                        </Button>
                                    </div>
                                </>
                            )}
                        </Form>

                        {/* Status Message */}
                        {status && (
                            <div className="mt-6 p-4 text-center text-sm font-medium text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg backdrop-blur-sm">
                                {status}
                            </div>
                        )}
                    </div>

                    
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                /* Custom focus styles */
                :global(.focus\\:border-red-500:focus) {
                    border-color: rgb(239, 68, 68) !important;
                }
                
                :global(.focus\\:ring-red-500\\/20:focus) {
                    --tw-ring-color: rgb(239 68 68 / 0.2) !important;
                }
            `}</style>
        </>
    );
}