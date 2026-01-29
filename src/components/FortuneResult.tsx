'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FortuneResult as FortuneResultType, Category } from '@/types/tarot';

interface FortuneResultProps {
  result: FortuneResultType;
  onReset: () => void;
}

export default function FortuneResult({ result, onReset }: FortuneResultProps) {
  const handleShare = () => {
    const shareText = `${result.title}\n\n${result.summary}\n\n행운의 색: ${result.luckyItems.color}\n행운의 숫자: ${result.luckyItems.number}`;

    if (navigator.share) {
      navigator.share({
        title: result.title,
        text: shareText,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText);
      alert('결과가 클립보드에 복사되었습니다!');
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      {/* 타이틀 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-4">
          {result.title}
        </h2>
        <p className="text-white/80 leading-relaxed max-w-lg mx-auto">
          {result.summary}
        </p>
      </motion.div>

      {/* 행운 아이템 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-md mx-auto mb-8"
      >
        <div className="flex justify-center gap-4">
          <LuckyItem icon="🎨" label="행운의 색" value={result.luckyItems.color} />
          <LuckyItem icon="🔢" label="행운의 숫자" value={String(result.luckyItems.number)} />
          <LuckyItem icon="🧭" label="행운의 방향" value={result.luckyItems.direction} />
        </div>
      </motion.div>

      {/* 상세 운세 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl mx-auto space-y-4"
      >
        {result.sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="p-5 rounded-xl bg-gradient-to-br from-[#252840] to-[#1A1C2C]
                       border border-[#D4AF37]/30"
          >
            {/* 섹션 헤더 */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-[#D4AF37]">
                {section.title}
              </h3>
              {section.rating && (
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={star <= section.rating! ? 'text-[#D4AF37]' : 'text-white/20'}
                    >
                      ★
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* 섹션 내용 */}
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              {section.content}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* 액션 버튼들 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="max-w-md mx-auto mt-8 flex flex-col sm:flex-row gap-4 justify-center"
      >
        {/* 카카오톡 공유 */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShare}
          className="flex items-center justify-center gap-2 px-6 py-3
                     bg-[#FEE500] text-[#3C1E1E] font-bold rounded-xl
                     shadow-lg hover:shadow-[#FEE500]/30 transition-shadow"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3C6.48 3 2 6.48 2 10.8c0 2.76 1.84 5.18 4.59 6.55-.2.76-.73 2.73-.84 3.16-.13.53.19.52.41.38.17-.11 2.71-1.84 3.81-2.59.66.09 1.34.14 2.03.14 5.52 0 10-3.48 10-7.8S17.52 3 12 3z" />
          </svg>
          공유하기
        </motion.button>

        {/* 다시 보기 */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onReset}
          className="flex items-center justify-center gap-2 px-6 py-3
                     bg-transparent border-2 border-[#D4AF37]
                     text-[#D4AF37] font-bold rounded-xl
                     hover:bg-[#D4AF37]/10 transition-colors"
        >
          <span>☯️</span>
          다른 운세 보기
        </motion.button>
      </motion.div>

      {/* 하단 안내 */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1 }}
        className="mt-12 text-center text-xs text-white/40"
      >
        본 운세는 재미로 보시기 바라며, 중요한 결정은 신중하게 내리세요
      </motion.p>
    </div>
  );
}

function LuckyItem({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center p-3 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30">
      <span className="text-xl mb-1">{icon}</span>
      <span className="text-[10px] text-white/50 mb-1">{label}</span>
      <span className="text-sm font-medium text-[#D4AF37]">{value}</span>
    </div>
  );
}
