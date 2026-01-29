'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Category, UserProfile, AppStep, FortuneResult as FortuneResultType } from '@/types/tarot';
import { generateFortune } from '@/data/fortuneData';
import CategorySelector from '@/components/CategorySelector';
import BirthInput from '@/components/BirthInput';
import AdGate from '@/components/AdGate';
import FortuneResult from '@/components/FortuneResult';

export default function FortunePage() {
  const [step, setStep] = useState<AppStep>('category');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile>({});
  const [fortuneResult, setFortuneResult] = useState<FortuneResultType | null>(null);

  // 카테고리 선택 핸들러
  const handleCategorySelect = useCallback((category: Category) => {
    setSelectedCategory(category);
    setStep('input');
  }, []);

  // 정보 입력 완료 핸들러
  const handleInputComplete = useCallback((profile: UserProfile) => {
    setUserProfile(profile);
    setStep('adgate');
  }, []);

  // 광고 시청 완료 핸들러
  const handleAdComplete = useCallback(() => {
    if (selectedCategory) {
      const result = generateFortune(selectedCategory, {
        birthDate: userProfile.birthDate,
      });
      setFortuneResult(result);
    }
    setStep('result');
  }, [selectedCategory, userProfile]);

  // 리셋 핸들러
  const handleReset = useCallback(() => {
    setStep('category');
    setSelectedCategory(null);
    setUserProfile({});
    setFortuneResult(null);
  }, []);

  return (
    <main className="min-h-screen bg-[#1A1C2C] pattern-overlay">
      <AnimatePresence mode="wait">
        {step === 'category' && (
          <CategorySelector
            key="category"
            onSelect={handleCategorySelect}
          />
        )}

        {step === 'input' && selectedCategory && (
          <BirthInput
            key="input"
            category={selectedCategory}
            onSubmit={handleInputComplete}
          />
        )}

        {step === 'adgate' && (
          <AdGate
            key="adgate"
            onComplete={handleAdComplete}
          />
        )}

        {step === 'result' && fortuneResult && (
          <FortuneResult
            key="result"
            result={fortuneResult}
            onReset={handleReset}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
