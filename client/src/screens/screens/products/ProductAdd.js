import {Container, Content, Header} from 'native-base';
import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  AlertPrimary,
  ButtonSurface,
  handleOpenCamera,
  handleOpenExplorer,
  HeaderNavigation,
  InputPrimary,
  PickerSelect,
  TextArea,
} from '../../../components';
import {
  alterColor,
  dangerColor,
  f3,
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
import {addProduct} from '../../../store/actions';

const ProductAdd = ({route, navigation}) => {
  const dispatch = useDispatch();
  // const {id, productName, price, stock, category, description} = route.params;
  const {categories} = useSelector(state => state.productReducer);
  const [photo, setPhoto] = useState(null);
  const [category, setCategory] = useState(null);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState(null);
  const [price, setPrice] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  const [openAlertSuccess, setOpenAlertSuccess] = useState(false);

  const handleUploadProduct = () => {
    if (
      !photo ||
      !category ||
      category == 0 ||
      productName == '' ||
      description == '' ||
      !stock ||
      stock == '' ||
      !price ||
      price == ''
    ) {
      return setOpenAlert(prev => !prev);
    }
    const payload = {
      photo,
      categoryId: parseInt(category),
      productName,
      description,
      stock: parseInt(stock),
      price: parseInt(price),
    };
    dispatch(addProduct(payload));
    setOpenAlertSuccess(prev => !prev);
  };

  return (
    <Container>
      <Header style={styles.header}>
        <HeaderNavigation
          title={`Tambah Produk Baru`}
          stack={true}
          event1={() => navigation.goBack()}
        />
      </Header>
      <Content>
        <TouchableOpacity style={styles.imageWrapper}>
          <Image
            source={{uri: photo ? photo.path : fakePhoto}}
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={styles.content2Wrapper}>
          <View style={styles.content2SubWrapper}>
            <View>
              {photo ? (
                <ButtonSurface
                  title="remove picture"
                  buttonColor={dangerColor}
                  event1={() => setPhoto(null)}
                />
              ) : (
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 9.75}}>
                    <ButtonSurface
                      isSecond={true}
                      title="buka kamera"
                      event1={() => handleOpenCamera(setPhoto)}
                    />
                  </View>
                  <View style={{flex: 0.25}}></View>
                  <View style={{flex: 9.75}}>
                    <ButtonSurface
                      title="ganti gambar"
                      event1={() => handleOpenExplorer(setPhoto)}
                    />
                  </View>
                </View>
              )}
            </View>
          </View>
          <View style={styles.content2SubWrapper}>
            <View style={styles.detailTitleWrapper}>
              <Text style={styles.detailTitle}>Detail Produk</Text>
            </View>
            <View>
              <PickerSelect
                mode="dialog"
                data={categories}
                event1={e => setCategory(e)}
              />
              <View style={styles.newCategoryWrapper}>
                <Text style={styles.newCategoryTitle}>buat kategori baru</Text>
              </View>
            </View>
            <View>
              <InputPrimary
                model="stacked"
                placeholder="ex: Pensil Warna Greeble 24"
                label="Nama Produk"
                event1={e => setProductName(e)}
              />
            </View>
            <View>
              <InputPrimary
                event1={e => setStock(e)}
                model="stacked"
                placeholder="ex: 15"
                label="Jumlah Stok"
                type="number-pad"
              />
            </View>
            <View>
              <InputPrimary
                event1={e => setPrice(e)}
                model="stacked"
                placeholder="ex: 20000"
                label="Harga Satuan"
                type="number-pad"
              />
            </View>
          </View>
          <View style={styles.content2SubWrapper}>
            <View style={styles.detailTitleWrapper}>
              <Text style={styles.detailTitle}>Description</Text>
            </View>
            <View>
              <TextArea placeholder={lorem} event1={e => setDescription(e)} />
            </View>
          </View>
          <View>
            <View>
              <ButtonSurface
                title="tambah product"
                boldTitle={true}
                borderRadius={1}
                event1={handleUploadProduct}
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
            <View>
              <AlertPrimary
                when={openAlertSuccess}
                infoText="Oke"
                message="Produk berhasil ditambahkan"
                title="Berhasil"
                event3={() => navigation.replace('Daftar Produk')}
              />
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default ProductAdd;

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
  },
  content2SubWrapper: {
    backgroundColor: primaryColor,
    marginBottom: mp2,
    paddingVertical: mp2,
    paddingHorizontal: mp3,
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
  detailTitleWrapper: {marginBottom: mp2},
  detailTitle: {fontSize: f7, fontWeight: 'bold'},
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
