import { Diner } from "../types";
import { useMemo } from "react";

type BillProps = {
  tempDiner: Diner;
};

export default function Bill({ tempDiner }: BillProps) {
  const { table, time, date, orderedItems, tip } = tempDiner;

  const subTotal = useMemo(
    () =>
      orderedItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [orderedItems]
  );

  const tipAmount = +useMemo(() => subTotal * tip, [subTotal, tip]).toFixed(2);
  const total = +useMemo(
    () => tipAmount + subTotal,
    [tipAmount, subTotal]
  ).toFixed(2);

  return (
    <div className=" mt-2 py-4 flex flex-col items-center ">
      {" "}
      <h2 className=" text-center text-xl py-3 px-0 font-bold text-gray-900">
        Bill
      </h2>
      <div
        className=" w-4/5 sm:w-80  font-code p-2 shadow-lg text-xs"
        id="print-section"
      >
        <div className=" py-5 px-0 border-b border-gray-900 border-dashed">
          <p className=" font-dancing text-center text-3xl">That's Amore</p>
          <div className="flex justify-around">
            <p>Via Ana Roscia, 69</p>
            <p>33011</p>
            <p>Roma</p>
          </div>
        </div>
        <div className=" py-2 px-0 my-1 mx-0 border-b border-t border-gray-900 border-dashed">
          <p className="text-center text-sm font-semibold uppercase">Bill</p>
        </div>
        <div className="py-2 px-0 my-1 mx-0 border-b border-t border-gray-900 border-dashed flex justify-between">
          <div className="flex gap-2">
            <p>{date}</p>
            <p>{time}</p>
          </div>
          <p>{`Table N.${table}`}</p>
        </div>
        <div className="py-2 px-0 my-1 mx-0 border-b border-t border-gray-900 border-dashed flex flex-col">
          <p className="grid grid-bill gap-1 font-semibold w-full">
            <span>N.</span>
            <span>Products</span>
            <span className=" place-self-end">Price</span>
            <span className=" place-self-end">Total</span>
          </p>{" "}
          {orderedItems.map((item) => (
            <p key={item.id} className="grid grid-bill gap-1 text-xs w-full">
              <span>{item.quantity}</span>
              <span>{item.name}</span>
              <span className=" place-self-end">{item.price}€</span>
              <span className=" place-self-end">
                {item.price * item.quantity}€
              </span>
            </p>
          ))}
        </div>

        <div className="py-2 px-0 my-1 mx-0 border-b border-t border-gray-900 border-dashed flex justify-between">
          <p>
            Tip<span> {`(${tip * 100}%)`} </span>
            <span>{tipAmount}€</span>
          </p>
          <p>
            Total: <span>{subTotal}€</span>
          </p>
        </div>
        <div className="py-2 px-0 my-1 mx-0 border-b border-t border-gray-900 border-dashed flex justify-between">
          <p className=" text-right text-md font-semibold w-full py-3">
            Total:
            <span>{total}€</span>
          </p>
        </div>
        <p className="text-center font-dancing text-lg p-3 border-t border-gray-900 border-dashed">
          Arrivederci!
        </p>
      </div>
    </div>
  );
}
