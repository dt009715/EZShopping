import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../components/slice/cartSlice";

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
    <div className="dark:bg-grey flex flex-wrap gap-5 justify-center pt-3">
      {products.map((product) => (
        <div
          className="border border-solid border-grey p-2.5 w-1/6 text-center justify-center items-center flex flex-col dark:border-white"
          key={product.id}
        >
          <img src={product.image} alt={product.title} className="w-1/2 pb-2" />
          <div className="flex justify-center items-center gap-2.5">
            <h2>
              <p className="pb-2">{product.title} </p>
              <div className="rounded text-xs">
                <span className="bg-[#d3d3d3] opacity-70 p-1">
                  {product.category}
                </span>
              </div>
            </h2>
          </div>
          <p className="pt-2">{product.description}</p>
          <p>${product.price}</p>
          <div className="mb-2.5">
            <label className="mr-2.5">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantities[product.id] || 1}
              onChange={(e) =>
                handleQuantityChange(product.id, parseInt(e.target.value))
              }
              className="w-1/4 pl-2 ml-2 border border-solid border-black"
            />
          </div>
          <button
            onClick={() => handleAddToCart(product, quantities[product.id])}
            className="bg-yellow border-none  cursor-pointer rounded text-center text-xs  font-bold w-1/2 h-10"
          >
            Add to basket
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
