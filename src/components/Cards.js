import React from "react";
import Items from "./Items";
import Card from "./Card";

const Cards = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-baseline h-[100vh] w-[100vw]">
        {Items.map((cardItem) => (
          <Card curr={cardItem} key={cardItem.id} />
        ))}
      </div>
    </>
  );
};

export default Cards;
