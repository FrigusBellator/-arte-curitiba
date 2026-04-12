import React, { useState } from 'react';
import { Camera, Upload, ShieldAlert } from 'lucide-react';

export default function ArtistProfileScreen({ onNavigate }) {
  const [selectedTags, setSelectedTags] = useState(['Músico']);
  const tags = ['Músico', 'Pintor', 'Escultor', 'Ator', 'DJ', 'Grafiteiro', 'Produtor', 'Fotógrafo'];

  const toggleTag = (tag) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#e0f2fe]">
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#FF7F50] rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FFDB58] rounded-full mix-blend-multiply filter blur-[100px] opacity-50"></div>

      <header className="relative z-20 p-6 flex items-center justify-between">
        <h2 className="text-2xl font-extrabold text-[#0B132B] cursor-pointer" onClick={() => onNavigate('home')}>
          +Arte <span className="text-[#FF7F50] italic font-serif">Cwb</span>
        </h2>
      </header>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 pt-4 flex flex-col md:flex-row gap-12 items-center min-h-[85vh]">
        <div className="flex-1 flex flex-col items-center justify-center relative w-full">
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white/50 backdrop-blur-sm rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border-4 border-white shadow-[0_0_40px_rgba(255,127,80,0.2)] flex items-center justify-center overflow-hidden group cursor-pointer transition-all duration-500 hover:rounded-[50%_50%_40%_60%/60%_40%_50%_50%]">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#87CEFA]/20 to-transparent"></div>
             <Camera size={48} className="text-[#0B132B]/30 group-hover:scale-110 transition-transform" />
             <button className="absolute bottom-6 bg-[#0B132B] text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 hover:bg-[#FF7F50] transition-colors">
               <Upload size={16} /> Adicionar Arte
             </button>
          </div>
          <p className="mt-8 text-[#0B132B]/60 font-medium text-center max-w-xs">Deixe sua essência fluir. Formatos orgânicos representam a verdadeira arte.</p>
        </div>

        <div className="flex-[1.5] w-full">
          <div className="bg-white/40 backdrop-blur-2xl border border-white/60 p-8 md:p-10 rounded-[40px_10px_40px_10px] shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
            <h3 className="text-3xl font-black text-[#0B132B] mb-8">Sua Identidade <span className="text-[#FF7F50]">Artística</span></h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-4">
                <input type="text" placeholder="Nome Artístico / Coletivo" className="w-full bg-transparent border-0 border-b-2 border-[#0B132B]/20 focus:border-[#0B132B] focus:ring-0 px-2 py-3 text-lg font-bold text-[#0B132B] placeholder-[#0B132B]/40 outline-none transition-colors" />
              </div>
              <div className="flex gap-4">
                <input type="number" placeholder="Idade" className="w-1/3 bg-transparent border-0 border-b-2 border-[#0B132B]/20 focus:border-[#0B132B] focus:ring-0 px-2 py-3 text-[#0B132B] placeholder-[#0B132B]/40 outline-none transition-colors" />
                <input type="text" placeholder="Identidade de Gênero" className="w-2/3 bg-transparent border-0 border-b-2 border-[#0B132B]/20 focus:border-[#0B132B] focus:ring-0 px-2 py-3 text-[#0B132B] placeholder-[#0B132B]/40 outline-none transition-colors" />
              </div>
              <div>
                <textarea placeholder="Sua Bio (Manifesto criativo...)" rows="3" className="w-full bg-white/30 rounded-2xl border border-white/50 focus:border-[#0B132B] focus:bg-white/50 p-4 text-[#0B132B] placeholder-[#0B132B]/40 outline-none transition-all resize-none"></textarea>
              </div>
              <div>
                <p className="text-sm font-bold text-[#0B132B] mb-3">Suporte / Linguagem</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <button key={tag} type="button" onClick={() => toggleTag(tag)} className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${selectedTags.includes(tag) ? 'bg-[#FF7F50] text-white border-[#FF7F50] shadow-md' : 'bg-white/50 text-[#0B132B]/70 border-white/50 hover:bg-white'}`}>
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-8 bg-[#87CEFA]/20 border border-[#87CEFA]/50 rounded-[20px_5px_20px_5px] p-5 flex gap-4 items-start">
                <ShieldAlert className="text-[#0B132B] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-[#0B132B] font-bold text-sm">Verificação de Maioridade (ECA)</h4>
                  <p className="text-[#0B132B]/70 text-xs mt-1">Para garantir um ambiente seguro, precisamos validar sua idade. Menores de 16 anos necessitam de vinculação a um responsável legal na plataforma.</p>
                  <button type="button" className="mt-3 text-xs font-bold text-white bg-[#0B132B] px-4 py-2 rounded-full hover:bg-gray-800">Iniciar Validação</button>
                </div>
              </div>
              <button className="w-full mt-4 bg-gradient-to-r from-[#FFDB58] to-[#FFDB58] hover:to-[#FF7F50] text-[#0B132B] hover:text-white font-black py-4 rounded-[30px_10px_30px_10px] shadow-lg transition-all transform hover:-translate-y-1">Criar meu Universo</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
