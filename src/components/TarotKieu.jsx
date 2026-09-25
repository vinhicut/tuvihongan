import React, { useState } from 'react';
import { Sparkles, RefreshCw, Feather } from 'lucide-react';
import { TAROT_KIEU_CARDS } from '../data/tarotKieuData';

export const TarotKieu = () => {
  const [selectedDomain, setSelectedDomain] = useState('Tất cả');
  const [currentCard, setCurrentCard] = useState(TAROT_KIEU_CARDS[1]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isFlipped, setIsFlipped] = useState(true);

  const drawCard = () => {
    setIsShuffling(true);
    setIsFlipped(false);
    setTimeout(() => {
      let pool = TAROT_KIEU_CARDS;
      if (selectedDomain !== 'Tất cả') {
        const filtered = TAROT_KIEU_CARDS.filter((c) => c.domain === selectedDomain);
        if (filtered.length > 0) pool = filtered;
      }
      const randomIndex = Math.floor(Math.random() * pool.length);
      setCurrentCard(pool[randomIndex]);
      setIsShuffling(false);
      setIsFlipped(true);
    }, 700);
  };

  return (
    <section id="tarot" className="py-14 sm:py-20 bg-[#faf7f2] border-t border-amber-200/70 text-stone-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
            <Feather className="w-3.5 h-3.5 text-amber-700" />
            <span>Nét Đẹp Văn Hóa Tâm Linh Việt</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight mb-3">
            TARROT KIỀU <span className="text-emerald-700 text-lg sm:text-2xl font-normal">(Xin quẻ Bói Kiều Miễn phí)</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Mượn những vần thơ bất hủ trong kiệt tác Đoạn Trường Tân Thanh của Đại thi hào Nguyễn Du để soi tỏ lòng mình, đón nhận điềm lành và tháo gỡ băn khoăn.
          </p>

          {/* Domain Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {['Tất cả', 'Tình Duyên', 'Sự Nghiệp', 'Tài Lộc', 'Tâm Trí', 'Cơ Hội'].map((domain) => (
              <button
                key={domain}
                type="button"
                onClick={() => setSelectedDomain(domain)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedDomain === domain
                    ? 'bg-gradient-to-r from-red-700 to-amber-700 text-white shadow-xs font-bold'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
                }`}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>

        {/* Tarot Ritual Interactive Stage */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Card Visual Left */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div
              onClick={drawCard}
              className={`w-64 sm:w-72 h-96 rounded-3xl p-5 border-2 transition-all duration-500 cursor-pointer shadow-xl relative flex flex-col justify-between overflow-hidden ${
                isFlipped
                  ? 'bg-gradient-to-b from-[#fffefc] via-[#fffbf4] to-[#f7f0e4] border-amber-400 shadow-[0_10px_30px_rgba(217,119,6,0.18)]'
                  : 'bg-gradient-to-b from-[#f8f4ec] to-[#eee5d3] border-amber-300'
              } ${isShuffling ? 'scale-95 rotate-1 opacity-70' : 'hover:scale-102'}`}
            >
              {/* Card Inner Border */}
              <div className="absolute inset-2 border border-amber-400/40 rounded-2xl pointer-events-none" />
              <div className="absolute inset-3.5 border border-dashed border-amber-500/30 rounded-xl pointer-events-none" />

              {/* Card Top */}
              <div className="flex items-center justify-between text-xs text-amber-900 font-serif font-bold">
                <span>{currentCard?.verseNumbers}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-[10px] text-amber-900">
                  {currentCard?.domain}
                </span>
              </div>

              {/* Center Emblem */}
              <div className="my-auto text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-amber-50 border-2 border-amber-400 flex items-center justify-center text-amber-700 shadow-sm">
                  <Feather className="w-8 h-8 text-amber-700" />
                </div>
                <h4 className="font-display font-bold text-stone-900 text-lg">
                  {currentCard?.title}
                </h4>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-100 border border-amber-400 text-amber-900">
                  Điềm: {currentCard?.omen}
                </div>
              </div>

              {/* Card Bottom */}
              <div className="text-center text-[11px] text-stone-500 font-serif border-t border-amber-200 pt-2">
                Tử Vi Hồng Ân • Tarot Kiều
              </div>
            </div>

            {/* Draw Button */}
            <button
              type="button"
              onClick={drawCard}
              disabled={isShuffling}
              className="mt-6 px-7 py-3 rounded-xl bg-gradient-to-r from-red-700 via-amber-700 to-red-800 text-white font-bold text-sm hover:brightness-105 transition-all shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isShuffling ? 'animate-spin' : ''}`} />
              <span>{isShuffling ? 'Đang tịnh tâm xin quẻ...' : 'Thành Tâm Rút Quẻ Mới'}</span>
            </button>
          </div>

          {/* Verses & Interpretation Right */}
          <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-amber-200/80 shadow-sm space-y-6">
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs text-amber-800 font-semibold uppercase tracking-wider">
                  Trích Thơ Kiều
                </span>
                <h3 className="text-xl font-display font-bold text-stone-900">
                  {currentCard?.title}
                </h3>
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-100 border border-emerald-300 text-emerald-900">
                {currentCard?.omen}
              </span>
            </div>

            {/* Classical Verses Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#fffefb] to-[#fbf7ee] border-2 border-amber-300 text-center font-serif text-base sm:text-lg text-stone-900 italic leading-relaxed shadow-inner">
              {currentCard?.kieuVerses.map((line, idx) => (
                <p key={idx} className="my-1.5 tracking-wide">
                  &ldquo;{line}&rdquo;
                </p>
              ))}
              <div className="mt-3 text-xs text-stone-500 not-italic font-sans">
                — {currentCard?.verseNumbers} (Nguyễn Du, Đoạn Trường Tân Thanh) —
              </div>
            </div>

            {/* Meaning & Interpretation */}
            <div className="space-y-3 text-sm">
              <h4 className="font-bold text-stone-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-700" />
                <span>Ý Nghĩa Quẻ Bói & Điềm Báo Thời Vận:</span>
              </h4>
              <p className="text-stone-700 leading-relaxed text-justify">
                {currentCard?.meaning}
              </p>
            </div>

            {/* Advice */}
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs space-y-1.5">
              <span className="text-amber-900 font-bold block text-sm">
                Lời khuyên xử thế:
              </span>
              <p className="text-stone-700 leading-relaxed">
                {currentCard?.advice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
