import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ProductAdd,
  ProductDetail,
  ProductEdit,
  ProductList,
} from '../screens/products';
import {Icon, Text} from 'native-base';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableOpacityComponent,
  tou,
} from 'react-native';
import {primaryColor, surfaceColor} from '../../helpers';
import {SalesAdd, SalesDetail, SalesList} from '../screens/sales';

const Stack = createStackNavigator();

const SalesStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Produk">
      <Stack.Screen name="Daftar Penjualan" component={SalesList} />
      <Stack.Screen name="Detail Penjualan" component={SalesDetail} />
      <Stack.Screen name="Tambah Penjualan" component={SalesAdd} />
    </Stack.Navigator>
  );
};

export default SalesStack;
