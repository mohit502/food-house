import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <>
      <h1 className="font-bold text-3xl">Cart Items</h1>
      <h2>Quantity: {cartItems.length}</h2>
      <button className="bg-gray-100 hover:bg-red-100 p-2 m-5" onClick={()=> handleClearCart()}>Clear Cart 🗑</button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => {
          return <FoodItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default Cart;
