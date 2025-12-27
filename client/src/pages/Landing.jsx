import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, History, Zap, ShieldCheck, Globe, Mountain, 
  ArrowRight, Quote, Languages, Map, Heart, Star, Sparkles,
  Menu, X, BookOpen, Fingerprint, Database, Users
} from 'lucide-react';

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Capabilities', href: '#features' },
    { name: 'Wisdom', href: '#proverbs' },
    { name: 'Archive', href: '#archive' },
    { name: 'Ecosystem', href: '#ecosystem' },
  ];

  return (
    <div className="min-h-screen bg-[#F7C6C7] font-sans text-gray-900 selection:bg-[#FFD95A] overflow-x-hidden">
      
      {/* 1. Navbar */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 px-6 py-4 md:py-5 ${
        scrolled || isMenuOpen ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center relative z-[110]">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-[#B2386C] p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <Mountain className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-[#B2386C]">
              ZAANT<span className="text-[#F26B6B]">.</span>
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest font-bold text-[#B2386C] hover:text-[#F26B6B] transition">
                {link.name}
              </a>
            ))}
            <button className="bg-[#B2386C] text-white px-7 py-2.5 rounded-full font-bold shadow-[4px_4px_0px_#F26B6B] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
              Launch Chat
            </button>
          </div>

          <button className="md:hidden p-2 text-[#B2386C]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={`absolute top-0 left-0 w-full bg-white transition-all duration-500 origin-top z-[100] md:hidden ${
          isMenuOpen ? 'opacity-100 translate-y-0 visible h-screen' : 'opacity-0 -translate-y-full invisible h-0'
        }`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-3xl font-black text-[#B2386C] uppercase tracking-tighter">
                {link.name}
              </a>
            ))}
            <button className="w-full bg-[#B2386C] text-white py-5 rounded-2xl font-black text-xl shadow-[6px_6px_0px_#F26B6B]">Launch Chat</button>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="px-6 pt-32 pb-16 relative md:pt-48">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-[10px] md:text-xs font-black tracking-[0.2em] text-white bg-[#70A288] rounded-md uppercase animate-pulse">
              <Languages size={14} /> Sulemani Dialect Specialist
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-[#B2386C] leading-[0.9] mb-8 tracking-tighter">
              The Voice of <br /> 
              <span className="text-[#F26B6B] italic underline decoration-[#FFD95A]">Sulaiman.</span>
            </h2>
            <p className="text-base md:text-xl text-gray-700 mb-10 max-w-lg font-medium italic">
              "History isn't just written in books; it's spoken in the Sulemani wind." Zaant brings that wind to your screen.
            </p>
            <button className="bg-[#F26B6B] text-white px-8 py-5 rounded-2xl text-lg font-black flex items-center justify-center gap-2 hover:bg-[#B2386C] transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto">
              Start Conversing <ArrowRight />
            </button>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -inset-10 bg-[#FFD95A] rounded-full blur-[100px] opacity-20"></div>
            <div className="relative bg-white/90 backdrop-blur-md p-8 rounded-[3rem] border-2 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="flex items-center gap-4 mb-6 border-b pb-4">
                  <div className="w-12 h-12 bg-[#B2386C] rounded-2xl flex items-center justify-center text-white">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="font-black text-[#B2386C]">Zaant Sulemani</p>
                    <p className="text-[10px] text-[#70A288] font-black uppercase tracking-widest">Active Intelligence</p>
                  </div>
               </div>
               <div className="space-y-4 font-bold text-sm">
                  <div className="bg-[#F7C6C7]/30 p-4 rounded-2xl rounded-tl-none text-[#B2386C]">
                    Wajha! Sulemani deegar galwarant mane baaz farq ant.
                  </div>
                  <div className="bg-[#B2386C] p-4 rounded-2xl rounded-tr-none text-white ml-8 shadow-md">
                    Explain the bravery of the Koh-e-Sulaiman tribes.
                  </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* NEW SECTION 1: The Oral Archive (Horizontal Showcase) */}
      <section id="archive" className="py-20 bg-white/50 border-y-2 border-white/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h3 className="text-4xl md:text-6xl font-black text-[#B2386C] tracking-tighter uppercase">The Oral Archive</h3>
              <p className="text-[#F26B6B] font-bold mt-2 uppercase tracking-widest text-sm">Digitizing Centuries of Memory</p>
            </div>
            <div className="bg-[#B2386C] text-white px-6 py-3 rounded-full font-black text-xs uppercase tracking-[0.2em]">
              1,240+ Folk Tales Recorded
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Tribal Lore", icon: <Users />, count: "450+ Stories" },
              { title: "Folk Poetry", icon: <BookOpen />, count: "800+ Verses" },
              { title: "Lineage", icon: <Fingerprint />, count: "12 Clans" },
              { title: "Proverbs", icon: <Quote />, count: "2,000+ Sayings" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border-b-4 border-[#F26B6B] hover:-translate-y-2 transition-transform shadow-lg group">
                <div className="text-[#B2386C] mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="font-black text-xl text-[#B2386C] mb-1">{item.title}</h4>
                <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">{item.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Proverbs Section */}
      <section id="proverbs" className="py-20 md:py-32 bg-[#B2386C] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 p-6 rounded-3xl border border-white/20 backdrop-blur-md">
                    <Quote className="text-[#FFD95A] mb-4" />
                    <p className="text-white font-bold text-sm italic">"The mountain does not bow to the storm."</p>
                </div>
                <div className="bg-white/10 p-6 rounded-3xl border border-white/20 backdrop-blur-md sm:mt-8">
                    <Quote className="text-[#F26B6B] mb-4" />
                    <p className="text-white font-bold text-sm italic">"A word spoken is an arrow shot."</p>
                </div>
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
                <h3 className="text-3xl md:text-5xl font-black text-[#FFD95A] mb-6 uppercase tracking-tighter">Wisdom as <br className="hidden md:block"/> Deep as the Peaks</h3>
                <p className="text-[#F7C6C7] text-base md:text-lg font-medium leading-relaxed mb-8">
                    Zaant understands the Sulemani proverbs that have guided our ancestors for centuries.
                </p>
            </div>
        </div>
      </section>

      {/* NEW SECTION 2: The Lineage Engine */}
      <section className="py-24 px-6 overflow-hidden relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h3 className="text-4xl md:text-6xl font-black text-[#B2386C] tracking-tighter">TRACE YOUR <br/><span className="text-[#F26B6B]">ROOTS.</span></h3>
            <p className="text-gray-600 font-bold leading-relaxed max-w-md">
              Zaant's <span className="text-[#B2386C]">Lineage Engine</span> uses advanced cross-referencing of oral history to help Sulemani families track their migration patterns from the Koh-e-Sulaiman peaks.
            </p>
            <ul className="space-y-4">
              {['Cross-Tribal Validation', 'Migration Mapping', 'Historical Clan Records'].map((text, i) => (
                <li key={i} className="flex items-center gap-3 font-black text-[#B2386C] uppercase text-xs tracking-widest">
                  <div className="w-2 h-2 bg-[#F26B6B] rounded-full" /> {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative">
            <div className="w-full aspect-square bg-[#B2386C] rounded-[3rem] p-8 flex items-center justify-center text-white relative shadow-2xl">
              <Database size={120} className="opacity-20 absolute" />
              <div className="relative text-center z-10">
                <div className="text-6xl font-black mb-2 tracking-tighter">TB-01</div>
                <p className="font-bold uppercase tracking-[0.3em] text-[10px] opacity-80">Lineage Database Active</p>
              </div>
              <div className="absolute top-10 right-10 animate-bounce">
                <ShieldCheck className="text-[#FFD95A]" size={40} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ecosystem */}
      <section id="ecosystem" className="py-20 px-6 bg-white/40">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-black text-[#B2386C] uppercase tracking-widest">Zaant Ecosystem</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[250px]">
                <div className="md:col-span-2 bg-white rounded-[2.5rem] p-8 shadow-xl border-2 border-transparent hover:border-[#70A288] transition group relative overflow-hidden">
                    <Map className="text-[#70A288] w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-2xl font-black text-[#B2386C]">Sulemani Atlas</h4>
                    <p className="text-gray-500 font-bold max-w-sm mt-2 text-sm md:text-base">Interactive tribal geography mapping. Find historical migration paths.</p>
                    <div className="absolute bottom-[-20px] right-[-20px] opacity-10 group-hover:opacity-20 transition-opacity">
                        <Mountain size={180} />
                    </div>
                </div>
                <div className="bg-[#FFD95A] rounded-[2.5rem] p-8 shadow-xl flex flex-col justify-between hover:scale-[1.02] transition group">
                    <Star className="text-[#B2386C] group-hover:fill-[#B2386C] transition" />
                    <div>
                        <h4 className="text-2xl font-black text-[#B2386C]">Dilect v2.0</h4>
                        <p className="text-[#B2386C]/70 font-bold text-xs uppercase tracking-wider">99.9% Accuracy Rate</p>
                    </div>
                </div>
                <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border-2 border-transparent hover:border-[#F26B6B] transition group">
                    <Heart className="text-[#F26B6B] w-10 h-10 mb-4 animate-pulse" />
                    <h4 className="text-xl font-black text-[#B2386C]">Community Led</h4>
                    <p className="text-gray-400 font-bold text-sm">Built with Sulemani elders.</p>
                </div>
                <div className="md:col-span-2 bg-[#F26B6B] rounded-[2.5rem] p-8 flex flex-col md:flex-row items-start md:items-center justify-between text-white group hover:shadow-2xl transition gap-6">
                    <div>
                        <h4 className="text-2xl md:text-3xl font-black mb-2">Preserving the Unwritten</h4>
                        <p className="font-bold opacity-80 max-w-md text-sm md:text-base">Digitizing 1,000+ years of oral Sulemani history.</p>
                    </div>
                    <div className="bg-white/20 p-4 rounded-full group-hover:bg-white group-hover:text-[#F26B6B] transition">
                        <ArrowRight size={28} />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. Features */}
      <section id="features" className="py-20 bg-white/30 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Quote className="text-[#F26B6B]" />}
            title="Linguistic Purity" 
            desc="Optimized for Sulemani grammar, avoiding dialect contamination."
            color="#F26B6B" 
          />
          <FeatureCard 
            icon={<History className="text-[#70A288]" />}
            title="Tribal Lineage" 
            desc="Identify your roots. Access archives of lineage and regional migration."
            color="#70A288" 
          />
          <FeatureCard 
            icon={<Zap className="text-[#B2386C]" />}
            title="Native Speed" 
            desc="Zero-lag processing designed for low-bandwidth regions."
            color="#B2386C" 
          />
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-white pt-20 pb-12 px-8 border-t-8 border-[#B2386C]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          <div className="md:col-span-2">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <div className="bg-[#B2386C] p-2 rounded-lg shadow-lg">
                <Mountain className="text-white w-6 h-6" />
              </div>
              <h1 className="text-3xl font-black tracking-tighter text-[#B2386C]">ZAANT</h1>
            </div>
            <p className="text-gray-500 font-bold max-w-xs mx-auto md:mx-0 uppercase text-[10px] tracking-[0.2em]">
              Honoring the heritage of Rizwan Baloch and the people of Koh-e-Sulaiman.
            </p>
          </div>
          <FooterLinks title="The Mission" links={['Preservation', 'Education', 'Dialect API']} />
          <FooterLinks title="Connect" links={['Community', 'Research', 'Support']} />
        </div>
        <div className="text-center pt-8 border-t border-gray-100">
          <p className="text-xs font-black text-[#B2386C] uppercase tracking-[0.3em]">Built With ❤️ By Rizwan Baloch</p>
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em] mt-2">© {new Date().getFullYear()} ZAANT AI</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc, color }) => (
  <div className="group p-8 md:p-10 bg-white rounded-[2.5rem] border-b-8 border-transparent hover:border-[#B2386C] transition-all duration-500 shadow-xl">
    <div className="mb-6 bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <h4 className="text-lg md:text-xl font-black mb-3 uppercase tracking-tighter" style={{ color }}>{title}</h4>
    <p className="text-gray-500 font-bold text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const FooterLinks = ({ title, links }) => (
  <div>
    <h5 className="font-black text-[#B2386C] mb-6 uppercase tracking-widest text-[10px] bg-[#F7C6C7] inline-block px-2 py-1 rounded">{title}</h5>
    <ul className="space-y-4">
      {links.map(link => (
        <li key={link}>
          <a href="#" className="text-gray-400 font-black text-[10px] uppercase tracking-widest hover:text-[#F26B6B] transition">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Landing;