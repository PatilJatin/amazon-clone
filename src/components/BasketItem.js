import React from 'react'
import { useStateValue } from "./StateProvider";

function BasketItem({id, img, price,title}) {
  const [{ basket }, dispatch] = useStateValue();
  function deleteItem(){
    dispatch({
      type: "REMOVE_PRODUCT",
      id:id,
    });
    
  }
  return (
    <section className="flex rounded-md">
      <img
        src={img}
        alt="product-img"
        height={"100px"}
        className="object-fit p-4 "
      />
      <div className="product_info flex basis-10/12 justify-between text-sm">
        <div>
          <p className="text-xl">{title}</p>
          <p className="text-green-600">In stock</p>
          <img
            src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
            alt=""
          />
          <p>Usually dispatched in {Math.floor(Math.random() * 4 + 1)} days.</p>
          <div className="flex my-5 w-[400px] justify-between flex-wrap">
            <button
              className="hover:text-blue-700 hover:underline text-blue-600 border border-white pl-4 border-l-gray-400"
              onClick={() => deleteItem()}
            >
              Delete
            </button>
            <button className="hover:text-blue-700 hover:underline text-blue-600 border border-white pl-4 border-l-gray-400">
              Save for later
            </button>
            <button className="hover:text-blue-700 hover:underline text-blue-600 border border-white pl-4 border-l-gray-400">
              See more like this
            </button>
            <button className="hover:text-blue-700 hover:underline text-blue-600 border border-white pl-4 border-l-gray-400">
              Share
            </button>
          </div>
        </div>
        <div className="product_price">
          <strong className="text-lg">₹{price}</strong>
        </div>
      </div>
    </section>
  );
}

export default BasketItem
