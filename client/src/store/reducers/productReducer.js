import {
  API_NULLIFY_ERROR,
  API_PRODUCT_LOADING_ERROR,
  API_PRODUCT_LOADING_START,
  API_PRODUCT_LOADING_SUCCESS,
  API_PRODUCT_GET_PRODUCTS,
  API_PRODUCT_GET_CATEGORIES,
  API_ACTION_COMPLETE,
} from '../types';

const global = {
  isLoading: false,
  isError: false,
  error: null,
  products: [],
  categories: [],
  actionComplete: false,
};

const productReducer = (state = global, action) => {
  switch (action.type) {
    case API_NULLIFY_ERROR:
      return {...state, isError: false, error: null, actionComplete: false};
    case API_PRODUCT_LOADING_START:
      return {...state, isLoading: true};
    case API_PRODUCT_LOADING_SUCCESS:
      return {...state, isLoading: false};
    case API_PRODUCT_LOADING_ERROR:
      return {...state, isLoading: false, isError: true, error: action.payload};
    case API_PRODUCT_GET_PRODUCTS:
      return {...state, products: action.payload};
    case API_PRODUCT_GET_CATEGORIES:
      return {...state, categories: action.payload};
    case API_ACTION_COMPLETE:
      return {...state, actionComplete: true};
    default:
      return state;
  }
};

export default productReducer;
