import {
  API_NULLIFY_ERROR,
  API_CUSTOMER_GET_CUSTOMERS,
  API_CUSTOMER_LOADING_ERROR,
  API_CUSTOMER_LOADING_START,
  API_CUSTOMER_LOADING_SUCCESS,
} from '../types';

const global = {
  isLoading: false,
  isError: false,
  error: null,
  customers: [],
};

const customersReducer = (state = global, action) => {
  switch (action.type) {
    case API_NULLIFY_ERROR:
      return {...state, isError: false, error: null};
    case API_CUSTOMER_LOADING_START:
      return {...state, isLoading: true};
    case API_CUSTOMER_LOADING_SUCCESS:
      return {...state, isLoading: false};
    case API_CUSTOMER_LOADING_ERROR:
      return {...state, isLoading: false, isError: true, error: action.payload};
    case API_CUSTOMER_GET_CUSTOMERS:
      return {...state, customers: action.payload};
    default:
      return state;
  }
};

export default customersReducer;
