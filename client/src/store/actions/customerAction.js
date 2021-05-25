import axios from 'axios';
import {hostCustomers, hostProducts, hostSales} from '../../helpers';
import {
  API_NULLIFY_ERROR,
  API_CUSTOMER_GET_CUSTOMERS,
  API_CUSTOMER_LOADING_ERROR,
  API_CUSTOMER_LOADING_START,
  API_CUSTOMER_LOADING_SUCCESS,
} from '../types';

const getCustomers = () => {
  return async dispatch => {
    try {
      dispatch({type: API_NULLIFY_ERROR});
      dispatch({type: API_CUSTOMER_LOADING_START});
      const response = await axios.get(`${hostCustomers}`);
      dispatch({type: API_CUSTOMER_GET_CUSTOMERS, payload: response.data});
      dispatch({type: API_CUSTOMER_LOADING_SUCCESS});
    } catch (e) {
      console.log(e.message);
      dispatch({type: API_CUSTOMER_LOADING_ERROR, payload: e.message});
    }
  };
};
export {getCustomers};
