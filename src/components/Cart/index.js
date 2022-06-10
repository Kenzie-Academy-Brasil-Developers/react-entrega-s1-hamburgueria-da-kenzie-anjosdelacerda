import Product from "../Product";

function Cart({ currentSale, setCurrentSale, cartTotal, setCartTotal }) {
  function clearCart() {
    setCurrentSale([]);
    setCartTotal(0);
  }

  if (currentSale.length < 1) {
    return (
      <div className="cartBox">
        <div className="topCartBox">
          <span className="textoTopCartBox">Carrinho de compras</span>
        </div>
        <div className="bottomCartBox">
          <h3 className="sacolaVazia">
            <strong>Sua sacola está vazia</strong>
          </h3>
          <span className="adicioneItens">adicione itens</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cartBox">
        <div className="topCartBox">
          <span className="textoTopCartBox">Carrinho de compras</span>
        </div>
        <div className="bottomCartBox--comItens">
          <ul className="listCart">
            {currentSale.map((hamburguer) => (
              <Product
                key={hamburguer.id}
                id={hamburguer.id}
                img={hamburguer.img}
                name={hamburguer.name}
                category={hamburguer.category}
                price={hamburguer.price}
              />
            ))}
          </ul>
          <div className="valorTotalBox">
            <div className="valorTotalBoxInfos">
              <h5 className="valorTotalBoxInfos-total">Total</h5>
              <h5 className="precoTotal">R${cartTotal}</h5>
            </div>
            <button onClick={clearCart} className="removerTodos">
              Remover todos
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
