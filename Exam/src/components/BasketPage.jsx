// src/components/BasketPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { removeFromCart, updateQuantity, clearCart } from '../slices/cartSlice';

const BasketContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const BasketItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const ItemInfo = styled.div`
  flex-grow: 1;
`;

const QuantityInput = styled.input`
  width: 50px;
  margin-right: 10px;
`;

const RemoveButton = styled.button`
  background-color: #ff6b6b;
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
`;

const ClearButton = styled.button`
  background-color: #f0c040;
  border: none;
  color: black;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
`;

const BasketPage = () => {
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity) }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <BasketContainer>
      <h1>Your Basket</h1>
      {items.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        items.map((item) => (
          <BasketItem key={item.id}>
            <ItemInfo>
            <img src={item.image} alt={item.title} width="100" />
              <h2>{item.title}</h2>
              <p>${item.price}</p>
            </ItemInfo>
            <div>
              <QuantityInput
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              />
              <RemoveButton onClick={() => handleRemove(item.id)}>Remove</RemoveButton>
            </div>
          </BasketItem>
        ))
      )}
      <ClearButton onClick={handleClearCart}>Clear Basket</ClearButton>
      <p>Total items: {totalQuantity}</p>
    </BasketContainer>
  );
};

export default BasketPage;

