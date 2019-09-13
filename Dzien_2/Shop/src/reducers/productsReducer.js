function productsReducer(state = [], action) {

  switch(action.type) {
    case "ADD_PRODUCT":
    return [...state, action.payload];
    break;
    case "ADD_PRODUCTS":
    return action.payload;
    break;
  }

  return state;
}

export default productsReducer;
