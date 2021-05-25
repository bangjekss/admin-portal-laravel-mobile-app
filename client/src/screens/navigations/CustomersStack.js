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
import {SalesList} from '../screens/sales';
import {
  CustomersAdd,
  CustomersDetail,
  CustomersList,
} from '../screens/customers';

const Stack = createStackNavigator();

const CustomersStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Pelanggan">
      <Stack.Screen name="Daftar Pelanggan" component={CustomersList} />
      <Stack.Screen name="Detail Pelanggan" component={CustomersDetail} />
      <Stack.Screen name="Tambah Pelanggan" component={CustomersAdd} />
    </Stack.Navigator>
  );
};

export default CustomersStack;
