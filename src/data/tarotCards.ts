import { TarotCard, CategoryOption } from '@/types/tarot';

export const categories: CategoryOption[] = [
  { id: 'love', label: '연애/결혼', icon: '💕' },
  { id: 'career', label: '직장/사업', icon: '💼' },
  { id: 'money', label: '금전/재물', icon: '💰' },
  { id: 'general', label: '오늘의 운세', icon: '✨' },
];

// 메이저 아르카나 22장 + 마이너 아르카나 56장 = 78장
export const tarotCards: TarotCard[] = [
  // 메이저 아르카나 (Major Arcana)
  {
    id: 0,
    name: 'The Fool',
    nameKo: '광대',
    image: '/cards/fool.png',
    interpretation: {
      love: '새로운 만남이 예고됩니다. 과거의 상처를 털어버리고 순수한 마음으로 사랑을 시작할 때입니다.',
      career: '새로운 도전을 두려워하지 마세요. 지금은 과감하게 첫 발을 내딛을 시기입니다.',
      money: '예상치 못한 곳에서 재물운이 찾아올 수 있습니다. 새로운 투자 기회에 열린 마음을 가지세요.',
      general: '자유로운 영혼으로 새로운 여정을 시작하세요. 모험심을 가지고 앞으로 나아가세요.',
    },
    keywords: ['새로운 시작', '순수', '모험', '자유'],
  },
  {
    id: 1,
    name: 'The Magician',
    nameKo: '마법사',
    image: '/cards/magician.png',
    interpretation: {
      love: '당신의 매력이 빛을 발합니다. 적극적으로 감정을 표현하면 좋은 결과가 있을 것입니다.',
      career: '필요한 모든 능력을 갖추고 있습니다. 자신감을 가지고 프로젝트를 진행하세요.',
      money: '창의적인 아이디어가 수익으로 연결됩니다. 당신의 재능을 활용하세요.',
      general: '당신에게는 원하는 것을 이룰 수 있는 힘이 있습니다. 의지를 가지고 행동하세요.',
    },
    keywords: ['능력', '의지', '창조', '자신감'],
  },
  {
    id: 2,
    name: 'The High Priestess',
    nameKo: '여교황',
    image: '/cards/highpriestess.png',
    interpretation: {
      love: '직감을 믿으세요. 상대방의 말보다 행동을 주의 깊게 살펴보세요.',
      career: '숨겨진 정보가 있습니다. 표면적인 것에 속지 말고 본질을 파악하세요.',
      money: '지금은 큰 결정을 내리기보다 상황을 관망할 때입니다.',
      general: '내면의 목소리에 귀 기울이세요. 명상과 성찰의 시간이 필요합니다.',
    },
    keywords: ['직관', '지혜', '신비', '내면'],
  },
  {
    id: 3,
    name: 'The Empress',
    nameKo: '여황제',
    image: '/cards/empress.png',
    interpretation: {
      love: '풍요로운 사랑이 찾아옵니다. 따뜻하고 포용적인 관계가 형성됩니다.',
      career: '창의적인 프로젝트가 결실을 맺습니다. 팀원들과의 협력이 중요합니다.',
      money: '물질적 풍요가 찾아옵니다. 투자한 것에서 좋은 수확을 기대하세요.',
      general: '모든 것이 풍요롭고 아름다운 시기입니다. 자연과 함께하는 시간을 가지세요.',
    },
    keywords: ['풍요', '창조', '모성', '자연'],
  },
  {
    id: 4,
    name: 'The Emperor',
    nameKo: '황제',
    image: '/cards/emperor.png',
    interpretation: {
      love: '안정적이고 책임감 있는 관계를 원한다면 좋은 시기입니다.',
      career: '리더십을 발휘할 때입니다. 체계적인 계획과 실행이 성공을 가져옵니다.',
      money: '재정 관리에 규율을 세우세요. 장기적인 안목으로 투자하세요.',
      general: '질서와 구조가 필요한 시기입니다. 규칙을 세우고 따르세요.',
    },
    keywords: ['권위', '안정', '리더십', '규율'],
  },
  {
    id: 5,
    name: 'The Hierophant',
    nameKo: '교황',
    image: '/cards/hierophant.png',
    interpretation: {
      love: '전통적인 가치관을 중시하는 관계가 형성됩니다. 결혼을 고려해볼 시기입니다.',
      career: '멘토의 조언을 구하세요. 기존의 방식을 존중하면서 배움을 이어가세요.',
      money: '안전한 투자 방식을 선택하세요. 검증된 방법이 최선입니다.',
      general: '가르침을 받고 지혜를 구할 때입니다. 경험자의 조언에 귀 기울이세요.',
    },
    keywords: ['전통', '가르침', '신뢰', '규범'],
  },
  {
    id: 6,
    name: 'The Lovers',
    nameKo: '연인들',
    image: '/cards/lovers.png',
    interpretation: {
      love: '운명적인 만남이 기다리고 있습니다. 진정한 사랑이 찾아올 수 있습니다.',
      career: '중요한 선택의 기로에 서게 됩니다. 가치관에 맞는 결정을 하세요.',
      money: '파트너십을 통한 재물운이 있습니다. 함께 하는 투자를 고려하세요.',
      general: '선택의 순간입니다. 마음의 소리를 따라 결정하세요.',
    },
    keywords: ['사랑', '선택', '조화', '결합'],
  },
  {
    id: 7,
    name: 'The Chariot',
    nameKo: '전차',
    image: '/cards/chariot.png',
    interpretation: {
      love: '적극적으로 다가가면 성공합니다. 주저하지 말고 고백하세요.',
      career: '강한 의지로 목표를 향해 전진하세요. 승리가 기다리고 있습니다.',
      money: '적극적인 투자가 좋은 결과를 가져옵니다. 과감하게 행동하세요.',
      general: '자신감과 결단력으로 앞으로 나아가세요. 성취가 눈앞에 있습니다.',
    },
    keywords: ['승리', '결단', '전진', '통제'],
  },
  {
    id: 8,
    name: 'Strength',
    nameKo: '힘',
    image: '/cards/strength.png',
    interpretation: {
      love: '인내와 이해로 관계를 돈독히 하세요. 부드러운 힘이 필요합니다.',
      career: '어려움을 극복할 내면의 힘이 있습니다. 포기하지 마세요.',
      money: '조급해하지 마세요. 꾸준함이 재물을 가져다 줍니다.',
      general: '내면의 용기와 인내심을 발휘할 때입니다. 부드럽게 그러나 강하게.',
    },
    keywords: ['용기', '인내', '내면의 힘', '자제'],
  },
  {
    id: 9,
    name: 'The Hermit',
    nameKo: '은둔자',
    image: '/cards/hermit.png',
    interpretation: {
      love: '혼자만의 시간이 필요합니다. 자신을 먼저 이해해야 타인을 이해할 수 있습니다.',
      career: '깊은 연구와 성찰이 필요한 시기입니다. 혼자 집중하는 시간을 가지세요.',
      money: '충동적인 소비를 자제하세요. 조용히 재정을 점검할 때입니다.',
      general: '내면을 들여다보는 시간이 필요합니다. 명상과 사색을 통해 답을 찾으세요.',
    },
    keywords: ['성찰', '고독', '지혜', '탐구'],
  },
  {
    id: 10,
    name: 'Wheel of Fortune',
    nameKo: '운명의 수레바퀴',
    image: '/cards/wheeloffortune.png',
    interpretation: {
      love: '운명적인 변화가 찾아옵니다. 새로운 인연이 시작될 수 있습니다.',
      career: '기회의 바람이 불고 있습니다. 변화를 두려워하지 마세요.',
      money: '재물운이 상승하는 시기입니다. 행운이 찾아올 수 있습니다.',
      general: '인생의 전환점에 서 있습니다. 변화를 받아들이세요.',
    },
    keywords: ['운명', '변화', '순환', '기회'],
  },
  {
    id: 11,
    name: 'Justice',
    nameKo: '정의',
    image: '/cards/justice.png',
    interpretation: {
      love: '공정하고 균형 잡힌 관계가 형성됩니다. 과거의 카르마가 해소됩니다.',
      career: '정당한 평가를 받게 됩니다. 노력한 만큼의 보상이 주어집니다.',
      money: '공정한 거래가 이루어집니다. 법적 문제가 있다면 유리하게 해결됩니다.',
      general: '균형과 공정함이 중요한 시기입니다. 진실이 밝혀질 것입니다.',
    },
    keywords: ['정의', '균형', '진실', '책임'],
  },
  {
    id: 12,
    name: 'The Hanged Man',
    nameKo: '매달린 남자',
    image: '/cards/hangedman.png',
    interpretation: {
      love: '관점을 바꿔보세요. 희생을 통해 더 깊은 사랑을 경험할 수 있습니다.',
      career: '잠시 멈추고 다른 시각으로 상황을 바라보세요. 기다림이 필요합니다.',
      money: '급하게 움직이지 마세요. 지금은 인내의 시간입니다.',
      general: '다른 관점에서 상황을 바라보세요. 희생을 통해 성장합니다.',
    },
    keywords: ['희생', '기다림', '관점 전환', '인내'],
  },
  {
    id: 13,
    name: 'Death',
    nameKo: '죽음',
    image: '/cards/death.png',
    interpretation: {
      love: '과거의 관계 패턴이 끝나고 새로운 시작이 열립니다. 변화를 받아들이세요.',
      career: '큰 변화가 예고됩니다. 낡은 것을 버리고 새로운 시작을 준비하세요.',
      money: '재정적 구조 변화가 필요합니다. 새로운 수입원을 모색하세요.',
      general: '끝은 곧 새로운 시작입니다. 두려워하지 말고 변화를 수용하세요.',
    },
    keywords: ['변화', '끝과 시작', '재탄생', '변환'],
  },
  {
    id: 14,
    name: 'Temperance',
    nameKo: '절제',
    image: '/cards/temperance.png',
    interpretation: {
      love: '균형 잡힌 관계가 형성됩니다. 서로의 차이를 조화롭게 조율하세요.',
      career: '조화와 협력이 중요합니다. 극단을 피하고 중용을 지키세요.',
      money: '균형 잡힌 재정 관리가 필요합니다. 저축과 소비의 균형을 맞추세요.',
      general: '절제와 균형이 필요한 시기입니다. 인내심을 가지고 조화를 이루세요.',
    },
    keywords: ['균형', '절제', '조화', '인내'],
  },
  {
    id: 15,
    name: 'The Devil',
    nameKo: '악마',
    image: '/cards/devil.png',
    interpretation: {
      love: '집착이나 의존적인 관계에서 벗어나야 합니다. 건강한 경계를 세우세요.',
      career: '물질적 욕망에 사로잡히지 마세요. 진정으로 원하는 것을 생각해보세요.',
      money: '과도한 욕심을 경계하세요. 충동적인 소비나 투자를 피하세요.',
      general: '자신을 옭아매는 것에서 벗어날 때입니다. 자유를 향해 나아가세요.',
    },
    keywords: ['유혹', '속박', '집착', '욕망'],
  },
  {
    id: 16,
    name: 'The Tower',
    nameKo: '탑',
    image: '/cards/tower.png',
    interpretation: {
      love: '갑작스러운 변화가 찾아올 수 있습니다. 위기를 기회로 삼으세요.',
      career: '예상치 못한 상황이 발생할 수 있습니다. 유연하게 대처하세요.',
      money: '재정적 충격에 대비하세요. 비상금을 마련해두는 것이 좋습니다.',
      general: '갑작스러운 변화는 새로운 시작을 위한 것입니다. 흔들려도 일어서세요.',
    },
    keywords: ['격변', '붕괴', '각성', '해방'],
  },
  {
    id: 17,
    name: 'The Star',
    nameKo: '별',
    image: '/cards/star.png',
    interpretation: {
      love: '희망적인 사랑이 찾아옵니다. 상처가 치유되고 새로운 시작이 열립니다.',
      career: '미래에 대한 희망을 가지세요. 좋은 기회가 다가오고 있습니다.',
      money: '재물운이 밝습니다. 꿈꾸던 것들이 현실이 될 수 있습니다.',
      general: '희망과 영감이 가득한 시기입니다. 꿈을 향해 나아가세요.',
    },
    keywords: ['희망', '영감', '치유', '평화'],
  },
  {
    id: 18,
    name: 'The Moon',
    nameKo: '달',
    image: '/cards/moon.png',
    interpretation: {
      love: '불안감이 있을 수 있습니다. 직감을 믿되 환상에 빠지지 마세요.',
      career: '상황이 불명확합니다. 결정을 서두르지 말고 더 많은 정보를 수집하세요.',
      money: '숨겨진 정보가 있을 수 있습니다. 신중하게 판단하세요.',
      general: '무의식의 메시지에 귀 기울이세요. 두려움을 직면할 용기를 가지세요.',
    },
    keywords: ['직관', '불안', '환상', '무의식'],
  },
  {
    id: 19,
    name: 'The Sun',
    nameKo: '태양',
    image: '/cards/sun.png',
    interpretation: {
      love: '밝고 행복한 사랑이 찾아옵니다. 기쁨과 활력이 넘치는 관계입니다.',
      career: '성공과 인정이 기다리고 있습니다. 자신감을 가지고 나아가세요.',
      money: '재물운이 매우 좋습니다. 성공적인 투자와 수익이 기대됩니다.',
      general: '모든 것이 밝고 긍정적입니다. 기쁨과 성공이 가득한 시기입니다.',
    },
    keywords: ['성공', '기쁨', '활력', '긍정'],
  },
  {
    id: 20,
    name: 'Judgement',
    nameKo: '심판',
    image: '/cards/judgement.png',
    interpretation: {
      love: '과거의 관계를 돌아보고 교훈을 얻으세요. 새로운 시작이 가능합니다.',
      career: '중요한 결정의 시간입니다. 소명을 찾고 부름에 응답하세요.',
      money: '과거의 투자가 결실을 맺습니다. 재정적 재탄생의 시기입니다.',
      general: '자기 성찰과 재탄생의 시간입니다. 새로운 삶을 향해 일어서세요.',
    },
    keywords: ['부활', '심판', '각성', '소명'],
  },
  {
    id: 21,
    name: 'The World',
    nameKo: '세계',
    image: '/cards/world.png',
    interpretation: {
      love: '완성된 사랑을 경험합니다. 모든 것이 조화롭고 충만합니다.',
      career: '큰 성취를 이룹니다. 한 사이클이 완성되고 새로운 단계가 시작됩니다.',
      money: '재정적 목표를 달성합니다. 풍요와 성공이 함께합니다.',
      general: '모든 것이 완성되는 시기입니다. 성취감과 충만함을 느끼세요.',
    },
    keywords: ['완성', '성취', '통합', '축하'],
  },
  // 마이너 아르카나 - Wands (지팡이) 14장
  ...generateMinorArcana('Wands', '지팡이', '열정', '행동', '창의성'),
  // 마이너 아르카나 - Cups (컵) 14장
  ...generateMinorArcana('Cups', '컵', '감정', '사랑', '관계'),
  // 마이너 아르카나 - Swords (검) 14장
  ...generateMinorArcana('Swords', '검', '지성', '갈등', '결정'),
  // 마이너 아르카나 - Pentacles (동전) 14장
  ...generateMinorArcana('Pentacles', '동전', '물질', '안정', '현실'),
];

function generateMinorArcana(
  suit: string,
  suitKo: string,
  theme1: string,
  theme2: string,
  theme3: string
): TarotCard[] {
  const ranks = [
    'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
    'Eight', 'Nine', 'Ten', 'Page', 'Knight', 'Queen', 'King'
  ];
  const ranksKo = [
    '에이스', '2', '3', '4', '5', '6', '7',
    '8', '9', '10', '시종', '기사', '여왕', '왕'
  ];

  const suitOffset: Record<string, number> = {
    'Wands': 22,
    'Cups': 36,
    'Swords': 50,
    'Pentacles': 64,
  };

  return ranks.map((rank, index) => ({
    id: suitOffset[suit] + index,
    name: `${rank} of ${suit}`,
    nameKo: `${suitKo}의 ${ranksKo[index]}`,
    image: `/cards/${suit.toLowerCase()}_${(index + 1).toString().padStart(2, '0')}.png`,
    interpretation: {
      love: `${theme1}과 ${theme2}의 에너지가 사랑에 영향을 미칩니다. 감정의 흐름에 주목하세요.`,
      career: `${theme3}을 발휘할 때입니다. 업무에서 ${theme1}을 가지고 임하세요.`,
      money: `${theme2}와 관련된 재물운입니다. ${theme3}에 집중하세요.`,
      general: `${theme1}, ${theme2}, ${theme3}의 조화가 필요한 시기입니다.`,
    },
    keywords: [theme1, theme2, theme3, suit.toLowerCase()],
  }));
}

export const positionLabels: Record<string, { ko: string; description: string }> = {
  past: { ko: '과거', description: '당신의 과거와 그것이 현재에 미치는 영향' },
  present: { ko: '현재', description: '지금 당신이 처한 상황과 도전' },
  future: { ko: '미래', description: '앞으로 다가올 가능성과 잠재력' },
};
