import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getbasketTotalAmount } from "./reducer"
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";

function SubTotal() {
  const history = useNavigate();
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket);
  return (
    <>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <div className="text-sm flex">
              <CheckIcon className="bg-green-500 rounded-full w-[20px]" />
              <p>
                <span className="text-green-800"> 
                  Part of your first order qualifies for FREE Delivery.
                </span>{" "}
                Select this option at checkout.
              </p>
            </div>
            <h2>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </h2>
            <div className="subTotal_gift flex">
              <input type="checkbox" />
              <p>This order contains a gift</p>
            </div>
          </>
        )}
        value={getbasketTotalAmount(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button className="px-3 py-1 w-[80%] rounded-md bg-[#ffd814] hover:bg-yellow-400" onClick={e => history("/Payment")}>
        Proceed to pay
      </button>
    </>
  );
}

export default SubTotal;
