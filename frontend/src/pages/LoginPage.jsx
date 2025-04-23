import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, UserPlus, User, ArrowRight,} from "lucide-react";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const [loginErrors, setLoginErrors] = useState({});
  const [registerErrors, setRegisterErrors] = useState({});
  
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === "checkbox" ? checked : value
    });
    
    // Clear error when field is being edited
    if (loginErrors[name]) {
      setLoginErrors({
        ...loginErrors,
        [name]: ""
      });
    }
  };
  
  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData({
      ...registerData,
      [name]: type === "checkbox" ? checked : value
    });
    
    // Clear error when field is being edited
    if (registerErrors[name]) {
      setRegisterErrors({
        ...registerErrors,
        [name]: ""
      });
    }
  };
  
  const validateLogin = () => {
    const errors = {};
    
    if (!loginData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.email)) {
      errors.email = "Email is invalid";
    }
    
    if (!loginData.password) {
      errors.password = "Password is required";
    }
    
    return errors;
  };
  
  const validateRegister = () => {
    const errors = {};
    
    if (!registerData.fullName.trim()) {
      errors.fullName = "Full name is required";
    }
    
    if (!registerData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerData.email)) {
      errors.email = "Email is invalid";
    }
    
    if (!registerData.password) {
      errors.password = "Password is required";
    } else if (registerData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    
    if (!registerData.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (registerData.password !== registerData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    
    if (!registerData.agreeTerms) {
      errors.agreeTerms = "You must agree to the terms and conditions";
    }
    
    return errors;
  };
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateLogin();
    if (Object.keys(errors).length > 0) {
      setLoginErrors(errors);
      return;
    }
    
    setIsLoading(true);
    

    setTimeout(() => {
      toast.success("Login successful! Redirecting...");
      setIsLoading(false);
    }, 1500);
  };
  
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateRegister();
    if (Object.keys(errors).length > 0) {
      setRegisterErrors(errors);
      return;
    }
    
    setIsLoading(true);

    setTimeout(() => {
      toast.success("Registration successful! Please check your email to verify your account.");
      setIsLoading(false);
      setActiveTab("login");
    }, 1500);
  };
  
  return (
    <div className="bg-secondary flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 max-h-screen lg:mt-20">
      <div className="max-w-5xl w-full flex shadow-xl rounded-2xl overflow-hidden">
        {/* Left Side - Image & Brand */}
        <div className="hidden lg:block lg:w-1/2 bg-primary relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary opacity-90"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12">
            <h1 className="text-4xl font-bold mb-6">Welcome Back</h1>
            <p className="text-lg text-center mb-8 max-w-md">
              Log in to access your account and explore our premium collection of furniture and home decor items.
            </p>
            <div className="space-y-6 w-full max-w-sm">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-white/90 italic">
                  "The furniture and decor pieces I ordered are absolutely stunning! The quality exceeds my expectations, and delivery was right on time."
                </p>
                <p className="text-white/80 text-right mt-2 font-medium">— Leonel Messi</p>
              </div>
              <div className="flex justify-center space-x-3">
                <span className="h-2 w-2 bg-white rounded-full opacity-100"></span>
                <span className="h-2 w-2 bg-white rounded-full opacity-50"></span>
                <span className="h-2 w-2 bg-white rounded-full opacity-50"></span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 bg-white">
          <div className="p-8 sm:p-12">
            {/* Tabs */}
            <nav className="flex border-b border-gray-200 mb-8">
              <button
                onClick={() => setActiveTab("login")}
                className={`px-4 py-2 -mb-px font-medium text-sm sm:text-base ${
                  activeTab === "login"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setActiveTab("register")}
                className={`ml-8 px-4 py-2 -mb-px font-medium text-sm sm:text-base ${
                  activeTab === "register"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Create Account
              </button>
            </nav>
            
            {activeTab === "login" ? (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign in to your account</h2>
                
                
                <form onSubmit={handleLoginSubmit}>
                  <div className="mb-4">
                    <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={18} className="text-gray-400" />
                      </div>
                      <input
                        id="login-email"
                        name="email"
                        type="email"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          loginErrors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="you@example.com"
                      />
                    </div>
                    {loginErrors.email && (
                      <p className="mt-1 text-xs text-red-500">{loginErrors.email}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={18} className="text-gray-400" />
                      </div>
                      <input
                        id="login-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={loginData.password}
                        onChange={handleLoginChange}
                        className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          loginErrors.password ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff size={18} className="text-gray-400 hover:text-gray-600" />
                        ) : (
                          <Eye size={18} className="text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                    {loginErrors.password && (
                      <p className="mt-1 text-xs text-red-500">{loginErrors.password}</p>
                    )}
                  </div>
                  
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex items-center justify-center bg-primary text-white py-3 px-4 rounded-lg hover:bg-tertiary transition-colors font-medium ${
                      isLoading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Signing In...
                      </>
                    ) : (
                      <>
                        Sign In <ArrowRight size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
                
                <p className="mt-6 text-center text-sm text-gray-500">
                  Don't have an account yet?{" "}
                  <button
                    onClick={() => setActiveTab("register")}
                    className="font-medium text-primary hover:text-tertiary"
                  >
                    Create an account
                  </button>
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Create your account</h2>
                
                <form onSubmit={handleRegisterSubmit}>
                  <div className="mb-4">
                    <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-gray-400" />
                      </div>
                      <input
                        id="full-name"
                        name="fullName"
                        type="text"
                        value={registerData.fullName}
                        onChange={handleRegisterChange}
                        className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          registerErrors.fullName ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Your full name"
                      />
                    </div>
                    {registerErrors.fullName && (
                      <p className="mt-1 text-xs text-red-500">{registerErrors.fullName}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={18} className="text-gray-400" />
                      </div>
                      <input
                        id="register-email"
                        name="email"
                        type="email"
                        value={registerData.email}
                        onChange={handleRegisterChange}
                        className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          registerErrors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="you@example.com"
                      />
                    </div>
                    {registerErrors.email && (
                      <p className="mt-1 text-xs text-red-500">{registerErrors.email}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={18} className="text-gray-400" />
                      </div>
                      <input
                        id="register-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={registerData.password}
                        onChange={handleRegisterChange}
                        className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          registerErrors.password ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff size={18} className="text-gray-400 hover:text-gray-600" />
                        ) : (
                          <Eye size={18} className="text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                    {registerErrors.password && (
                      <p className="mt-1 text-xs text-red-500">{registerErrors.password}</p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">
                      Password must be at least 8 characters long
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={18} className="text-gray-400" />
                      </div>
                      <input
                        id="confirm-password"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={registerData.confirmPassword}
                        onChange={handleRegisterChange}
                        className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          registerErrors.confirmPassword ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={18} className="text-gray-400 hover:text-gray-600" />
                        ) : (
                          <Eye size={18} className="text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                    {registerErrors.confirmPassword && (
                      <p className="mt-1 text-xs text-red-500">{registerErrors.confirmPassword}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex items-center justify-center bg-primary text-white py-3 px-4 rounded-lg hover:bg-tertiary transition-colors font-medium ${
                      isLoading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating Account...
                      </>
                    ) : (
                      <>
                        Create Account <UserPlus size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
                
                <p className="mt-6 text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <button
                    onClick={() => setActiveTab("login")}
                    className="font-medium text-primary hover:text-tertiary"
                  >
                    Sign in instead
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;