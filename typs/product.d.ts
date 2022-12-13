export type SKU = {
  active: Boolean;
  unit: "KG" | "Gram";
  price: Number;
  size: Number;
};

export type Product = {
  id: Number;
  name: String;
  image: String;
  subTitle: String;
  quantity: Number;
  isPopular: Boolean;
  SKUs: SKU[];
  wish: Boolean;
  discription: String;
};

export type Products = Product[];
export type Recipe = {
  image: String;
  name: String;
  discription: String;
  ingredients: Array<String>;
};
export type Recipes = Recipe[];