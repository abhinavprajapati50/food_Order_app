import { useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import { CartContext__Provider } from "./Store/CartContext__Provider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
   }
  const hideCartHandler = () => { 
    setCartIsShown(false)
  }

  return (
    <CartContext__Provider>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart hideCartHandler={ hideCartHandler }/>}
      <main>
      <Meals/>
      </main>
    </CartContext__Provider>
  );
}

export default App;
