import { CategoryOption, FortuneResult, FortuneSection } from '@/types/tarot';

export const categories: CategoryOption[] = [
  {
    id: 'newyear',
    label: '신년운세',
    description: '2025년 을사년 운세를 확인하세요',
    icon: '🐍',
  },
  {
    id: 'saju',
    label: '전통사주',
    description: '사주팔자로 보는 나의 운명',
    icon: '☯️',
  },
  {
    id: 'tojeong',
    label: '토정비결',
    description: '조선시대부터 전해오는 지혜',
    icon: '📜',
  },
  {
    id: 'daily',
    label: '지정일운세',
    description: '특정 날짜의 운세를 확인하세요',
    icon: '📅',
  },
];

// 샘플 운세 데이터 (실제로는 API나 알고리즘으로 생성)
export function generateFortune(category: string, userInfo?: { birthDate?: string; targetDate?: string }): FortuneResult {
  const fortunes: Record<string, FortuneResult> = {
    newyear: {
      category: 'newyear',
      title: '2025년 을사년 신년운세',
      summary: '새해에는 큰 변화와 기회가 찾아올 운세입니다. 상반기에는 준비의 시간을, 하반기에는 도약의 시간을 맞이하게 됩니다.',
      sections: [
        {
          title: '총운',
          content: '을사년은 푸른 뱀의 해로, 지혜와 변화의 기운이 강합니다. 올해는 새로운 시작과 변화에 적합한 해입니다. 특히 학업이나 자기계발에 있어 큰 성과를 거둘 수 있습니다. 다만 급격한 변화보다는 차근차근 준비하는 자세가 필요합니다.',
          rating: 4,
        },
        {
          title: '재물운',
          content: '상반기에는 지출이 많을 수 있으나, 하반기로 갈수록 재물운이 상승합니다. 투자보다는 저축에 집중하시고, 5월과 9월에 좋은 기회가 찾아올 수 있습니다. 부동산이나 큰 거래는 신중하게 결정하세요.',
          rating: 3,
        },
        {
          title: '애정운',
          content: '싱글이라면 봄에 좋은 인연을 만날 수 있습니다. 커플이라면 서로에 대한 이해가 깊어지는 한 해가 될 것입니다. 가을에는 관계의 진전이 있을 수 있으니 중요한 결정은 그때 하시길 권합니다.',
          rating: 4,
        },
        {
          title: '건강운',
          content: '전반적으로 양호하나 환절기 건강관리에 유의하세요. 특히 소화기 계통과 호흡기 건강에 신경 쓰시고, 규칙적인 운동 습관을 들이시면 좋겠습니다. 스트레스 관리도 중요합니다.',
          rating: 3,
        },
        {
          title: '직장/사업운',
          content: '새로운 프로젝트나 직무 변경의 기회가 있습니다. 상반기에 준비한 것들이 하반기에 빛을 발합니다. 동료와의 협력이 중요하며, 11월에 승진이나 좋은 소식이 있을 수 있습니다.',
          rating: 4,
        },
      ],
      luckyItems: {
        color: '청색, 녹색',
        number: 3,
        direction: '동쪽',
      },
    },
    saju: {
      category: 'saju',
      title: '전통사주 분석',
      summary: '당신의 사주팔자를 분석한 결과입니다. 타고난 기질과 운명의 흐름을 살펴보세요.',
      sections: [
        {
          title: '기본 성격',
          content: '총명하고 분석적인 성향을 가지고 있습니다. 논리적 사고력이 뛰어나며 학습 능력이 우수합니다. 다만 완벽주의적 성향이 있어 때로는 스스로를 힘들게 할 수 있습니다. 타인에 대한 배려심이 깊고 정의감이 강합니다.',
          rating: 4,
        },
        {
          title: '적성과 재능',
          content: '분석력과 창의력을 함께 갖추고 있어 연구직, 기획직, 전문직에 적합합니다. 예술적 감각도 있어 창작 활동에서도 두각을 나타낼 수 있습니다. 리더십보다는 전문가로서의 길이 더 맞습니다.',
          rating: 4,
        },
        {
          title: '대인관계',
          content: '신중하고 깊이 있는 관계를 선호합니다. 처음에는 낯을 가리지만 한번 친해지면 오래가는 관계를 유지합니다. 소수의 깊은 인연이 인생에서 큰 도움이 됩니다.',
          rating: 3,
        },
        {
          title: '인생의 흐름',
          content: '청년기에는 다양한 경험과 배움의 시기입니다. 중년에 안정을 찾고 노년에 결실을 맺는 대기만성형입니다. 30대 후반부터 운이 상승하기 시작하여 40대에 전성기를 맞이합니다.',
          rating: 4,
        },
        {
          title: '주의할 점',
          content: '과로와 스트레스에 취약하니 건강관리에 유의하세요. 완벽을 추구하다 지칠 수 있으니 적당히 타협하는 지혜도 필요합니다. 금전 문제는 신중하게 결정하고, 보증은 피하세요.',
          rating: 3,
        },
      ],
      luckyItems: {
        color: '흰색, 금색',
        number: 7,
        direction: '서쪽',
      },
    },
    tojeong: {
      category: 'tojeong',
      title: '토정비결',
      summary: '조선시대 토정 이지함 선생이 전한 비결로 올해의 운세를 살펴봅니다.',
      sections: [
        {
          title: '상괘 (1~4월)',
          content: '봄바람이 불어오니 만물이 소생하는 형국입니다. 새로운 시작에 길한 기운이 있으니 계획했던 일을 실행에 옮기기 좋습니다. 다만 성급하게 서두르지 말고 차근차근 진행하세요. 귀인의 도움이 있을 수 있습니다.',
          rating: 4,
        },
        {
          title: '중괘 (5~8월)',
          content: '여름 햇살처럼 밝은 기운이 함께합니다. 노력한 만큼의 결실을 볼 수 있는 시기입니다. 재물운이 좋아지고 인간관계도 원만해집니다. 다만 건강에 유의하고 과욕을 부리지 마세요.',
          rating: 5,
        },
        {
          title: '하괘 (9~12월)',
          content: '가을 수확의 기쁨을 누릴 수 있습니다. 한 해 동안의 노력이 결실을 맺는 시기입니다. 새로운 인연이나 기회가 찾아올 수 있으니 마음을 열고 받아들이세요. 연말에는 휴식을 취하며 다음 해를 준비하세요.',
          rating: 4,
        },
        {
          title: '총평',
          content: '올해는 전반적으로 상승하는 운세입니다. 특히 중반부에 가장 좋은 기운이 모이니 이때 중요한 일을 추진하세요. 금전적으로도 안정되고 건강도 양호합니다. 가족과의 화목이 행복의 열쇠입니다.',
          rating: 4,
        },
      ],
      luckyItems: {
        color: '황색, 적색',
        number: 8,
        direction: '남쪽',
      },
    },
    daily: {
      category: 'daily',
      title: '지정일 운세',
      summary: '선택하신 날짜의 운세를 분석한 결과입니다.',
      sections: [
        {
          title: '오늘의 총운',
          content: '전반적으로 순조로운 하루입니다. 계획한 일이 잘 풀리고 주변의 협조도 얻기 쉽습니다. 오전에 중요한 일을 처리하면 좋은 결과가 있을 것입니다. 다만 오후에는 피로감이 올 수 있으니 무리하지 마세요.',
          rating: 4,
        },
        {
          title: '금전운',
          content: '재물운이 양호합니다. 예상치 못한 수입이 있을 수 있고, 쇼핑을 하더라도 좋은 물건을 만날 수 있습니다. 다만 큰 금액의 투자나 대출은 오늘은 피하시는 것이 좋습니다.',
          rating: 4,
        },
        {
          title: '애정운',
          content: '연인이 있다면 달콤한 데이트를 즐기기 좋은 날입니다. 솔로라면 매력이 빛나는 날이니 적극적으로 나서보세요. 오래된 친구와의 만남도 즐거울 것입니다.',
          rating: 5,
        },
        {
          title: '주의사항',
          content: '말실수에 주의하세요. 의도치 않은 오해가 생길 수 있습니다. 중요한 결정은 충분히 생각한 후에 내리시고, 운전이나 외출 시 안전에 유의하세요.',
          rating: 3,
        },
      ],
      luckyItems: {
        color: '파란색',
        number: 5,
        direction: '북쪽',
      },
    },
  };

  return fortunes[category] || fortunes.newyear;
}
