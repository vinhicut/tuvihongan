import React, { useState } from 'react';
import { Crown, CheckCircle2, Phone, Copy, Check, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

export const PricingConsultation = () => {
  const [copied, setCopied] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    topic: 'Luận giải toàn diện 12 cung trọn đời',
    note: '',
  });
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const copyNumber = (num) => {
    navigator.clipboard.writeText(num);
    setCopied(num);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="service" className="py-14 sm:py-20 bg-gradient-to-b from-[#f8f4ec] via-[#fcfaf7] to-[#fffefc] border-t border-amber-200/70 text-stone-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-900 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
            <Crown className="w-3.5 h-3.5 text-amber-700" />
            <span>Dịch Vụ Cao Cấp • www.tuvihongan.com</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight mb-3">
            Luận Giải Chuyên Sâu & Đặt Lịch Cùng Thầy
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Nhận bản giải đoán toàn diện 12 cung đời người hoặc đàm thoại trực tiếp 1-1 với Thầy Hồng Ân để định hướng tương lai vững chắc.
          </p>
        </div>

        {/* 2 Main Columns: Gói 199k & Đặt lịch Zalo với thầy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Gói Luận Giải 199k */}
          <div className="lg:col-span-6 bg-gradient-to-b from-white via-[#fffdf9] to-[#fff9ee] p-6 sm:p-8 rounded-3xl border-2 border-amber-400 shadow-md relative flex flex-col justify-between overflow-hidden">
            {/* Corner Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-red-700 to-amber-600 text-white text-xs font-extrabold px-6 py-1.5 rounded-bl-2xl shadow-sm uppercase tracking-wide">
              Được Lựa Chọn Nhiều Nhất
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs text-amber-800 font-bold uppercase tracking-wider block mb-1">
                  Gói Luận Giải Đầy Đủ
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900">
                  Luận Giải Chi Tiết Trọn Đời
                </h3>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-extrabold text-red-700 font-display">
                    199.000đ
                  </span>
                  <span className="text-stone-400 line-through text-sm">499.000đ</span>
                  <span className="text-xs text-emerald-800 font-bold bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Tiết kiệm 60%
                  </span>
                </div>
                <p className="text-xs text-stone-500 mt-2 font-medium">
                  Áp dụng chính thức tại website:{' '}
                  <a
                    href="https://www.tuvihongan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-800 underline font-bold hover:text-red-700"
                  >
                    www.tuvihongan.com
                  </a>
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-stone-900 uppercase tracking-wide block">
                  Quyền lợi bản luận giải 199k bao gồm:
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Bản luận giải PDF 15 - 20 trang</strong> chi tiết, rõ ràng, lưu trữ trọn đời.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Giải đoán toàn diện 12 cung</strong>: Mệnh, Thân, Quan Lộc, Tài Bạch, Phu Thê, Tử Tức, Điền Trạch, Phúc Đức, v.v.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Chi tiết 10 năm đại vận</strong> và diễn biến tiểu vận từng tháng trong năm nay & năm tới.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Phương pháp hóa giải sao xấu</strong>: Kình Đà, Không Kiếp, Hỏa Linh, Tang Hổ, thị phi tài lộc.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Tư vấn phong thủy kích hoạt tài lộc</strong>: Chọn màu sắc, số may mắn, hướng bàn làm việc & nhà ở.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 space-y-3">
              <button
                type="button"
                onClick={() => setShowPaymentModal(true)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-700 via-amber-700 to-red-800 text-white font-bold text-sm sm:text-base hover:brightness-105 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Crown className="w-5 h-5 text-yellow-300" />
                <span>Đăng Ký Luận Giải 199k Ngay</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-between text-[11px] text-stone-500 px-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Bảo mật thông tin đương số 100%
                </span>
                <span>Nhận kết quả trong 24h</span>
              </div>
            </div>
          </div>

          {/* Card 2: Đặt Lịch Riêng Với Thầy Qua Zalo */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-amber-200/80 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="pb-4 border-b border-stone-200">
                <span className="text-xs text-amber-800 font-bold uppercase tracking-wider block mb-1">
                  Tư Vấn Trực Tiếp 1-1
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900">
                  Đặt Lịch Luận Giải Riêng Với Thầy
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  Trực tiếp đàm thoại qua Zalo (gọi thoại hoặc gọi video) cùng Thầy Hồng Ân để tháo gỡ vướng mắc, soi cung duyên nợ, định hướng kinh doanh.
                </p>
              </div>

              {/* 2 Số Hotline Zalo nổi bật */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-stone-800 uppercase tracking-wide block">
                  Liên hệ trực tiếp qua 2 số Zalo chính thức:
                </span>

                {/* Zalo 1 */}
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-300 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-300 flex items-center justify-center text-emerald-800">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-stone-600 block font-medium">Zalo Thầy Hồng Ân (Hotline 1):</span>
                      <strong className="text-lg sm:text-xl text-emerald-900 font-bold tracking-wide">
                        0924.6161.99
                      </strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => copyNumber('0924616199')}
                      className="p-2 rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 transition-colors shadow-2xs"
                      title="Sao chép số"
                    >
                      {copied === '0924616199' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href="https://zalo.me/0924616199"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Nhắn Zalo</span>
                    </a>
                  </div>
                </div>

                {/* Zalo 2 */}
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-300 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-300 flex items-center justify-center text-emerald-800">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-stone-600 block font-medium">Zalo Thầy Hồng Ân (Hotline 2):</span>
                      <strong className="text-lg sm:text-xl text-emerald-900 font-bold tracking-wide">
                        0385.497.085
                      </strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => copyNumber('0385497085')}
                      className="p-2 rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 transition-colors shadow-2xs"
                      title="Sao chép số"
                    >
                      {copied === '0385497085' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href="https://zalo.me/0385497085"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Nhắn Zalo</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Form Đặt Hẹn Trước */}
              <div className="pt-2">
                <span className="text-xs font-bold text-stone-800 uppercase tracking-wide block mb-2">
                  Hoặc để lại thông tin để Thầy liên hệ lại:
                </span>

                {formSubmitted ? (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs space-y-1">
                    <div className="font-bold flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-700" /> Đã gửi yêu cầu đặt lịch thành công!
                    </div>
                    <p className="text-stone-700">
                      Thầy Hồng Ân sẽ liên hệ trực tiếp với bạn qua Zalo <strong>{formData.phone}</strong> trong thời gian sớm nhất.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-3 text-xs">
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Họ và tên của bạn *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="px-3 py-2 rounded-xl bg-[#fcfaf7] border border-stone-300 text-stone-900 focus:border-amber-600 focus:ring-1 focus:ring-amber-500"
                      />
                      <input
                        type="tel"
                        placeholder="Số điện thoại Zalo *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="px-3 py-2 rounded-xl bg-[#fcfaf7] border border-stone-300 text-stone-900 focus:border-amber-600 focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#fcfaf7] border border-stone-300 text-stone-900 focus:border-amber-600 focus:ring-1 focus:ring-amber-500 font-medium"
                    >
                      <option>Luận giải toàn diện 12 cung trọn đời</option>
                      <option>Tình duyên, hôn nhân, xung hợp phu thê</option>
                      <option>Công danh, sự nghiệp, kinh doanh, đối tác</option>
                      <option>Phong thủy nhà ở, cơ quan, hướng đất</option>
                      <option>Xem vận hạn năm nay & hóa giải sao xấu</option>
                    </select>
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold border border-amber-300 transition-colors shadow-2xs cursor-pointer"
                    >
                      Gửi Thông Tin Đặt Lịch Hẹn
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment / Booking Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
          <div className="bg-white border-2 border-amber-400 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-stone-800 relative">
            <button
              type="button"
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 text-xl font-bold cursor-pointer"
            >
              ✕
            </button>

            <div className="text-center space-y-2 mb-6">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-700">
                <Crown className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-display font-bold text-stone-900">
                Đăng Ký Luận Giải Đầy Đủ 199k
              </h4>
              <p className="text-xs text-stone-500 font-medium">
                Tử Vi Hồng Ân • www.tuvihongan.com
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
                <div className="flex justify-between pb-2 border-b border-amber-200 text-sm">
                  <span className="font-medium text-stone-700">Chi phí luận giải:</span>
                  <strong className="text-red-700 text-base font-bold">199.000 VNĐ</strong>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  Quý khách vui lòng nhắn tin trực tiếp qua Zalo để gửi ngày giờ sinh và nhận bản luận giải PDF 15-20 trang trong vòng 24 giờ.
                </p>
              </div>

              {/* Zalo Direct Buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href="https://zalo.me/0924616199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center justify-center gap-2 text-sm transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Mở Zalo: 0924.6161.99</span>
                </a>
                <a
                  href="https://zalo.me/0385497085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white hover:bg-stone-50 text-emerald-900 border border-emerald-300 font-bold flex items-center justify-center gap-2 text-sm transition-colors shadow-2xs"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>Mở Zalo: 0385.497.085</span>
                </a>
              </div>

              <div className="text-center pt-2 text-[11px] text-stone-500">
                Truy cập cổng thông tin chính thức tại <a href="https://www.tuvihongan.com" target="_blank" rel="noopener noreferrer" className="text-amber-800 font-bold underline">www.tuvihongan.com</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
