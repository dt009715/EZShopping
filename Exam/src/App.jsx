import { useEffect, useState } from "react";
import "./App.css";
import BasketPage from "./components/BasketPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let savedMode = localStorage.getItem("displayMode");
    if (!savedMode) {
      savedMode = "light";
      setDarkMode(false);
      localStorage.setItem("displayMode", savedMode);
    }
    setDarkMode(savedMode === "dark" ? true : false);
  }, []);

  const toggleDisplayMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="h-full dark:bg-[#404142]">
      <div className={`${darkMode ? "dark" : ""} h-full`}>
        <div className=" p-4 flex w-full flex-row bg-yellow  dark:bg-[#404142]">
          <h1 className="text-3xl font-bold dark:text-lightGrey w-1/4">
            EZ SHOPPING
          </h1>
          <div className="flex w-3/4 justify-end">
            <button
              onClick={toggleDisplayMode}
              className=" dark:text-lightGrey "
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
        <BasketPage />
      </div>
    </div>
  );
}

export default App;
