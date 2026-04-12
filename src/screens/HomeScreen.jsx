import React from 'react';
import { Search, ChevronRight } from 'lucide-react';

export default function HomeScreen({ onNavigate }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h2 className="text-2xl font-extrabold text-[#0B132B]">+Arte <span className="text-[#FF7F50] italic font-serif">Cwb</span></h2>
        <div className="hidden md:flex flex-1 max-w-md mx-8 relative group">
          <input type="text" placeholder="Buscar rolês..." className="w-full bg-gray-100 border-none rounded-full py-2.5 pl-12 pr-4 outline-none" />
          <Search className="absolute left-4 top-2.5 text-gray-400" size={20} />
        </div>
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 rounded-[12px_12px_4px_12px] bg-[#FFDB58] overflow-hidden border-2 border-[#0B132B] cursor-pointer" onClick={() => onNavigate('login')}>
            <img src="[https://api.dicebear.com/7.x/avataaars/svg?seed=Curitiba&backgroundColor=FFDB58](https://api.dicebear.com/7.x/avataaars/svg?seed=Curitiba&backgroundColor=FFDB58)" alt="Avatar" />
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-7xl mx-auto w-full p-6 space-y-16">
        <section>
          <h3 className="text-3xl font-black text-[#0B132B] mb-6">O Mosaico</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[400px]">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden bg-[#FF7F50] rounded-[30px_80px_30px_10px] p-6 flex items-end cursor-pointer" onClick={() => onNavigate('agenda')}>
               <div className="absolute inset-0 bg-[url('[https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1000](https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1000)')] bg-cover bg-center mix-blend-overlay opacity-60"></div>
               <div className="relative z-20"><span className="bg-white text-[#0B132B] text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">Agenda</span><h4 className="text-2xl font-bold text-white">Ver Agenda Completa</h4></div>
            </div>
             <div className="md:col-span-2 md:row-span-1 relative bg-[#FFDB58] rounded-[10px_20px_60px_20px] p-5 flex items-end cursor-pointer" onClick={() => onNavigate('event')}>
               <div className="relative z-20 w-full flex justify-between items-end">
                 <div><span className="text-[#0B132B] text-xs font-bold uppercase">Produtor</span><h4 className="text-xl font-bold text-[#0B132B]">Cadastrar Novo Evento</h4></div>
                 <ChevronRight size={24} className="text-[#0B132B]"/>
               </div>
            </div>
             <div className="md:col-span-2 md:row-span-1 relative bg-[#87CEFA] rounded-[50px_10px_40px_10px] p-5 flex items-end cursor-pointer" onClick={() => onNavigate('artist')}>
               <div className="relative z-20 w-full flex justify-between items-end">
                 <div><span className="text-[#0B132B] text-xs font-bold uppercase">Comunidade</span><h4 className="text-xl font-bold text-[#0B132B]">Criar Perfil de Artista</h4></div>
                 <ChevronRight size={24} className="text-[#0B132B]"/>
               </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
