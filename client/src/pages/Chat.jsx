import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ChatContainer from '../components/ChatContainer'; 

const Chat = () => {
  // Initialize state
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);

  // Fix: Handle window resizing so sidebar behaves correctly if user rotates device
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-[#F7C6C7] overflow-hidden p-0 md:p-4 gap-0 md:gap-4 font-sans">
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
      
      {/* Main Chat Content Area */}
      <main className={`
        flex-1 flex flex-col min-w-0 transition-all duration-500 ease-in-out
        bg-white shadow-2xl relative
        /* Mobile: Full Screen | Desktop: Rounded Archive Aesthetic */
        md:rounded-[2.5rem] border-l-0 md:border-l-8 border-[#B2386C]
      `}>
        
        {/* Chat Layout Container */}
        <div className="flex flex-col h-full relative">
          {/* Header & Messages go inside ChatContainer */}
          <ChatContainer />
          
          {/* Fallback Title if ChatContainer isn't loaded yet */}
          {!ChatContainer && (
            <div className="p-8 mt-16 md:mt-0">
               <h1 className="text-[#B2386C] font-black text-3xl md:text-4xl tracking-tighter">
                 SULEMANI <span className="text-[#F26B6B]">CHAT</span>
               </h1>
               <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mt-2">
                 Archive Session Active
               </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Chat;