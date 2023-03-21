import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment.js";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";

function App() {
  const promise = loadStripe(
    "pk_test_51Mo7peSBSVoQsEezwqYSENmwD9M2tCsarVGIx52jDufgJTeFCUOgBRuMDrjPuKJytsvOSJnC0Upz9S0xq6ek9Ako00DiE4NC0S"
  );
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Body />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/Payment"
            element={
              <>
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
