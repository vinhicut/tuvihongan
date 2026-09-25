import React from 'react';
import { Sparkles, Compass, BookOpen, Crown, Phone, ArrowRight, Star, ExternalLink, Image as ImageIcon } from 'lucide-react';
import lightMockupImage from '../assets/images/tu_vi_hong_an_light_ui_1790060015159.jpg';

export const HeroBanner = ({ onSelectFeature, onOpenMockupModal }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 bg-gradient-to-b from-[#fffefc] via-[#fbf8f2] to-[#f6f1e8] border-b border-amber-200/60">
      {/* Background Decorative Rings / Warm Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-200/30 via-red-100/20 to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute -top-32 right-10 w-96 h-96 rounded-full border border-amber-300/30 pointer-events-none -z-0" />
      <div className="absolute -top-20 right-24 w-72 h-72 rounded-full border border-amber-400/20 border-dashed pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Tagline */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Khai Quang Vận Mệnh • Bát Trạch Phong Thủy • Thi Ca Bói Kiều</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-900 text-xs font-bold">
            <Crown className="w-3.5 h-3.5 text-amber-700" />
            <span>Chính Thức: tuvihongan.com</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-stone-900 mb-4 leading-tight sm:leading-tight">
            Tử Vi <span className="bg-gradient-to-r from-red-800 via-amber-700 to-amber-900 bg-clip-text text-transparent">Hồng Ân</span>
          </h1>
          <p className="text-base sm:text-xl text-stone-600 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Soi tỏ cung Mệnh, định hướng công danh tài lộc, hòa hợp nhân duyên và khai thông vượng khí nhà ở - cơ quan qua thuật số Đông phương chính thống.
          </p>

          {/* Special Promo Highlight Box: 199k & Zalo Booking */}
          <div className="max-w-3xl mx-auto p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-[#fffdfa] via-white to-amber-50/50 border-2 border-amber-400/80 shadow-[0_10px_35px_rgba(217,119,6,0.12)] mb-10 text-left">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full text-xs font-extrabold bg-amber-600 text-white tracking-wide uppercase shadow-xs">
                    Dịch Vụ Nổi Bật
                  </span>
                  <span className="text-xs text-amber-800 font-semibold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-600" /> Luận giải 1-1 chuyên sâu
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-stone-900">
                  Luận giải đầy đủ <span className="text-red-700 text-2xl sm:text-3xl font-extrabold underline decoration-amber-500">199k</span> tại{' '}
                  <a
                    href="https://tuvihongan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-800 hover:text-red-700 transition-colors inline-flex items-center gap-1 font-bold underline"
                  >
                    tuvihongan.com <ExternalLink className="w-4 h-4" />
                  </a>
                </h2>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Bản giải đoán trọn đời 12 cung, 10 năm đại vận, tiểu vận chi tiết, phong thủy tài lộc kích tài tăng phúc.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => onSelectFeature('service')}
                  className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-red-700 via-amber-700 to-red-800 text-white font-bold text-sm hover:brightness-105 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Crown className="w-4 h-4 text-yellow-300" />
                  <span>Đăng Ký Luận 199k</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href="https://zalo.me/0924616199"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-300 flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Zalo: 0924.6161.99</span>
                  </a>
                  <a
                    href="https://zalo.me/0385497085"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-300 flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-700" />
                    <span>0385.497.085</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 pt-2">
          {/* Module 1: LẬP LÁ SỐ TỬ VI */}
          <div
            id="card-tuvi-intro"
            onClick={() => onSelectFeature('tuvi')}
            className="group relative rounded-3xl bg-white p-6 sm:p-7 border border-amber-200/80 hover:border-amber-500 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(180,130,60,0.15)] cursor-pointer flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 group-hover:scale-105 transition-transform shadow-xs">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 uppercase">
                  Miễn phí
                </span>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-stone-900 group-hover:text-amber-800 transition-colors mb-2">
                  LẬP LÁ SỐ TỬ VI
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Giải đoán Mệnh - Tài - Quan, Vận hạn, Tình duyên, v.v. Chiêm nghiệm bản mệnh theo ngày giờ sinh chính xác.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5 text-xs">
                <span className="bg-amber-50/70 text-amber-900 font-medium px-2.5 py-1 rounded-lg border border-amber-200/70">Cung Mệnh</span>
                <span className="bg-amber-50/70 text-amber-900 font-medium px-2.5 py-1 rounded-lg border border-amber-200/70">Quan Lộc</span>
                <span className="bg-amber-50/70 text-amber-900 font-medium px-2.5 py-1 rounded-lg border border-amber-200/70">Tài Bạch</span>
                <span className="bg-amber-50/70 text-amber-900 font-medium px-2.5 py-1 rounded-lg border border-amber-200/70">Phu Thê</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-800 group-hover:text-red-700">
              <span>Lập lá số ngay</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Module 2: BÁT QUÁI, PHONG THỦY */}
          <div
            id="card-batquai-intro"
            onClick={() => onSelectFeature('batquai')}
            className="group relative rounded-3xl bg-white p-6 sm:p-7 border border-amber-200/80 hover:border-amber-500 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(180,130,60,0.15)] cursor-pointer flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 group-hover:scale-105 transition-transform shadow-xs">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 uppercase">
                  Miễn phí
                </span>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-stone-900 group-hover:text-amber-800 transition-colors mb-2">
                  BÁT QUÁI, PHONG THỦY
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Phu Thê - Tử Tức - Đồng nghiệp xung hợp? Phong Thủy Nhà Ở / Cơ Quan xung hợp? Tra cứu Cung Phi và Bát Trạch.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5 text-xs">
                <span className="bg-amber-50/70 text-amber-900 font-medium px-2.5 py-1 rounded-lg border border-amber-200/70">Cung Phi Bát Trạch</span>
                <span className="bg-amber-50/70 text-amber-900 font-medium px-2.5 py-1 rounded-lg border border-amber-200/70">Xung Hợp Nhân Duyên</span>
                <span className="bg-amber-50/70 text-amber-900 font-medium px-2.5 py-1 rounded-lg border border-amber-200/70">Hướng Nhà & Bàn Làm Việc</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-800 group-hover:text-red-700">
              <span>Tra cứu xung hợp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Module 3: TARROT KIỀU */}
          <div
            id="card-tarot-intro"
            onClick={() => onSelectFeature('tarot')}
            className="group relative rounded-3xl bg-white p-6 sm:p-7 border border-amber-200/80 hover:border-amber-500 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(180,130,60,0.15)] cursor-pointer flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 group-hover:scale-105 transition-transform shadow-xs">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 uppercase">
                  Miễn phí
                </span>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-stone-900 group-hover:text-amber-800 transition-colors mb-2">
                  TARROT KIỀU
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Xin quẻ Bói Kiều (Miễn phí). Lắng nghe vần thơ Đoạn Trường Tân Thanh định hướng tâm trí, nhân duyên, tài vận.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5 text-xs">
                <span className="bg-amber-50/70 text-amber-900 font-medium px-2.5 py-1 rounded-lg border border-amber-200/70">3254 Câu Thơ Kiều</span>
                <span className="bg-amber-50/70 text-amber-900 font-medium px-2.5 py-1 rounded-lg border border-amber-200/70">Tịnh Tâm Rút Quẻ</span>
                <span className="bg-amber-50/70 text-amber-900 font-medium px-2.5 py-1 rounded-lg border border-amber-200/70">Lời Bình & Điềm Báo</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-800 group-hover:text-red-700">
              <span>Thành tâm xin quẻ</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* UI Mockup preview preview bar */}
{/*         <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-white border border-amber-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-sm text-stone-700">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-amber-300 shrink-0 shadow-xs">
              <img
                src={lightMockupImage}
                alt="Ảnh giao diện sáng Tử Vi Hồng Ân"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-bold text-stone-900 block">Ảnh thiết kế giao diện sáng đã sẵn sàng</span>
              <span className="text-xs text-stone-500">Thiết kế phong cách Á Đông thanh nhã trên nền giấy xuyến ấm áp, tương phản rõ nét</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenMockupModal}
            className="px-4 py-2.5 rounded-xl bg-amber-100/80 hover:bg-amber-200/80 text-amber-950 border border-amber-300 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer shrink-0 shadow-xs"
          >
            <ImageIcon className="w-4 h-4 text-amber-800" />
            <span>Xem & Tải Ảnh Giao Diện Sáng</span>
          </button>
        </div> */}
      </div>
    </section>
  );
};
