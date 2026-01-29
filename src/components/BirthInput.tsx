'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserProfile, Category } from '@/types/tarot';

interface BirthInputProps {
  category: Category;
  onSubmit: (profile: UserProfile) => void;
}

const categoryTitles: Record<Category, string> = {
  newyear: '신년운세',
  saju: '전통사주',
  tojeong: '토정비결',
  daily: '지정일운세',
};

export default function BirthInput({ category, onSubmit }: BirthInputProps) {
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | ''>('');
  const [targetDate, setTargetDate] = useState('');
  const [isCalendarLunar, setIsCalendarLunar] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      birthDate,
      birthTime: birthTime || undefined,
      gender: gender || undefined,
    });
  };

  const isValid = birthDate && (category !== 'daily' || targetDate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-md"
      >
        {/* 타이틀 */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-2">
            {categoryTitles[category]}
          </h2>
          <p className="text-white/60">
            정확한 운세를 위해 정보를 입력해주세요
          </p>
        </div>

        {/* 입력 폼 */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 생년월일 */}
          <div>
            <label className="block text-white/80 mb-2 text-sm">
              생년월일 <span className="text-[#D4AF37]">*</span>
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="flex-1 bg-[#252840] border border-[#D4AF37]/30 rounded-lg
                         px-4 py-3 text-white focus:border-[#D4AF37]
                         focus:outline-none transition-colors"
                required
              />
            </div>
            <div className="mt-2 flex gap-4">
              <label className="flex items-center gap-2 text-white/60 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="calendar"
                  checked={!isCalendarLunar}
                  onChange={() => setIsCalendarLunar(false)}
                  className="accent-[#D4AF37]"
                />
                양력
              </label>
              <label className="flex items-center gap-2 text-white/60 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="calendar"
                  checked={isCalendarLunar}
                  onChange={() => setIsCalendarLunar(true)}
                  className="accent-[#D4AF37]"
                />
                음력
              </label>
            </div>
          </div>

          {/* 태어난 시간 (선택) */}
          <div>
            <label className="block text-white/80 mb-2 text-sm">
              태어난 시간 <span className="text-white/40">(선택)</span>
            </label>
            <select
              value={birthTime}
              onChange={(e) => setBirthTime(e.target.value)}
              className="w-full bg-[#252840] border border-[#D4AF37]/30 rounded-lg
                       px-4 py-3 text-white focus:border-[#D4AF37]
                       focus:outline-none transition-colors"
            >
              <option value="">모름</option>
              <option value="23:00">자시 (23:00~01:00)</option>
              <option value="01:00">축시 (01:00~03:00)</option>
              <option value="03:00">인시 (03:00~05:00)</option>
              <option value="05:00">묘시 (05:00~07:00)</option>
              <option value="07:00">진시 (07:00~09:00)</option>
              <option value="09:00">사시 (09:00~11:00)</option>
              <option value="11:00">오시 (11:00~13:00)</option>
              <option value="13:00">미시 (13:00~15:00)</option>
              <option value="15:00">신시 (15:00~17:00)</option>
              <option value="17:00">유시 (17:00~19:00)</option>
              <option value="19:00">술시 (19:00~21:00)</option>
              <option value="21:00">해시 (21:00~23:00)</option>
            </select>
          </div>

          {/* 성별 (선택) */}
          <div>
            <label className="block text-white/80 mb-2 text-sm">
              성별 <span className="text-white/40">(선택)</span>
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setGender('male')}
                className={`flex-1 py-3 rounded-lg border-2 transition-all
                  ${gender === 'male'
                    ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37]'
                    : 'border-[#D4AF37]/30 text-white/60 hover:border-[#D4AF37]/50'
                  }`}
              >
                남성
              </button>
              <button
                type="button"
                onClick={() => setGender('female')}
                className={`flex-1 py-3 rounded-lg border-2 transition-all
                  ${gender === 'female'
                    ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37]'
                    : 'border-[#D4AF37]/30 text-white/60 hover:border-[#D4AF37]/50'
                  }`}
              >
                여성
              </button>
            </div>
          </div>

          {/* 지정일운세일 경우 날짜 선택 */}
          {category === 'daily' && (
            <div>
              <label className="block text-white/80 mb-2 text-sm">
                운세를 볼 날짜 <span className="text-[#D4AF37]">*</span>
              </label>
              <input
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                className="w-full bg-[#252840] border border-[#D4AF37]/30 rounded-lg
                         px-4 py-3 text-white focus:border-[#D4AF37]
                         focus:outline-none transition-colors"
                required
              />
            </div>
          )}

          {/* 제출 버튼 */}
          <motion.button
            type="submit"
            disabled={!isValid}
            whileHover={isValid ? { scale: 1.02 } : {}}
            whileTap={isValid ? { scale: 0.98 } : {}}
            className={`w-full py-4 rounded-xl font-bold text-lg
                       transition-all duration-300
                       ${isValid
                         ? 'gold-shimmer text-[#1A1C2C] shadow-lg hover:shadow-[#D4AF37]/30'
                         : 'bg-[#252840] text-white/30 cursor-not-allowed'
                       }`}
          >
            운세 보기
          </motion.button>
        </form>

        {/* 안내 문구 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center text-xs text-white/40"
        >
          입력하신 정보는 운세 분석에만 사용되며 저장되지 않습니다
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
