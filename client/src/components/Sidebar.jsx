import React from 'react';
import { Mountain, Plus, MessageSquare, LogOut, X, Menu } from 'lucide-react';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      {/* 1. MOBILE HAMBURGER BUTTON (Visible only on mobile when sidebar is closed) */}
      {!isOpen && (
        <button 
          onClick={toggle}
          className="md:hidden fixed top-4 left-4 z-[130] p-3 bg-[#B2386C] text-white rounded-2xl shadow-xl border-2 border-white/20 active:scale-90 transition-transform"
        >
          <Menu size={24} />
        </button>
      )}

      {/* 2. MOBILE OVERLAY */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[140] md:hidden transition-opacity duration-300"
          onClick={toggle}
        />
      )}

      {/* 3. SIDEBAR CONTAINER */}
      <aside className={`
        /* Layout & Positioning */
        fixed md:relative inset-y-0 left-0 z-[150]
        flex flex-col transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
        
        /* Mobile vs Desktop Width */
        ${isOpen ? 'translate-x-0 w-72 sm:w-80' : '-translate-x-full md:translate-x-0 md:w-24'}
        
        /* Styling */
        bg-[#B2386C] text-white shadow-2xl
        md:my-4 md:ml-4 md:rounded-[2.5rem] 
      `}>
        
        {/* HEADER: Logo & Close Button */}
        <div className="flex items-center justify-between p-6 mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-xl shadow-lg">
              <Mountain className="text-[#B2386C]" size={24} />
            </div>
            {/* Show title if open OR if we are on desktop (logic handled by width) */}
            <h2 className={`font-black text-2xl tracking-tighter transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'md:hidden opacity-0'}`}>
              ZAANT
            </h2>
          </div>
          
          {/* Close button (Mobile only) */}
          <button onClick={toggle} className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* ACTION: New Session */}
        <div className="px-4 mb-8">
          <button className={`
            flex items-center justify-center gap-3 w-full
            bg-[#F26B6B] hover:bg-white hover:text-[#B2386C] 
            py-4 rounded-2xl font-black transition-all shadow-lg
            ${!isOpen && 'md:px-0'}
          `}>
            <Plus size={20} strokeWidth={3} />
            <span className={`${!isOpen && 'md:hidden'} block`}>New Session</span>
          </button>
        </div>

        {/* CONTENT: Recent History */}
        <div className="flex-1 overflow-y-auto px-4 space-y-2 no-scrollbar">
          {isOpen && (
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F7C6C7] mb-4 ml-2 opacity-60">
              Recent Archive
            </p>
          )}
          
          {[
            "Lineage of Mazari Clan",
            "Sulemani Hospitality Rules",
            "Mountain Proverbs v1"
          ].map((text, i) => (
            <div 
              key={i} 
              className="group flex items-center gap-3 p-4 bg-white/5 hover:bg-white/20 rounded-2xl cursor-pointer transition-all border border-transparent hover:border-white/10"
            >
              <MessageSquare size={18} className="shrink-0" />
              <span className={`text-sm font-bold truncate transition-opacity duration-300 ${!isOpen && 'md:hidden opacity-0'}`}>
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* FOOTER: Logout */}
        <div className="p-4 mt-auto">
          <div className="pt-6 border-t border-white/10">
            <button className={`
              flex items-center gap-3 w-full p-4 
              rounded-2xl transition-all
              text-[#F7C6C7] hover:text-white hover:bg-white/10
              ${!isOpen && 'md:justify-center'}
            `}>
              <LogOut size={20} />
              <span className={`${!isOpen && 'md:hidden'} font-black text-xs uppercase tracking-widest`}>
                Leave Archive
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;