import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  clearCart,
  removeFromCart,
  resetValue,
  updateQuantity,
} from "./slice/cartSlice";
const BasketPage = () => {
  const QuantityInput = styled.input`
    width: 50px;
    margin-right: 10px;
  `;
  const user = useSelector((state) => state.user);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const resetClick = () => {
    dispatch(resetValue());
    dispatch(clearCart());
  };

  const items = useSelector((state) => state.cart.items);
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
    <div className="flex flex-col h-full w-full bg-white dark:bg-grey pl-4">
      <div></div>
      <div>
        <h1 className="font-bold pt-10 pb-5 text-2xl dark:text-lightGrey">
          Hi {user.firstName}!
        </h1>
      </div>
      <div>
        <p className="font-bold font-graphik text-2xl pb-8 dark:text-lightGrey">
          There are {totalQuantity} items in your basket
        </p>
      </div>
      <div className="pl-3 w-1/4 pb-4">
        <button
          onClick={resetClick}
          className=" bg-yellow rounded border-2 border-yellow w-1/5 h-full  dark:border-grey font-bold"
        >
          Clear Basket
        </button>
      </div>
      <div>
        {items.length === 0 ? (
          <p className="dark:text-lightGrey">Your basket is empty</p>
        ) : (
          items.map((item) => (
            <div key={item.id}>
              <div>
                <img src={item.image} alt={item.title} width="100" />
                <h2 className="dark:text-lightGrey text-xl">{item.title}</h2>
                <p className="dark:text-lightGrey text-xl">${item.price}</p>
              </div>
              <div className="flex flex-col">
                <label className="pb-2 dark:text-lightGrey text-xl">
                  Quantity
                </label>
                <QuantityInput
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, e.target.value)
                  }
                  className="mb-2"
                />
                <button
                  onClick={() => handleRemove(item.id)}
                  className=" bg-yellow rounded border-2 border-yellow w-20 h-full mb-3 dark:border-grey font-bold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BasketPage;
