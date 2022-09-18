import React from "react";
import Card from "../card";

export default function Herocard({ data, addProductToCart }) {
  return (
    <div>
      <div className="flex flex-wrap pb-[25px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        <p className="capitalize cursor-pointer rounded-lg px-2 hover:opacity-70 bg-blue-300">
          men's clothing
        </p>
        <p className="capitalize cursor-pointer rounded-lg px-2 hover:opacity-70 bg-blue-300">
          jewelery
        </p>
        <p className="capitalize cursor-pointer rounded-lg px-2 hover:opacity-70 bg-blue-300">
          electronics
        </p>
        <p className="capitalize cursor-pointer rounded-lg px-2 hover:opacity-70 bg-blue-300">
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
