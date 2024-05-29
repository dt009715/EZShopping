import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addToCart } from "../components/slice/cartSlice";

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  width: 250px;
  text-align: center;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const CategoryLabel = styled.p`
  border-radius: 4px;
  font-size: 10px;
`;

const HomePage = () => {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    if (products.length > 0) {
      const initialQuantities = products.reduce((acc, product) => {
        acc[product.id] = 1;
        return acc;
      }, {});
      setQuantities(initialQuantities);
    }
  }, [products]);

  const handleQuantityChange = (id, value) => {
    setQuantities({
      ...quantities,
      [id]: value,
    });
  };
  const handleAddToCart = (product, quantity) => {
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <ProductList className="dark:bg-grey">
      {products.map((product) => (
        <ProductCard key={product.id}>
          <img src={product.image} alt={product.title} width="100" />
          <TitleContainer>
            <h2>
              {product.title}{" "}
              <CategoryLabel>
                <span
                  style={{
                    backgroundColor: "#d3d3d3",
                    opacity: "0.7",
                    padding: "5px",
                  }}
                >
                  {product.category}
                </span>
              </CategoryLabel>
            </h2>
          </TitleContainer>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px" }}>Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantities[product.id] || 1}
              onChange={(e) =>
                handleQuantityChange(product.id, parseInt(e.target.value))
              }
              className="w-1/4 pl-2"
            />
          </div>
          <button
            onClick={() => handleAddToCart(product, quantities[product.id])}
            className="bg-yellow border-none  cursor-pointer rounded text-center text-xs  font-bold w-1/2 h-10"
          >
            Add to basket
          </button>
        </ProductCard>
      ))}
    </ProductList>
  );
};

export default HomePage;
