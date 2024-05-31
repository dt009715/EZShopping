import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearCart,
  removeFromCart,
  resetValue,
  updateQuantity,
} from "./slice/cartSlice";

const BasketPage = () => {
  const user = useSelector((state) => state.user);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const resetClick = () => {
    dispatch(clearCart());
    dispatch(resetValue());
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) {
      quantity = 1;
    }
    dispatch(updateQuantity({ id, quantity: parseInt(quantity) }));
  };

  return (
    <div className="flex flex-col h-full w-full bg-white dark:bg-grey pl-4">
      <div>
        <h1 className="font-serif font-bold pt-10 pb-5 text-2xl dark:text-lightGrey">
          Hi {user.firstName}!
        </h1>
      </div>
      <div>
        <p className="font-bold font-graphik text-2xl pb-8 dark:text-lightGrey">
          There are {totalQuantity} items in your basket
        </p>
      </div>
      <div className="pl-3 w-1/4 pb-4">
        <div className="flex flex-col">
          <div className="flex gap-2">
            <Link
              to="/checkout"
              className="bg-yellow text-center rounded border-2 border-yellow w-1/4 mb-2 dark:border-grey font-bold"
            >
              Validate Basket
            </Link>
            <button
              onClick={resetClick}
              className="bg-yellow rounded border-2 border-yellow w-1/4 mb-2 dark:border-grey font-bold "
            >
              Clear Basket
            </button>
          </div>
        </div>
      </div>
      <div>
        {items.length === 0 ? (
          <p className="dark:text-lightGrey">Your basket is empty</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="mb-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} width="100" />
                <div className="ml-4">
                  <h2 className="dark:text-lightGrey text-xl">{item.title}</h2>
                  <p className="dark:text-lightGrey text-xl">${item.price}</p>
                </div>
              </div>
              <div className="flex flex-col mt-2">
                <label className="pb-2 dark:text-lightGrey text-xl">
                  Quantity
                </label>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, e.target.value)
                  }
                  className="mb-2 w-[50px] border border-solid pl-2"
                />
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-yellow rounded border-2 border-yellow w-20 h-full mb-3 dark:border-grey font-bold"
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
