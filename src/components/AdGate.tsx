'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AdGateProps {
  onComplete: () => void;
}

export default function AdGate({ onComplete }: AdGateProps) {
  const [isWatching, setIsWatching] = useState(false);
  const [progress, setProgress] = useState(0);
  const [coinBounce, setCoinBounce] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 동전 소리 효과 (Base64 encoded simple beep)
  useEffect(() => {
    // 간단한 오디오 컨텍스트로 동전 소리 생성
    audioRef.current = null;
  }, []);

  const playCoinSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
      oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.2);

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch {
      console.log('Audio not supported');
    }
  };

  const handleWatchAd = () => {
    setCoinBounce(true);
    playCoinSound();

    setTimeout(() => {
      setCoinBounce(false);
      setIsWatching(true);

      // 3초 광고 시뮬레이션
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 100 / 30; // 3초 = 30 * 100ms
        setProgress(currentProgress);

        if (currentProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
        }
      }, 100);
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/80 backdrop-blur-sm px-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-gradient-to-br from-[#252840] to-[#1A1C2C]
                   rounded-2xl p-6 md:p-8 max-w-md w-full
                   border border-[#D4AF37]/30 shadow-2xl"
      >
        <AnimatePresence mode="wait">
          {!isWatching ? (
            <motion.div
              key="prompt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              {/* 아이콘 */}
              <motion.div
                className={`text-6xl mb-6 ${coinBounce ? 'coin-bounce' : ''}`}
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                🪙
              </motion.div>

              {/* 타이틀 */}
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                복채 대신 광고를 시청하고
                <br />
                결과를 확인하시겠습니까?
              </h2>

              {/* 설명 */}
              <p className="text-white/60 mb-8 text-sm">
                짧은 광고 시청 후 타로 해석 결과를 확인할 수 있습니다
              </p>

              {/* 버튼 */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWatchAd}
                className="w-full py-4 rounded-xl font-bold text-lg
                           gold-shimmer text-[#1A1C2C]
                           shadow-lg hover:shadow-[#D4AF37]/30
                           transition-shadow duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>🎬</span>
                  광고 보고 500원 아끼기
                </span>
              </motion.button>

              {/* 스킵 옵션 (실제 앱에서는 결제 연동) */}
              <button
                onClick={onComplete}
                className="mt-4 text-white/40 text-sm hover:text-white/60
                           transition-colors underline"
              >
                500원 결제하고 바로 보기
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="watching"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              {/* 로딩 스피너 */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                {/* 외부 링 */}
                <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37]/20" />
                {/* 진행 링 */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="44"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${(progress / 100) * 276.46} 276.46`}
                    className="transition-all duration-100"
                  />
                </svg>
                {/* 중앙 아이콘 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="text-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ✨
                  </motion.span>
                </div>
              </div>

              {/* 텍스트 */}
              <p className="text-white font-medium mb-2">
                운명의 기운을 모으는 중...
              </p>
              <p className="text-[#D4AF37] text-sm">
                {Math.round(progress)}%
              </p>

              {/* 장식적 요소 */}
              <div className="mt-6 flex justify-center gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-[#D4AF37]"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1,
                      delay: i * 0.3,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
