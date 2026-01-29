'use client';

import React from 'react';

interface CardBackSVGProps {
  className?: string;
}

// 전통 문살 문양 스타일 카드 뒷면
export default function CardBackSVG({ className = '' }: CardBackSVGProps) {
  return (
    <svg
      viewBox="0 0 140 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 배경 */}
      <rect width="140" height="200" fill="#1A1C2C" rx="8" />

      {/* 외곽 테두리 */}
      <rect
        x="4"
        y="4"
        width="132"
        height="192"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="2"
        rx="6"
      />

      {/* 내부 테두리 */}
      <rect
        x="10"
        y="10"
        width="120"
        height="180"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="1"
        rx="4"
        opacity="0.5"
      />

      {/* 전통 문살 패턴 - 중앙 */}
      <g transform="translate(70, 100)" stroke="#D4AF37" fill="none" strokeWidth="1">
        {/* 중앙 원 */}
        <circle r="30" opacity="0.8" />
        <circle r="20" opacity="0.6" />
        <circle r="10" opacity="0.4" />

        {/* 방사형 선 */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
          <line
            key={angle}
            x1="0"
            y1="0"
            x2={Math.cos((angle * Math.PI) / 180) * 45}
            y2={Math.sin((angle * Math.PI) / 180) * 45}
            opacity="0.5"
          />
        ))}

        {/* 마름모 패턴 */}
        <path
          d="M0,-40 L25,0 L0,40 L-25,0 Z"
          opacity="0.6"
        />
        <path
          d="M-40,0 L0,25 L40,0 L0,-25 Z"
          opacity="0.6"
        />
      </g>

      {/* 모서리 장식 - 좌상 */}
      <g transform="translate(20, 25)" stroke="#D4AF37" fill="none" strokeWidth="1">
        <path d="M0,15 L0,0 L15,0" opacity="0.8" />
        <path d="M5,15 L5,5 L15,5" opacity="0.5" />
        <circle cx="0" cy="15" r="2" fill="#D4AF37" opacity="0.8" />
        <circle cx="15" cy="0" r="2" fill="#D4AF37" opacity="0.8" />
      </g>

      {/* 모서리 장식 - 우상 */}
      <g transform="translate(120, 25)" stroke="#D4AF37" fill="none" strokeWidth="1">
        <path d="M0,15 L0,0 L-15,0" opacity="0.8" />
        <path d="M-5,15 L-5,5 L-15,5" opacity="0.5" />
        <circle cx="0" cy="15" r="2" fill="#D4AF37" opacity="0.8" />
        <circle cx="-15" cy="0" r="2" fill="#D4AF37" opacity="0.8" />
      </g>

      {/* 모서리 장식 - 좌하 */}
      <g transform="translate(20, 175)" stroke="#D4AF37" fill="none" strokeWidth="1">
        <path d="M0,-15 L0,0 L15,0" opacity="0.8" />
        <path d="M5,-15 L5,-5 L15,-5" opacity="0.5" />
        <circle cx="0" cy="-15" r="2" fill="#D4AF37" opacity="0.8" />
        <circle cx="15" cy="0" r="2" fill="#D4AF37" opacity="0.8" />
      </g>

      {/* 모서리 장식 - 우하 */}
      <g transform="translate(120, 175)" stroke="#D4AF37" fill="none" strokeWidth="1">
        <path d="M0,-15 L0,0 L-15,0" opacity="0.8" />
        <path d="M-5,-15 L-5,-5 L-15,-5" opacity="0.5" />
        <circle cx="0" cy="-15" r="2" fill="#D4AF37" opacity="0.8" />
        <circle cx="-15" cy="0" r="2" fill="#D4AF37" opacity="0.8" />
      </g>

      {/* 상단 꽃문양 */}
      <g transform="translate(70, 50)" fill="#D4AF37" opacity="0.7">
        <circle r="4" />
        {[0, 72, 144, 216, 288].map((angle) => (
          <ellipse
            key={angle}
            cx={Math.cos((angle * Math.PI) / 180) * 10}
            cy={Math.sin((angle * Math.PI) / 180) * 10}
            rx="4"
            ry="6"
            transform={`rotate(${angle + 90})`}
            opacity="0.8"
          />
        ))}
      </g>

      {/* 하단 꽃문양 */}
      <g transform="translate(70, 150)" fill="#D4AF37" opacity="0.7">
        <circle r="4" />
        {[0, 72, 144, 216, 288].map((angle) => (
          <ellipse
            key={angle}
            cx={Math.cos((angle * Math.PI) / 180) * 10}
            cy={Math.sin((angle * Math.PI) / 180) * 10}
            rx="4"
            ry="6"
            transform={`rotate(${angle + 90})`}
            opacity="0.8"
          />
        ))}
      </g>

      {/* 그라데이션 오버레이 */}
      <defs>
        <radialGradient id="cardGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect
        x="10"
        y="10"
        width="120"
        height="180"
        fill="url(#cardGlow)"
        rx="4"
      />
    </svg>
  );
}
