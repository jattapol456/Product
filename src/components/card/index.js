import React from "react";
import "./card.css";

export default function Card({
  title,
  description,
  price,
  image,
  category,
  reta,
  count,
  onClick
}) {
  return (
    <div className="shadow-xl rounded-lg bg-white">
      <div className="aspect-[3/4] p-10 relative">
        <img
          src={image}
          alt=""
          className="probuct w-full h-full object-contain"
        />
        <p className="title capitalize font-bold text-xl text-blue-400 text-center pt-5">
          description
        </p>
        <div className="card px-5 py-2">
          <p className="description text-black text-lg mt-5 m-auto">
            {description}
          </p>
        </div>
        <p className="text-black absolute text-xs font-bold capitalize cursor-pointer rounded-lg px-2 hover:opacity-70 bg-blue-300 top-5 left-5">
          {category}
        </p>
      </div>
      <div className="p-5 space-y-2">
        <h4 className="font-bold text-lg truncate text-orange-500">{title}</h4>
        <div className="flex items-center">
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <p className="text-black text-xs font-bold">{reta}</p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
          <span className="text-black text-xs font-bold">{count} reviews</span>
        </div>
        <div className="flex items-center mt-3">
          <span className="font-bold text-gray-700 text-xl">${price}</span>
          <button onClick={onClick} className="ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
