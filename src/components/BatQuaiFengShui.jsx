import React, { useState } from 'react';
import { Compass, Users, Home, Heart, Briefcase, Baby, ShieldCheck } from 'lucide-react';
import {
  calculateCungPhi,
  checkCompatibility,
  getFengShuiDirections,
  CUNG_PHI_NGU_HANH,
} from '../data/batQuaiData';

export const BatQuaiFengShui = ({ onScrollToService }) => {
  const [activeSubTab, setActiveSubTab] = useState('nhanduyen');

  // Nhân Duyên Form State
  const [person1, setPerson1] = useState({
    name: 'Chồng / Cha / Tôi',
    year: 1990,
    gender: 'nam',
  });
  const [person2, setPerson2] = useState({
    name: 'Vợ / Con / Đồng Nghiệp',
    year: 1993,
    gender: 'nu',
  });
  const [relType, setRelType] = useState('phu_the');

  // Phong Thủy Nhà Ở State
  const [homeOwner, setHomeOwner] = useState({
    name: 'Gia Chủ',
    year: 1988,
    gender: 'nam',
  });
  const [selectedDirectionName, setSelectedDirectionName] = useState('Tây');

  // Calculations
  const cungPhi1 = calculateCungPhi(person1.year, person1.gender);
  const cungPhi2 = calculateCungPhi(person2.year, person2.gender);
  const compatibilityResult = checkCompatibility(
    person1.year,
    person1.gender,
    person2.year,
    person2.gender,
    relType
  );

  const ownerCungPhi = calculateCungPhi(homeOwner.year, homeOwner.gender);
  const ownerInfo = CUNG_PHI_NGU_HANH[ownerCungPhi];
  const houseDirectionsList = getFengShuiDirections(ownerCungPhi);
  const currentDirectionMatch =
    houseDirectionsList.find((d) => d.direction === selectedDirectionName) ||
    houseDirectionsList[0];

  return (
    <section id="batquai" className="py-14 sm:py-20 bg-white border-t border-amber-200/70 text-stone-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>Khai Quang Phong Thủy Bát Trạch Minh Kính</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight mb-3">
            BÁT QUÁI, PHONG THỦY <span className="text-emerald-700 text-lg sm:text-2xl font-normal">(Miễn phí)</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Phu Thê - Tử Tức - Đồng nghiệp xung hợp? Phong Thủy Nhà Ở / Cơ Quan xung hợp? Tra cứu Cung Phi Bát Trạch chính tông để hóa giải và kích hoạt vượng khí.
          </p>

          {/* Sub Tab Switcher */}
          <div className="flex justify-center mt-6">
            <div className="p-1.5 rounded-2xl bg-[#f7f4ed] border border-stone-200 flex gap-2">
              <button
                type="button"
                onClick={() => setActiveSubTab('nhanduyen')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  activeSubTab === 'nhanduyen'
                    ? 'bg-gradient-to-r from-red-700 to-amber-700 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Xung Hợp Nhân Duyên (Phu Thê - Tử Tức - Đồng Nghiệp)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSubTab('phongthuy')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  activeSubTab === 'phongthuy'
                    ? 'bg-gradient-to-r from-red-700 to-amber-700 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Phong Thủy Nhà Ở / Cơ Quan</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Xung Hợp Nhân Duyên */}
        {activeSubTab === 'nhanduyen' && (
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Form Tra Cứu Nhân Duyên */}
            <div className="bg-[#fcfaf7] p-6 sm:p-8 rounded-3xl border border-amber-200/80 shadow-sm space-y-6">
              {/* Chọn quan hệ */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-stone-700 uppercase tracking-wide block">
                  Chọn Đối Tượng Cần Soi Xét Xung Hợp:
                </span>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'phu_the', label: 'Phu Thê (Vợ Chồng)', icon: Heart },
                    { id: 'tu_tuc', label: 'Tử Tức (Cha Mẹ - Con)', icon: Baby },
                    { id: 'dong_nghiep', label: 'Đồng Nghiệp / Đối Tác', icon: Briefcase },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setRelType(item.id)}
                        className={`p-3 rounded-2xl text-xs sm:text-sm font-bold flex flex-col sm:flex-row items-center justify-center gap-2 border transition-all cursor-pointer ${
                          relType === item.id
                            ? 'bg-amber-100 text-amber-950 border-amber-400 shadow-xs'
                            : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <Icon className="w-4 h-4 text-amber-700" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2 Đối Tượng Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Person 1 */}
                <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-3 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-800 uppercase">
                      Người Thứ Nhất:
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                      Cung: {cungPhi1} ({CUNG_PHI_NGU_HANH[cungPhi1]?.nguHanh})
                    </span>
                  </div>
                  <input
                    type="text"
                    value={person1.name}
                    onChange={(e) => setPerson1({ ...person1, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#fcfaf7] border border-stone-300 text-stone-900 text-xs focus:border-amber-600 focus:ring-1 focus:ring-amber-500"
                    placeholder="Tên người thứ nhất..."
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] text-stone-500 block mb-1">Năm sinh</label>
                      <input
                        type="number"
                        min="1940"
                        max="2030"
                        value={person1.year}
                        onChange={(e) => setPerson1({ ...person1, year: parseInt(e.target.value, 10) || 1990 })}
                        className="w-full px-3 py-2 rounded-xl bg-[#fcfaf7] border border-stone-300 text-stone-900 text-xs text-center font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-stone-500 block mb-1">Giới tính</label>
                      <div className="grid grid-cols-2 gap-1">
                        {['nam', 'nu'].map((g) => (
                          <button
                            key={g}
                            type="button"
                            onClick={() => setPerson1({ ...person1, gender: g })}
                            className={`py-2 rounded-xl text-xs font-bold border cursor-pointer ${
                              person1.gender === g
                                ? 'bg-amber-100 text-amber-950 border-amber-400'
                                : 'bg-[#fcfaf7] text-stone-600 border-stone-200'
                            }`}
                          >
                            {g === 'nam' ? 'Nam' : 'Nữ'}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Person 2 */}
                <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-3 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-800 uppercase">
                      Người Thứ Hai:
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                      Cung: {cungPhi2} ({CUNG_PHI_NGU_HANH[cungPhi2]?.nguHanh})
                    </span>
                  </div>
                  <input
                    type="text"
                    value={person2.name}
                    onChange={(e) => setPerson2({ ...person2, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#fcfaf7] border border-stone-300 text-stone-900 text-xs focus:border-amber-600 focus:ring-1 focus:ring-amber-500"
                    placeholder="Tên người thứ hai..."
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] text-stone-500 block mb-1">Năm sinh</label>
                      <input
                        type="number"
                        min="1940"
                        max="2030"
                        value={person2.year}
                        onChange={(e) => setPerson2({ ...person2, year: parseInt(e.target.value, 10) || 1993 })}
                        className="w-full px-3 py-2 rounded-xl bg-[#fcfaf7] border border-stone-300 text-stone-900 text-xs text-center font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-stone-500 block mb-1">Giới tính</label>
                      <div className="grid grid-cols-2 gap-1">
                        {['nam', 'nu'].map((g) => (
                          <button
                            key={g}
                            type="button"
                            onClick={() => setPerson2({ ...person2, gender: g })}
                            className={`py-2 rounded-xl text-xs font-bold border cursor-pointer ${
                              person2.gender === g
                                ? 'bg-amber-100 text-amber-950 border-amber-400'
                                : 'bg-[#fcfaf7] text-stone-600 border-stone-200'
                            }`}
                          >
                            {g === 'nam' ? 'Nam' : 'Nữ'}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kết Quả Xung Hợp */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-amber-300/90 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs text-amber-800 font-semibold uppercase tracking-wider block">
                    Kết Quả Soi Cung Xung Hợp
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900">
                    Phối Cung: {cungPhi1} & {cungPhi2} — Cung {compatibilityResult.duyenPhoi}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-[11px] text-stone-500 block">Độ hòa hợp:</span>
                    <strong className="text-2xl font-display text-red-700 font-bold">
                      {compatibilityResult.score}/100
                    </strong>
                  </div>
                  <span className="px-3 py-1.5 rounded-full text-xs font-bold border bg-amber-100 border-amber-300 text-amber-900">
                    {compatibilityResult.rating}
                  </span>
                </div>
              </div>

              {/* Chi Tiết Luận Giải */}
              <div className="space-y-4 text-sm leading-relaxed text-stone-700">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80">
                  <span className="font-bold text-stone-900 block mb-1">
                    Phân Tích Chi Tiết Quẻ {compatibilityResult.duyenPhoi}:
                  </span>
                  <p>{compatibilityResult.detailedAnalysis}</p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
                  <span className="font-bold text-emerald-950 block mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    Lời Khuyên Về Phong Thủy & Đạo Xử Thế:
                  </span>
                  <p className="text-stone-700">{compatibilityResult.advice}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Phong Thủy Nhà Ở / Cơ Quan */}
        {activeSubTab === 'phongthuy' && (
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Form Gia Chủ & Hướng Nhà */}
            <div className="bg-[#fcfaf7] p-6 sm:p-8 rounded-3xl border border-amber-200/80 shadow-sm space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 uppercase">Họ Tên Gia Chủ</label>
                  <input
                    type="text"
                    value={homeOwner.name}
                    onChange={(e) => setHomeOwner({ ...homeOwner, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:border-amber-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 uppercase">Năm Sinh Gia Chủ</label>
                  <input
                    type="number"
                    min="1940"
                    max="2030"
                    value={homeOwner.year}
                    onChange={(e) => setHomeOwner({ ...homeOwner, year: parseInt(e.target.value, 10) || 1988 })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm text-center font-bold"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 uppercase">Giới Tính</label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {['nam', 'nu'].map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setHomeOwner({ ...homeOwner, gender: g })}
                        className={`py-2.5 rounded-xl text-xs font-bold border cursor-pointer ${
                          homeOwner.gender === g
                            ? 'bg-amber-100 text-amber-950 border-amber-400'
                            : 'bg-white text-stone-600 border-stone-200'
                        }`}
                      >
                        {g === 'nam' ? 'Nam' : 'Nữ'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hướng Cửa Chính Hoặc Bàn Làm Việc */}
              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-bold text-stone-700 uppercase flex items-center justify-between">
                  <span>Chọn Hướng Cửa Chính Nhà Ở / Hướng Bàn Làm Việc Cơ Quan:</span>
                  <span className="text-amber-800 font-semibold normal-case">
                    Mệnh Gia Chủ: Cung {ownerCungPhi} ({ownerInfo?.group})
                  </span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {houseDirectionsList.map((d) => (
                    <button
                      key={d.direction}
                      type="button"
                      onClick={() => setSelectedDirectionName(d.direction)}
                      className={`p-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        selectedDirectionName === d.direction
                          ? 'bg-amber-100 text-amber-950 border-amber-400 font-bold shadow-xs'
                          : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      Hướng {d.direction} ({d.name})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Luận Giải Hướng Nhà Hiện Tại */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-amber-300/90 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs text-amber-800 font-semibold uppercase tracking-wider block">
                    Đánh Giá Phong Thủy Nhà Ở / Cơ Quan
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900">
                    Hướng {currentDirectionMatch.direction}: Cung {currentDirectionMatch.name}
                  </h3>
                </div>

                <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${
                  currentDirectionMatch.type === 'cat'
                    ? 'bg-emerald-100 border-emerald-300 text-emerald-900'
                    : 'bg-amber-100 border-amber-300 text-amber-900'
                }`}>
                  {currentDirectionMatch.type === 'cat' ? 'Cát Hướng (Vượng Khí)' : 'Hung Hướng (Cần Hóa Giải)'}
                </span>
              </div>

              {/* Chi Tiết Hướng */}
              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80">
                  <span className="font-bold text-stone-900 block mb-1">
                    Ảnh Hưởng Đến Gia Đạo & Sự Nghiệp:
                  </span>
                  <p>{currentDirectionMatch.description}</p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
                  <span className="font-bold text-emerald-950 block mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    Biện Pháp Bố Trí Phong Thủy Khai Vận:
                  </span>
                  <p className="text-stone-700">{currentDirectionMatch.advice}</p>
                </div>
              </div>

              {/* Bảng 4 Hướng Tốt & 4 Hướng Xấu */}
              <div className="pt-4 border-t border-stone-200">
                <span className="text-xs font-bold text-stone-800 uppercase tracking-wide block mb-3">
                  Toàn Bộ 8 Hướng Bát Trạch Cho Gia Chủ Mệnh Cung {ownerCungPhi}:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                  {houseDirectionsList.map((d) => (
                    <div
                      key={d.direction}
                      className={`p-3 rounded-xl border ${
                        d.type === 'cat'
                          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                          : 'bg-stone-50 border-stone-200 text-stone-700'
                      }`}
                    >
                      <div className="font-bold text-stone-900">Hướng {d.direction}</div>
                      <div className={`font-semibold mt-0.5 ${d.type === 'cat' ? 'text-emerald-800 font-bold' : 'text-stone-600'}`}>
                        {d.name} ({d.type === 'cat' ? 'Tốt' : 'Xấu'})
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
