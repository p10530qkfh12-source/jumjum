'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SelectedCard, Category } from '@/types/tarot';
import { positionLabels } from '@/data/tarotCards';
import TarotCard from './TarotCard';

interface ResultDisplayProps {
  selectedCards: SelectedCard[];
  category: Category;
  onReset: () => void;
}

export default function ResultDisplay({
  selectedCards,
  category,
  onReset,
}: ResultDisplayProps) {
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [showInterpretation, setShowInterpretation] = useState(false);

  // 순차적으로 카드 공개
  useEffect(() => {
    const revealSequence = async () => {
      for (let i = 0; i < selectedCards.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setRevealedCards((prev) => [...prev, i]);
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
      setShowInterpretation(true);
    };

    revealSequence();
  }, [selectedCards]);

  const handleKakaoShare = () => {
    // 카카오톡 공유 (실제 구현시 카카오 SDK 연동 필요)
    const shareText = selectedCards
      .map((sc) => `${positionLabels[sc.position].ko}: ${sc.card.nameKo}`)
      .join('\n');

    if (navigator.share) {
      navigator.share({
        title: '궁금하면 5백원 - 타로 운세',
        text: `나의 타로 결과\n${shareText}\n\n결과가 궁금하다면?`,
        url: window.location.href,
      }).catch(() => {
        // 공유 취소시 무시
      });
    } else {
      // 클립보드 복사 fallback
      navigator.clipboard.writeText(`나의 타로 결과\n${shareText}`);
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
        <h2 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-2">
          당신의 운명이 밝혀집니다
        </h2>
        <p className="text-white/60">
          {getCategoryLabel(category)} 운세 결과
        </p>
      </motion.div>

      {/* 카드 섹션 */}
      <div className="flex justify-center gap-4 md:gap-8 mb-8">
        {selectedCards.map((selectedCard, index) => {
          const isRevealed = revealedCards.includes(index);
          return (
            <motion.div
              key={selectedCard.position}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <TarotCard
                card={selectedCard.card}
                isFlipped={isRevealed}
                isSelectable={false}
                size="lg"
                showLabel={positionLabels[selectedCard.position].ko}
              />
            </motion.div>
          );
        })}
      </div>

      {/* 해석 섹션 */}
      {showInterpretation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          {selectedCards.map((selectedCard, index) => (
            <motion.div
              key={selectedCard.position}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 }}
              className="mb-6 p-4 md:p-6 rounded-xl
                         bg-gradient-to-br from-[#252840] to-[#1A1C2C]
                         border border-[#D4AF37]/30"
            >
              {/* 포지션 & 카드명 */}
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20
                               text-[#D4AF37] text-sm font-medium">
                  {positionLabels[selectedCard.position].ko}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {selectedCard.card.nameKo}
                </h3>
              </div>

              {/* 포지션 설명 */}
              <p className="text-white/40 text-sm mb-3">
                {positionLabels[selectedCard.position].description}
              </p>

              {/* 카드 해석 */}
              <p className="text-white/80 leading-relaxed">
                {selectedCard.card.interpretation[category]}
              </p>

              {/* 키워드 */}
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedCard.card.keywords.map((keyword, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-full
                             bg-[#D4AF37]/10 text-[#D4AF37]/80"
                  >
                    #{keyword}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* 종합 해석 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="p-6 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5
                       border border-[#D4AF37]/50 mb-8"
          >
            <h3 className="text-lg font-bold text-[#D4AF37] mb-3 flex items-center gap-2">
              <span>✨</span> 종합 해석
            </h3>
            <p className="text-white/80 leading-relaxed">
              {generateSummary(selectedCards, category)}
            </p>
          </motion.div>

          {/* 액션 버튼들 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* 카카오톡 공유 */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleKakaoShare}
              className="flex items-center justify-center gap-2 px-6 py-3
                         bg-[#FEE500] text-[#3C1E1E] font-bold rounded-xl
                         shadow-lg hover:shadow-[#FEE500]/30 transition-shadow"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.48 3 2 6.48 2 10.8c0 2.76 1.84 5.18 4.59 6.55-.2.76-.73 2.73-.84 3.16-.13.53.19.52.41.38.17-.11 2.71-1.84 3.81-2.59.66.09 1.34.14 2.03.14 5.52 0 10-3.48 10-7.8S17.52 3 12 3z" />
              </svg>
              카카오톡 공유하기
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
              <span>🔮</span>
              다시 보기
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

function getCategoryLabel(category: Category): string {
  const labels = {
    love: '연애/결혼',
    career: '직장/사업',
    money: '금전/재물',
    general: '오늘의',
  };
  return labels[category];
}

function generateSummary(cards: SelectedCard[], category: Category): string {
  const past = cards.find((c) => c.position === 'past');
  const present = cards.find((c) => c.position === 'present');
  const future = cards.find((c) => c.position === 'future');

  if (!past || !present || !future) return '';

  const summaries = {
    love: `과거의 ${past.card.nameKo} 카드는 지나간 사랑의 경험을 나타냅니다. 현재 ${present.card.nameKo} 카드가 보여주는 것처럼, 지금은 감정적으로 중요한 시기입니다. 미래의 ${future.card.nameKo} 카드는 희망적인 변화를 예고합니다. 마음을 열고 진정한 사랑을 향해 나아가세요.`,
    career: `${past.card.nameKo}가 나타내는 과거의 경험들이 현재의 기반이 되었습니다. 지금 ${present.card.nameKo}의 에너지로 새로운 도전을 맞이하고 있으며, ${future.card.nameKo}가 보여주는 미래는 노력의 결실을 약속합니다. 꾸준함이 성공의 열쇠입니다.`,
    money: `재정적으로 ${past.card.nameKo}의 영향 아래 있던 과거에서, 현재 ${present.card.nameKo}의 기운으로 전환기를 맞고 있습니다. ${future.card.nameKo}가 예시하는 미래는 현명한 결정을 통해 풍요를 가져올 것입니다. 신중하면서도 과감하게 행동하세요.`,
    general: `${past.card.nameKo}의 교훈을 바탕으로 오늘 ${present.card.nameKo}의 에너지가 당신을 감싸고 있습니다. ${future.card.nameKo}가 암시하는 것처럼, 긍정적인 변화의 기운이 다가오고 있습니다. 오늘 하루도 자신을 믿고 나아가세요.`,
  };

  return summaries[category];
}
