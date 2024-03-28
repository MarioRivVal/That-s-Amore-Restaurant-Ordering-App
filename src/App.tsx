import TablesContainer from "./components/TablesContainer";
import DateContainer from "./components/DateContainer";
import ModalContainer from "./components/ModalContainer";

import useOders from "./hooks/useOrdes";

function App() {
  const {
    handleCreateTempDiner,
    handleCancelTempDiner,
    handleCreateFixedDiner,
    handleDeleteDiner,
    diners,
    tempDiner,
    setTempDiner,
    modalOpen,
  } = useOders();

  return (
    <>
      <h1 className=" font-dancing text-5xl sm:text-6xl w-full p-7 bg-green-300 text-center text-gray-900">
        - That's Amore -
      </h1>
      <div className=" max-w-5xl flex flex-col items-center gap-7 mx-auto my-0 font-alegreya px-6">
        <p className="bg-blue-500 p-3 text-blue-50 text-xl sm:text-2xl uppercase w-full sm:w-1/2 text-center mt-4 rounded-lg">
          Select a table
        </p>
        <DateContainer />
        <TablesContainer
          handleCreateTempDiner={handleCreateTempDiner}
          diners={diners}
        />
        {modalOpen && (
          <ModalContainer
            handleCancelTempDiner={handleCancelTempDiner}
            handleCreateFixedDiner={handleCreateFixedDiner}
            handleDeleteDiner={handleDeleteDiner}
            tempDiner={tempDiner}
            setTempDiner={setTempDiner}
          />
        )}
      </div>
    </>
  );
}

export default App;
