'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TarotCard as TarotCardType, SelectedCard, ReadingPosition } from '@/types/tarot';
import { tarotCards, positionLabels } from '@/data/tarotCards';
import TarotCard from './TarotCard';

interface CardDeckProps {
  onSelectionComplete: (cards: SelectedCard[]) => void;
}

export default function CardDeck({ onSelectionComplete }: CardDeckProps) {
  const [shuffledCards, setShuffledCards] = useState<TarotCardType[]>([]);
  const [selectedCards, setSelectedCards] = useState<SelectedCard[]>([]);
  const [isShuffling, setIsShuffling] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 카드 셔플
  useEffect(() => {
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);

    // 셔플 애니메이션 시간
    const timer = setTimeout(() => {
      setIsShuffling(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // 선택 완료 체크
  useEffect(() => {
    if (selectedCards.length === 3) {
      const timer = setTimeout(() => {
        onSelectionComplete(selectedCards);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selectedCards, onSelectionComplete]);

  const positions: ReadingPosition[] = ['past', 'present', 'future'];

  const handleCardSelect = (card: TarotCardType) => {
    if (selectedCards.length >= 3) return;
    if (selectedCards.some((sc) => sc.card.id === card.id)) return;

    const position = positions[selectedCards.length];
    const newSelectedCard: SelectedCard = {
      card,
      position,
      isRevealed: false,
    };

    setSelectedCards([...selectedCards, newSelectedCard]);
  };

  const isCardSelected = (cardId: number) => {
    return selectedCards.some((sc) => sc.card.id === cardId);
  };

  // 표시할 카드 (성능을 위해 일부만 표시)
  const displayCards = useMemo(() => {
    return shuffledCards.slice(0, 21);
  }, [shuffledCards]);

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4">
      {/* 안내 문구 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
          마음을 가라앉히고 카드를 선택하세요
        </h2>
        <p className="text-white/60">
          {3 - selectedCards.length}장의 카드를 더 선택해주세요
        </p>
      </motion.div>

      {/* 선택된 카드 슬롯 */}
      <div className="flex justify-center gap-4 md:gap-8 mb-8">
        {positions.map((position, index) => {
          const selectedCard = selectedCards.find((sc) => sc.position === position);
          return (
            <motion.div
              key={position}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="text-[#D4AF37] text-sm mb-2 font-medium">
                {positionLabels[position].ko}
              </span>
              <div
                className={`
                  w-20 h-28 md:w-24 md:h-34 rounded-xl
                  ${selectedCard
                    ? 'bg-transparent'
                    : 'bg-[#252840] border-2 border-dashed border-[#D4AF37]/30'
                  }
                  flex items-center justify-center
                `}
              >
                {selectedCard ? (
                  <TarotCard
                    card={selectedCard.card}
                    isSelected={true}
                    isSelectable={false}
                    size="sm"
                  />
                ) : (
                  <span className="text-[#D4AF37]/30 text-2xl">?</span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 카드 덱 */}
      <div className="relative w-full max-w-4xl">
        {isShuffling ? (
          <ShuffleAnimation />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3"
          >
            <AnimatePresence>
              {displayCards.map((card, index) => {
                const selected = isCardSelected(card.id);
                if (selected) return null;

                return (
                  <TarotCard
                    key={card.id}
                    card={card}
                    isSelected={false}
                    isSelectable={selectedCards.length < 3}
                    onClick={() => handleCardSelect(card)}
                    size="sm"
                    delay={index * 0.02}
                  />
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* 하단 안내 */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
        className="mt-8 text-sm text-white/50 text-center"
      >
        첫 번째 카드는 과거, 두 번째는 현재, 세 번째는 미래를 나타냅니다
      </motion.p>
    </div>
  );
}

function ShuffleAnimation() {
  return (
    <div className="flex justify-center items-center h-64">
      <motion.div
        className="relative"
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: 3,
          ease: 'easeInOut',
        }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-28 md:w-24 md:h-34 rounded-xl
                       bg-gradient-to-br from-[#252840] to-[#1A1C2C]
                       border-2 border-[#D4AF37]"
            style={{
              left: i * 3,
              top: i * 2,
              zIndex: 5 - i,
            }}
            animate={{
              x: [0, -20, 20, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              repeat: 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute mt-48 text-[#D4AF37] font-medium"
      >
        카드를 섞는 중...
      </motion.p>
    </div>
  );
}
