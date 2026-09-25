import React, { useState } from 'react';
import {
  FileText,
  User,
  Heart,
  TrendingUp,
  Sparkles,
  Infinity,
  BookOpen,
  Compass,
  Flower2,
  Key,
  CheckCircle2,
  Phone,
  MessageSquare,
  Copy,
  Check,
  Crown,
  ExternalLink,
} from 'lucide-react';

interface OfficialBannerProps {
  onSelectPackage?: (pkgName: string, price: string) => void;
  onOpenBookingModal?: (pkgName: string, price: string) => void;
}

export const OfficialBanner: React.FC<OfficialBannerProps> = ({
  onOpenBookingModal,
}) => {
  const [selectedPkg, setSelectedPkg] = useState<string | null>(null);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const copyPhone = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedPhone(num);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const handleChoose = (pkgName: string, price: string) => {
    setSelectedPkg(pkgName);
    if (onOpenBookingModal) {
      onOpenBookingModal(pkgName, price);
    }
  };

  const directConsultPackages = [
    {
      id: 'ban_menh',
      title: 'Luận Giải Bản Mệnh',
      desc: 'Hiểu rõ bản thân, điểm mạnh yếu, định hướng phát triển',
      price: '299.000 VNĐ',
      icon: User,
    },
    {
      id: 'tinh_duyen',
      title: 'Luận Giải Tình Duyên Gia Đạo',
      desc: 'Phân tích tình duyên, hôn nhân, gia đạo, các mối quan hệ',
      price: '299.000 VNĐ',
      icon: Heart,
    },
    {
      id: 'cong_danh',
      title: 'Luận Giải Công Danh Sự Nghiệp',
      desc: 'Phân tích sự nghiệp, tài lộc, thời vận, hướng đi phù hợp',
      price: '299.000 VNĐ',
      icon: TrendingUp,
    },
    {
      id: 'van_han_3nam',
      title: 'Luận giải chi tiết vận hạn 3 năm',
      desc: 'Tổng quan vận trình 3 năm, các mốc cần lưu ý, lời khuyên thực tế',
      price: '499.000 VNĐ',
      icon: Sparkles,
    },
    {
      id: 'tron_doi',
      title: 'Luận giải chi tiết trọn đời',
      desc: 'Tổng quan cuộc đời, đại vận, tiểu vận, các mốc quan trọng',
      price: '799.000 VNĐ',
      icon: Infinity,
    },
  ];

  return (
    <section id="official-banner" className="py-12 sm:py-16 bg-[#f7f2e8] text-stone-800 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-3 sm:px-6">
        {/* Banner Master Frame with Classical Gold Parchment Aesthetic */}
        <div className="relative bg-gradient-to-b from-[#fdfbf6] via-[#faf5eb] to-[#f4ecd8] rounded-3xl sm:rounded-[36px] p-4 sm:p-8 md:p-10 border-4 border-[#c89b53] shadow-[0_15px_50px_rgba(180,120,40,0.22)] overflow-hidden">
          {/* Filigree Inner Borders */}
          <div className="absolute inset-2 sm:inset-3 rounded-[24px] sm:rounded-[30px] border-2 border-[#d4af37]/60 pointer-events-none" />
          <div className="absolute inset-3.5 sm:inset-5 rounded-[20px] sm:rounded-[26px] border border-dashed border-[#b8860b]/40 pointer-events-none" />

          {/* Corner Floral Ornaments */}
          <div className="absolute top-4 left-4 text-[#b8860b] text-lg select-none pointer-events-none">❖</div>
          <div className="absolute top-4 right-4 text-[#b8860b] text-lg select-none pointer-events-none">❖</div>
          <div className="absolute bottom-4 left-4 text-[#b8860b] text-lg select-none pointer-events-none">❖</div>
          <div className="absolute bottom-4 right-4 text-[#b8860b] text-lg select-none pointer-events-none">❖</div>

          {/* 1. TOP HEADER & CALLIGRAPHY SEALS */}
          <div className="relative z-10 pt-2">
            {/* 4 Corner Inscriptions */}
            <div className="flex items-start justify-between text-xs sm:text-sm font-serif">
              {/* Top-Left Inscription */}
              <div className="space-y-1 text-left">
                <div className="font-bold tracking-wider text-[#8b4513] uppercase text-[11px] sm:text-xs">
                  THIÊN ĐỊA NHÂN HÒA
                </div>
                <div className="text-[10px] sm:text-xs text-stone-600 italic flex items-center gap-1">
                  <span>Thiện tâm tạo phúc</span>
                  <span className="w-4 h-4 rounded-full bg-red-700 text-amber-100 text-[9px] font-bold inline-flex items-center justify-center shadow-xs">
                    福
                  </span>
                </div>
              </div>

              {/* Top-Right Inscription */}
              <div className="space-y-1 text-right">
                <div className="font-bold tracking-wider text-[#8b4513] uppercase text-[11px] sm:text-xs">
                  AN TÂM SỐNG THIỆN
                </div>
                <div className="text-[10px] sm:text-xs text-stone-600 italic flex items-center justify-end gap-1">
                  <span>An viên sự hưng</span>
                  <span className="w-4 h-4 rounded-full bg-red-700 text-amber-100 text-[9px] font-bold inline-flex items-center justify-center shadow-xs">
                    福
                  </span>
                </div>
              </div>
            </div>

            {/* Central Brand Symbol & Title */}
            <div className="text-center my-4 sm:my-6">
              {/* Logo Emblem */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-3 flex items-center justify-center">
                {/* Circular Gold Halo */}
                <div className="absolute inset-0 rounded-full border-2 border-[#c89b53] bg-gradient-to-br from-[#fff7e6] to-[#f4e2b8] shadow-inner flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-dashed border-[#b8860b]/70 flex items-center justify-center">
                    {/* Stylized HA Monogram */}
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-display font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-[#b85d19] to-red-900 drop-shadow-xs">
                        HÂ
                      </div>
                      <div className="text-[8px] sm:text-[9px] font-serif font-bold text-amber-900 tracking-widest uppercase">
                        Hồng Ân
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight mb-2">
                TỬ VI HỒNG ÂN
              </h2>

              {/* 5 Disciplines Subtitle */}
              <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-serif font-semibold text-[#8b4513]">
                <span>Tử Vi</span>
                <span>•</span>
                <span>Lý Số</span>
                <span>•</span>
                <span>Phong Thủy</span>
                <span>•</span>
                <span>Phật Pháp</span>
                <span>•</span>
                <span>Tam Tứ Phủ</span>
              </div>
            </div>
          </div>

          {/* 2. SECTION: LUẬN GIẢI TỰ ĐỘNG */}
          <div className="relative z-10 my-6 sm:my-8">
            {/* Header Badge */}
            <div className="text-center mb-3">
              <div className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full bg-gradient-to-r from-red-800 via-red-700 to-red-800 text-white shadow-md border border-amber-300/80">
                <span className="text-amber-300 text-xs">❖</span>
                <h3 className="text-sm sm:text-base font-display font-bold uppercase tracking-wider">
                  LUẬN GIẢI TỰ ĐỘNG
                </h3>
                <span className="text-amber-300 text-xs">❖</span>
              </div>
              <p className="text-[11px] sm:text-xs text-stone-600 italic mt-1 font-medium">
                Nhanh chóng • Đầy đủ • Dễ tiếp cận
              </p>
            </div>

            {/* Service Box 199.000 VNĐ */}
            <div className="bg-white/85 backdrop-blur-xs rounded-2xl sm:rounded-3xl p-4 sm:p-5 border-2 border-[#d8b068] shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3.5 sm:gap-4 flex-1">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-400/80 flex items-center justify-center text-amber-900 shrink-0 shadow-xs">
                  <FileText className="w-6 h-6 text-amber-800" />
                </div>

                {/* Details */}
                <div className="space-y-1.5 text-left">
                  <h4 className="font-display font-bold text-base sm:text-lg text-stone-900">
                    Luận giải tự động
                  </h4>
                  <ul className="space-y-1 text-xs text-stone-700">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Luận giải đầy đủ toàn bộ lá số</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Bao gồm 12 cung và vận hạn</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Phân tích công danh, tài lộc, tình duyên, sức khoẻ</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Trả kết quả tự động ngay sau khi nhập thông tin</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Price Button Pill */}
              <button
                type="button"
                onClick={() => handleChoose('Luận giải tự động', '199.000 VNĐ')}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-red-800 via-red-700 to-amber-800 text-white font-display font-extrabold text-sm sm:text-base border-2 border-amber-300 shadow-md hover:scale-103 hover:brightness-110 active:scale-98 transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>199.000 VNĐ</span>
              </button>
            </div>
          </div>

          {/* 3. SECTION: LUẬN GIẢI RIÊNG VỚI THẦY */}
          <div className="relative z-10 my-6 sm:my-8">
            {/* Header Badge */}
            <div className="text-center mb-3">
              <div className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full bg-gradient-to-r from-red-800 via-red-700 to-red-800 text-white shadow-md border border-amber-300/80">
                <span className="text-amber-300 text-xs">❖</span>
                <h3 className="text-sm sm:text-base font-display font-bold uppercase tracking-wider">
                  LUẬN GIẢI RIÊNG VỚI THẦY
                </h3>
                <span className="text-amber-300 text-xs">❖</span>
              </div>
              <p className="text-[11px] sm:text-xs text-stone-600 italic mt-1 font-medium">
                Chuyên sâu • Cá nhân hoá • Đồng hành
              </p>
            </div>

            {/* List of 5 Packages */}
            <div className="space-y-2.5 sm:space-y-3">
              {directConsultPackages.map((pkg) => {
                const IconComponent = pkg.icon;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => handleChoose(pkg.title, pkg.price)}
                    className="bg-white/85 hover:bg-white transition-all rounded-2xl p-3 sm:p-4 border border-[#e0c288] hover:border-[#c89b53] shadow-2xs hover:shadow-sm cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-amber-50 border border-amber-400/80 flex items-center justify-center text-amber-900 shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                        <IconComponent className="w-5 h-5 text-amber-800" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-display font-bold text-sm sm:text-base text-stone-900 group-hover:text-red-800 transition-colors">
                          {pkg.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-stone-600">
                          {pkg.desc}
                        </p>
                      </div>
                    </div>

                    <div className="self-end sm:self-center shrink-0">
                      <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-red-800 to-red-900 text-amber-100 font-display font-bold text-xs sm:text-sm border border-amber-300 shadow-xs group-hover:brightness-110 transition-all">
                        {pkg.price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. FOOTER: 4 PILLARS & CORE MOTTO */}
          <div className="relative z-10 pt-6 mt-6 border-t border-[#d8b068]/50">
            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-center mb-5 text-xs">
              <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex flex-col items-center">
                <BookOpen className="w-4 h-4 text-amber-800 mb-1" />
                <span className="font-serif font-bold text-stone-900">Tri thức</span>
                <span className="text-[10px] text-stone-600">là nền tảng</span>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex flex-col items-center">
                <Compass className="w-4 h-4 text-amber-800 mb-1" />
                <span className="font-serif font-bold text-stone-900">Phong thủy</span>
                <span className="text-[10px] text-stone-600">là hỗ trợ</span>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex flex-col items-center">
                <Flower2 className="w-4 h-4 text-amber-800 mb-1" />
                <span className="font-serif font-bold text-stone-900">Phật pháp</span>
                <span className="text-[10px] text-stone-600">là điểm tựa</span>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex flex-col items-center">
                <Key className="w-4 h-4 text-amber-800 mb-1" />
                <span className="font-serif font-bold text-stone-900">Lựa chọn</span>
                <span className="text-[10px] text-stone-600">là chìa khoá</span>
              </div>
            </div>

            {/* Core Motto */}
            <div className="text-center space-y-1 mb-5">
              <div className="text-base sm:text-lg font-serif font-bold text-stone-900 italic tracking-wide">
                ❖ Hiểu mệnh – Biết vận – Chọn đúng đường ❖
              </div>
            </div>

            {/* Bottom Inscriptions */}
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-serif text-stone-600 pt-3 border-t border-amber-200/50">
              <div>VẠN SỰ TÙY DUYÊN</div>
              <div className="flex items-center gap-1 italic text-[#8b4513]">
                <span>An lạc tự tại - Hồng Ân luôn bên</span>
                <span className="w-4 h-4 rounded-full bg-red-700 text-amber-100 text-[9px] font-bold inline-flex items-center justify-center shadow-xs">
                  福
                </span>
              </div>
            </div>

            {/* Hotline Bar for Fast Contact */}
            <div className="mt-5 p-3 sm:p-4 rounded-2xl bg-white/90 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-700" />
                <span className="font-bold text-stone-800">Hotline Zalo Thầy:</span>
                <span className="font-bold text-emerald-800">0924.6161.99</span>
                <span className="text-stone-400">•</span>
                <span className="font-bold text-emerald-800">0385.497.085</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://zalo.me/0924616199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Nhắn Zalo 1</span>
                </a>
                <a
                  href="https://zalo.me/0385497085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Nhắn Zalo 2</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
