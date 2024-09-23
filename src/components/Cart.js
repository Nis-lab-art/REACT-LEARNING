import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearItems } from "../../utils/cartSlice";

const CartItem = ({ item, index }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center border-2 border-slate-400 shadow-md shadow-blue-400 p-4 rounded-lg">
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-lg font-bold">{item.name}</h1>
        <img alt="prd-image" src={item.thumbnailImage} className="w-60 h-40" />
        <div className="flex space-x-8">
          <h1 className="text-lg font-bold">Rs.{item.basePrice}</h1>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              dispatch(removeItem(index));
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);

  return (
    <div className="m-4 space-y-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          dispatch(clearItems());
        }}
      >
        Clear Cart
      </button>
      <div className="flex flex-col items-center justify-center space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartItem item={item} key={item.id} index={index} />
          ))
        ) : (
          <h1 className="text-lg font-bold">No items in a cart :(</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
