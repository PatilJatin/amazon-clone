import React, { useEffect, useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import PaymentItems from "./PaymentItems";
import BasketItem from "./BasketItem";
import { useStateValue } from "./StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getbasketTotalAmount } from "./reducer";
import axios from "./axios";
import { useNavigate } from "react-router-dom";
function Payment() {
     const history = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [{ basket }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(()=>{
    const getClientSecret = async () =>{
        const response = await axios({
            method: 'post',
            url:`/payment/create?total=${getbasketTotalAmount(basket)*100}`
        })
        setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  },[basket])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method :{
            card:elements.getElement(CardElement) 
        }
    }).then(({ paymentIntent })=>{
        setSucceeded(true);
        setError(false);
        setProcessing(false);
        history("/");
    })
  };
  function handleChange(e) {
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  }
  return (
    <>
      <section>
        <header className="bg-slate-100">
          <div className="max-w-[1180px] flex justify-between mx-auto p-4 items-center">
            <img
              className=""
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="amazon-logo"
              width={"100px"}
            />
            <h1 className="text-3xl">Checkout</h1>
            <LockIcon className="text-gray-500 coursor-pointer" />
          </div>
        </header>
        <main>
          <div className="w-[70%]">
            <PaymentItems
              srNo={1}
              title={"Delivery Address"}
              text={"John doe e ward Station Road, DELHI 110001"}
              link={"Add delivery instructions"}
            />
            <hr />
            <PaymentItems
              srNo={2}
              title={"Payment Method"}
              text={"Net Banking: BANK"}
              link={"Add a gift card or promotion code"}
            />
            <hr />
            <PaymentItems
              srNo={3}
              title={"Offer"}
              text={"Currently not available"}
            />
            <hr />
            <div className="empty--containeer bg-white  w-[60%]">
              <strong>
                <pre className="text-lg">4 Review items and delivery </pre>
              </strong>

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
          <div className="w-[40%] h-[100px] mx-auto bg-slate-200 rounded-md">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="price_container">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3 className="mt-3 font-bold text-xl">
                        {" "}
                        Order Total : {value}{" "}
                      </h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getbasketTotalAmount(basket)}
                  displayType={"text"}
                  prefix={"₹"}
                />
                <button disabled={processing || disable || succeeded}>
                  <span>{processing ? <p>Processing</p> : <p>Buy Now</p>}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </main>
      </section>
    </>
  );
}

export default Payment;
