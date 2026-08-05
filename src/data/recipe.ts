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
                id: "beaf-ramen",
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
  {
    id: 1,
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
      "고춧가루 1큰술",
      "다진 마늘 1큰술",
      "국간장 1큰술",
      "물 500ml",
    ],
    content: `
## 돼지고기 김치찌개

### 준비하기

1. 김치와 돼지고기를 먹기 좋은 크기로 자릅니다.
2. 두부, 양파, 대파를 손질합니다.

### 조리 순서

1. 냄비에 돼지고기를 넣고 볶습니다.
2. 김치를 넣고 충분히 볶습니다.
3. 물과 양념을 넣고 15분 정도 끓입니다.
4. 두부와 양파를 넣고 더 끓입니다.
5. 대파를 넣고 마무리합니다.

### 조리 팁

- 신김치를 사용하면 맛이 더 깊어집니다.
- 김치와 고기를 먼저 볶는 과정이 중요합니다.
`,
  },
  {
    id: 2,
    categoryId: "korean-stir-fry",
    title: "제육볶음",
    calories: 560,
    description: "매콤달콤한 양념에 돼지고기와 채소를 볶은 요리",
    ingredients: [
      "돼지고기 앞다리살 300g",
      "양파 1/2개",
      "대파 1대",
      "당근 1/3개",
      "고추장 2큰술",
      "고춧가루 1큰술",
      "간장 1큰술",
      "설탕 1큰술",
      "다진 마늘 1큰술",
    ],
    content: `
## 제육볶음

### 준비하기

1. 돼지고기를 먹기 좋은 크기로 자릅니다.
2. 양파, 당근, 대파를 손질합니다.
3. 양념 재료를 섞습니다.

### 조리 순서

1. 돼지고기에 양념을 넣고 재웁니다.
2. 팬을 달군 뒤 고기를 볶습니다.
3. 양파와 당근을 넣습니다.
4. 마지막에 대파를 넣고 마무리합니다.

### 조리 팁

- 센 불에서 빠르게 볶아야 물이 덜 생깁니다.
`,
  },
  {
    id: 3,
    categoryId: "western-oil-pasta",
    title: "알리오 올리오",
    calories: 610,
    description: "마늘과 올리브오일로 만드는 간단한 오일 파스타",
    ingredients: [
      "스파게티 면 100g",
      "마늘 5쪽",
      "올리브오일 4큰술",
      "페페론치노 2개",
      "면수 100ml",
      "소금 약간",
      "후추 약간",
    ],
    content: `
## 알리오 올리오

### 면 삶기

1. 끓는 물에 소금을 넣습니다.
2. 면을 포장지 표기 시간보다 1분 짧게 삶습니다.
3. 면수를 따로 보관합니다.

### 조리 순서

1. 팬에 올리브오일과 마늘을 넣습니다.
2. 약불에서 마늘 향을 냅니다.
3. 페페론치노와 면을 넣습니다.
4. 면수를 조금씩 넣으며 섞습니다.

### 조리 팁

- 마늘은 약불에서 천천히 익혀야 타지 않습니다.
`,
  },
  {
    id: 4,
    categoryId: "western-steak",
    title: "갈릭 버터 스테이크",
    calories: 730,
    description: "마늘과 버터 향을 입힌 소고기 스테이크",
    ingredients: [
      "소고기 등심 250g",
      "버터 20g",
      "마늘 4쪽",
      "로즈마리 1줄기",
      "소금 약간",
      "후추 약간",
    ],
    content: `
## 갈릭 버터 스테이크

### 준비하기

1. 고기를 실온에 20분 정도 둡니다.
2. 앞뒤로 소금과 후추를 뿌립니다.

### 조리 순서

1. 팬을 강불로 충분히 달굽니다.
2. 고기를 앞뒤로 굽습니다.
3. 버터, 마늘, 로즈마리를 넣습니다.
4. 녹은 버터를 고기에 끼얹습니다.
5. 잠시 휴지한 뒤 썹니다.
`,
  },
  {
    id: 7,
    categoryId: "japanese-donburi",
    title: "규동",
    calories: 650,
    description: "달콤한 간장 소스에 소고기와 양파를 졸인 덮밥",
    ingredients: [
      "밥 1공기",
      "소고기 불고기용 150g",
      "양파 1/2개",
      "간장 2큰술",
      "설탕 1큰술",
      "맛술 1큰술",
      "물 100ml",
    ],
    content: `
## 규동

### 조리 순서

1. 양파를 얇게 썹니다.
2. 냄비에 물, 간장, 설탕, 맛술을 넣습니다.
3. 양파를 넣고 끓입니다.
4. 소고기를 넣고 익힙니다.
5. 밥 위에 올려 마무리합니다.
`,
  },
  {
    id: 8,
    categoryId: "japanese-udon",
    title: "소고기 우동",
    calories: 590,
    description: "달큰한 소고기와 따뜻한 국물이 어우러진 우동",
    ingredients: [
      "우동면 1인분",
      "소고기 100g",
      "대파 1/2대",
      "쯔유 3큰술",
      "물 400ml",
      "설탕 1작은술",
    ],
    content: `
## 소고기 우동

### 조리 순서

1. 소고기를 팬에 볶습니다.
2. 물과 쯔유를 끓입니다.
3. 우동면을 넣습니다.
4. 볶은 소고기와 대파를 올립니다.
`,
  },
];