import { useState, useEffect } from "react";
import { Diner, Tables } from "../types";
import { getDate, getTime } from "../helpers";

export default function useOders() {
  const initialTempDiner = {
    table: "",
    time: "",
    date: "",
    orderedItems: [],
    tip: 0,
  };

  // ANOTHER WAY TO ACCESS TO LOCAL STORAGE
  // 1: const localStorageDiners = JSON.parse(localStorage.getItem("diners") as string) || [];
  // 2: const localStorageDiners = JSON.parse(localStorage.getItem("diners") ?? "[]");

  const initiaDinersLS = () => {
    const localStorageDiners = localStorage.getItem("diners");
    return localStorageDiners ? JSON.parse(localStorageDiners) : [];
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [diners, setDiners] = useState<Diner[]>(initiaDinersLS);
  const [tempDiner, setTempDiner] = useState<Diner>(initialTempDiner);

  useEffect(() => {
    localStorage.setItem("diners", JSON.stringify(diners));
  }, [diners]);

  function handleCreateTempDiner(id: Tables["id"]) {
    const busyTable = diners.find((diner) => diner.table === id);

    if (busyTable) {
      setTempDiner(busyTable);
    } else {
      const newDiner: Diner = {
        table: id,
        time: getTime(),
        date: getDate(),
        orderedItems: [],
        tip: 0,
      };

      setTempDiner(newDiner);
    }
    setModalOpen(true);
  }

  function handleCancelTempDiner() {
    setModalOpen(false);
    setTempDiner(initialTempDiner);
  }

  function handleCreateFixedDiner() {
    const tableExist = diners.find((diner) => diner.table === tempDiner.table);

    if (tableExist) {
      const updatedDiners = diners.map((diner) =>
        diner.table === tempDiner.table ? tempDiner : diner
      );
      setDiners(updatedDiners);
    } else {
      setDiners([...diners, tempDiner]);
    }
    setModalOpen(false);
    setTempDiner(initialTempDiner);
  }

  function handleDeleteDiner() {
    const conf = confirm("Do you really want to delete this Diner");

    if (conf) {
      const updatedDiners = diners.filter(
        (diner) => diner.table !== tempDiner.table
      );

      setModalOpen(false);
      setDiners(updatedDiners);
      setTempDiner(initialTempDiner);
    }
  }

  return {
    handleCreateTempDiner,
    handleCancelTempDiner,
    handleCreateFixedDiner,
    handleDeleteDiner,
    diners,
    tempDiner,
    setTempDiner,
    modalOpen,
  };
}
