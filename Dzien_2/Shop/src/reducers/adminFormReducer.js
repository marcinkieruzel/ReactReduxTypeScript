const defultForm = {
  productName: "",
  productDescription: "",
  productImage: "",
  productPrice: 0
}

function adminFormReducer(state = defultForm, action) {
  switch(action.type) {
    case "CHANGE_FORM_STATE":
    return {...state, ...action.payload}
  }
  return state;
}

export default adminFormReducer;
