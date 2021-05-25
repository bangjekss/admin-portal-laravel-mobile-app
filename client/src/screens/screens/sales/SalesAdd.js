import {Container, Content, Footer, Header} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import {
  AlertPrimary,
  ButtonSurface,
  CardProduct,
  HeaderNavigation,
  InputPrimary,
  InputSecond,
  Loader1,
  PickerSelect,
  TextArea,
} from '../../../components';
import {
  alterColor,
  dangerColor,
  f1,
  f3,
  f6,
  f7,
  f8,
  fakePhoto,
  kategori,
  lorem,
  mp1,
  mp2,
  mp3,
  mp4,
  mp5,
  primaryColor,
  surfaceColor,
} from '../../../helpers';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {useDispatch, useSelector} from 'react-redux';
import {getCustomers, getProducts, postSale} from '../../../store/actions';

const SalesAdd = ({route, navigation}) => {
  const dispatch = useDispatch();
  const isLoadingCustomer = useSelector(
    state => state.customerReducer.isLoading,
  );
  const isLoadingProduct = useSelector(state => state.productReducer.isLoading);
  const {customers} = useSelector(state => state.customerReducer);
  const {products} = useSelector(state => state.productReducer);
  const [openAlert, setOpenAlert] = useState(false);
  const [searchCustomer, setSearchCustomer] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [searchProduct, setSearchProduct] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [qty, setQty] = useState(null);
  const [cart, setCart] = useState([]);
  // return <Text>ea</Text>;

  let dataProducts = products.length === 0 ? [] : products;
  if (products.length !== 0) {
    dataProducts = products.map((value, i) => {
      return {
        id: value.id,
        name: value.productName,
      };
    });
  }
  const product =
    searchProduct === ''
      ? {}
      : products.find(value => value.id === selectedProduct.id);

  useEffect(() => {
    if (customers.length === 0) dispatch(getCustomers());
    if (products.length === 0) dispatch(getProducts());
  }, []);

  const handleConfirm = data => {
    let temp = cart;
    let index;
    cart.forEach((value, idx) => {
      if (value.id === data.id) index = idx;
    });
    if (index) {
      temp[index].quantity += qty;
    } else {
      let newData = {...data, quantity: parseInt(qty)};
      temp.push(newData);
    }
    setCart(temp);
    setSearchProduct('');
  };

  const handleSubmit = () => {
    if (!selectedCustomer) return setOpenAlert(prev => !prev);
    const date = Date.now();
    const payload = {
      dateNow: date,
      cart,
      subTotal: renderTotal(),
      customerId: selectedCustomer.id,
    };
    console.log(payload);
    dispatch(postSale(payload));
    // setSelectedCustomer(null);
    // setCart([]);
  };

  const renderDetail = () => {
    return cart.map(value => (
      <CardProduct data={value} cart={true} key={value.id} />
    ));
  };

  const renderTotal = () => {
    let total = 0;
    cart.forEach(value => {
      total += value.quantity * value.price;
    });
    return total;
  };
  if (
    isLoadingCustomer ||
    isLoadingProduct ||
    customers.length === 0 ||
    products.length === 0
  )
    return <Loader1 when={isLoadingProduct} />;
  return (
    <Container>
      <Header style={styles.header}>
        <HeaderNavigation
          title={`Tambah Penjualan Manual`}
          stack={true}
          event1={() => navigation.goBack()}
        />
      </Header>
      <Content>
        <View style={styles.content2Wrapper}>
          <View style={styles.content2SubWrapper}>
            <View style={{marginBottom: mp3}}>
              <View style={{marginBottom: mp2}}>
                <Text style={styles.detailTitle}>Pilih Pelanggan</Text>
              </View>
              <View style={{paddingHorizontal: mp4}}>
                <SearchableDropdown
                  onItemSelect={item => {
                    setSelectedCustomer(item);
                    setSearchCustomer(item.name);
                  }}
                  containerStyle={{backgroundColor: primaryColor}}
                  itemStyle={{
                    padding: mp2,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    borderBottomWidth: 1,
                  }}
                  itemTextStyle={{fontSize: f6, color: 'black'}}
                  itemsContainerStyle={{maxHeight: 200}}
                  items={customers}
                  defaultIndex={1}
                  resetValue={false}
                  textInputProps={{
                    onChangeText: text => setSearchCustomer(text),
                    value: searchCustomer,
                    placeholder: 'cari pelanggan',
                    style: {
                      paddingVertical: mp3,
                      paddingHorizontal: mp4,
                      borderWidth: 2,
                      borderColor: 'rgba(0,0,0,0.1)',
                      borderRadius: 10,
                      fontSize: f6,
                    },
                  }}
                  listProps={{
                    nestedScrollEnabled: true,
                  }}
                />
              </View>
            </View>
            <View>
              <View style={{marginBottom: mp2}}>
                <Text style={styles.detailTitle}>Pilih Produk</Text>
              </View>
              <View style={{paddingHorizontal: mp4}}>
                <SearchableDropdown
                  onItemSelect={item => {
                    setSelectedProduct(item);
                    setSearchProduct(item.name);
                  }}
                  containerStyle={{backgroundColor: primaryColor}}
                  itemStyle={{
                    padding: mp2,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    borderBottomWidth: 1,
                  }}
                  itemTextStyle={{fontSize: f6, color: 'black'}}
                  itemsContainerStyle={{maxHeight: 200}}
                  items={dataProducts}
                  defaultIndex={1}
                  resetValue={false}
                  textInputProps={{
                    onChangeText: text => setSelectedProduct(text),
                    value: searchProduct,
                    placeholder: 'cari produk',
                    style: {
                      paddingVertical: mp3,
                      paddingHorizontal: mp4,
                      borderWidth: 2,
                      borderColor: 'rgba(0,0,0,0.1)',
                      borderRadius: 10,
                      fontSize: f6,
                    },
                  }}
                  listProps={{
                    nestedScrollEnabled: true,
                  }}
                />
              </View>
            </View>
          </View>
          {searchProduct !== '' ? (
            <View style={styles.content2SubWrapper}>
              <View>
                <CardProduct data={product} second={true} />
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 7.25, marginRight: mp1}}>
                  <InputSecond
                    placeholder="Masukkan jumlah barang"
                    type="number-pad"
                    event1={e => setQty(parseInt(e))}
                  />
                </View>
                <View
                  style={{
                    flex: 2.75,
                    flexDirection: 'row',
                  }}>
                  <ButtonSurface
                    event1={() => handleConfirm(product)}
                    title="Pilih"
                    boldTitle={true}
                    height="100%"
                  />
                </View>
              </View>
            </View>
          ) : null}
          {cart.length === 0 ? null : (
            <View style={styles.content2SubWrapper}>
              <View style={styles.detailTitleWrapper}>
                <Text style={styles.detailTitle}>Detail Pembelian</Text>
              </View>
              <View>{renderDetail()}</View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginTop: mp3,
                  // alignContent: 'center',
                }}>
                <View style={{marginRight: mp4}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: f7,
                      color: 'black',
                      textTransform: 'capitalize',
                    }}>
                    total harga
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: f8,
                      color: dangerColor,
                    }}>
                    Rp{renderTotal().toLocaleString()}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </Content>
      {cart.length === 0 ? null : (
        <Footer style={{height: 'auto'}}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <ButtonSurface
              title="submit"
              boldTitle={true}
              borderRadius={1}
              event1={handleSubmit}
            />
          </View>
          <View>
            <AlertPrimary
              when={openAlert}
              infoText="Oke"
              message="Pastikan Anda memasukkan data dengan benar!"
              title="Oopss..!!"
              event2={() => setOpenAlert(prev => !prev)}
            />
          </View>
        </Footer>
      )}
    </Container>
  );
};

export default SalesAdd;

const styles = StyleSheet.create({
  header: {
    backgroundColor: primaryColor,
    flexDirection: 'column',
    height: 'auto',
    paddingVertical: mp1,
    borderBottomWidth: 2,
    borderBottomColor: alterColor,
    elevation: 5,
  },
  imageWrapper: {
    maxHeight: Dimensions.get('screen').height / 2.5,
  },
  image: {
    resizeMode: 'cover',
    height: 500,
    maxHeight: Dimensions.get('screen').height / 2.5,
  },
  content2Wrapper: {
    backgroundColor: alterColor,
    // flex: 1,
    // flexDirection: 'row',
  },
  content2SubWrapper: {
    backgroundColor: primaryColor,
    marginBottom: mp2,
    paddingVertical: mp4,
    paddingHorizontal: mp4,
  },
  newCategoryWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: mp3,
  },
  newCategoryTitle: {
    textTransform: 'capitalize',
    color: surfaceColor,
    fontWeight: 'bold',
    fontSize: f3,
  },
  price: {fontWeight: 'bold', fontSize: f8},
  productName: {fontSize: f7, fontWeight: 'normal'},
  detailTitleWrapper: {marginBottom: mp4},
  detailTitle: {fontSize: f7, fontWeight: 'bold', textTransform: 'capitalize'},
  detailContentWrapper: {paddingHorizontal: mp4, marginBottom: mp4},
  detailItemWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: alterColor,
    paddingVertical: mp2,
  },
  detailItem1: {flex: 4},
  detailItem2: {flex: 6},
  detailItemAt1: {color: 'gray'},
  detailItemAt2: {
    textTransform: 'capitalize',
    color: surfaceColor,
    fontWeight: 'bold',
  },
});
