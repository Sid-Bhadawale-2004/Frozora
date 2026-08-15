import pulao from "@/assets/recipe-pulao.jpg";
import friedRice from "@/assets/recipe-friedrice.jpg";
import curry from "@/assets/recipe-curry.jpg";
import soup from "@/assets/recipe-soup.jpg";
import type { ProductId } from "./frozon-data";

export type Recipe = {
  slug: string;
  emoji: string;
  title: string;
  mix: ProductId;
  time: string;
  difficulty: string;
  image: string;
  highlight: string;
  ingredients: string[];
  method: string[];
};

export const recipes: Recipe[] = [
  {
    slug: "vegetable-pulao",
    emoji: "🍚",
    title: "Vegetable Pulao",
    mix: "daily",
    time: "25 min",
    difficulty: "Easy",
    image: pulao,
    highlight: "A wholesome everyday pulao made easier with FROZORA Daily Mix.",
    ingredients: [
      "1 cup basmati rice",
      "1 cup FROZORA Daily Mix",
      "1 onion, sliced",
      "1 green chilli",
      "1 teaspoon ginger-garlic paste",
      "1 tablespoon cooking oil or ghee",
      "1 teaspoon cumin",
      "2 cups water",
      "Salt to taste",
      "Garam masala",
      "Coriander leaves",
    ],
    method: [
      "Wash and soak the basmati rice for 15–20 minutes.",
      "Heat oil or ghee in a pan.",
      "Add cumin and sliced onion. Sauté until lightly golden.",
      "Add ginger-garlic paste and green chilli.",
      "Add 1 cup FROZORA Daily Mix directly from the freezer.",
      "Sauté for 2–3 minutes.",
      "Add soaked rice, salt and garam masala.",
      "Add water and bring to a boil.",
      "Cover and cook on low heat until the rice is fluffy.",
      "Garnish with fresh coriander and serve hot.",
    ],
  },
  {
    slug: "veg-fried-rice",
    emoji: "🍜",
    title: "Veg Fried Rice",
    mix: "indo",
    time: "20 min",
    difficulty: "Easy",
    image: friedRice,
    highlight: "Restaurant-style fried rice made quick with your ready-to-cook FROZORA mix.",
    ingredients: [
      "2 cups cooked and cooled rice",
      "1 cup FROZORA Indo-Chinese Mix",
      "1 tablespoon cooking oil",
      "1 teaspoon chopped garlic",
      "1 teaspoon chopped ginger",
      "1–2 green chillies",
      "1 tablespoon soy sauce",
      "1 teaspoon vinegar",
      "1 teaspoon chilli sauce",
      "Salt to taste",
      "Black pepper",
      "Spring onions",
    ],
    method: [
      "Heat oil in a wok or large pan on high heat.",
      "Add garlic, ginger and green chillies.",
      "Add 1 cup FROZORA Indo-Chinese Mix directly from the freezer.",
      "Stir-fry on high heat for 3–4 minutes.",
      "Add the cooked and cooled rice.",
      "Add soy sauce, vinegar and chilli sauce.",
      "Season with salt and black pepper.",
      "Toss everything on high heat for 2–3 minutes.",
      "Garnish with spring onions.",
      "Serve immediately.",
    ],
  },
  {
    slug: "creamy-mixed-vegetable-curry",
    emoji: "🍛",
    title: "Creamy Mixed Vegetable Curry",
    mix: "curry",
    time: "30 min",
    difficulty: "Easy",
    image: curry,
    highlight: "A comforting mixed vegetable curry packed with colourful vegetables and flavour.",
    ingredients: [
      "1 cup FROZORA Curry Mix",
      "1 onion, finely chopped",
      "2 tomatoes, pureed",
      "1 tablespoon cooking oil",
      "1 teaspoon cumin",
      "1 teaspoon ginger-garlic paste",
      "½ teaspoon turmeric",
      "1 teaspoon red chilli powder",
      "1 teaspoon coriander powder",
      "½ teaspoon garam masala",
      "½ cup water",
      "2 tablespoons cream or fresh curd",
      "Salt to taste",
      "Fresh coriander",
    ],
    method: [
      "Heat oil in a pan and add cumin.",
      "Add chopped onion and sauté until golden.",
      "Add ginger-garlic paste.",
      "Add tomato puree and cook until the oil begins to separate.",
      "Add turmeric, chilli powder and coriander powder.",
      "Add 1 cup FROZORA Curry Mix directly from the freezer.",
      "Mix well and cook for 3–4 minutes.",
      "Add water, cover and simmer until the vegetables are tender.",
      "Add cream or fresh curd and mix gently.",
      "Add garam masala and garnish with coriander.",
    ],
  },
  {
    slug: "creamy-vegetable-soup",
    emoji: "🥣",
    title: "Creamy Vegetable Soup",
    mix: "soup",
    time: "20 min",
    difficulty: "Easy",
    image: soup,
    highlight: "A warm, comforting bowl of vegetable goodness made in minutes.",
    ingredients: [
      "1 cup FROZORA Soup Mix",
      "1 teaspoon butter",
      "1 teaspoon chopped garlic",
      "2 cups vegetable stock or water",
      "½ cup milk",
      "1 teaspoon cornflour",
      "Salt to taste",
      "Black pepper",
      "Mixed herbs",
      "Fresh cream — optional",
    ],
    method: [
      "Heat butter in a saucepan.",
      "Add chopped garlic and sauté for a few seconds.",
      "Add 1 cup FROZORA Soup Mix directly from the freezer.",
      "Sauté for 2–3 minutes.",
      "Add vegetable stock or water.",
      "Cover and simmer until the vegetables are tender.",
      "Mix cornflour with a little water and add it to the soup.",
      "Add milk and stir continuously.",
      "Season with salt, black pepper and mixed herbs.",
      "Simmer for another 2–3 minutes.",
      "Add a small amount of fresh cream if desired.",
      "Serve hot.",
    ],
  },
];
