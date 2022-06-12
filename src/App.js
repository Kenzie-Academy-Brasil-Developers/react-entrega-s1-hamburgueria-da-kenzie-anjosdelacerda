import "./App.css";
import { useEffect, useState } from "react";
import "./reset.css";
import "./style.css";
import Cart from "./components/Cart";
import Productlist from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  function showProducts() {
    const busca = products.filter(
      (item) => item.name.toLowerCase() === filteredProducts.toLowerCase()
    );

    setProducts(busca);
  }

  function handleClick(id) {
    const verificacao = currentSale.every((hamburguer) => hamburguer.id !== id);

    if (verificacao === true) {
      const compra = products?.find((item) => item.id === id);

      setCurrentSale([...currentSale, compra]);
      valorTotal();
    } else {
      console.log("hamburguer já adicionado");

      // const hamburguerPosition = currentSale.findIndex(
      //   (hamburguer) => hamburguer.id === id
      // );
      // // console.log(hamburguerPosition);
      // console.log(currentSale[hamburguerPosition]);
      // console.log(currentSale[hamburguerPosition].count);

      // currentSale[hamburguerPosition].count =
      //   currentSale[hamburguerPosition].count + 1;
    }
  }

  function valorTotal() {
    const price = currentSale?.reduce(
      (acumulador, item) => acumulador + item.price,
      0
    );

    setCartTotal(price);
  }

  // function handleRmove(id){
  //   const newArt =
  // }

  return (
    <div className="universalBox">
      <div className="menu">
        <div className="logoBox">
          <div className="logo">
            <h1>
              <span className="burguer">Burguer</span>{" "}
              <span className="kenzie">kenzie</span>
            </h1>
          </div>
        </div>
        <>
          <div className="containerInputPesquisa">
            <input
              className="menuPesquisa"
              type="text"
              placeholder="Digitar pesquisa"
              value={filteredProducts}
              onChange={(event) => setFilteredProducts(event.target.value)}
            ></input>
            <button onClick={showProducts} className="buttonPesquisa">
              Pesquisar
            </button>
          </div>
        </>
      </div>
      <div className="espacamentoContent">
        <Productlist products={products} handleClick={handleClick} />
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      </div>
    </div>
  );
}

export default App;

/* como passar uma função handleClick do app para o product.js que recebe a props do productList? */
