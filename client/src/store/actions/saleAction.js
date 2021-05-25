import axios from 'axios';
import {hostProducts, hostSales} from '../../helpers';
import {
  API_NULLIFY_ERROR,
  API_SALE_GET_SALES,
  API_SALE_LOADING_ERROR,
  API_SALE_LOADING_START,
  API_SALE_LOADING_SUCCESS,
} from '../types';

const getSales = () => {
  return async dispatch => {
    try {
      dispatch({type: API_NULLIFY_ERROR});
      dispatch({type: API_SALE_LOADING_START});
      const response = await axios.get(`${hostSales}`);
      dispatch({type: API_SALE_GET_SALES, payload: response.data});
      dispatch({type: API_SALE_LOADING_SUCCESS});
    } catch (e) {
      console.log(e.message);
      dispatch({type: API_SALE_LOADING_ERROR, payload: e.message});
    }
  };
};

const postSale = payload => {
  return async dispatch => {
    try {
      dispatch({type: API_NULLIFY_ERROR});
      dispatch({type: API_SALE_LOADING_START});
      console.log(payload);
      await axios.post(`${hostSales}/${payload.customerId}`, payload);
      dispatch({type: API_SALE_LOADING_SUCCESS});
      console.log('success');
    } catch (e) {
      console.log(e.response.data);
      dispatch({type: API_SALE_LOADING_ERROR, payload: e.message});
    }
  };
};

export {getSales, postSale};
