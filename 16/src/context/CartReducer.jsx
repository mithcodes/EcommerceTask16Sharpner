const cartReducer = (state, action) => {
  let { type, payload } = action;
  //console.log(type, payload);
  let flag = true;

  state.cart.forEach((e) => {
    if (e.title == payload.title) {
      flag = false;
      alert("Product already added!");
    }
  });

  if (!flag) return state;
  payload = { ...payload, quantity: 1 };

  switch (type) {
    case "AddToCart": {
      return { ...state, cart: [...state.cart, payload] };
    }
    default:
      return state;
  }
};

export default cartReducer;