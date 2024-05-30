import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const productsInCart = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products.items);

  const totalItems = productsInCart.reduce((acc, product) => acc + product.quantity, 0);

  const totalPrice = productsInCart.reduce((acc, product) => {
    const productDetails = products.find((p) => p.id === product.id);
    return acc + productDetails.price * product.quantity;
  }, 0);

  return (
    <div className="dark:bg-grey">
      <div>
      </div>
      {productsInCart.map((product) => {
        const productDetails = products.find((p) => p.id === product.id);
        return (
          <div key={product.id}>
            <img src={productDetails.image} alt={productDetails.title} width="100" />
            <h2>{productDetails.title}</h2>
            <p>${productDetails.price}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
        );
      })}
      <br />
      <h2>Total Items: {totalItems}</h2>
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      <Link to="/basket" className="bg-yellow rounded border-2 border-yellow text-black px-4 py-2 mt-4 inline-block">
        Return to Basket
      </Link>
    </div>
  );
};

export default CheckoutPage;



