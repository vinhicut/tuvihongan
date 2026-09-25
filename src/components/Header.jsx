import React, { useState } from 'react';
import { Phone, Compass, Sparkles, BookOpen, Crown, Copy, Check, Menu, X, Image as ImageIcon } from 'lucide-react';

export const Header = ({ onOpenMockupModal, activeSection, setActiveSection }) => {
  const [copiedPhone, setCopiedPhone] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const copyToClipboard = (phone, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const navItems = [
    { id: 'tuvi', label: 'LẬP LÁ SỐ TỬ VI', icon: Sparkles, badge: 'Miễn phí' },
    { id: 'batquai', label: 'BÁT QUÁI - PHONG THỦY', icon: Compass, badge: 'Miễn phí' },
    { id: 'tarot', label: 'TARROT KIỀU', icon: BookOpen, badge: 'Miễn phí' },
    { id: 'service', label: 'LUẬN GIẢI 199K', icon: Crown, highlight: true },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fffdfa]/95 backdrop-blur-md border-b border-amber-200/80 text-stone-800 shadow-sm">
      {/* Top Banner Notice - Light Imperial Crimson Accent */}
      <div className="bg-gradient-to-r from-amber-700 via-red-800 to-amber-800 text-white text-xs py-1.5 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 font-medium">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
            <span>Luận giải đầy đủ chi tiết chỉ <strong className="text-yellow-200 font-bold">199k</strong> tại <a href="https://www.tuvihongan.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-200 transition-colors font-semibold">www.tuvihongan.com</a></span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden sm:inline text-amber-100">Đặt lịch riêng với thầy qua Zalo:</span>
            <div className="flex items-center gap-2">
              <a
                href="https://zalo.me/0924616199"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-stone-900 hover:text-stone-950 bg-amber-100 hover:bg-white px-2.5 py-0.5 rounded-full font-semibold border border-amber-300 transition-all shadow-xs"
                title="Mở Zalo nhắn tin trực tiếp"
              >
                <Phone className="w-3 h-3 text-emerald-700" />
                <span>0924.6161.99</span>
                <button
                  type="button"
                  onClick={(e) => copyToClipboard('0924616199', e)}
                  className="hover:text-amber-800 ml-0.5"
                  title="Sao chép số"
                >
                  {copiedPhone === '0924616199' ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3 opacity-60" />}
                </button>
              </a>
              <a
                href="https://zalo.me/0385497085"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 text-stone-900 hover:text-stone-950 bg-amber-100 hover:bg-white px-2.5 py-0.5 rounded-full font-semibold border border-amber-300 transition-all shadow-xs"
                title="Mở Zalo nhắn tin trực tiếp"
              >
                <Phone className="w-3 h-3 text-emerald-700" />
                <span>0385.497.085</span>
                <button
                  type="button"
                  onClick={(e) => copyToClipboard('0385497085', e)}
                  className="hover:text-amber-800 ml-0.5"
                  title="Sao chép số"
                >
                  {copiedPhone === '0385497085' ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3 opacity-60" />}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-600 via-red-600 to-amber-800 flex items-center justify-center p-0.5 border border-amber-400 shadow-md">
            <div className="w-full h-full rounded-full bg-[#fffaf2] flex items-center justify-center text-red-800 font-serif font-bold text-lg tracking-tight border border-amber-200">
              Ân
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-xl sm:text-2xl tracking-wide text-stone-900">
                Tử Vi <span className="bg-gradient-to-r from-amber-700 to-red-700 bg-clip-text text-transparent">Hồng Ân</span>
              </span>
            </div>
            <p className="text-[11px] text-stone-500 font-medium tracking-wider">
              www.tuvihongan.com • Soi Mệnh - Đắc Thời - Định Hướng
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
                  item.highlight
                    ? 'bg-gradient-to-r from-red-700 via-amber-700 to-red-800 text-white shadow-md hover:brightness-105 border border-red-800/30'
                    : isActive
                    ? 'bg-amber-100/90 text-amber-900 border border-amber-300 font-bold'
                    : 'text-stone-700 hover:text-amber-900 hover:bg-amber-50/80 border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${item.highlight ? 'text-yellow-300' : 'text-amber-700'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          {/* Quick UI Mockup Image Viewer Button */}
          {/* <button
            type="button"
            onClick={onOpenMockupModal}
            className="ml-2 px-3 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-amber-50 text-stone-700 hover:text-amber-900 border border-stone-200 hover:border-amber-300 flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
            title="Xem ảnh giao diện thiết kế mẫu"
          >
            <ImageIcon className="w-3.5 h-3.5 text-amber-700" />
            <span>Ảnh Giao Diện</span>
          </button> */}
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
{/*           <button
            type="button"
            onClick={onOpenMockupModal}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white text-stone-700 border border-stone-300 flex items-center gap-1"
          >
            <ImageIcon className="w-4 h-4 text-amber-700" />
            <span className="hidden sm:inline">Ảnh UI</span>
          </button> */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-amber-900 hover:bg-amber-100/60 rounded-lg"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#fffdfa] border-b border-amber-200 px-4 py-4 space-y-2 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between ${
                  item.highlight
                    ? 'bg-gradient-to-r from-red-700 to-amber-700 text-white font-semibold'
                    : 'text-stone-700 hover:bg-amber-50 hover:text-amber-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-amber-700" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2 text-xs">
            <a
              href="https://zalo.me/0924616199"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 py-2 rounded-xl border border-emerald-200 font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>Zalo 1: 0924.6161.99</span>
            </a>
            <a
              href="https://zalo.me/0385497085"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 py-2 rounded-xl border border-emerald-200 font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>Zalo 2: 0385.497.085</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
