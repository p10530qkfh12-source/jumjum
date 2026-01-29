'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TarotCard as TarotCardType } from '@/types/tarot';
import CardBackSVG from './CardBackSVG';

interface TarotCardProps {
  card: TarotCardType;
  isFlipped?: boolean;
  isSelected?: boolean;
  isSelectable?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: string;
  delay?: number;
}

const sizeClasses = {
  sm: 'w-20 h-28 md:w-24 md:h-34',
  md: 'w-28 h-40 md:w-32 md:h-46',
  lg: 'w-36 h-52 md:w-44 md:h-64',
};

export default function TarotCard({
  card,
  isFlipped = false,
  isSelected = false,
  isSelectable = true,
  onClick,
  size = 'md',
  showLabel,
  delay = 0,
}: TarotCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: isSelected && !isFlipped ? -20 : 0,
      }}
      transition={{
        delay,
        duration: 0.4,
        y: { duration: 0.3 }
      }}
      whileHover={isSelectable && !isSelected ? { y: -15, scale: 1.05 } : {}}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={isSelectable ? onClick : undefined}
      className={`
        ${sizeClasses[size]}
        relative cursor-pointer perspective-1000
        ${isSelected ? 'card-float z-10' : ''}
        ${!isSelectable ? 'cursor-default' : ''}
      `}
      style={{ perspective: '1000px' }}
    >
      {/* 라벨 (과거/현재/미래) */}
      {showLabel && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-8 left-1/2 -translate-x-1/2
                     text-[#D4AF37] font-medium text-sm whitespace-nowrap"
        >
          {showLabel}
        </motion.div>
      )}

      {/* 카드 컨테이너 */}
      <div
        className={`
          card-inner w-full h-full
          ${isFlipped ? 'card-flipped' : ''}
        `}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* 카드 앞면 (뒷면 디자인 - 문살 패턴) */}
        <div
          className="card-front absolute inset-0 rounded-xl overflow-hidden
                     shadow-lg transition-shadow duration-300"
          style={{
            backfaceVisibility: 'hidden',
            boxShadow: isHovered || isSelected
              ? '0 0 20px rgba(212, 175, 55, 0.5), 0 10px 30px rgba(0, 0, 0, 0.3)'
              : '0 4px 15px rgba(0, 0, 0, 0.3)',
          }}
        >
          <CardBackSVG className="w-full h-full" />

          {/* 호버 글로우 효과 */}
          {(isHovered || isSelected) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 rounded-xl gold-glow"
              style={{
                border: '2px solid #D4AF37',
                pointerEvents: 'none'
              }}
            />
          )}
        </div>

        {/* 카드 뒷면 (실제 타로 카드 이미지) */}
        <div
          className="card-back absolute inset-0 rounded-xl overflow-hidden
                     bg-gradient-to-br from-[#252840] to-[#1A1C2C]
                     border-2 border-[#D4AF37] shadow-lg"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* 플레이스홀더 카드 이미지 */}
          <div className="w-full h-full flex flex-col items-center justify-center p-2">
            {/* 카드 아이콘/심볼 */}
            <div className="text-4xl md:text-5xl mb-2 text-[#D4AF37]">
              {getCardSymbol(card.id)}
            </div>

            {/* 카드 이름 */}
            <div className="text-center">
              <p className="text-xs md:text-sm font-bold text-[#D4AF37] leading-tight">
                {card.nameKo}
              </p>
              <p className="text-[10px] md:text-xs text-white/60 mt-1">
                {card.name}
              </p>
            </div>

            {/* 키워드 */}
            <div className="mt-2 flex flex-wrap justify-center gap-1">
              {card.keywords.slice(0, 2).map((keyword, i) => (
                <span
                  key={i}
                  className="text-[8px] md:text-[10px] px-1.5 py-0.5
                           bg-[#D4AF37]/20 text-[#D4AF37] rounded"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// 카드 ID에 따른 심볼 반환
function getCardSymbol(id: number): string {
  const majorArcanaSymbols = [
    '🃏', '✨', '🌙', '👑', '🏛️', '📿', '💕', '⚔️', '🦁', '🏔️',
    '🎡', '⚖️', '🙃', '💀', '⚗️', '😈', '🗼', '⭐', '🌙', '☀️',
    '📯', '🌍'
  ];

  if (id < 22) {
    return majorArcanaSymbols[id];
  }

  // 마이너 아르카나
  const suitSymbols = ['🔥', '💧', '🗡️', '💎'];
  const suitIndex = Math.floor((id - 22) / 14);
  return suitSymbols[suitIndex] || '✨';
}
