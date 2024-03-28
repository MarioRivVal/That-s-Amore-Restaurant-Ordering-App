import DateContainer from "./DateContainer";
import Categories from "./Categories";
import Orders from "./Orders";
import Tips from "./Tips";
import Bill from "./Bill";
import Button from "./Button";

import { printBill } from "../helpers";

import { dishes } from "../db/data";

import { Diner } from "../types";

type ModalContainerProps = {
  handleCancelTempDiner: () => void;
  handleCreateFixedDiner: () => void;
  handleDeleteDiner: () => void;

  tempDiner: Diner;
  setTempDiner: React.Dispatch<React.SetStateAction<Diner>>;
};

function ModalContainer({
  handleCancelTempDiner,
  handleCreateFixedDiner,
  handleDeleteDiner,
  tempDiner,
  setTempDiner,
}: ModalContainerProps) {
  return (
    <div className=" fixed w-full h-screen bg-gray-800/30  backdrop-blur">
      <div className="opacity-100 absolute top-[40%] left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 rounded-md bg-gray-100 flex flex-col gap-2 w-[90%] sm:w-[40rem]">
        <DateContainer />

        <div className="main-box flex flex-col overflow-y-scroll h-[50vh] border border-blue-500 rounded-md">
          {Object.entries(dishes).map(([key, value]) => (
            <Categories
              category={key}
              dishes={value}
              key={key}
              tempDiner={tempDiner}
              setTempDiner={setTempDiner}
            />
          ))}

          <Orders tempDiner={tempDiner} setTempDiner={setTempDiner} />

          <Tips tempDiner={tempDiner} setTempDiner={setTempDiner} />

          <Bill tempDiner={tempDiner} />

          <div className="flex justify-around py-3">
            <Button color="red" text="Delete" onClick={handleDeleteDiner} />
            <Button color="blue" text="Print" onClick={printBill} />
          </div>
        </div>

        <div className="flex justify-around py-3">
          <Button color="red" text="Cancel" onClick={handleCancelTempDiner} />
          <Button
            color="blue"
            text="Confirm"
            onClick={handleCreateFixedDiner}
          />
        </div>
      </div>
    </div>
  );
}

export default ModalContainer;
