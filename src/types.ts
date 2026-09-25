export type Gender = 'nam' | 'nu';
export type CalendarType = 'duong_lich' | 'am_lich';

export interface TuViProfile {
  fullName: string;
  gender: Gender;
  birthDay: number;
  birthMonth: number;
  birthYear: number;
  birthHour: string; // Tý, Sửu, Dần...
  targetYear: number;
  calendarType: CalendarType;
}

export interface CungTuVi {
  id: string;
  name: string; // Mệnh, Phụ Mẫu, Phúc Đức, Điền Trạch, Quan Lộc, Nô Bộc, Thiên Di, Tật Ách, Tài Bạch, Tử Tức, Phu Thê, Huynh Đệ
  diaChi: string; // Tý, Sửu, Dần, Mão, Thìn, Tỵ, Ngọ, Mùi, Thân, Dậu, Tuất, Hợi
  chinhTinh: string[];
  phuTinhTot: string[];
  phuTinhXau: string[];
  daiVan: number;
  tieuVan: string;
  isMenh?: boolean;
  isThan?: boolean;
}

export interface MenhTaiQuanInterpretation {
  banMenh: string; // ví dụ: Sa Trung Kim, Đại Hải Thủy...
  cucSo: string; // Thủy Nhị Cục, Mộc Tam Cục...
  chuMenh: string;
  chuThan: string;
  menhInterpretation: string;
  taiInterpretation: string;
  quanInterpretation: string;
  tinhDuyenInterpretation: string;
  vanHanInterpretation: string;
}

export type CungPhi = 'Càn' | 'Khảm' | 'Cấn' | 'Chấn' | 'Tốn' | 'Ly' | 'Khôn' | 'Đoài';
export type NguHanh = 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ';

export interface FengShuiDirection {
  direction: string;
  name: string; // Sinh Khí, Thiên Y, Diên Niên, Phục Vị, Họa Hại, Lục Sát, Ngũ Quỷ, Tuyệt Mệnh
  type: 'cat' | 'hung';
  description: string;
  advice: string;
}

export interface CompatibilityResult {
  score: number; // 0 - 100
  rating: 'Đại Cát' | 'Thứ Cát' | 'Bình Hòa' | 'Hơi Khắc' | 'Đại Kỵ';
  cungPhi1: CungPhi;
  cungPhi2: CungPhi;
  duyenPhoi: string; // Sinh Khí, Tuyệt Mệnh, etc.
  nguHanh1: NguHanh;
  nguHanh2: NguHanh;
  nguHanhRelation: string;
  canChiRelation: string;
  detailedAnalysis: string;
  advice: string;
}

export interface TarotKieuCard {
  id: number;
  title: string;
  kieuVerses: string[];
  verseNumbers: string;
  meaning: string;
  domain: 'Tình Duyên' | 'Sự Nghiệp' | 'Tài Lộc' | 'Tâm Trí' | 'Cơ Hội';
  omen: 'Đại Cát' | 'Trung Cát' | 'Tiểu Cát' | 'Cẩn Trọng';
  advice: string;
}
