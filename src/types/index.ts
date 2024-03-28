export type Tables = {
  classes: string[];
  id: string;
};

export type Dish = {
  id: string;
  name: string;
  price: number;
};

export type OrderedDish = Dish & {
  quantity: number;
};

export type Dishes = {
  starters: Dish[];
  pizzas: Dish[];
  pasta: Dish[];
  desserts: Dish[];
  drinks: Dish[];
};

export type Diner = {
  table: string;
  time: string;
  date: string;
  orderedItems: OrderedDish[];
  tip: number;
};

export type Tips = {
  id: string;
  value: number;
  label: string;
};
