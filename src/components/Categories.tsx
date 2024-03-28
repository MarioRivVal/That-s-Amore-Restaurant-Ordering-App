import { useState } from "react";

import { Dish, Diner } from "../types";

type CategoryProps = {
  category: string;
  dishes: Dish[];
  tempDiner: Diner;
  setTempDiner: React.Dispatch<React.SetStateAction<Diner>>;
};

function Categories({
  category,
  dishes,
  tempDiner,
  setTempDiner,
}: CategoryProps) {
  const [openCategory, setOpenCategory] = useState(false);

  function handleAddDish(dish: Dish) {
    const { orderedItems } = tempDiner;
    const dishExist = tempDiner.orderedItems.find(
      (item) => item.id === dish.id
    );

    if (dishExist) {
      const updatedOrderedItems = orderedItems.map((item) =>
        item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTempDiner({ ...tempDiner, orderedItems: updatedOrderedItems });
    } else {
      const updatedDish = { ...dish, quantity: 1 };
      const updatedOrderedItems = [...orderedItems, updatedDish];
      setTempDiner({ ...tempDiner, orderedItems: updatedOrderedItems });
    }
  }

  return (
    <div className="bg-blue-200 border-b border-blue-500 cursor-pointer">
      <h2
        className=" text-center text-xl py-3 px-0 font-bold text-gray-900"
        onClick={() => setOpenCategory(!openCategory)}
      >
        {category}
      </h2>

      {openCategory && (
        <ul className="bg-gray-100 p-2 max-h-screen overflow-hidden text-lg space-y-2">
          {dishes.map((dish) => (
            <li
              key={dish.id}
              className="flex justify-between border-l-2 border-blue-500 px-2  hover:bg-blue-500 hover:text-gray-100"
              onClick={() => handleAddDish(dish)}
            >
              <p>{dish.name}</p>
              <p>{dish.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Categories;
