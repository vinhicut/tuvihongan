import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { PricingConsultation } from './components/PricingConsultation';
import { ImageMockupModal } from './components/ImageMockupModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isMockupModalOpen, setIsMockupModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('tuvi');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-stone-800 flex flex-col font-sans selection:bg-amber-600 selection:text-white">
      {/* Navigation Header */}
      <Header/>

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section & Core Highlights */}
        <HeroBanner/>

        {/* Section 1: LẬP LÁ SỐ TỬ VI (Miễn phí) */}
        {/* <TuViChart onScrollToService={() => scrollToSection('service')} /> */}

        {/* Section 2: BÁT QUÁI, PHONG THỦY (Miễn phí) */}
        {/* <BatQuaiFengShui onScrollToService={() => scrollToSection('service')} /> */}

        {/* Section 3: TARROT KIỀU (Miễn phí) */}
        {/* <TarotKieu /> */}

        {/* Section 4: Luận Giải 199k & Đặt Lịch Zalo với Thầy */}
        <PricingConsultation />
      </main>

      {/* Footer */}
      <Footer/>

      {/* Fullscreen UI Mockup Image Modal */}
      <ImageMockupModal
        isOpen={isMockupModalOpen}
        onClose={() => setIsMockupModalOpen(false)}
      />
    </div>
  );
}
