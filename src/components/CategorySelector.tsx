'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Category, CategoryOption, UserProfile } from '@/types/tarot';
import { categories } from '@/data/tarotCards';

interface CategorySelectorProps {
  userProfile: UserProfile;
  onSelect: (category: Category) => void;
}

export default function CategorySelector({
  userProfile,
  onSelect,
}: CategorySelectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 py-8"
    >
      {/* 타이틀 영역 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          <span className="text-[#D4AF37]">{userProfile.birthYear}년생</span>{' '}
          <span className="text-[#D4AF37]">{userProfile.zodiacAnimal}띠</span>님,
        </h1>
        <p className="text-xl md:text-2xl text-white/90">
          지금 고민은 무엇인가요?
        </p>
      </motion.div>

      {/* 카테고리 버튼들 */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {categories.map((category, index) => (
          <CategoryButton
            key={category.id}
            category={category}
            index={index}
            onClick={() => onSelect(category.id)}
          />
        ))}
      </div>

      {/* 하단 안내 문구 */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-sm text-white/60 text-center"
      >
        마음을 가라앉히고 카테고리를 선택해주세요
      </motion.p>
    </motion.div>
  );
}

interface CategoryButtonProps {
  category: CategoryOption;
  index: number;
  onClick: () => void;
}

function CategoryButton({ category, index, onClick }: CategoryButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)' }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative overflow-hidden rounded-xl p-6
                 bg-gradient-to-br from-[#252840] to-[#1A1C2C]
                 border-2 border-[#D4AF37]/50
                 hover:border-[#D4AF37]
                 transition-all duration-300
                 group"
    >
      {/* 배경 효과 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* 아이콘 */}
      <motion.span
        className="block text-3xl mb-2"
        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.3 }}
      >
        {category.icon}
      </motion.span>

      {/* 라벨 */}
      <span className="relative z-10 text-white font-medium text-lg">
        {category.label}
      </span>

      {/* 하단 골드 라인 */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
