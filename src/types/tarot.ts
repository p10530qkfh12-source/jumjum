export interface UserProfile {
  name?: string;
  birthDate?: string;  // YYYY-MM-DD
  birthTime?: string;  // HH:mm
  gender?: 'male' | 'female';
}

export type Category = 'newyear' | 'saju' | 'tojeong' | 'daily';

export interface CategoryOption {
  id: Category;
  label: string;
  description: string;
  icon: string;
}

export interface FortuneResult {
  category: Category;
  title: string;
  summary: string;
  sections: FortuneSection[];
  luckyItems: LuckyItem;
}

export interface FortuneSection {
  title: string;
  content: string;
  rating?: number;  // 1-5 별점
}

export interface LuckyItem {
  color: string;
  number: number;
  direction: string;
}

export type AppStep = 'category' | 'input' | 'adgate' | 'result';
