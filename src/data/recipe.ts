export const recipes = [
    {
        id: 1,
        category: "한식",
        subCategory: "찌개",
        title: "돼지고기 김치찌개",
        calories: 420,
    },
    {
        id: 2,
        category: "한식",
        subCategory: "볶음",
        title: "제육볶음",
        calories: 560,
    },
    {
        id: 3,
        category: "양식",
        subCategory: "파스타",
        title: "알리오 올리오",
        calories: 610,
    }];

export type RecipeType = {
  id: string;
  name: string;
  children: {
    id: string;
    name: string;
  }[];
};

export const recipeTypes: RecipeType[] = [
  {
    id: "korean",
    name: "한식",
    children: [
      { id: "korean-stew", name: "찌개" },
      { id: "korean-soup", name: "국·탕" },
      { id: "korean-stir-fry", name: "볶음" },
      { id: "korean-rice", name: "밥" },
      { id: "korean-noodle", name: "면" },
      { id: "korean-side-dish", name: "반찬" },
    ],
  },
  {
    id: "western",
    name: "양식",
    children: [
      { id: "western-pasta", name: "파스타" },
      { id: "western-steak", name: "스테이크" },
      { id: "western-salad", name: "샐러드" },
      { id: "western-soup", name: "수프" },
      { id: "western-sandwich", name: "샌드위치" },
    ],
  },
  {
    id: "chinese",
    name: "중식",
    children: [
      { id: "chinese-rice", name: "볶음밥" },
      { id: "chinese-noodle", name: "면 요리" },
      { id: "chinese-meat", name: "고기 요리" },
      { id: "chinese-tofu", name: "두부 요리" },
    ],
  },
  {
    id: "japanese",
    name: "일식",
    children: [
      { id: "japanese-rice", name: "덮밥" },
      { id: "japanese-noodle", name: "면 요리" },
      { id: "japanese-sushi", name: "초밥" },
      { id: "japanese-hot-pot", name: "전골" },
    ],
  },
  {
    id: "dessert",
    name: "디저트",
    children: [
      { id: "dessert-cake", name: "케이크" },
      { id: "dessert-cookie", name: "쿠키" },
      { id: "dessert-bread", name: "빵" },
      { id: "dessert-drink", name: "음료" },
    ],
  },
];