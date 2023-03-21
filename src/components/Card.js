import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useStateValue } from "./StateProvider";

function Card({ curr }) {
  const [{ basket }, dispatch] = useStateValue();
  function addToBasket() {
    dispatch({
      type: "ADD_PRODUCT",
      item: {
        id: curr.id,
        title: curr.title,
        image: curr.img,
        price: curr.price,
        rate: curr.rate,
      },
    });
  }
  return (
    <>
      <div className="border w-[50%] p-[2px] max-w-[180px] min-h-[380px] flex justify-between items-center flex-col bg-slate-100 py-2">
        <img src={curr.img} />
        <h4 className="text-[#007185] font-medium tracking-tighter w-full leading-5">
          {curr.title}
        </h4>
        <div className="inline-block">
          <StarBorderIcon className="w-5 h-5 inline-block text-[#FFA41C]" />
          <StarBorderIcon className="w-5 h-5 inline-block text-[#FFA41C]" />
          <StarBorderIcon className="w-5 h-5 inline-block text-[#FFA41C]" />
          <StarBorderIcon className="w-5 h-5 inline-block text-[#FFA41C]" />
          <StarBorderIcon className="w-5 h-5 inline-block text-[#FFA41C]" />
          <span className="text-[#007185] text-xs font-medium">
            {curr.rate}
          </span>
        </div>

        <div>
          <span>
            <span className="font-semibold">
              <sup className="pt-1">₹</sup> {curr.price}
            </span>
            {` `}
            <sub className="tracking-wide font-semibold">(₹{curr.unit})</sub>
          </span>
        </div>
        <span className="opacity-80 text-sm">FREE Delivery</span>
        <button
          className="bg-[#FFA41C] rounded-md p-1 opacity-90"
          onClick={addToBasket}
        >
          🛒Add to cart
        </button>
      </div>
    </>
  );
}

export default Card;
