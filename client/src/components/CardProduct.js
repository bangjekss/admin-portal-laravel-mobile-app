import React, {useState} from 'react';
import {View, Text, Content} from 'native-base';
import {
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  alterColor,
  dangerColor,
  f1,
  f3,
  f4,
  f6,
  f7,
  f8,
  fakePhoto,
  mp1,
  mp2,
  primaryColor,
  storagePublic,
} from '../helpers';
import {AlertPrimary, ButtonSurface} from '.';
import {useDispatch} from 'react-redux';
import {deleteProduct} from '../store/actions';

const CardProduct = ({navigation, data, second, cart, event1}) => {
  const dispatch = useDispatch();
  const {id, productName, category, price, imagepath, stock} = data;
  const [openAlertDelete, setOpenAlertDelete] = useState(false);
  const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
  const handleDeleteBtn = productId => {
    dispatch(deleteProduct(productId));
    setOpenAlertDelete(prev => !prev);
    setOpenAlertSuccess(prev => !prev);
  };
  if (cart) {
    const {quantity} = data;
    return (
      <View style={styles.containerCart}>
        <TouchableOpacity style={styles.itemWrapper}>
          <View>
            <Image
              source={{
                uri: imagepath ? `${storagePublic}/${imagepath}` : fakePhoto,
              }}
              style={styles.img}
            />
          </View>
          <View style={styles.itemRightWrapper}>
            <View style={{marginBottom: mp1}}>
              <Text style={styles.nama}>{productName}</Text>
            </View>
            <View style={styles.kategoriWrapper}>
              <Text style={styles.kategoriLabel}>jumlah </Text>
              <Text style={styles.harga}>{quantity.toLocaleString()}</Text>
            </View>
            <View style={styles.kategoriWrapper}>
              <Text style={styles.kategoriLabel}>harga </Text>
              <Text style={styles.harga}>Rp{price.toLocaleString()}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.itemWrapper}
        onPress={second ? () => navigation.navigate('Detail', data) : null}>
        <View>
          <Image
            source={{
              uri: `${storagePublic}/${imagepath}`,
            }}
            style={styles.img}
          />
        </View>
        <View style={styles.itemRightWrapper}>
          <View style={{marginBottom: mp1}}>
            <Text style={styles.nama}>{productName}</Text>
          </View>
          <View style={styles.kategoriWrapper}>
            <Text style={styles.kategoriLabel}>kategori </Text>
            <Text style={styles.kategori}>{category.category}</Text>
          </View>
          <View style={styles.kategoriWrapper}>
            <Text style={styles.kategoriLabel}>stock </Text>
            <Text style={styles.kategori}>{stock.toLocaleString()}</Text>
          </View>
          <View style={{marginTop: mp1}}>
            <Text style={styles.harga}>Rp{price.toLocaleString()}</Text>
          </View>
        </View>
      </TouchableOpacity>
      {second ? null : (
        <View style={styles.actionWrapper}>
          <View style={styles.btnEdit}>
            <ButtonSurface
              title="edit"
              isSecond={true}
              event1={() => navigation.navigate('Edit Produk', data)}
            />
          </View>
          <View style={styles.btnDelete}>
            <ButtonSurface
              icon="trash"
              buttonColor={dangerColor}
              event1={() => setOpenAlertDelete(prev => !prev)}
            />
          </View>
          <View>
            <AlertPrimary
              when={openAlertDelete}
              cancelText="Tidak"
              confirmText="Ya"
              message="Produk yang telah dihapus tidak dapat dikembalikan"
              title="Hapus produk ini?"
              event3={() => handleDeleteBtn(id)}
              event1={() => setOpenAlertDelete(prev => !prev)}
            />
          </View>
          <View>
            <AlertPrimary
              when={openAlertSuccess}
              infoText="Oke"
              message="Produk berhasil dihapus"
              title="Berhasil"
              event2={() => setOpenAlertSuccess(prev => !prev)}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerCart: {
    backgroundColor: primaryColor,
    marginBottom: mp1,
    elevation: 5,
    borderRadius: 10,
    padding: mp2,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  container: {
    backgroundColor: primaryColor,
    marginBottom: mp1,
    padding: mp2,
  },
  itemWrapper: {
    flexDirection: 'row',
  },
  img: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  itemRightWrapper: {
    marginLeft: mp2,
    flex: 1,
  },
  nama: {
    fontSize: f6,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  kategoriWrapper: {
    flexDirection: 'row',
    marginTop: mp1,
    alignItems: 'center',
  },
  kategoriLabel: {
    fontSize: f3,
    color: 'gray',
    flex: 1,
  },
  kategori: {
    fontSize: f3,
    flex: 2,
  },
  harga: {
    fontWeight: 'bold',
  },
  actionWrapper: {
    flexDirection: 'row',
    marginTop: mp1,
  },
  btnEdit: {
    flex: 8.5,
    marginHorizontal: mp1,
  },
  btnQty: {
    flex: 4,
  },
  btnDelete: {
    flex: 1.5,
  },
});

export default CardProduct;
