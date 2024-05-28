import React, { useEffect } from "react";
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

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <Router>
        <AppContainer>
          <NavBar>
            <Link to="/">
              <h1>EZ Shopping</h1>
            </Link>
            <NavLinks>
              <Link to="/user">{user.name}</Link>
              <Link to="/basket">{totalQuantity} articles</Link>
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
