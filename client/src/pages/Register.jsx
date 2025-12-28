import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Mail, Lock, ShieldCheck, Fingerprint } from 'lucide-react';

const Register = () => {
  return (
    <div className="min-h-screen bg-[#F7C6C7] flex items-center justify-center p-4 md:p-10 selection:bg-[#FFD95A]">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden border-b-[8px] md:border-b-[12px] border-[#B2386C]">
        
        {/* Left Sidebar - Hidden on mobile or simplified */}
        <div className="lg:col-span-2 bg-[#B2386C] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <Link to="/" className="inline-block bg-white/20 p-3 rounded-xl mb-8 hover:bg-white/30 transition-colors">
              <Mountain size={24} />
            </Link>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none mb-4 md:mb-6">
              JOIN THE <br className="hidden md:block"/> TRIBE.
            </h2>
            <p className="text-[#F7C6C7] font-bold text-xs md:text-sm leading-relaxed max-w-xs opacity-90">
              Preserve the Sulemani dialect and document your lineage in the digital archive.
            </p>
          </div>
          
          <div className="relative z-10 mt-10 lg:mt-0">
            <div className="flex items-center gap-3 bg-black/10 w-fit px-4 py-2 rounded-full border border-white/10">
              <ShieldCheck className="text-[#FFD95A]" size={18} />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">Encrypted Heritage</span>
            </div>
          </div>

          {/* Background Pattern */}
          <Mountain size={300} className="absolute -bottom-20 -left-20 opacity-10 pointer-events-none" />
        </div>

        {/* Right Side - Registration Form */}
        <div className="lg:col-span-3 p-6 md:p-12 lg:p-16">
          <form className="space-y-4 md:space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">First Name</label>
                <input type="text" placeholder="Rizwan" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#F26B6B] rounded-xl py-3 px-4 outline-none font-bold text-sm transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Last Name</label>
                <input type="text" placeholder="Buzdar" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#F26B6B] rounded-xl py-3 px-4 outline-none font-bold text-sm transition-all" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                <input type="email" placeholder="name@email.com" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#F26B6B] rounded-xl py-3 pl-12 pr-4 outline-none font-bold text-sm transition-all" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Create Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                <input type="password" placeholder="••••••••" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#F26B6B] rounded-xl py-3 pl-12 pr-4 outline-none font-bold text-sm transition-all" />
              </div>
            </div>

            <div className="flex items-start gap-3 py-4 border-t border-gray-50 mt-4">
              <input type="checkbox" className="mt-1 w-4 h-4 accent-[#B2386C] cursor-pointer" id="terms" />
              <label htmlFor="terms" className="text-[9px] md:text-[10px] font-bold text-gray-400 leading-tight uppercase tracking-tighter">
                I agree to protect and honor the authentic Sulemani history and dialect.
              </label>
            </div>

            <button className="w-full bg-[#F26B6B] text-white py-4 md:py-5 rounded-2xl font-black text-base md:text-lg hover:bg-[#B2386C] transition-all shadow-xl shadow-[#F26B6B]/20 transform active:scale-95">
              Create My Identity
            </button>

            <p className="text-center text-[11px] md:text-xs font-bold text-gray-400 mt-6 uppercase tracking-widest">
              Already Have an Acoount?? <Link to="/login" className="text-[#B2386C] border-b-2 border-[#B2386C]">Sign in here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;