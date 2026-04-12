import React, { useState } from 'react';
import { Shield, Star, Map, LayoutGrid, Music, Palette } from 'lucide-react';

export default function AgendaScreen({ onNavigate }) {
  const [familyMode, setFamilyMode] = useState(false);
  const [viewMode, setViewMode] = useState('list');
  const [activeFilter, setActiveFilter] = useState('Hoje');

  const filters = ['Hoje', 'Amanhã', 'Fim de Semana', 'Música', 'Teatro', 'Exposições', 'Barzinhos', 'Underground'];

  const allEvents = [
    { id: 1, title: 'Slam do 13', category: 'Poesia/Under', age: '16+', price: 'Grátis', rating: 5, img: '[https://images.unsplash.com/photo-1525926477800-7a3b10316ac6?q=80&w=800](https://images.unsplash.com/photo-1525926477800-7a3b10316ac6?q=80&w=800)', height: 'h-64' },
    { id: 2, title: 'Orquestra no Parque', category: 'Música Clássica', age: 'Livre', price: 'Grátis', rating: 4, img: '[https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800](https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800)', height: 'h-80' },
    { id: 3, title: 'Feira de Vinil Zumbi', category: 'Feira', age: 'Livre', price: 'Entrada Franca', rating: 5, img: '[https://images.unsplash.com/photo-1519638831568-d9897f54ed69?q=80&w=800](https://images.unsplash.com/photo-1519638831568-d9897f54ed69?q=80&w=800)', height: 'h-48' },
    { id: 4, title: 'Batalha de Sangue', category: 'Rap', age: '18+', price: 'R$ 10', rating: 4.5, img: '[https://images.unsplash.com/photo-1493225457224-b003a2fc1b4c?q=80&w=800](https://images.unsplash.com/photo-1493225457224-b003a2fc1b4c?q=80&w=800)', height: 'h-72' },
    { id: 5, title: 'Teatro de Sombras', category: 'Teatro', age: '10+', price: 'R$ 20', rating: 4, img: '[https://images.unsplash.com/photo-1507676184212-d03305a527e4?q=80&w=800](https://images.unsplash.com/photo-1507676184212-d03305a527e4?q=80&w=800)', height: 'h-56' },
  ];

  const filteredEvents = familyMode ? allEvents.filter(e => ['Livre', '10+', '12+'].includes(e.age)) : allEvents;

  const bgClass = familyMode ? 'bg-[#f0f9ff]' : 'bg-[#F9FAFB]';
  const filterActiveBg = familyMode ? 'bg-[#87CEFA]' : 'bg-[#0B132B]';
  const filterActiveText = familyMode ? 'text-[#0B132B]' : 'text-white';

  return (
    <div className={`min-h-screen transition-colors duration-500 ${bgClass} pb-24`}>
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="p-4 md:px-8 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#0B132B] cursor-pointer" onClick={() => onNavigate('home')}>
            A Agenda
          </h2>
          <div className="flex items-center gap-2 bg-gray-100 p-1.5 md:p-2 rounded-full border border-gray-200">
            <span className="text-xs font-bold text-gray-500 hidden md:block pl-2">Seguro / ECA</span>
            <Shield size={16} className={familyMode ? 'text-green-500' : 'text-gray-400'} />
            <button onClick={() => setFamilyMode(!familyMode)} className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-300 ease-in-out flex items-center ${familyMode ? 'bg-green-400' : 'bg-gray-300'}`}>
              <div className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${familyMode ? 'translate-x-5' : 'translate-x-0'}`}></div>
            </button>
          </div>
        </div>

        <div className="px-4 md:px-8 pb-4 flex overflow-x-auto hide-scrollbar gap-3 items-center">
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} className={`whitespace-nowrap px-5 py-2 rounded-[20px_5px_20px_5px] text-sm font-bold transition-all ${activeFilter === f ? `${filterActiveBg} ${filterActiveText} shadow-md` : 'bg-white text-gray-500 border border-gray-200 hover:border-[#FF7F50] hover:text-[#FF7F50]'}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <main className="p-4 md:p-8 max-w-7xl mx-auto">
        {viewMode === 'list' ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredEvents.map((event) => (
              <div key={event.id} className="break-inside-avoid relative group cursor-pointer">
                <div className={`w-full ${event.height} relative overflow-hidden rounded-[20px_50px_20px_10px] md:rounded-[30px_80px_30px_10px] shadow-sm hover:shadow-xl transition-all duration-300`}>
                  <img src={event.img} alt={event.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shadow-lg border-2 border-white ${event.age === 'Livre' ? 'bg-green-500 text-white' : event.age === '18+' ? 'bg-red-600 text-white' : event.age === '10+' || event.age === '12+' ? 'bg-yellow-400 text-black' : 'bg-orange-500 text-white'}`}>
                      {event.age}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-5">
                    <span className="bg-[#FFDB58] text-[#0B132B] text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded inline-block mb-2">{event.category}</span>
                    <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-2">{event.title}</h3>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-300 bg-white/20 px-2 py-0.5 rounded backdrop-blur-sm">{event.price}</span>
                      <div className="flex text-[#FFDB58]">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={i < Math.floor(event.rating) ? "currentColor" : "none"} stroke="currentColor"/>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-[60vh] bg-gray-200 rounded-[30px] overflow-hidden relative border-4 border-white shadow-xl flex items-center justify-center">
            <div className="absolute inset-0 bg-[#e5e5f7] opacity-60 bg-[radial-gradient(#0B132B_1px,transparent_1px)] [background-size:20px_20px]"></div>
            
            <div className="absolute top-[30%] left-[40%] group cursor-pointer">
              <div className="w-12 h-12 bg-[#FF7F50] rounded-[50%_40%_60%_30%] animate-pulse mix-blend-multiply flex items-center justify-center shadow-lg"><Music size={16} className="text-white" /></div>
              <div className="hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white p-2 rounded text-xs font-bold w-32 text-center shadow-lg z-50">Slam do 13</div>
            </div>
            <div className="absolute top-[60%] left-[60%] group cursor-pointer">
              <div className="w-10 h-10 bg-[#87CEFA] rounded-[30%_60%_40%_50%] animate-pulse mix-blend-multiply flex items-center justify-center shadow-lg delay-150"><Palette size={14} className="text-[#0B132B]" /></div>
            </div>

            <p className="relative z-10 text-gray-500 font-bold bg-white/80 px-4 py-2 rounded-full backdrop-blur-sm">Mapa Estilizado de Curitiba</p>
          </div>
        )}
      </main>

      <button onClick={() => setViewMode(viewMode === 'list' ? 'map' : 'list')} className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-16 h-16 bg-[#0B132B] hover:bg-[#FF7F50] rounded-[30%_70%_50%_50%/50%_50%_70%_50%] shadow-[0_10px_25px_rgba(11,19,43,0.4)] flex items-center justify-center text-white transition-all duration-300 hover:rotate-12 z-50">
        {viewMode === 'list' ? <Map size={24} /> : <LayoutGrid size={24} />}
      </button>

      <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </div>
  );
}
