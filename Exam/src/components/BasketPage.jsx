import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeFromCart, resetValue } from "./slice/cartSlice";
const BasketPage = () => {
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

  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const resetClick = () => {
    dispatch(resetValue());
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
          className=" bg-yellow rounded border-2 border-yellow w-1/5 h-full  dark:border-grey"
        >
          Clear Basket
        </button>
      </div>
      <div>
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
              <label style={{ marginRight: "10px" }}>
                Quantity:{totalQuantity}
              </label>
              <input
                type="number"
                min="1"
                style={{ width: "50px" }}
                id={`quantity-${product.id}`}
              />
            </div>
            <button
              onClick={() =>
                removeFromCart(
                  product,
                  parseInt(
                    document.getElementById(`quantity-${product.id}`).value
                  )
                )
              }
              style={{
                backgroundColor: "#f0c040",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: "4px",
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              Remove
            </button>
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BasketPage;
