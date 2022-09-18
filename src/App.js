import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/index";
import Cardloadeing from "./components/cardloadeing";
import Footer from "./components/footer";
import Herocard from "./components/herocard";

function App() {
  const [data, setData] = useState([]);
  const [tempData, setTempData] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMenSClothing, setIsMenSClothing] = useState(false);

  useEffect(() => {
    getapi()
  }, [])

  useEffect(() => {
    let temp = tempData;

    if (isMenSClothing) {
      setData(temp.filter((e) => e.category === "men's clothing"));
    } else if (isMenSClothing) {
      setData(temp.filter((e) => e.category === "men's clothing"));
    } else setData(tempData);
  }, [isMenSClothing]);

  const addProductToCart = (id) => {
    const itemList =
      cart.length <= 0
        ? [{ id: id, quantity: 1 }]
        : cart.find((e) => e.id === id) === undefined
        ? [...cart, { id: id, quantity: 1 }]
        : cart.map((item) => {
            if (item.id === id) {
              const updatelist = {
                ...item,
                quantity: item.quantity + 1,
              };
              return updatelist;
            }
            return item;
          });
    setCart(itemList);
  };

  const removeQuantityProduct = (id) => {
    if (cart.find((e) => e.id === id && e.quantity === 1) !== undefined) {
      const removeQuantity = cart.filter((e) => e.id !== id);
      setCart(removeQuantity);
    } else {
      const removeQuantity = cart.map((item) => {
        if (item.id === id) {
          const updateproduct = {
            ...item,
            quantity: item.quantity - 1,
          };
          return updateproduct;
        }
        return item;
      });
      setCart(removeQuantity);
    }
  };

  const getapi = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
      setTempData(res.data);
      setLoading(false);
    });
  };
  return (
    <body>
      <Navbar
        data={data}
        addProductToCart={addProductToCart}
        cart={cart}
        removeQuantityProduct={removeQuantityProduct}
      />
      <main className="pt-[70px] min-h-[60vh] py-5 space-y-6">
        <section className="pt-[25px] pb-5">
          <div className="container mx-auto">
            {loading ? (
              <Cardloadeing />
            ) : (
              <Herocard
                data={data}
                addProductToCart={addProductToCart}
                onClickCategory={() => {
                  setIsMenSClothing(!isMenSClothing);
                }}
              />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </body>
  );
}

export default App;
