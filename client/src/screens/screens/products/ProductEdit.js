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
  storagePublic,
  surfaceColor,
} from '../../../helpers';
import {editProduct} from '../../../store/actions';

const ProductEdit = ({route, navigation}) => {
  const dispatch = useDispatch();
  // const {actionComplete} = useSelector(state => state.productReducer);
  const {id, productName, price, stock, category, description, imagepath} =
    route.params;
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState(productName);
  const [desc, setDesc] = useState(description);
  const [inv, setInv] = useState(stock);
  const [pri, setPri] = useState(price);
  const [changePhoto, setChangePhoto] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
  const handleSaveProduct = () => {
    if (name == '' || desc == '' || !inv || inv == '' || !pri || pri == '') {
      return setOpenAlert(prev => !prev);
    }
    const payload = {
      productId: id,
      photo,
      productName: name,
      description: desc,
      stock: parseInt(inv),
      price: parseInt(pri),
    };
    dispatch(editProduct(payload));
    setOpenAlertSuccess(prev => !prev);
  };

  return (
    <Container>
      <Header style={styles.header}>
        <HeaderNavigation
          title={`Edit ${productName}`}
          stack={true}
          event1={() => navigation.replace('Daftar Produk')}
        />
      </Header>
      <Content>
        <TouchableOpacity style={styles.imageWrapper}>
          <Image
            source={{
              uri: photo ? photo.path : `${storagePublic}/${imagepath}`,
            }}
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={styles.content2Wrapper}>
          <View style={styles.content2SubWrapper}>
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
          </View>
          <View style={styles.content2SubWrapper}>
            <View style={styles.detailTitleWrapper}>
              <Text style={styles.detailTitle}>Detail Produk</Text>
            </View>
            <View>
              <InputPrimary
                model="stacked"
                placeholder="ex: Pensil Warna Greeble 24"
                label="Nama Produk"
                value={productName}
                event1={e => setName(e)}
              />
            </View>
            <View>
              <InputPrimary
                model="stacked"
                placeholder="ex: 15"
                label="Jumlah Stok"
                type="number-pad"
                value={String(stock)}
                event1={e => setInv(e)}
              />
            </View>
            <View>
              <InputPrimary
                model="stacked"
                placeholder="ex: 20000"
                label="Harga Satuan"
                type="number-pad"
                value={String(price)}
                event1={e => setPri(e)}
              />
            </View>
          </View>
          <View style={styles.content2SubWrapper}>
            <View style={styles.detailTitleWrapper}>
              <Text style={styles.detailTitle}>Description</Text>
            </View>
            <View>
              <TextArea
                placeholder={lorem}
                value={description}
                event1={e => setDesc(e)}
              />
            </View>
          </View>
          <View>
            <View>
              <ButtonSurface
                title="simpan"
                boldTitle={true}
                borderRadius={1}
                event1={handleSaveProduct}
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
                message="Produk berhasil diperbarui"
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

export default ProductEdit;

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
