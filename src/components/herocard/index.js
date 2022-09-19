import React from "react";
import Card from "../card";

export default function Herocard({
  data,
  addProductToCart,
  onClickCategory1,
  onClickCategory2,
  onClickCategory3,
  onClickCategory4,
}) {
  return (
    <div>
      <div className="flex flex-wrap pb-[25px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        <p
          className="capitalize cursor-pointer rounded-lg px-2 hover:opacity-70 bg-blue-300"
          onClick={onClickCategory1}
        >
          men's clothing
        </p>
        <p
          className="capitalize cursor-pointer rounded-lg px-2 hover:opacity-70 bg-blue-300"
          onClick={onClickCategory2}
        >
          jewelery
        </p>
        <p
          className="capitalize cursor-pointer rounded-lg px-2 hover:opacity-70 bg-blue-300"
          onClick={onClickCategory3}
        >
          electronics
        </p>
        <p
          className="capitalize cursor-pointer rounded-lg px-2 hover:opacity-70 bg-blue-300"
          onClick={onClickCategory4}
        >
          women's clothing
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
        {data?.map((item, products) => (
          <Card
            key={products}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            category={item.category}
            reta={item.rating.rate}
            count={item.rating.count}
            onClick={() => {
              addProductToCart(item.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}
