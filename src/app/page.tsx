'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Category, SelectedCard, UserProfile, AppStep } from '@/types/tarot';
import CategorySelector from '@/components/CategorySelector';
import CardDeck from '@/components/CardDeck';
import AdGate from '@/components/AdGate';
import ResultDisplay from '@/components/ResultDisplay';

// 샘플 사용자 프로필 (실제 앱에서는 사용자 입력 또는 저장된 데이터 사용)
const defaultUserProfile: UserProfile = {
  birthYear: 1983,
  zodiacAnimal: '돼지',
};

export default function TarotPage() {
  const [step, setStep] = useState<AppStep>('category');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedCards, setSelectedCards] = useState<SelectedCard[]>([]);
  const [userProfile] = useState<UserProfile>(defaultUserProfile);

  // 카테고리 선택 핸들러
  const handleCategorySelect = useCallback((category: Category) => {
    setSelectedCategory(category);
    setStep('selection');
  }, []);

  // 카드 선택 완료 핸들러
  const handleSelectionComplete = useCallback((cards: SelectedCard[]) => {
    setSelectedCards(cards);
    setStep('adgate');
  }, []);

  // 광고 시청 완료 핸들러
  const handleAdComplete = useCallback(() => {
    setStep('result');
  }, []);

  // 리셋 핸들러
  const handleReset = useCallback(() => {
    setStep('category');
    setSelectedCategory(null);
    setSelectedCards([]);
  }, []);

  return (
    <main className="min-h-screen bg-[#1A1C2C] pattern-overlay">
      <AnimatePresence mode="wait">
        {step === 'category' && (
          <CategorySelector
            key="category"
            userProfile={userProfile}
            onSelect={handleCategorySelect}
          />
        )}

        {step === 'selection' && (
          <CardDeck
            key="selection"
            onSelectionComplete={handleSelectionComplete}
          />
        )}

        {step === 'adgate' && (
          <AdGate
            key="adgate"
            onComplete={handleAdComplete}
          />
        )}

        {step === 'result' && selectedCategory && (
          <ResultDisplay
            key="result"
            selectedCards={selectedCards}
            category={selectedCategory}
            onReset={handleReset}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
