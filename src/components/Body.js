import React from "react";
import Cards from "./Cards"

function Body() {
  return (
    <div>
      <div className="relative">
        <img
          src="https://m.media-amazon.com/images/I/41cfU7mSaOL._SX1500_.jpg"
          alt=""
        />
        <div
          style={{
            inset: "0",
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0))",
          }}
          className="absolute w-[100%] h-[100%] "
        ></div>
      </div>

      <Cards />
    </div>
  );
}

export default Body;
