function cartReducer(state = [], action){

  switch(action.type) {
    case "ADD_PRODUCT_TO_CART":
    return [...state, action.payload]
    break;
    case "ADD_USER_TO_PRODUCTS":
    return state.map((e,i) => { return {...e, email: action.payload} })
    break;
  }

  return state;
}

export default cartReducer;
