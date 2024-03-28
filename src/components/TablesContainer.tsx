// import { useEffect } from "react";

import { tables } from "../db/data";

import type { Tables, Diner } from "../types";

type TablesContainerProps = {
  handleCreateTempDiner: (id: Tables["id"]) => void;
  diners: Diner[];
};

function TablesContainer({
  handleCreateTempDiner,
  diners,
}: TablesContainerProps) {
  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-3 p-5 border-2 border-blue-500 w-full rounded-lg place-items-center">
      {tables.map((table) => (
        <span
          key={table.id}
          className={`${table.classes.join(" ")} ${
            diners.find((item) => item.table === table.id)
              ? "border-red-400"
              : "border-green-300"
          } `}
          onClick={() => handleCreateTempDiner(table.id)}
        >
          {table.id}
        </span>
      ))}
    </div>
  );
}

export default TablesContainer;
