import { useState, useEffect } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [totalCost, setTotalCost] = useState(0);

  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_QTY",
      payload: {
        id,
        qty,
      },
    });
  };

  useEffect(() => {
    setTotalCost(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [cart]);

  return (
    <div
      style={{
        border: "1px solid black",
        width: "20%",
        display: "flex",
        flexDirection: "column",
        padding: 10,
      }}
    >
      <h1>Cart</h1>
      <b style={{ alignSelf: "center" }}>Total:$ {totalCost}</b>
      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            margin: 4,
            display: "flex",
            padding: 10,
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 4 }}>
            <img
              src={item.thumbnail}
              alt={item.description}
              style={{ width: 70, objectFit: "cover" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <span>{item.title}</span>
              <b>{item.price}</b>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <button onClick={() => changeQty(item.id, item.qty - 1)}>
                -
              </button>
              <span>{item.qty}</span>
              <button onClick={() => changeQty(item.id, item.qty + 1)}>
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
