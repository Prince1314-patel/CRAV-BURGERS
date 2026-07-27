export type MenuItem = {
  id: string;
  name: string;
  price: number;
  prepTime: string;
  bun: string;
  patty: string;
  spice: "Mild" | "Medium" | "Hot";
  calories: number;
  protein: number;
};

export const menuItems: MenuItem[] = [
  {
    id: "classic",
    name: "Classic Burger",
    price: 16,
    prepTime: "10–12 min",
    bun: "Brioche",
    patty: "Beef",
    spice: "Mild",
    calories: 720,
    protein: 32,
  },
  {
    id: "spicy-jalapeno",
    name: "Spicy Jalapeño Burger",
    price: 18,
    prepTime: "12–14 min",
    bun: "Brioche",
    patty: "Beef",
    spice: "Hot",
    calories: 810,
    protein: 34,
  },
  {
    id: "bacon-cheese",
    name: "Bacon Cheese Burger",
    price: 21,
    prepTime: "12–15 min",
    bun: "Brioche",
    patty: "Beef",
    spice: "Mild",
    calories: 900,
    protein: 37,
  },
  {
    id: "veggie-delight",
    name: "Veggie Delight Burger",
    price: 15,
    prepTime: "10–12 min",
    bun: "Sesame",
    patty: "Veggie",
    spice: "Mild",
    calories: 620,
    protein: 17,
  },
  {
    id: "bbq-ranch",
    name: "BBQ Ranch Burger",
    price: 19,
    prepTime: "12–14 min",
    bun: "Brioche",
    patty: "Beef",
    spice: "Medium",
    calories: 870,
    protein: 36,
  },
  {
    id: "mushroom-swiss",
    name: "Mushroom Swiss Burger",
    price: 20,
    prepTime: "12–14 min",
    bun: "Brioche",
    patty: "Beef",
    spice: "Mild",
    calories: 830,
    protein: 33,
  },
];
