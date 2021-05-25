import {
  API_NULLIFY_ERROR,
  API_SALE_GET_SALES,
  API_SALE_LOADING_ERROR,
  API_SALE_LOADING_START,
  API_SALE_LOADING_SUCCESS,
} from '../types';

const global = {
  isLoading: false,
  isError: false,
  error: null,
  sales: [],
};

const salesReducer = (state = global, action) => {
  switch (action.type) {
    case API_NULLIFY_ERROR:
      return {...state, isError: false, error: null};
    case API_SALE_LOADING_START:
      return {...state, isLoading: true};
    case API_SALE_LOADING_SUCCESS:
      return {...state, isLoading: false};
    case API_SALE_LOADING_ERROR:
      return {...state, isLoading: false, isError: true, error: action.payload};
    case API_SALE_GET_SALES:
      return {...state, sales: action.payload};
    default:
      return state;
  }
};

export default salesReducer;
