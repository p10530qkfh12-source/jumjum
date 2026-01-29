export interface UserProfile {
  birthYear: number;
  zodiacAnimal: string;  // 띠
}

export interface TarotCard {
  id: number;
  name: string;
  nameKo: string;
  image: string;
  interpretation: {
    love: string;
    career: string;
    money: string;
    general: string;
  };
  keywords: string[];
}

export type Category = 'love' | 'career' | 'money' | 'general';

export interface CategoryOption {
  id: Category;
  label: string;
  icon: string;
}

export type ReadingPosition = 'past' | 'present' | 'future';

export interface SelectedCard {
  card: TarotCard;
  position: ReadingPosition;
  isRevealed: boolean;
}

export type AppStep = 'category' | 'selection' | 'adgate' | 'result';
