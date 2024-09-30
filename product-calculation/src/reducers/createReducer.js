export const createReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [{ ...action.payload }, ...state.cart] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((prd) => prd.id !== action.payload.id),
      };
    case "CHANGE_QTY":
      return {
        ...state,
        cart: state.cart.filter((prd) =>
          prd.id === action.payload.id
            ? (prd.qty = action.payload.qty)
            : prd.qty
        ),
      };
    default:
      break;
  }
};
