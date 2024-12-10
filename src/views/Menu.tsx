import Menus from "../components/Menus";
import Cart from '../components/Cart';
import { useCart } from "../hooks/useCart";


export default function Menu() {
  const { data, cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal } = useCart()
  return (
    <>
        <div className=" p-4 bg-slate-400">
          <h1 className="text-2xl text-slate-900 select-text">Menu</h1>
        </div>
  
        <div className="flex flex-wrap justify-end ">
      <div className=" container mx-10  max-w-max ">
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
            clearCart={clearCart}
            isEmpty={isEmpty}
            cartTotal={cartTotal}
          />
        </div>
        </div>
      <div className="row first-line:mt-5 max-w-6xl flex flex-wrap flex-grow">
        {data.map((menu) => (
          <Menus
            key={menu.id}
            menu={menu}
            addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}


