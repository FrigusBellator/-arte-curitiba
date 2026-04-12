import React, { useState } from 'react';
import { Ticket, Upload, Music, Tv, Palette, Shield, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function EventCreationScreen({ onNavigate }) {
  const [ageRating, setAgeRating] = useState('Livre');

  const ratings = [
    { id: 'Livre', color: 'bg-green-500', text: 'text-white' },
    { id: '10+', color: 'bg-blue-500', text: 'text-white' },
    { id: '12+', color: 'bg-yellow-400', text: 'text-[#0B132B]' },
    { id: '16+', color: 'bg-orange-500', text: 'text-white' },
    { id: '18+', color: 'bg-red-600', text: 'text-white' },
  ];

  return (
    <div className="min-h-screen relative bg-[#0B132B] overflow-hidden">
      <div className="absolute top-[-10%] right-[20%] w-[200px] h-[800px] bg-[#D8BFD8] rotate-45 mix-blend-screen filter blur-[120px] opacity-30"></div>
      <div className="absolute bottom-[-20%] left-[10%] w-[300px] h-[600px] bg-[#87CEFA] -rotate-12 mix-blend-screen filter blur-[100px] opacity-20"></div>

      <header className="relative z-20 p-6 flex items-center justify-between">
        <h2 className="text-2xl font-extrabold text-white cursor-pointer" onClick={() => onNavigate('home')}>
          +Arte <span className="text-[#FFDB58] italic font-serif">Cwb</span>
        </h2>
      </header>

      <div className="relative z-10 max-w-4xl mx-auto px-4 pb-24 pt-4">
        <div className="bg-[#F9FAFB] rounded-[40px_10px_60px_20px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] p-6 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <Ticket className="text-[#FF7F50]" size={32} />
            <h3 className="text-3xl font-black text-[#0B132B]">O Palco é Seu</h3>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="w-full h-48 md:h-64 bg-gray-200 border-2 border-dashed border-gray-300 rounded-[20px_5px_20px_5px] flex flex-col items-center justify-center text-gray-500 hover:bg-gray-100 hover:border-[#FF7F50] transition-colors cursor-pointer group">
              <Upload size={32} className="mb-2 group-hover:text-[#FF7F50] transition-colors" />
              <span className="font-bold">Suba o Pôster / Flyer do Evento</span>
              <span className="text-xs mt-1">Formatos 16:9 ou 4:5</span>
            </div>

            <div className="space-y-4">
              <input type="text" placeholder="Nome do Evento" className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#FF7F50] focus:ring-0 px-2 py-3 text-2xl font-black text-[#0B132B] placeholder-gray-400 outline-none transition-colors" />
              <input type="text" placeholder="Localização / Endereço Subterrâneo" className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#FF7F50] focus:ring-0 px-2 py-3 text-[#0B132B] placeholder-gray-400 outline-none transition-colors" />
              <div className="flex gap-6">
                <input type="date" className="w-1/2 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#FF7F50] focus:ring-0 px-2 py-3 text-[#0B132B] outline-none transition-colors text-sm" />
                <input type="time" className="w-1/2 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#FF7F50] focus:ring-0 px-2 py-3 text-[#0B132B] outline-none transition-colors text-sm" />
              </div>
              <textarea placeholder="Descrição do Rolê..." rows="2" className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#FF7F50] focus:ring-0 px-2 py-3 text-[#0B132B] placeholder-gray-400 outline-none transition-colors resize-none"></textarea>
            </div>

            <div>
              <p className="text-sm font-bold text-gray-500 mb-4">Vibe do Evento</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[ 
                  { id: 'music', icon: Music, label: 'Música' },
                  { id: 'theater', icon: Tv, label: 'Teatro' },
                  { id: 'expo', icon: Palette, label: 'Exposições' },
                  { id: 'under', icon: Shield, label: 'Underground' }
                ].map(cat => (
                  <button key={cat.id} type="button" className="flex flex-col items-center justify-center p-4 rounded-[15px_5px_15px_5px] border-2 border-gray-100 hover:border-[#87CEFA] hover:bg-[#87CEFA]/10 transition-all text-[#0B132B] group">
                    <cat.icon size={24} className="mb-2 group-hover:text-[#87CEFA]" />
                    <span className="text-sm font-bold">{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-l-4 border-[#FF7F50] bg-gray-50 p-6 rounded-[0_20px_20px_20px]">
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert className="text-[#FF7F50]" size={20} />
                <h4 className="font-black text-[#0B132B] uppercase tracking-wider text-sm">Classificação Indicativa (ECA)</h4>
              </div>
              <p className="text-xs text-gray-500 mb-4">A plataforma modera ativamente estas marcações. Defina com responsabilidade.</p>
              
              <div className="flex flex-wrap gap-3">
                {ratings.map(rating => (
                  <button key={rating.id} type="button" onClick={() => setAgeRating(rating.id)} className={`w-14 h-14 rounded-full font-black text-lg flex items-center justify-center border-4 transition-transform ${ageRating === rating.id ? `${rating.color} ${rating.text} border-white shadow-[0_0_15px_rgba(0,0,0,0.2)] scale-110` : 'bg-white text-gray-400 border-gray-200 hover:border-gray-300'}`}>
                    {rating.id}
                  </button>
                ))}
              </div>

              <label className="flex items-start gap-3 mt-6 cursor-pointer group">
                <div className="relative w-6 h-6 bg-white border-2 border-gray-300 rounded flex-shrink-0 group-hover:border-[#0B132B] transition-colors mt-0.5">
                  <input type="checkbox" className="opacity-0 absolute inset-0 cursor-pointer peer" />
                  <CheckCircle2 size={20} className="text-[#FF7F50] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                </div>
                <div>
                  <span className="block text-sm font-bold text-[#0B132B]">Permitir Interação Social (Chat/Comentários)</span>
                  <span className="block text-xs text-gray-500">Se ativo e classificação for -18, regras restritas do Modo Família serão aplicadas aos comentários.</span>
                </div>
              </label>
            </div>

            <button className="w-full bg-[#FFDB58] hover:bg-[#FFD12A] text-[#0B132B] font-black text-xl py-5 rounded-[10px_40px_10px_40px] shadow-[0_10px_20px_rgba(255,219,88,0.3)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <Ticket size={24} /> Lançar na Agenda
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
