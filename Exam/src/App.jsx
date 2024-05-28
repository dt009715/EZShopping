import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import BasketPage from "./components/BasketPage";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";
import { fetchProducts } from "./components/slice/productsSlice";
import store from "./components/store";

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  min-height: 100vh;
  padding: 20px;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f0c040;
`;

const NavLinks = styled.div`
  a {
    margin: 0 10px;
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    let savedMode = localStorage.getItem("displayMode");
    if (!savedMode) {
      savedMode = "light";
      setDarkMode(false);
      localStorage.setItem("displayMode", savedMode);
    }
    setDarkMode(savedMode === "dark" ? true : false);
    dispatch(fetchProducts());
  }, [dispatch]);
  const toggleDisplayMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <Provider store={store}>
      <Router>
        <AppContainer className={`${darkMode ? "dark" : ""}`}>
          <NavBar className="dark:bg-[#404142] w-full">
            <Link to="/" className="w-full">
              <h1 className="text-3xl font-bold dark:text-lightGrey w-1/4">
                EZ Shopping
              </h1>
            </Link>
            <NavLinks className=" flex flex-row w-3/4 justify-end ">
              <Link to="/user" className="dark:text-lightGrey ">
                {user.name}
              </Link>
              <Link to="/basket" className="dark:text-lightGrey flex flex-row">
                <p className="font-bold">{totalQuantity}</p>{" "}
                <p className="pl-1">articles</p>
              </Link>
              <div className="w-4 h-4 rounded-full ml-4 bg-[#1c324f] justify-center mt-1 mr-2 dark:bg-[#ffe603]"></div>
              <button
                onClick={toggleDisplayMode}
                className=" dark:text-lightGrey "
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </NavLinks>
          </NavBar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/basket" element={<BasketPage />} />
          </Routes>
        </AppContainer>
      </Router>
    </Provider>
  );
}

export default App;
