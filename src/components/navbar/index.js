import { useState, useEffect } from "react";
import Cart from "./cart";

export default function Navbar({data, addProductToCart, removeQuantityProduct, cart}) {
  const [isShow, setIsShow] = useState(false);
  const [allTotal, setAllTotal] = useState(0);
  
  useEffect(() => {
    allPrice();
  }, [cart]);

  const onShow = () => {
    setIsShow(!isShow);
  };

  const getProducts = (id) => {
    return data.find((e) => e.id === id);
  };

  const allPrice = () => {
    let sum = 0;
    cart.forEach((item) => {
      sum += getProducts(item.id).price * item.quantity
    })
    setAllTotal(sum)
  }

  return (
    <header className="fixed top-0 left-0 w-full h-[60px] bg-white shadow-sm z-50">
      <div className="container mx-auto flex items-center h-full">
        <a href="/" className="text-xl font-bold capitalize">
          my shop
        </a>
        <div className="ml-auto relative">
          <button className="item-cester p-5" onClick={onShow}>
            <Cart />
          </button>
          {isShow ? (
            <div className="absolute top-[55px] right-0 bg-white border w-[340px] z-10 shadow-lg p-4 block">
              {cart.map((item, i) => (
                <div className="space-y-5 pb-5" key={i}>
                  <div className="flex">
                    <div className="aspect-square relative w-[60px] mr-3">
                      <img
                        src={getProducts(item.id).image}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 flex truncate">
                      <div className="flex-1 flex flex-col justify-between truncate">
                        <p className="text-sm truncate">{getProducts(item.id).title}</p>
                        <div>
                          <button className="px-2 hover:text-orange-500" onClick={() => {removeQuantityProduct(item.id)}}>
                            -
                          </button>
                          <span className="min-w-[20px] text-center inline-block">
                            {item.quantity}
                          </span>
                          <button className="px-2 hover:text-orange-500" onClick={() => {addProductToCart(item.id)}}>
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between text-right items-end">
                        <div className="text-sm font-bold text-red-500 cursor-pointer" onClick={() => {removeQuantityProduct(item.id)}}>
                          Delete
                        </div>
                        <div class="text-sm font-bold">${getProducts(item.id).price * item.quantity}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div class="flex font-bold pt-6">
                <p>Total</p>
                <p class="ml-auto">${allTotal}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
