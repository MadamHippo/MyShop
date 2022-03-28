// This can read and write data into the Redux store.

import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

// Someone triggered an action, action will say type and what data was triggered. Now within action, look at the type (success? Request? Fail?) and it will do the rest.
// State is the initial default state that has no data passed to it. Initial empty state...
export const productListReducer = (state = {products: []}, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {loading: true, products: []}
    case PRODUCT_LIST_SUCCESS:
      return {loading: false, products: action.payload}
    case PRODUCT_LIST_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }

}