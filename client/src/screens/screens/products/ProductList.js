import React, {useEffect, useState} from 'react';
import {
  Button,
  Container,
  Content,
  Footer,
  Header,
  Icon,
  Text,
} from 'native-base';

import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  alterColor,
  barang,
  f6,
  f7,
  f8,
  headerWrapperStyle,
  hostProducts,
  mp1,
  mp2,
  mp3,
  mp4,
  primaryColor,
  sort,
  surfaceColor,
} from '../../../helpers';
import {
  AlertPrimary,
  ButtonSurface,
  CardProduct,
  HeaderNavigation,
  InputPrimary,
  Loader1,
  PickerSelect,
  SearchBar,
} from '../../../components';
import SidebarFilterProduct from '../../../components/SidebarFilterProduct';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {ProductDetail} from '.';
import {useDispatch, useSelector} from 'react-redux';
import {deleteProduct, getProducts} from '../../../store/actions';
import axios from 'axios';

const ProductList = ({navigation}) => {
  const dispatch = useDispatch();
  const {products, isLoading, categories} = useSelector(
    state => state.productReducer,
  );

  useEffect(async () => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  }, []);
  // const x = true;
  const openFilter = () => navigation.openDrawer();

  if (isLoading || products.length === 0 || categories.length === 0)
    return <Loader1 when={isLoading} />;

  return (
    <Container style={styles.container}>
      <Header style={styles.header}>
        <HeaderNavigation
          title="Daftar Produk"
          icon="plus"
          event2={() => navigation.navigate('Tambah Produk')}
        />
        <SearchBar />
        <View style={styles.optionsWrapper}>
          <View style={styles.filterBtn}>
            <ButtonSurface
              title="filter"
              titleModel="lowercase"
              event1={openFilter}
              width="100%"
            />
          </View>
          <View style={styles.sortBtn}>
            <PickerSelect data={sort} mode="dialog" />
          </View>
        </View>
      </Header>
      <FlatList
        // keyExtractor={data => data.id.toString()}
        data={products}
        refreshing={true}
        renderItem={({item}) => (
          <CardProduct key={item.id} data={item} navigation={navigation} />
        )}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: alterColor},
  header: {
    backgroundColor: primaryColor,
    flexDirection: 'column',
    height: 'auto',
    paddingVertical: mp1,
    borderBottomWidth: 2,
    borderBottomColor: alterColor,
    elevation: 5,
  },
  optionsWrapper: {
    flexDirection: 'row',
  },
  filterBtn: {
    flex: 0.875,
  },
  sortBtn: {
    flex: 0.125,
  },
});

export default ProductList;
