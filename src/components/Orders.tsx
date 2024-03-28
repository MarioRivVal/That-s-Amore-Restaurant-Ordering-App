import { Diner, OrderedDish } from "../types";

type OrdersProps = {
  tempDiner: Diner;
  setTempDiner: React.Dispatch<React.SetStateAction<Diner>>;
};

const MIN_ITEMS = 1;

function Orders({ tempDiner, setTempDiner }: OrdersProps) {
  const { orderedItems } = tempDiner;

  function handleDeleteDish(dish: OrderedDish) {
    const updatedOrderedItems = orderedItems.map((item) => {
      if (item.id === dish.id && item.quantity > MIN_ITEMS) {
        return { ...item, quantity: item.quantity - 1 };
      }

      return item;
    });

    setTempDiner({ ...tempDiner, orderedItems: updatedOrderedItems });

    if (dish.quantity === MIN_ITEMS) {
      const updatedOrderedItems = orderedItems.filter(
        (item) => item.id !== dish.id
      );

      setTempDiner({ ...tempDiner, orderedItems: updatedOrderedItems });
    }
  }

  return (
    <div className=" border-b border-blue-500 mt-2 py-4">
      <h2 className=" text-center text-xl py-3 px-0 font-bold text-gray-900">
        Order
      </h2>

      <ul className="bg-gray-100 p-2 max-h-screen overflow-hidden text-lg space-y-2">
        {orderedItems.map((item) => (
          <li
            key={item.id}
            className="grid-order grid items-center border-l-2 border-blue-500 pl-2  hover:bg-blue-500 hover:text-gray-100"
          >
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <button
              className="bg-red-500 text-gray-100 px-2 py-1 rounded-md"
              onClick={() => handleDeleteDish(item)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
