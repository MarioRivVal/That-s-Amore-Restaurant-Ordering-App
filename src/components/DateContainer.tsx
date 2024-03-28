import { getDate, getTime } from "../helpers";
import { useState, useEffect } from "react";

export default function DateContainer() {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between w-full text-xl">
      <p>{getDate()}</p>
      <p>{time}</p>
    </div>
  );
}
