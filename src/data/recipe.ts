export type RecipeCategory = {
  id: string;
  name: string;
  order: number;
  children: RecipeCategory[];
};

export const recipeCategories: RecipeCategory[] = [
  {
    id: "korean",
    name: "한식",
    order: 1,
    children: [
      {
        id: "korean-soup",
        name: "국물 요리",
        order: 1,
        children: [
          {
            id: "korean-stew",
            name: "찌개",
            order: 1,
            children: [],
          },
          {
            id: "korean-soup-dish",
            name: "국",
            order: 2,
            children: [],
          },
          {
            id: "korean-hot-pot",
            name: "전골",
            order: 3,
            children: [],
          },
        ],
      },
      {
        id: "korean-stir-fry",
        name: "볶음",
        order: 3,
        children: [],
      }, 
      {
        id: "korean-meal",
        name: "밥·면",
        order: 4,
        children: [
          {
            id: "korean-rice",
            name: "밥",
            order: 1,
            children: [],
          },
          {
            id: "korean-noodle",
            name: "면",
            order: 2,
            children: [],
          },
        ],
      },
      {
        id: "korean-side",
        name: "반찬",
        order: 5,
        children: [
          {
            id: "korean-seasoned",
            name: "무침",
            order: 1,
            children: [],
          },
          {
            id: "korean-braised",
            name: "조림",
            order: 2,
            children: [],
          },
        ],
      },
    ],
  },

  {
    id: "western",
    name: "양식",
    order: 2,
    children: [
      {
        id: "western-pasta-group",
        name: "파스타",
        order: 1,
        children: [
          {
            id: "western-oil-pasta",
            name: "오일 파스타",
            order: 1,
            children: [],
          },
          {
            id: "western-tomato-pasta",
            name: "토마토 파스타",
            order: 2,
            children: [],
          },
          {
            id: "western-cream-pasta",
            name: "크림 파스타",
            order: 3,
            children: [],
          },
        ],
      },
      {
        id: "western-main",
        name: "메인 요리",
        order: 2,
        children: [
          {
            id: "western-steak",
            name: "스테이크",
            order: 1,
            children: [],
          },
          {
            id: "western-roast",
            name: "로스트",
            order: 2,
            children: [],
          },
        ],
      },
      {
        id: "western-light",
        name: "가벼운 식사",
        order: 3,
        children: [
          {
            id: "western-salad",
            name: "샐러드",
            order: 1,
            children: [],
          },
          {
            id: "western-sandwich",
            name: "샌드위치",
            order: 2,
            children: [],
          },
          {
            id: "western-soup",
            name: "수프",
            order: 3,
            children: [],
          },
        ],
      },
    ],
  },

  {
    id: "japanese",
    name: "일식",
    order: 3,
    children: [
      {
        id: "japanese-rice-group",
        name: "밥 요리",
        order: 1,
        children: [
          {
            id: "japanese-donburi",
            name: "덮밥",
            order: 1,
            children: [],
          },
          {
            id: "japanese-sushi",
            name: "초밥",
            order: 2,
            children: [],
          },
          {
            id: "japanese-curry",
            name: "카레",
            order: 3,
            children: [],
          },
        ],
      },
      {
        id: "japanese-noodle-group",
        name: "면 요리",
        order: 2,
        children: [
          {
            id: "japanese-ramen",
            name: "라멘",
            order: 1,
            children: [
              {
                id: "japanese-tonkotsu-ramen",
                name: "돈코츠 라멘",
                order: 1,
                children: [],
              }
            ],
          },
          {
            id: "japanese-udon",
            name: "우동",
            order: 2,
            children: [],
          },
          {
            id: "japanese-soba",
            name: "소바",
            order: 3,
            children: [],
          },
        ],
      },
      {
        id: "japanese-hot-pot",
        name: "전골",
        order: 3,
        children: [],
      },
      {
        id: "japanese-fried",
        name: "튀김",
        order: 4,
        children: [],
      },
    ],
  }, 

  {
    id: "chinese",
    name: "중식",
    order: 4,
    children: [
      {
        id: "chinese-dumpling",
        name: "만두",
        order: 1,
        children: [],
      },
      {
        id: "chinese-spring-roll",
        name: "춘권",
        order: 2,
        children: [],
      },
    ],
  },
];

export type Recipe = {
  id: number;
  categoryId: string;
  title: string;
  calories: number;
  description: string;
  ingredients: string[];
  content: string;
};

export const recipeData: Recipe[] = [
  // ==================================================
  // 한식
  // ==================================================
  {
    id: 1,
    categoryId: "korean",
    title: "한식 집밥 한상",
    calories: 720,
    description: "밥과 국, 반찬으로 구성한 기본적인 한식 집밥",
    ingredients: ["쌀 1컵", "된장국 1인분", "나물 반찬", "김치"],
    content: `
## 한식 집밥 한상

### 구성

1. 따뜻한 밥을 준비합니다.
2. 국과 반찬을 함께 차립니다.
3. 김치를 곁들입니다.
`,
  },
  {
    id: 2,
    categoryId: "korean-soup",
    title: "기본 멸치 육수",
    calories: 45,
    description: "찌개, 국, 전골에 활용할 수 있는 기본 멸치 육수",
    ingredients: ["국물용 멸치 10마리", "다시마 1장", "물 1L"],
    content: `
## 기본 멸치 육수

1. 멸치의 내장을 제거합니다.
2. 물에 멸치와 다시마를 넣습니다.
3. 중불에서 끓인 뒤 건더기를 건집니다.
`,
  },
  {
    id: 3,
    categoryId: "korean-stew",
    title: "돼지고기 김치찌개",
    calories: 420,
    description: "잘 익은 김치와 돼지고기로 끓이는 얼큰한 찌개",
    ingredients: [
      "김치 300g",
      "돼지고기 목살 200g",
      "두부 1/2모",
      "양파 1/2개",
      "대파 1/2대",
    ],
    content: `
## 돼지고기 김치찌개

1. 돼지고기와 김치를 볶습니다.
2. 물을 넣고 충분히 끓입니다.
3. 두부와 대파를 넣고 마무리합니다.
`,
  },
  {
    id: 4,
    categoryId: "korean-soup-dish",
    title: "소고기 미역국",
    calories: 230,
    description: "소고기와 미역을 넣어 깊은 맛을 낸 국",
    ingredients: ["불린 미역 100g", "소고기 120g", "국간장 1큰술", "물 800ml"],
    content: `
## 소고기 미역국

1. 미역과 소고기를 참기름에 볶습니다.
2. 물을 넣고 끓입니다.
3. 국간장으로 간을 맞춥니다.
`,
  },
  {
    id: 5,
    categoryId: "korean-hot-pot",
    title: "소고기 버섯전골",
    calories: 480,
    description: "소고기와 여러 가지 버섯을 함께 끓이는 전골",
    ingredients: ["소고기 200g", "표고버섯", "느타리버섯", "배추", "육수 700ml"],
    content: `
## 소고기 버섯전골

1. 채소와 버섯을 냄비에 담습니다.
2. 소고기와 육수를 넣습니다.
3. 재료가 익을 때까지 끓입니다.
`,
  },
  {
    id: 6,
    categoryId: "korean-stir-fry",
    title: "제육볶음",
    calories: 560,
    description: "매콤달콤한 양념에 돼지고기와 채소를 볶은 요리",
    ingredients: ["돼지고기 300g", "양파 1/2개", "고추장 2큰술", "대파 1대"],
    content: `
## 제육볶음

1. 돼지고기를 양념에 재웁니다.
2. 팬에서 고기와 채소를 볶습니다.
3. 대파를 넣고 마무리합니다.
`,
  },
  {
    id: 7,
    categoryId: "korean-meal",
    title: "간단 한식 한 그릇",
    calories: 610,
    description: "밥이나 면을 활용해 간단하게 만드는 한 그릇 식사",
    ingredients: ["밥 또는 면 1인분", "달걀 1개", "채소", "간장"],
    content: `
## 간단 한식 한 그릇

1. 밥이나 면을 준비합니다.
2. 달걀과 채소를 익힙니다.
3. 간장 양념과 함께 담습니다.
`,
  },
  {
    id: 8,
    categoryId: "korean-rice",
    title: "소고기 비빔밥",
    calories: 640,
    description: "밥 위에 소고기와 여러 가지 나물을 올린 비빔밥",
    ingredients: ["밥 1공기", "소고기 100g", "시금치", "당근", "고추장"],
    content: `
## 소고기 비빔밥

1. 나물과 소고기를 각각 익힙니다.
2. 밥 위에 재료를 올립니다.
3. 고추장을 넣고 비벼 먹습니다.
`,
  },
  {
    id: 9,
    categoryId: "korean-noodle",
    title: "잔치국수",
    calories: 490,
    description: "멸치 육수에 소면과 고명을 올린 국수",
    ingredients: ["소면 100g", "멸치 육수 500ml", "애호박", "달걀", "김가루"],
    content: `
## 잔치국수

1. 소면을 삶아 찬물에 헹굽니다.
2. 멸치 육수를 끓입니다.
3. 면 위에 육수와 고명을 올립니다.
`,
  },
  {
    id: 10,
    categoryId: "korean-side",
    title: "기본 밑반찬 세 가지",
    calories: 260,
    description: "한 번 만들어 여러 끼에 활용할 수 있는 밑반찬 구성",
    ingredients: ["콩나물", "감자", "멸치", "간장", "참기름"],
    content: `
## 기본 밑반찬 세 가지

1. 콩나물을 무칩니다.
2. 감자를 간장에 조립니다.
3. 멸치를 바삭하게 볶습니다.
`,
  },
  {
    id: 11,
    categoryId: "korean-seasoned",
    title: "오이무침",
    calories: 90,
    description: "새콤하고 매콤하게 무친 간단한 오이 반찬",
    ingredients: ["오이 1개", "고춧가루 1큰술", "식초 1큰술", "설탕 1작은술"],
    content: `
## 오이무침

1. 오이를 먹기 좋은 크기로 자릅니다.
2. 양념을 넣고 가볍게 무칩니다.
`,
  },
  {
    id: 12,
    categoryId: "korean-braised",
    title: "감자조림",
    calories: 210,
    description: "감자를 달콤짭짤한 간장 양념에 졸인 반찬",
    ingredients: ["감자 2개", "간장 2큰술", "설탕 1큰술", "물 200ml"],
    content: `
## 감자조림

1. 감자를 깍둑썰기합니다.
2. 양념과 물을 넣고 졸입니다.
3. 국물이 자작해지면 불을 끕니다.
`,
  },

  // ==================================================
  // 양식
  // ==================================================
  {
    id: 13,
    categoryId: "western",
    title: "홈메이드 양식 플레이트",
    calories: 780,
    description: "메인 요리와 샐러드를 함께 담은 양식 한 접시",
    ingredients: ["닭가슴살 200g", "감자", "샐러드 채소", "버터"],
    content: `
## 홈메이드 양식 플레이트

1. 닭가슴살과 감자를 굽습니다.
2. 샐러드를 준비합니다.
3. 한 접시에 함께 담습니다.
`,
  },
  {
    id: 14,
    categoryId: "western-pasta-group",
    title: "기본 파스타 면 삶기",
    calories: 380,
    description: "여러 종류의 파스타에 활용하는 기본 면 삶기 방법",
    ingredients: ["파스타면 100g", "물 1L", "소금 10g"],
    content: `
## 기본 파스타 면 삶기

1. 물을 끓이고 소금을 넣습니다.
2. 파스타면을 넣어 삶습니다.
3. 면수는 따로 보관합니다.
`,
  },
  {
    id: 15,
    categoryId: "western-oil-pasta",
    title: "알리오 올리오",
    calories: 610,
    description: "마늘과 올리브오일로 만드는 간단한 오일 파스타",
    ingredients: ["스파게티면 100g", "마늘 5쪽", "올리브오일", "페페론치노"],
    content: `
## 알리오 올리오

1. 마늘을 올리브오일에 익힙니다.
2. 삶은 면과 면수를 넣습니다.
3. 충분히 섞어 소스를 유화합니다.
`,
  },
  {
    id: 16,
    categoryId: "western-tomato-pasta",
    title: "토마토 미트 파스타",
    calories: 670,
    description: "다진 고기와 토마토소스를 넣어 만든 파스타",
    ingredients: ["파스타면 100g", "다진 소고기 120g", "토마토소스 200g", "양파"],
    content: `
## 토마토 미트 파스타

1. 양파와 다진 고기를 볶습니다.
2. 토마토소스를 넣고 끓입니다.
3. 삶은 면과 소스를 섞습니다.
`,
  },
  {
    id: 17,
    categoryId: "western-cream-pasta",
    title: "베이컨 크림 파스타",
    calories: 790,
    description: "베이컨과 생크림으로 만드는 부드러운 파스타",
    ingredients: ["파스타면 100g", "베이컨 80g", "생크림 150ml", "마늘"],
    content: `
## 베이컨 크림 파스타

1. 베이컨과 마늘을 볶습니다.
2. 생크림을 넣고 끓입니다.
3. 면을 넣고 농도를 맞춥니다.
`,
  },
  {
    id: 18,
    categoryId: "western-main",
    title: "허브 치킨 플레이트",
    calories: 620,
    description: "허브를 곁들여 구운 닭고기 메인 요리",
    ingredients: ["닭다리살 250g", "허브", "올리브오일", "소금"],
    content: `
## 허브 치킨 플레이트

1. 닭고기에 허브와 소금을 뿌립니다.
2. 팬이나 오븐에서 익힙니다.
3. 구운 채소를 곁들입니다.
`,
  },
  {
    id: 19,
    categoryId: "western-steak",
    title: "갈릭 버터 스테이크",
    calories: 730,
    description: "마늘과 버터 향을 입힌 소고기 스테이크",
    ingredients: ["소고기 등심 250g", "버터 20g", "마늘 4쪽", "로즈마리"],
    content: `
## 갈릭 버터 스테이크

1. 고기를 센 불에서 굽습니다.
2. 버터와 마늘을 넣습니다.
3. 녹은 버터를 고기에 끼얹습니다.
`,
  },
  {
    id: 20,
    categoryId: "western-roast",
    title: "허브 로스트 치킨",
    calories: 690,
    description: "허브와 채소를 곁들여 오븐에 구운 닭 요리",
    ingredients: ["닭 1마리", "감자", "당근", "로즈마리", "올리브오일"],
    content: `
## 허브 로스트 치킨

1. 닭에 허브와 소금을 바릅니다.
2. 채소와 함께 오븐 팬에 올립니다.
3. 속까지 충분히 익도록 굽습니다.
`,
  },
  {
    id: 21,
    categoryId: "western-light",
    title: "가벼운 브런치 플레이트",
    calories: 430,
    description: "샐러드와 빵, 달걀로 구성한 가벼운 식사",
    ingredients: ["샐러드 채소", "식빵 1장", "달걀 1개", "방울토마토"],
    content: `
## 가벼운 브런치 플레이트

1. 달걀을 익힙니다.
2. 빵을 굽습니다.
3. 샐러드와 함께 담습니다.
`,
  },
  {
    id: 22,
    categoryId: "western-salad",
    title: "닭가슴살 시저 샐러드",
    calories: 390,
    description: "구운 닭가슴살과 로메인을 넣은 샐러드",
    ingredients: ["닭가슴살 150g", "로메인", "크루통", "시저 드레싱"],
    content: `
## 닭가슴살 시저 샐러드

1. 닭가슴살을 구워 자릅니다.
2. 로메인과 크루통을 담습니다.
3. 드레싱을 뿌립니다.
`,
  },
  {
    id: 23,
    categoryId: "western-sandwich",
    title: "클럽 샌드위치",
    calories: 560,
    description: "닭고기와 베이컨, 채소를 겹쳐 만든 샌드위치",
    ingredients: ["식빵 3장", "닭가슴살", "베이컨", "양상추", "토마토"],
    content: `
## 클럽 샌드위치

1. 식빵과 베이컨을 굽습니다.
2. 빵 사이에 고기와 채소를 올립니다.
3. 먹기 좋은 크기로 자릅니다.
`,
  },
  {
    id: 24,
    categoryId: "western-soup",
    title: "양송이 크림수프",
    calories: 310,
    description: "양송이와 우유를 갈아 만든 부드러운 수프",
    ingredients: ["양송이버섯 150g", "양파", "우유 250ml", "버터"],
    content: `
## 양송이 크림수프

1. 버터에 양파와 버섯을 볶습니다.
2. 우유를 넣고 끓입니다.
3. 곱게 갈아 농도를 맞춥니다.
`,
  },

  // ==================================================
  // 일식
  // ==================================================
  {
    id: 25,
    categoryId: "japanese",
    title: "일식 가정식 정식",
    calories: 740,
    description: "밥과 국, 생선구이로 구성한 기본적인 일식 정식",
    ingredients: ["밥 1공기", "연어 150g", "된장국", "절임채소"],
    content: `
## 일식 가정식 정식

1. 생선을 굽습니다.
2. 밥과 된장국을 준비합니다.
3. 절임채소와 함께 담습니다.
`,
  },
  {
    id: 26,
    categoryId: "japanese-rice-group",
    title: "일식 기본 밥 짓기",
    calories: 310,
    description: "덮밥과 초밥 등에 활용하는 윤기 있는 밥",
    ingredients: ["쌀 1컵", "물 1컵"],
    content: `
## 일식 기본 밥 짓기

1. 쌀을 씻어 불립니다.
2. 물을 맞춰 밥을 짓습니다.
3. 뜸을 들인 뒤 섞습니다.
`,
  },
  {
    id: 27,
    categoryId: "japanese-donburi",
    title: "규동",
    calories: 650,
    description: "달콤한 간장 소스에 소고기와 양파를 졸인 덮밥",
    ingredients: ["밥 1공기", "소고기 150g", "양파", "간장", "설탕"],
    content: `
## 규동

1. 양파를 간장 양념에 끓입니다.
2. 소고기를 넣고 익힙니다.
3. 밥 위에 올립니다.
`,
  },
  {
    id: 28,
    categoryId: "japanese-sushi",
    title: "연어 초밥",
    calories: 480,
    description: "초밥용 밥 위에 연어를 올린 기본 초밥",
    ingredients: ["초밥용 밥", "생연어", "식초", "설탕", "와사비"],
    content: `
## 연어 초밥

1. 밥에 초밥초를 섞습니다.
2. 밥을 한입 크기로 뭉칩니다.
3. 와사비와 연어를 올립니다.
`,
  },
  {
    id: 29,
    categoryId: "japanese-curry",
    title: "일본식 소고기 카레",
    calories: 720,
    description: "감자와 당근, 소고기를 넣은 진한 일본식 카레",
    ingredients: ["소고기 150g", "감자", "당근", "양파", "카레 루"],
    content: `
## 일본식 소고기 카레

1. 고기와 채소를 볶습니다.
2. 물을 넣고 재료를 익힙니다.
3. 카레 루를 풀어 끓입니다.
`,
  },
  {
    id: 30,
    categoryId: "japanese-noodle-group",
    title: "일식 면 육수",
    calories: 120,
    description: "라멘, 우동, 소바에 응용할 수 있는 기본 면 육수",
    ingredients: ["다시마", "가쓰오부시", "간장", "맛술", "물"],
    content: `
## 일식 면 육수

1. 다시마를 물에 우립니다.
2. 가쓰오부시를 넣었다가 건집니다.
3. 간장과 맛술로 간합니다.
`,
  },
  {
    id: 31,
    categoryId: "japanese-ramen",
    title: "쇼유 라멘",
    calories: 680,
    description: "간장 베이스 국물에 차슈를 올린 라멘",
    ingredients: ["라멘면", "닭 육수", "간장", "차슈", "대파"],
    content: `
## 쇼유 라멘

1. 육수에 간장을 넣습니다.
2. 면을 따로 삶습니다.
3. 국물에 면과 고명을 담습니다.
`,
  },
  {
    id: 32,
    categoryId: "japanese-tonkotsu-ramen",
    title: "돈코츠 라멘",
    calories: 820,
    description: "진한 돼지뼈 육수를 사용한 라멘",
    ingredients: ["라멘면", "돈코츠 육수", "차슈", "달걀", "대파"],
    content: `
## 돈코츠 라멘

1. 돈코츠 육수를 끓입니다.
2. 라멘면을 삶습니다.
3. 차슈와 달걀을 올립니다.
`,
  },
  {
    id: 33,
    categoryId: "japanese-udon",
    title: "소고기 우동",
    calories: 590,
    description: "달큰한 소고기와 따뜻한 국물이 어우러진 우동",
    ingredients: ["우동면", "소고기 100g", "대파", "쯔유", "물"],
    content: `
## 소고기 우동

1. 소고기를 볶습니다.
2. 쯔유 육수에 우동면을 넣습니다.
3. 소고기와 대파를 올립니다.
`,
  },
  {
    id: 34,
    categoryId: "japanese-soba",
    title: "냉소바",
    calories: 470,
    description: "차가운 쯔유에 찍어 먹는 메밀국수",
    ingredients: ["메밀면", "쯔유", "무", "대파", "김가루"],
    content: `
## 냉소바

1. 메밀면을 삶아 찬물에 헹굽니다.
2. 쯔유를 차갑게 준비합니다.
3. 무와 대파를 곁들입니다.
`,
  },
  {
    id: 35,
    categoryId: "japanese-hot-pot",
    title: "스키야키",
    calories: 760,
    description: "소고기와 채소를 달콤한 간장 국물에 익히는 전골",
    ingredients: ["소고기 250g", "배추", "두부", "버섯", "간장 양념"],
    content: `
## 스키야키

1. 냄비에 소고기와 채소를 담습니다.
2. 간장 양념을 넣고 익힙니다.
3. 기호에 따라 달걀을 곁들입니다.
`,
  },
  {
    id: 36,
    categoryId: "japanese-fried",
    title: "새우튀김",
    calories: 520,
    description: "바삭한 튀김옷을 입힌 일본식 새우튀김",
    ingredients: ["새우 6마리", "튀김가루", "찬물", "식용유"],
    content: `
## 새우튀김

1. 새우를 손질합니다.
2. 찬물로 튀김 반죽을 만듭니다.
3. 반죽을 묻혀 바삭하게 튀깁니다.
`,
  },

  // ==================================================
  // 중식
  // ==================================================
  {
    id: 37,
    categoryId: "chinese",
    title: "중식 홈파티 한상",
    calories: 890,
    description: "볶음밥과 만두, 춘권으로 구성한 중식 한상",
    ingredients: ["밥", "달걀", "만두", "춘권", "채소"],
    content: `
## 중식 홈파티 한상

1. 볶음밥을 준비합니다.
2. 만두와 춘권을 굽거나 튀깁니다.
3. 한 접시에 함께 담습니다.
`,
  },
  {
    id: 38,
    categoryId: "chinese-dumpling",
    title: "돼지고기 군만두",
    calories: 540,
    description: "돼지고기와 부추 소를 넣어 바삭하게 구운 만두",
    ingredients: ["만두피", "다진 돼지고기", "부추", "양배추", "간장"],
    content: `
## 돼지고기 군만두

1. 고기와 채소로 만두소를 만듭니다.
2. 만두피에 소를 넣어 빚습니다.
3. 팬에서 바닥이 바삭해지도록 굽습니다.
`,
  },
  {
    id: 39,
    categoryId: "chinese-spring-roll",
    title: "채소 춘권",
    calories: 420,
    description: "채소 소를 춘권피에 말아 바삭하게 튀긴 요리",
    ingredients: ["춘권피", "양배추", "당근", "숙주", "식용유"],
    content: `
## 채소 춘권

1. 채소를 볶아 수분을 제거합니다.
2. 춘권피에 채소를 넣어 말아줍니다.
3. 노릇하게 튀깁니다.
`,
  },
];