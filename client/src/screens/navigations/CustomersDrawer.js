import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {ProductsStack, SalesStack} from '.';
import {
  createDrawerNavigator,
  DrawerContent,
  DrawerContentScrollView,
  DrawerView,
} from '@react-navigation/drawer';
import {
  f1,
  f3,
  f8,
  mp1,
  mp2,
  mp3,
  primaryColor,
  surfaceColor,
} from '../../helpers';
import {Button, Container, Content, Footer, Header} from 'native-base';
import {
  ButtonSurface,
  RangeSlider,
  SliderLine,
  InputPrimary,
  PickerSelect,
} from '../../components';
import {kategori} from '../../helpers';
import {CustomersStack} from './';

const Drawer = createDrawerNavigator();

const CustomersDrawer = () => {
  const handleMin = e => {
    console.log(e);
  };
  return (
    <Drawer.Navigator
      drawerPosition="right"
      initialRouteName="Home"
      drawerContent={route => {
        return (
          <Container style={styles.container}>
            <Header style={styles.header}>
              <View>
                <Text style={styles.headerTitle}>filter</Text>
              </View>
            </Header>
            <Content style={styles.content}>
              <InputPrimary
                model="stacked"
                label="Harga minimal"
                placeholder={`ex: ${0} `}
                event1={handleMin}
                type="number-pad"
              />
              <InputPrimary
                model="stacked"
                label="Harga maximal"
                placeholder={`ex: ${500} `}
                event1={handleMin}
                type="number-pad"
              />
              <View style={styles.pickerWrapper}>
                <Text style={styles.secondText}>Pilih kategori</Text>
                <PickerSelect data={kategori} />
              </View>
            </Content>
            <Footer style={styles.footer}>
              <ButtonSurface title="Terapkan" borderRadius={1} />
            </Footer>
          </Container>
        );
      }}>
      <Drawer.Screen name="Pelanggan Stack" component={CustomersStack} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
    maxHeight: Dimensions.get('screen').height,
  },
  header: {
    height: 50,
    backgroundColor: primaryColor,
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: f8,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  footer: {
    height: 'auto',
    backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerWrapper: {
    marginTop: mp3,
  },
  secondText: {
    fontSize: f3,
    color: 'gray',
  },
  content: {
    paddingHorizontal: mp2,
    paddingVertical: mp1,
  },
});

export default CustomersDrawer;
