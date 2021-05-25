import axios from 'axios';
import {hostProducts} from '../../helpers';
import {
  API_ACTION_COMPLETE,
  API_NULLIFY_ERROR,
  API_PRODUCT_GET_CATEGORIES,
  API_PRODUCT_GET_PRODUCTS,
  API_PRODUCT_LOADING_ERROR,
  API_PRODUCT_LOADING_START,
  API_PRODUCT_LOADING_SUCCESS,
} from '../types';

const getProducts = () => {
  return async dispatch => {
    try {
      dispatch({type: API_NULLIFY_ERROR});
      dispatch({type: API_PRODUCT_LOADING_START});
      const response = await axios.get(`${hostProducts}`);
      dispatch({type: API_PRODUCT_GET_PRODUCTS, payload: response.data});
      await dispatch(getCategories());
      dispatch({type: API_PRODUCT_LOADING_SUCCESS});
      console.log('prodcut');
    } catch (e) {
      console.log(e.message);
      dispatch({type: API_PRODUCT_LOADING_ERROR, payload: e.message});
    }
  };
};

const getCategories = () => {
  return async dispatch => {
    try {
      dispatch({type: API_NULLIFY_ERROR});
      dispatch({type: API_PRODUCT_LOADING_START});
      const response = await axios.get(`${hostProducts}/categories`);
      dispatch({type: API_PRODUCT_GET_CATEGORIES, payload: response.data});
      dispatch({type: API_PRODUCT_LOADING_SUCCESS});
    } catch (e) {
      console.log(e.message);
      dispatch({type: API_PRODUCT_LOADING_ERROR, payload: e.message});
    }
  };
};

const addProduct = payload => {
  return async dispatch => {
    try {
      dispatch({type: API_NULLIFY_ERROR});
      dispatch({type: API_PRODUCT_LOADING_START});
      const {photo, categoryId, productName, description, stock, price} =
        payload;
      const headers = {
        headers: {
          'Content-Type': 'application/form-data',
        },
      };
      const form = new FormData();
      const image = {
        uri: photo.path,
        type: photo.mime,
        name: 'photo.jpeg',
      };
      form.append('image', image);
      form.append('productName', productName);
      form.append('categoryId', categoryId);
      form.append('description', description);
      form.append('stock', stock);
      form.append('price', price);
      await axios.post(`${hostProducts}`, form, headers);
      console.log('ea');
      await dispatch(getProducts());
      dispatch({type: API_PRODUCT_LOADING_SUCCESS});
      // dispatch({type: API_ACTION_COMPLETE});
    } catch (e) {
      console.log(e.response.data);
      dispatch({type: API_PRODUCT_LOADING_ERROR, payload: e.message});
    }
  };
};

const editProduct = payload => {
  return async dispatch => {
    try {
      console.log(payload);
      dispatch({type: API_NULLIFY_ERROR});
      dispatch({type: API_PRODUCT_LOADING_START});
      const {photo, productName, description, stock, price, productId} =
        payload;
      const headers = {
        headers: {
          'Content-Type': 'application/form-data',
        },
      };
      const form = new FormData();
      const image =
        photo === null
          ? false
          : {
              uri: photo.path,
              type: photo.mime,
              name: 'photo.jpeg',
            };
      console.log(payload);

      const noFile = photo === null ? true : false;

      form.append('image', image);
      form.append('noFile', noFile);
      form.append('productName', productName);
      form.append('description', description);
      form.append('stock', stock);
      form.append('price', price);
      const a = await axios.post(
        `${hostProducts}/edit/${productId}`,
        form,
        headers,
      );
      console.log(a);
      await dispatch(getProducts());
      dispatch({type: API_PRODUCT_LOADING_SUCCESS});
      // dispatch({type: API_ACTION_COMPLETE});
    } catch (e) {
      console.log(e.response.data);
      dispatch({type: API_PRODUCT_LOADING_ERROR, payload: e.message});
    }
  };
};

const deleteProduct = productId => {
  return async dispatch => {
    try {
      dispatch({type: API_NULLIFY_ERROR});
      dispatch({type: API_PRODUCT_LOADING_START});

      await axios.delete(`${hostProducts}/${productId}`);
      await dispatch(getProducts());
      console.log('dekete');
      dispatch({type: API_PRODUCT_LOADING_SUCCESS});
    } catch (e) {
      console.log(e.response);
      dispatch({type: API_PRODUCT_LOADING_ERROR, payload: e.message});
    }
  };
};

export {getProducts, getCategories, addProduct, editProduct, deleteProduct};
