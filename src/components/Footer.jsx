import React from 'react';
import { Phone, Sparkles, Compass, BookOpen, Crown } from 'lucide-react';

export const Footer = ({ onScrollTo, onOpenMockupModal }) => {
  return (
    <footer className="bg-[#f4efe6] border-t border-amber-200/80 text-stone-600 text-xs pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-stone-300">
          {/* Col 1: Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 to-red-700 flex items-center justify-center text-white font-serif font-bold text-sm shadow-xs">
                Ân
              </div>
              <span className="font-display font-bold text-lg text-stone-900">
                Tử Vi Hồng Ân
              </span>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed">
              Khai sáng vận mệnh, hòa hợp nhân duyên và kiến tạo phong thủy cát tường dựa trên tinh hoa học thuật Đông phương chính thống.
            </p>
            <div className="text-stone-900 font-semibold">
              Website:{' '}
              <a
                href="https://.tuvihongan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-800 underline hover:text-red-700 font-bold"
              >
                tuvihongan.com
              </a>
            </div>
          </div>

          {/* Col 2: Dịch Vụ Miễn Phí */}
          <div className="space-y-2.5">
            <span className="text-xs font-bold text-stone-900 uppercase tracking-wider block">
              Dịch Vụ Miễn Phí
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('tuvi')}
                  className="hover:text-red-700 transition-colors flex items-center gap-1.5 cursor-pointer text-stone-700"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>Lập Lá Số Tử Vi (Miễn phí)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('batquai')}
                  className="hover:text-red-700 transition-colors flex items-center gap-1.5 cursor-pointer text-stone-700"
                >
                  <Compass className="w-3.5 h-3.5 text-amber-700" />
                  <span>Bát Quái, Phong Thủy (Miễn phí)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('tarot')}
                  className="hover:text-red-700 transition-colors flex items-center gap-1.5 cursor-pointer text-stone-700"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                  <span>Tarot Kiều - Xin Quẻ Bói Kiều</span>
                </button>
              </li>
{/*               <li>
                <button
                  type="button"
                  onClick={onOpenMockupModal}
                  className="hover:text-red-700 transition-colors cursor-pointer text-amber-800 font-bold underline"
                >
                  Xem Ảnh Giao Diện Thiết Kế UI
                </button>
              </li> */}
            </ul>
          </div>

          {/* Col 3: Dịch Vụ Chuyên Sâu */}
          <div className="space-y-2.5">
            <span className="text-xs font-bold text-stone-900 uppercase tracking-wider block">
              Luận Giải Chuyên Sâu
            </span>
            <ul className="space-y-2 text-stone-700">
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('service')}
                  className="hover:text-red-700 transition-colors flex items-center gap-1.5 cursor-pointer font-bold text-red-700"
                >
                  <Crown className="w-3.5 h-3.5 text-amber-700" />
                  <span>Luận giải đầy đủ 199k trọn đời</span>
                </button>
              </li>
              <li>
                <span>Bản PDF 15-20 trang luận chi tiết</span>
              </li>
              <li>
                <span>Hóa giải sao xấu & kích tài vận</span>
              </li>
              <li>
                <span>Tư vấn hướng nhà & bố trí bàn làm việc</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Đặt Lịch Zalo với Thầy */}
          <div className="space-y-2.5">
            <span className="text-xs font-bold text-stone-900 uppercase tracking-wider block">
              Đặt Lịch Riêng Với Thầy
            </span>
            <p className="text-[11px] text-stone-600">
              Nhắn tin hoặc gọi điện trực tiếp qua 2 số Zalo chính thức:
            </p>
            <div className="space-y-2">
              <a
                href="https://zalo.me/0924616199"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-emerald-300 text-emerald-900 hover:bg-emerald-50 transition-colors shadow-2xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                <span>Zalo 1: 0924.6161.99</span>
              </a>
              <a
                href="https://zalo.me/0385497085"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-emerald-300 text-emerald-900 hover:bg-emerald-50 transition-colors shadow-2xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                <span>Zalo 2: 0385.497.085</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© 2026 Tử Vi Hồng Ân (tuvihongan.com). Giữ toàn quyền bản quyền.</p>
          <p className="text-center sm:text-right">
            Thuật số Đông phương hỗ trợ định hướng cuộc sống • Lấy tâm đức làm gốc, thiện lương làm nền tảng.
          </p>
        </div>
      </div>
    </footer>
  );
};
