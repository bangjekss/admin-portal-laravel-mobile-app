import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {surfaceColor} from '../../helpers';
import {Icon, Text, View} from 'native-base';
import {CustomersStack, ProductsDrawer, ProductsStack, SalesStack} from '.';
import SalesDrawer from './SalesDrawer';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBarOptions={{
        activeTintColor: surfaceColor,
        inactiveTintColor: 'gray',
      }}
      screenOptions={({route}) => ({
        title: '',
        tabBarIcon: ({color}) => {
          let icon;
          if (route.name === 'Produk') icon = 'store-alt';
          if (route.name === 'Penjualan') icon = 'coins';
          if (route.name === 'Pelanggan') icon = 'users';
          return (
            <View>
              <Icon
                type="FontAwesome5"
                name={icon}
                style={{color, position: 'relative', top: 7}}
              />
            </View>
          );
        },
      })}>
      <Tab.Screen name="Produk" component={ProductsDrawer} />
      <Tab.Screen name="Penjualan" component={SalesDrawer} />
      <Tab.Screen name="Pelanggan" component={CustomersStack} />
    </Tab.Navigator>
  );
};

export default MainTab;
