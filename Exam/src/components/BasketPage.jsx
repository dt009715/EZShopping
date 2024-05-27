import { useDispatch, useSelector } from "react-redux";
import { User } from "./User";
import { selectCount } from "./selector";
import { increment, resetValue } from "./slice/counterSlice";

const BasketPage = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const resetClick = () => {
    dispatch(resetValue());
  };

  const add = () => {
    dispatch(increment());
  };
  return (
    <div>
      <div>
        <h1>Hi {User.name}</h1>
      </div>
      <div>There are {count} items in your basket</div>
      <div>
        <button onClick={resetClick}>Clear Basket</button>
        <button onClick={add}>Clear Basket</button>
      </div>
      <div></div>
    </div>
  );
};

export default BasketPage;
