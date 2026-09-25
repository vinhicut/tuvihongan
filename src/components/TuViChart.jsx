import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, User, ArrowRight, Award, Star, Compass, ShieldAlert } from 'lucide-react';
import { GIO_SINH_OPTIONS, generateLaSoTuVi } from '../data/tuViData';

export const TuViChart = ({ onScrollToService }) => {
  const [profile, setProfile] = useState({
    fullName: 'Nguyễn Văn An',
    gender: 'nam',
    birthDay: 15,
    birthMonth: 8,
    birthYear: 1995,
    birthHour: 'Ngọ',
    targetYear: 2026,
    calendarType: 'duong_lich',
  });

  const [result, setResult] = useState(() => generateLaSoTuVi(profile));
  const [selectedCung, setSelectedCung] = useState(
    () => result.cungList.find((c) => c.isMenh) || result.cungList[0]
  );
  const [activeAnalysisTab, setActiveAnalysisTab] = useState('menh');

  const handleGenerate = (e) => {
    e.preventDefault();
    const newResult = generateLaSoTuVi(profile);
    setResult(newResult);
    const menh = newResult.cungList.find((c) => c.isMenh) || newResult.cungList[0];
    setSelectedCung(menh);
  };

  return (
    <section id="tuvi" className="py-14 sm:py-20 bg-[#faf7f2] border-t border-amber-200/70 text-stone-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Thuật Số Chính Tông Tử Vi Đẩu Số</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight mb-3">
            LẬP LÁ SỐ TỬ VI <span className="text-emerald-700 text-lg sm:text-2xl font-normal">(Miễn phí)</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Giải đoán Mệnh - Tài - Quan, Vận hạn năm nay, Tình duyên gia đạo, định hướng sự nghiệp và hóa giải sao xấu theo ngày giờ sinh.
          </p>
        </div>

        {/* Form Lập Lá Số */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-amber-200/80 shadow-sm max-w-4xl mx-auto mb-12">
          <form onSubmit={handleGenerate} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Họ tên */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wide flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-700" /> Họ Tên Đương Số
                </label>
                <input
                  type="text"
                  value={profile.fullName}
                  onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#fcfaf7] border border-stone-300 text-stone-900 text-sm focus:border-amber-600 focus:ring-1 focus:ring-amber-500 transition-colors"
                  placeholder="Nhập họ và tên..."
                />
              </div>

              {/* Giới tính */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wide">Giới Tính</label>
                <div className="grid grid-cols-2 gap-2">
                  {['nam', 'nu'].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setProfile({ ...profile, gender: g })}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                        profile.gender === g
                          ? 'bg-amber-100 text-amber-950 border-amber-400 shadow-xs'
                          : 'bg-[#fcfaf7] text-stone-600 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      {g === 'nam' ? 'Nam' : 'Nữ'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ngày sinh & Tháng sinh */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wide flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-700" /> Ngày & Tháng Sinh
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    min="1"
                    max="31"
                    value={profile.birthDay}
                    onChange={(e) => setProfile({ ...profile, birthDay: parseInt(e.target.value, 10) || 1 })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#fcfaf7] border border-stone-300 text-stone-900 text-sm text-center"
                    placeholder="Ngày"
                  />
                  <input
                    type="number"
                    min="1"
                    max="12"
                    value={profile.birthMonth}
                    onChange={(e) => setProfile({ ...profile, birthMonth: parseInt(e.target.value, 10) || 1 })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#fcfaf7] border border-stone-300 text-stone-900 text-sm text-center"
                    placeholder="Tháng"
                  />
                </div>
              </div>

              {/* Năm sinh */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wide">Năm Sinh (DL)</label>
                <input
                  type="number"
                  min="1930"
                  max="2030"
                  value={profile.birthYear}
                  onChange={(e) => setProfile({ ...profile, birthYear: parseInt(e.target.value, 10) || 1995 })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#fcfaf7] border border-stone-300 text-stone-900 text-sm font-semibold"
                  placeholder="Năm sinh..."
                />
              </div>
            </div>

            {/* Row 2: Giờ sinh, Lịch, Năm xem */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wide flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-700" /> Giờ Sinh (12 Can Chi)
                </label>
                <select
                  value={profile.birthHour}
                  onChange={(e) => setProfile({ ...profile, birthHour: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#fcfaf7] border border-stone-300 text-stone-900 text-sm focus:border-amber-600 focus:ring-1 focus:ring-amber-500"
                >
                  {GIO_SINH_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-white text-stone-900">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wide">Hệ Lịch</label>
                <div className="grid grid-cols-2 gap-2">
                  {['duong_lich', 'am_lich'].map((cal) => (
                    <button
                      key={cal}
                      type="button"
                      onClick={() => setProfile({ ...profile, calendarType: cal })}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                        profile.calendarType === cal
                          ? 'bg-amber-100 text-amber-950 border-amber-400 shadow-xs'
                          : 'bg-[#fcfaf7] text-stone-600 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      {cal === 'duong_lich' ? 'Dương lịch' : 'Âm lịch'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wide">Năm Xem Vận Hạn</label>
                <input
                  type="number"
                  min="2020"
                  max="2040"
                  value={profile.targetYear}
                  onChange={(e) => setProfile({ ...profile, targetYear: parseInt(e.target.value, 10) || 2026 })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#fcfaf7] border border-stone-300 text-stone-900 text-sm font-semibold"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-700 via-amber-700 to-red-800 text-white font-bold text-sm sm:text-base hover:brightness-105 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <span>An Sao & Lập Lá Số Ngay (Miễn Phí)</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Visual Lá Số 12 Cung Bàn */}
        <div className="bg-white p-5 sm:p-7 rounded-3xl border-2 border-amber-300 shadow-sm max-w-6xl mx-auto mb-12">
          {/* Lá Số Title Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-amber-100 mb-6">
            <div>
              <span className="text-xs text-amber-800 font-semibold uppercase tracking-wider block">
                Lá Số Tử Vi Trực Tuyến
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900">
                Đương số: {profile.fullName} ({profile.gender === 'nam' ? 'Nam' : 'Nữ'})
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 font-bold">
                Năm: {result.canChi} ({result.napAm})
              </span>
              <span className="px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-900 font-bold">
                Cục: {result.interpretation.cucSo}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 font-bold">
                Chủ Mệnh: {result.interpretation.chuMenh}
              </span>
            </div>
          </div>

          {/* 12 Palaces Grid Display */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {result.cungList.map((cung) => {
              const isSelected = selectedCung.id === cung.id;
              const isMenh = cung.isMenh;
              const isThan = cung.isThan;

              return (
                <div
                  key={cung.id}
                  onClick={() => setSelectedCung(cung)}
                  className={`min-h-[140px] sm:min-h-[160px] p-3 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-amber-100/90 border-amber-500 shadow-md ring-2 ring-amber-400'
                      : isMenh
                      ? 'bg-red-50/60 border-red-300 hover:border-red-400'
                      : 'bg-[#fffdf9] border-stone-200 hover:border-amber-400 hover:bg-amber-50/40'
                  }`}
                >
                  {/* Palace Header */}
                  <div className="flex items-center justify-between border-b border-stone-200 pb-1.5 text-xs">
                    <div className="flex items-center gap-1 font-bold">
                      <span className={`text-xs ${isMenh ? 'text-red-700 font-extrabold' : 'text-stone-900'}`}>
                        {cung.name}
                      </span>
                      {isThan && (
                        <span className="text-[10px] px-1 rounded bg-amber-600 text-white font-bold">
                          THÂN
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-bold text-amber-900">
                      {cung.diaChi}
                    </span>
                  </div>

                  {/* Stars Content */}
                  <div className="space-y-1.5 my-1.5 flex-1">
                    {/* Chính tinh */}
                    <div className="flex flex-wrap gap-1">
                      {cung.chinhTinh.map((star, idx) => (
                        <span
                          key={idx}
                          className="px-1.5 py-0.5 rounded text-[11px] font-extrabold bg-red-100 text-red-900 border border-red-200"
                        >
                          {star}
                        </span>
                      ))}
                    </div>

                    {/* Cát tinh */}
                    <div className="flex flex-wrap gap-1 text-[10px]">
                      {cung.phuTinhTot.map((star, idx) => (
                        <span
                          key={idx}
                          className="px-1 py-0.2 rounded bg-emerald-100 text-emerald-900 border border-emerald-200"
                        >
                          {star}
                        </span>
                      ))}
                    </div>

                    {/* Sát tinh */}
                    {cung.phuTinhXau.length > 0 && (
                      <div className="flex flex-wrap gap-1 text-[10px]">
                        {cung.phuTinhXau.map((star, idx) => (
                          <span
                            key={idx}
                            className="px-1 py-0.2 rounded bg-stone-100 text-stone-700 border border-stone-300"
                          >
                            {star}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Palace Footer: Đại hạn range */}
                  <div className="flex items-center justify-between text-[10px] text-stone-500 pt-1 border-t border-stone-200">
                    <span>Đại hạn: {cung.daiVan}t</span>
                    <span className="text-amber-800 font-semibold">{cung.tieuVan}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prompt to click palace */}
          <div className="mt-4 text-center text-xs text-stone-500">
            Bấm vào từng cung ở trên để xem chi tiết sao toạ thủ và luận giải riêng biệt. Đang chọn:{' '}
            <strong className="text-red-700 font-bold">Cung {selectedCung.name} ({selectedCung.diaChi})</strong>
          </div>
        </div>

        {/* Phân Tích & Luận Giải Trọng Điểm: Mệnh - Tài - Quan, Vận Hạn, Tình Duyên */}
        <div className="max-w-6xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-amber-200/80 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs text-amber-800 font-semibold uppercase tracking-wider block">
                Luận Giải Chuyên Sâu Theo Lá Số
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900">
                Giải Đoán Mệnh - Tài - Quan & Thời Vận
              </h3>
            </div>

            {/* Analysis Tabs */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'menh', label: 'Bản Mệnh' },
                { id: 'quan', label: 'Quan Lộc' },
                { id: 'tai', label: 'Tài Bạch' },
                { id: 'phuthe', label: 'Tình Duyên' },
                { id: 'vanhan', label: `Vận Hạn ${profile.targetYear}` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveAnalysisTab(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeAnalysisTab === tab.id
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:text-stone-950 hover:bg-stone-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Content Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#fffdf9] border border-amber-200/80 text-stone-800 space-y-4">
            {activeAnalysisTab === 'menh' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-base">
                  <Award className="w-5 h-5 text-amber-700" />
                  <span>Luận Cung Mệnh & Tính Cách Bản Thân:</span>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed text-justify">
                  {result.interpretation.menhInterpretation}
                </p>
                <div className="text-xs text-stone-500 pt-2 border-t border-stone-200">
                  Chủ tinh toạ thủ phối hợp cùng Can Chi nạp âm mang lại năng lực tự lập, tính kiên định và khả năng tạo lập cơ đồ bền vững.
                </div>
              </div>
            )}

            {activeAnalysisTab === 'quan' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-base">
                  <Star className="w-5 h-5 text-amber-700" />
                  <span>Luận Quan Lộc (Công Danh - Sự Nghiệp):</span>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed text-justify">
                  {result.interpretation.quanInterpretation}
                </p>
                <div className="text-xs text-stone-500 pt-2 border-t border-stone-200">
                  Đặc biệt thích hợp phát triển theo hướng chuyên môn sâu, mở rộng đối tác kinh doanh hoặc lãnh đạo đội ngũ.
                </div>
              </div>
            )}

            {activeAnalysisTab === 'tai' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-base">
                  <Sparkles className="w-5 h-5 text-amber-700" />
                  <span>Luận Tài Bạch (Tiền Tài - Thu Nhập):</span>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed text-justify">
                  {result.interpretation.taiInterpretation}
                </p>
                <div className="text-xs text-stone-500 pt-2 border-t border-stone-200">
                  Nên đầu tư có kế hoạch kiểm soát rủi ro, tránh vay mượn mạo hiểm trong các năm có hung tinh xâm phạm.
                </div>
              </div>
            )}

            {activeAnalysisTab === 'phuthe' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-base">
                  <Compass className="w-5 h-5 text-amber-700" />
                  <span>Luận Phu Thê (Tình Duyên - Hôn Nhân):</span>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed text-justify">
                  {result.interpretation.tinhDuyenInterpretation}
                </p>
                <div className="text-xs text-stone-500 pt-2 border-t border-stone-200">
                  Vợ chồng cần lấy sự thấu hiểu và nhường nhịn làm gốc, tôn trọng quan điểm để gia đạo thuận hòa, con cái vinh hiển.
                </div>
              </div>
            )}

            {activeAnalysisTab === 'vanhan' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-base">
                  <ShieldAlert className="w-5 h-5 text-amber-700" />
                  <span>Vận Hạn Năm {profile.targetYear}:</span>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed text-justify">
                  {result.interpretation.vanHanInterpretation}
                </p>
                <div className="text-xs text-stone-500 pt-2 border-t border-stone-200">
                  Cần lưu tâm lời ăn tiếng nói, cẩn thận giấy tờ pháp lý vào các tháng 4 và tháng 8 âm lịch.
                </div>
              </div>
            )}
          </div>

          {/* Upsell to Full 199k Reading with Thầy */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-50 via-amber-50 to-orange-50 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-display font-bold text-stone-900 text-sm sm:text-base">
                Cần Bản Luận Giải Chi Tiết Trọn Đời 15-20 Trang Với Thầy?
              </h4>
              <p className="text-xs text-stone-600">
                Nhận giải đoán tường tận 12 cung, 10 năm đại vận và hóa giải sao xấu chỉ <strong>199k</strong> tại www.tuvihongan.com
              </p>
            </div>

            <button
              type="button"
              onClick={onScrollToService}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-700 to-amber-700 text-white font-bold text-xs sm:text-sm hover:brightness-105 transition-all shrink-0 shadow-xs cursor-pointer"
            >
              Xem Gói Luận Giải 199k
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
