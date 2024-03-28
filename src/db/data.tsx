import type { Tables, Dishes, Tips } from "../types";

const commonClasses = [
  "grid",
  "place-items-center",
  "bg-gray-100",
  "hover:bg-gray-200",
  "border-2",
  "sm:border-4",
  "border-green-300",
  "cursor-pointer",
];

const roundTables = ["rounded-full", "w-16", "sm:w-20", "h-16", "sm:h-20"];

const squareTables = ["rounded-lg", "w-10", "sm:w-14", "h-10", "sm:h-14"];

export const tables: Tables[] = [
  {
    classes: ["table-1", ...roundTables, ...commonClasses],
    id: "1",
  },
  {
    classes: ["table-2", ...roundTables, ...commonClasses],
    id: "2",
  },
  {
    classes: ["table-3", ...roundTables, ...commonClasses],
    id: "3",
  },
  {
    classes: ["table-4", ...roundTables, ...commonClasses],
    id: "4",
  },
  {
    classes: ["table-5", ...roundTables, ...commonClasses],
    id: "5",
  },
  {
    classes: ["table-6", ...roundTables, ...commonClasses],
    id: "6",
  },
  {
    classes: [
      "bar",
      "w-full",
      "h-full",
      "bg-green-300",
      "grid",
      "place-items-center",
      "pointer-events-none",
    ],
    id: "BAR",
  },
  {
    classes: ["table-7", ...squareTables, ...commonClasses],
    id: "7",
  },
  {
    classes: ["table-8", ...squareTables, ...commonClasses],
    id: "8",
  },
  {
    classes: ["table-9", ...squareTables, ...commonClasses],
    id: "9",
  },
  {
    classes: ["table-10", ...squareTables, ...commonClasses],
    id: "10",
  },
];

export const tipOptions: Tips[] = [
  {
    id: "tip-0",
    value: 0,
    label: "0%",
  },
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-25",
    value: 0.25,
    label: "25%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

export const dishes: Dishes = {
  starters: [
    {
      id: "001",
      name: "Bruschetta",
      price: 5.0,
    },
    {
      id: "043",
      name: "Insalata Caprese",
      price: 8.0,
    },
    {
      id: "033",
      name: "Focaccia",
      price: 5.5,
    },

    {
      id: "002",
      name: "Caprese Salad",
      price: 6.5,
    },

    {
      id: "003",
      name: "Garlic Bread",
      price: 4.0,
    },
    {
      id: "004",
      name: "Minestrone Soup",
      price: 5.0,
    },
    {
      id: "005",
      name: "Calamari",
      price: 8.5,
    },
    {
      id: "006",
      name: "Antipasto Platter",
      price: 9.5,
    },

    {
      id: "023",
      name: "Cesar Salad",
      price: 7.0,
    },
  ],

  pizzas: [
    {
      id: "007",
      name: "Margherita Pizza",
      price: 10.5,
    },
    {
      id: "008",
      name: "Pepperoni Pizza",
      price: 12.0,
    },
    {
      id: "009",
      name: "Quattro Formaggi Pizza",
      price: 13.0,
    },
    {
      id: "010",
      name: "Capricciosa Pizza",
      price: 11.5,
    },
  ],

  pasta: [
    {
      id: "011",
      name: "Carbonara",
      price: 14.5,
    },
    {
      id: "044",
      name: "Gnocchi",
      price: 11.0,
    },

    {
      id: "046",
      name: "Tortellini",
      price: 12.0,
    },
    {
      id: "034",
      name: "Ravioli",
      price: 12.0,
    },
    {
      id: "035",
      name: "Linguine Vongole",
      price: 14.5,
    },
    {
      id: "036",
      name: "Lasagna",
      price: 11.5,
    },
    {
      id: "012",
      name: "Bolognese",
      price: 12.0,
    },
    {
      id: "013",
      name: "Aglio e Olio",
      price: 11.5,
    },
    {
      id: "014",
      name: "Pesto",
      price: 13.0,
    },

    {
      id: "024",
      name: "Mushroom Risotto",
      price: 13.5,
    },
    {
      id: "025",
      name: "Penne Arrabbiata",
      price: 10.5,
    },
    {
      id: "026",
      name: "Cannelloni",
      price: 11.0,
    },
  ],

  desserts: [
    {
      id: "015",
      name: "Tiramisu",
      price: 7.5,
    },

    {
      id: "047",
      name: "Cannoli alla Nutella",
      price: 8.0,
    },
    {
      id: "048",
      name: "Tiramisu al Cioccolato",
      price: 9.5,
    },
    {
      id: "049",
      name: "Gelato al Pistacchio",
      price: 6.0,
    },

    {
      id: "037",
      name: "Cannoli Siciliani",
      price: 7.0,
    },
    {
      id: "038",
      name: "Torta della Nonna",
      price: 9.5,
    },
    {
      id: "039",
      name: "Affogato",
      price: 6.5,
    },
    {
      id: "016",
      name: "Cannoli",
      price: 6.5,
    },
    {
      id: "017",
      name: "Panna Cotta",
      price: 8.0,
    },
    {
      id: "018",
      name: "Gelato",
      price: 5.0,
    },

    {
      id: "027",
      name: "Peach Melba",
      price: 6.5,
    },
    {
      id: "028",
      name: "Tartufo",
      price: 8.0,
    },
    {
      id: "029",
      name: "Limoncello Sorbet",
      price: 5.0,
    },
  ],

  drinks: [
    {
      id: "019",
      name: "Espresso",
      price: 2.5,
    },
    {
      id: "020",
      name: "Cappuccino",
      price: 3.5,
    },
    {
      id: "021",
      name: "Limoncello",
      price: 4.0,
    },
    {
      id: "022",
      name: "Chianti",
      price: 29.5,
    },
    {
      id: "030",
      name: "Peroni",
      price: 4.0,
    },
    {
      id: "031",
      name: "Negroni",
      price: 6.5,
    },
    {
      id: "032",
      name: "Prosecco",
      price: 24.0,
    },
    {
      id: "040",
      name: "Aperol Spritz",
      price: 5.5,
    },
    {
      id: "041",
      name: "Limoncello Spritz",
      price: 6.0,
    },
    {
      id: "042",
      name: "Barolo",
      price: 49.0,
    },

    {
      id: "050",
      name: "Limoncello Martini",
      price: 7.5,
    },
  ],
};
