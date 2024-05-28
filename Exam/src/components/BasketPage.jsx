import { useDispatch, useSelector } from "react-redux";
import { User } from "./User";
import { selectCount } from "./selector";
import { decrement, increment, resetValue } from "./slice/counterSlice";

const BasketPage = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const resetClick = () => {
    dispatch(resetValue());
  };

  const add = () => {
    dispatch(increment());
  };

  const removeOne = () => {
    dispatch(decrement());
  };
  return (
    <div className="flex flex-col h-full w-full bg-white dark:bg-grey pl-4">
      <div></div>
      <div>
        <h1 className="font-bold pt-10 pb-5 text-2xl dark:text-lightGrey">
          Hi {User.name}!
        </h1>
      </div>
      <div>
        <p className="font-bold font-graphik text-2xl pb-8 dark:text-lightGrey">
          There are {count} items in your basket
        </p>
      </div>
      <div className="pl-3 w-1/4">
        <button
          onClick={resetClick}
          className=" bg-yellow rounded border-2 border-yellow w-1/5 h-full  dark:border-grey"
        >
          Clear Basket
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default BasketPage;
