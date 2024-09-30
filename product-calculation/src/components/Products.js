const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  console.log(products);

  const changeCart = (type, product) => {
    dispatch({
      type: type,
      payload: {
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        qty: 1,
        price: product.price,
      },
    });
  };

  return (
    <div
      style={{
        width: "80%",
        border: "1px solid black",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {/* <h1>Products</h1> */}
      {products.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            display: "flex",
            flexDirection: "column",
            width: "30%",
            marginTop: 10,
            gap: 10,
            padding: 10,
          }}
        >
          <img
            src={item.thumbnail}
            alt={item.description}
            style={{ objectFit: "cover" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{item.title}</span>
            <b>{item.price}</b>
          </div>
          {cart.some((prd) => prd.id === item.id) ? (
            <button
              onClick={() => changeCart("REMOVE_FROM_CART", item)}
              style={{ backgroundColor: "red", color: "white" }}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={() => changeCart("ADD_TO_CART", item)}
              style={{ backgroundColor: "blue", color: "white" }}
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
