"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="relative min-h-screen bg-[#050505] text-white flex overflow-hidden">
      
      {/* 1. LEFT SIDE: Artistic Visual (Hidden on Mobile) */}
      <div className="relative hidden lg:flex lg:w-1/2 flex-col justify-between p-12 border-r border-white/5 overflow-hidden">
        {/* Background Gradient & Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50 animate-pulse" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>

        <Link href="/" className="relative z-10 text-2xl font-black italic tracking-tighter">
          MONF.
        </Link>

        <div className="relative z-10">
          <h2 className="text-7xl font-black italic leading-[0.8] mb-6 bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent uppercase tracking-tighter">
            The <br /> Registry
          </h2>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed tracking-wide font-light">
            Secure your identity in the monster realm. Access exclusive archetypes and track your evolution journey.
          </p>
        </div>

        <div className="relative z-10 flex gap-4 text-[10px] font-bold tracking-[0.3em] uppercase opacity-30">
          <span>v2.0.26</span>
          <span>•</span>
          <span>Encrypted Session</span>
        </div>
      </div>

      {/* 2. RIGHT SIDE: Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 relative">
        {/* Mobile Logo Only */}
        <Link href="/" className="lg:hidden absolute top-8 left-8 text-xl font-black italic">
          MONF.
        </Link>

        <div className="w-full max-w-[400px]">
          {/* Header */}
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-4xl font-black italic tracking-tighter uppercase mb-2">
              {isLogin ? "Sign In" : "Register"}
            </h1>
            <p className="text-gray-500 text-[10px] tracking-[0.3em] uppercase font-bold">
              {isLogin ? "Welcome back, Hunter" : "Create your hunter profile"}
            </p>
          </div>

          {/* Form Card */}
          <div className="space-y-6">
            <div className="flex gap-2 p-1 bg-white/[0.03] border border-white/5 rounded-2xl mb-4">
              <button 
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${isLogin ? "bg-white text-black shadow-xl" : "text-gray-500 hover:text-white"}`}
              >
                Existing
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${!isLogin ? "bg-white text-black shadow-xl" : "text-gray-500 hover:text-white"}`}
              >
                Newcomer
              </button>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <AuthInput label="Hunter Name" type="text" placeholder="e.g. ShadowStep" />
              )}
              <AuthInput label="Email Access" type="email" placeholder="hunter@monf.world" />
              <AuthInput label="Access Key" type="password" placeholder="••••••••" />
              
              <button className="w-full py-5 bg-white text-black font-black rounded-2xl mt-4 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-white/10 text-sm tracking-widest uppercase">
                {isLogin ? "Authorize" : "Initialize Account"}
              </button>
            </form>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
              <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest text-gray-700">
                <span className="bg-[#050505] px-4">Secure Link</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <SocialButton label="Discord" />
              <SocialButton label="Google" />
            </div>

            <div className="mt-8 text-center">
              <Link href="/" className="text-[10px] text-gray-600 hover:text-purple-500 transition-colors tracking-[0.3em] uppercase font-black">
                ← Return to Realm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// --- SUB COMPONENTS ---

function AuthInput({ label, type, placeholder }: { label: string, type: string, placeholder: string }) {
  return (
    <div className="group space-y-2">
      <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1 group-focus-within:text-purple-500 transition-colors">
        {label}
      </label>
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all placeholder:text-gray-800"
      />
    </div>
  );
}

function SocialButton({ label }: { label: string }) {
  return (
    <button className="flex items-center justify-center py-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-all text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white">
      {label}
    </button>
  );
}