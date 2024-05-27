import { User } from "./User";

const BasketPage = () => {
  return (
    <div>
      <div>
        <h1>Hi {User.name}</h1>
      </div>
      <div>There are 0 items in your basket</div>
      <div>
        <button onClick={() => {}}>Clear Basket</button>
      </div>
      <div></div>
    </div>
  );
};

export default BasketPage;
