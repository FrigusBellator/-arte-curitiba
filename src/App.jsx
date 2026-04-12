import React, { useState } from 'react';
import { Calendar, LayoutGrid, Ticket, User } from 'lucide-react';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ArtistProfileScreen from './screens/ArtistProfileScreen';
import EventCreationScreen from './screens/EventCreationScreen';
import AgendaScreen from './screens/AgendaScreen';
import NavBtn from './components/NavBtn';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login'); 

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 overflow-x-hidden selection:bg-[#FF7F50] selection:text-white">
      
      {currentScreen === 'login' && <LoginScreen onLogin={() => setCurrentScreen('home')} />}
      {currentScreen === 'home' && <HomeScreen onNavigate={setCurrentScreen} />}
      {currentScreen === 'artist' && <ArtistProfileScreen onNavigate={setCurrentScreen} />}
      {currentScreen === 'event' && <EventCreationScreen onNavigate={setCurrentScreen} />}
      {currentScreen === 'agenda' && <AgendaScreen onNavigate={setCurrentScreen} />}

      {currentScreen !== 'login' && (
        <div className="fixed bottom-4 left-4 z-[999] bg-white/90 backdrop-blur-md p-2 rounded-[20px] shadow-2xl border border-gray-200 flex gap-2">
          <NavBtn active={currentScreen === 'home'} onClick={() => setCurrentScreen('home')} icon={<LayoutGrid size={18}/>} label="Home" />
          <NavBtn active={currentScreen === 'agenda'} onClick={() => setCurrentScreen('agenda')} icon={<Calendar size={18}/>} label="Agenda" />
          <NavBtn active={currentScreen === 'artist'} onClick={() => setCurrentScreen('artist')} icon={<User size={18}/>} label="Perfil" />
          <NavBtn active={currentScreen === 'event'} onClick={() => setCurrentScreen('event')} icon={<Ticket size={18}/>} label="Criar Evento" />
        </div>
      )}
    </div>
  );
}
