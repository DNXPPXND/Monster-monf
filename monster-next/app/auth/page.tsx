"use client";

import { useState } from "react";
import Link from "next/link";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="relative min-h-screen bg-[#020202] text-white flex overflow-hidden selection:bg-purple-500/30">
      
      {/* 1. ARTISTIC LEFT PANEL - Cinematic Identity */}
      <div className="relative hidden lg:flex lg:w-[45%] flex-col justify-between p-16 border-r border-white/5 bg-[#040404]">
        {/* Animated Background Layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-20%] w-[100%] h-[100%] bg-purple-600/10 blur-[150px] animate-pulse rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        </div>

        {/* Branding */}
        <Link href="/" className="relative z-10 flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-lg transition-transform group-hover:rotate-90">
             <div className="w-2 h-2 bg-black" />
          </div>
          <span className="text-2xl font-black italic tracking-tighter">MONF.</span>
        </Link>

        {/* Hero Text */}
        <div className="relative z-10 space-y-4">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-[0.4em] text-purple-400">
            Secure Access Point
          </div>
          <h2 className="text-8xl font-black italic leading-[0.8] tracking-tighter uppercase">
            The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/10">Registry</span>
          </h2>
          <p className="text-gray-500 max-w-sm text-base leading-relaxed font-light">
            Authenticate your hunter credentials to access the world&apos;s most comprehensive digital archetype database.
          </p>
        </div>

        {/* System Metadata */}
        <div className="relative z-10 flex items-center gap-6">
          <div className="space-y-1">
            <p className="text-[9px] font-black uppercase tracking-widest text-gray-600 italic">System Status</p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Active Link</span>
            </div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="space-y-1">
            <p className="text-[9px] font-black uppercase tracking-widest text-gray-600 italic">Encryption</p>
            <span className="text-[10px] font-bold uppercase tracking-widest">AES-256 BIT</span>
          </div>
        </div>
      </div>

      {/* 2. RIGHT PANEL - Form Experience */}
      <div className="w-full lg:w-[55%] flex flex-col items-center justify-center p-8 relative">
        {/* Mobile Header */}
        <div className="lg:hidden absolute top-12 left-1/2 -translate-x-1/2">
           <span className="text-2xl font-black italic tracking-tighter uppercase">MONF.</span>
        </div>

        <div className="w-full max-w-[420px] space-y-10">
          {/* Form Header */}
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-black italic tracking-tight uppercase leading-none">
              {isLogin ? "Hunter Login" : "Initialize"}
            </h1>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-[0.2em]">
              {isLogin ? "Welcome back to the shadows" : "Create your unique hunter ID"}
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex p-1 bg-white/[0.02] border border-white/5 rounded-2xl">
            {["Existing", "Newcomer"].map((tab, idx) => {
              const active = (idx === 0 && isLogin) || (idx === 1 && !isLogin);
              return (
                <button 
                  key={tab}
                  onClick={() => setIsLogin(idx === 0)}
                  className={`flex-1 py-3 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-300 ${active ? "bg-white text-black" : "text-gray-500 hover:text-white"}`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Form Section */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <AuthInput label="Assigned Handle" type="text" placeholder="e.g. NeonCobra" />
            )}
            <AuthInput label="Network Email" type="email" placeholder="hunter@registry.com" />
            <AuthInput label="Security Key" type="password" placeholder="••••••••" />
            
            <button className="relative group w-full py-5 bg-white text-black font-black rounded-2xl mt-4 overflow-hidden transition-all active:scale-95 text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <span className="relative z-10">{isLogin ? "Begin Authorization" : "Confirm Identity"}</span>
              <div className="absolute inset-0 bg-slate-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </form>

          {/* Social Auth Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
            <div className="relative flex justify-center text-[9px] uppercase font-black tracking-[0.4em] text-gray-700">
              <span className="bg-[#020202] px-6 italic">External Bridges</span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <SocialButton label="Discord.API" />
            <SocialButton label="Google.Cloud" />
          </div>

          {/* Footer Link */}
          <div className="pt-6 text-center">
            <Link href="/" className="group inline-flex items-center gap-3 text-[10px] text-gray-600 hover:text-white transition-all tracking-[0.3em] uppercase font-black italic">
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to the world
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

// --- REFINED SUB COMPONENTS ---

function AuthInput({ label, type, placeholder }: { label: string, type: string, placeholder: string }) {
  return (
    <div className="group space-y-2">
      <div className="flex justify-between items-center ml-1">
        <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest group-focus-within:text-white transition-colors">
          {label}
        </label>
        <div className="h-px flex-1 mx-4 bg-white/5 group-focus-within:bg-white/20 transition-colors" />
      </div>
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all placeholder:text-gray-800 tracking-wide"
      />
    </div>
  );
}

function SocialButton({ label }: { label: string }) {
  return (
    <button className="flex items-center justify-center py-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-white">
      {label}
    </button>
  );
}