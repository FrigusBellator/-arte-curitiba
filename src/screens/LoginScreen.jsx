import React, { useState } from 'react';
import { Shield, Fingerprint } from 'lucide-react';

export default function LoginScreen({ onLogin }) {
  const [familyMode, setFamilyMode] = useState(false);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#87CEFA] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] mix-blend-multiply filter blur-3xl opacity-60 animate-[spin_20s_linear_infinite]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#FF7F50] rounded-[60%_40%_30%_70%/50%_60%_40%_50%] mix-blend-multiply filter blur-3xl opacity-40 animate-[spin_25s_linear_infinite_reverse]"></div>
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-[#FFDB58] rounded-[30%_70%_50%_50%/50%_30%_70%_50%] mix-blend-multiply filter blur-2xl opacity-50 animate-[pulse_8s_ease-in-out_infinite]"></div>

      <div className="relative z-10 w-full max-w-md p-8 m-4 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(11,19,43,0.1)] rounded-[40px_10px_40px_10px]">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-[#0B132B] tracking-tight">
            +Arte <span className="text-[#FF7F50] font-serif italic">Curitiba</span>
          </h1>
          <p className="text-sm text-gray-600 mt-2 font-medium">A wiki da cena alternativa</p>
        </div>
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div><input type="email" placeholder="E-mail" className="w-full bg-white/50 border-0 border-b-2 border-gray-300 focus:border-[#0B132B] focus:ring-0 px-4 py-3 text-gray-800 outline-none" /></div>
          <div><input type="password" placeholder="Senha" className="w-full bg-white/50 border-0 border-b-2 border-gray-300 focus:border-[#0B132B] focus:ring-0 px-4 py-3 text-gray-800 outline-none" /></div>
          <div className="pt-2">
            <p className="text-xs text-gray-500 mb-3 text-center uppercase tracking-wider font-semibold">Acesso Seguro & Verificado</p>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="flex items-center justify-center gap-2 bg-[#0B132B]/5 text-[#0B132B] py-2 px-3 rounded-[15px_5px_15px_5px] text-sm font-medium"><Shield size={16} />Gov.br</button>
              <button type="button" className="flex items-center justify-center gap-2 bg-[#87CEFA]/20 text-[#0B132B] py-2 px-3 rounded-[5px_15px_5px_15px] text-sm font-medium"><Fingerprint size={16} className="text-[#87CEFA]" />Selfie</button>
            </div>
          </div>
          <div className="flex items-center justify-between bg-white/40 p-4 rounded-2xl border border-white/50 mt-4">
            <div className="flex flex-col"><span className="text-sm font-bold text-[#0B132B]">Modo Família / Seguro</span><span className="text-xs text-gray-500">Oculta conteúdo +18 (ECA)</span></div>
            <button type="button" onClick={() => setFamilyMode(!familyMode)} className={`w-14 h-8 rounded-full p-1 flex ${familyMode ? 'bg-[#FFDB58]' : 'bg-gray-300'}`}><div className={`w-6 h-6 bg-white rounded-full transition-transform ${familyMode ? 'translate-x-6' : 'translate-x-0'}`}></div></button>
          </div>
          <button type="submit" className="w-full mt-6 bg-[#0B132B] text-white font-bold py-4 rounded-[20px_5px_20px_5px] shadow-lg">Entrar no Submundo</button>
        </form>
      </div>
    </div>
  );
}
