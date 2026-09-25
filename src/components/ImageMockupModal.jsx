import React, { useState } from 'react';
import { X, Download, Image as ImageIcon, Sun, Moon } from 'lucide-react';
import lightUiImage from '../assets/images/tu_vi_hong_an_light_ui_1790060015159.jpg';
import darkUiImage from '../assets/images/tu_vi_hong_an_ui_1790050672462.jpg';

export const ImageMockupModal = ({ isOpen, onClose }) => {
  const [selectedTheme, setSelectedTheme] = useState('light');

  if (!isOpen) return null;

  const currentImage = selectedTheme === 'light' ? lightUiImage : darkUiImage;
  const downloadFileName = selectedTheme === 'light' ? 'tu_vi_hong_an_giao_dien_sang.jpg' : 'tu_vi_hong_an_giao_dien_toi.jpg';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/70 backdrop-blur-md">
      <div className="bg-white border-2 border-amber-300 rounded-3xl max-w-5xl w-full max-h-[95vh] flex flex-col shadow-2xl text-stone-800 overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 bg-[#fdfbf7]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-800">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-display font-bold text-stone-900 flex items-center gap-2">
                <span>Ảnh Giao Diện Thiết Kế: Tử Vi Hồng Ân</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold">
                  {selectedTheme === 'light' ? 'Bản Giao Diện Sáng' : 'Bản Giao Diện Tối'}
                </span>
              </h3>
              <p className="text-xs text-stone-500">
                Đầy đủ các mảng: Tử Vi Hồng Ân • Luận giải 199k • Zalo Thầy • Lập lá số • Bát Quái • Tarot Kiều
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Toggle between light & dark mockups */}
            <div className="p-1 rounded-xl bg-stone-100 border border-stone-300 flex items-center gap-1 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setSelectedTheme('light')}
                className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                  selectedTheme === 'light'
                    ? 'bg-amber-600 text-white shadow-xs font-bold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Giao Diện Sáng</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedTheme('dark')}
                className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                  selectedTheme === 'dark'
                    ? 'bg-stone-800 text-amber-300 shadow-xs font-bold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Giao Diện Tối</span>
              </button>
            </div>

            <a
              href={currentImage}
              download={downloadFileName}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-700 to-amber-700 hover:brightness-105 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tải Ảnh</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Image Preview */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 flex flex-col items-center justify-center bg-[#f8f5ee]">
          <div className="relative rounded-2xl overflow-hidden border-2 border-amber-300 shadow-lg max-w-full bg-white">
            <img
              src={currentImage}
              alt="Thiết kế giao diện trang web Tử Vi Hồng Ân"
              className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Description of segments in the design */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full text-xs text-stone-700">
            <div className="p-3 rounded-2xl bg-white border border-amber-200/80 shadow-2xs">
              <span className="font-bold text-stone-900 block mb-1">1. Lập Lá Số Tử Vi (Miễn phí)</span>
              <span>Giải đoán Mệnh - Tài - Quan, Vận hạn và Tình duyên chuẩn xác theo ngày giờ sinh.</span>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-amber-200/80 shadow-2xs">
              <span className="font-bold text-stone-900 block mb-1">2. Bát Quái, Phong Thủy (Miễn phí)</span>
              <span>Soi xung hợp Phu Thê, Tử Tức, Đồng nghiệp & Phong Thủy Nhà Ở, Cơ Quan.</span>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-amber-200/80 shadow-2xs">
              <span className="font-bold text-stone-900 block mb-1">3. Tarot Kiều (Bói Kiều Miễn phí)</span>
              <span>Rút quẻ thơ Kiều Nguyễn Du, chiêm nghiệm thời vận và định hướng tâm an.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
