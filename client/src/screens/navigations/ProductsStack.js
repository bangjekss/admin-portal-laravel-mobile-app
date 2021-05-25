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

const Tab = createStackNavigator();

const ProductsStack = () => {
  return (
    <Tab.Navigator
      headerMode="none"
      initialRouteName="Produk"
      screenOptions={({route}) => ({
        headerStyle: {
          backgroundColor: primaryColor,
        },
        headerRight: () => {
          if (route.name === 'Daftar Produk') {
            return (
              <TouchableOpacity
                style={{
                  paddingHorizontal: 20,
                  borderRadius: 50,
                }}>
                <Icon
                  type="FontAwesome5"
                  name="plus"
                  style={{
                    fontWeight: 100,
                    fontSize: 20,
                    color: surfaceColor,
                  }}
                />
              </TouchableOpacity>
            );
          }
        },
      })}>
      <Tab.Screen name="Daftar Produk" component={ProductList} />
      <Tab.Screen name="Detail" component={ProductDetail} />
      <Tab.Screen name="Edit Produk" component={ProductEdit} />
      <Tab.Screen name="Tambah Produk" component={ProductAdd} />
    </Tab.Navigator>
  );
};

export default ProductsStack;
