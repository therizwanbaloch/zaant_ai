import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, ArrowRight, Mail, Lock, Sparkles } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#F7C6C7] flex items-center justify-center p-4 md:p-8 selection:bg-[#FFD95A]">
      <div className="w-full max-w-[400px] lg:max-w-[450px]">
        {/* Header - Sizes adjust based on screen */}
        <div className="flex flex-col items-center mb-8 md:mb-10">
          <div className="bg-[#B2386C] p-3 rounded-2xl shadow-lg mb-4 group hover:rotate-12 transition-transform">
            <Mountain className="text-white w-6 h-6 md:w-8 md:h-8" />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter text-[#B2386C] text-center">
            WELCOME BACK<span className="text-[#F26B6B]">.</span>
          </h1>
          <p className="text-[#B2386C] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2 opacity-80">
            Enter the Sulemani Archive
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-2xl border-b-8 border-[#B2386C] relative overflow-hidden">
          {/* Decorative Sparkle - Hidden on very small screens to save space */}
          <div className="absolute top-0 right-0 p-4 opacity-5 hidden sm:block">
            <Sparkles size={80} className="text-[#B2386C]" />
          </div>

          <form className="space-y-5 md:space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="group">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#B2386C] mb-2 ml-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#F26B6B] transition-colors" size={18} />
                <input 
                  type="email" 
                  className="w-full bg-gray-50 border-2 border-transparent focus:border-[#F26B6B] focus:bg-white rounded-xl md:rounded-2xl py-3 md:py-4 pl-12 pr-4 outline-none transition-all font-bold text-sm"
                  placeholder="name@provider.com"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#B2386C] mb-2 ml-1">
                Secret Phrase
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#F26B6B] transition-colors" size={18} />
                <input 
                  type="password" 
                  className="w-full bg-gray-50 border-2 border-transparent focus:border-[#F26B6B] focus:bg-white rounded-xl md:rounded-2xl py-3 md:py-4 pl-12 pr-4 outline-none transition-all font-bold text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button className="w-full bg-[#B2386C] text-white py-4 rounded-xl md:rounded-2xl font-black text-base md:text-lg shadow-[4px_4px_0px_#F26B6B] active:shadow-none active:translate-x-1 active:translate-y-1 md:hover:shadow-none md:hover:translate-x-1 md:hover:translate-y-1 transition-all flex items-center justify-center gap-2">
              Access Account <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs md:text-sm font-bold text-gray-500">
              New to the ZAANT AI?
              <Link to="/register" className="text-[#F26B6B] ml-2 hover:underline decoration-2">Create identity</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;