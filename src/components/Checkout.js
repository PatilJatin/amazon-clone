import React from "react";
import Navbar from "./Navbar";
import SubTotal from "./SubTotal";
import BasketItem from "./BasketItem"
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <section className="bg-slate-200 w-[100vw] h-[100vh] overflow-x-hidden">
      <Navbar />
      <div className="container flex my-4 ">
        <div className="left bg-white rounded-sm basis-9/12 mx-auto p-4">
          <div className="empty--containeer bg-white px-3">
            <h1 className="text-3xl">Shopping Cart </h1>
            <hr className="my-3" />
            {basket.map((item) => {
              return (
                <>
                  <BasketItem
                    id={item.id}
                    title={item.title}
                    img={item.image}
                    price={item.price}
                    key={item.id}
                  />
                  <hr className="my-3" />
                </>
              );
            })}
          </div>
        </div>
        <div className="right bg-white rounded-sm basis-2/12 flex flex-col px-3 py-2 justify-between items-center space-y-3 max-h-[250px]">
          <SubTotal />
        </div>
      </div>
    </section>
  );
}

export default Checkout;
