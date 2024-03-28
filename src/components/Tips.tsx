import { Diner } from "../types";
import { tipOptions } from "../db/data";

type TipsProps = {
  tempDiner: Diner;
  setTempDiner: React.Dispatch<React.SetStateAction<Diner>>;
};

export default function Tips({ tempDiner, setTempDiner }: TipsProps) {
  function handleSelectTip(tip: Diner["tip"]) {
    setTempDiner({ ...tempDiner, tip: tip });
  }

  return (
    <div className=" border-b border-blue-500 mt-2 py-4">
      <h2 className=" text-center text-xl py-3 px-0 font-bold text-gray-900">
        Add a tip
      </h2>
      <form className="flex justify-around">
        {tipOptions.map((opt) => (
          <label key={opt.id} className="flex gap-2 text-lg items-center">
            {" "}
            {opt.label}
            <input
              type="radio"
              name="tip"
              value={opt.value}
              checked={opt.value === tempDiner.tip}
              onChange={(e) => {
                handleSelectTip(+e.target.value);
              }}
            />
          </label>
        ))}
      </form>
    </div>
  );
}
