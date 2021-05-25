import React from 'react';
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
  mp3,
  mp4,
  primaryColor,
  storagePublic,
} from '../helpers';
import {ButtonSurface, Divider} from '.';

const CardDetailSales = ({navigation, data1, data2}) => {
  const {quantity} = data1;
  const {productName, price, imagepath} = data2;
  const subTotal = price * quantity;
  return (
    <View style={styles.container}>
      <View
        style={styles.itemWrapper}
        // onPress={() => navigation.navigate('Detail', data)}
      >
        <View>
          <Image
            source={{
              uri: `${storagePublic}/${imagepath}`,
            }}
            style={styles.img}
          />
        </View>
        <View style={styles.itemRightWrapper}>
          <View style={styles.itemNameWrapper}>
            <Text style={styles.nama}>{productName}</Text>
          </View>
          <View style={styles.kategoriWrapper}>
            <Text style={styles.kategoriLabel}>jumlah </Text>
            <Text style={styles.kategori}>{quantity} barang</Text>
          </View>
          <View style={styles.kategoriWrapper}>
            <Text style={styles.kategoriLabel}>Harga</Text>
            <Text style={styles.harga}>Rp{price.toLocaleString()}</Text>
          </View>
        </View>
      </View>
      {/* <View style={styles.actionWrapper}>
        <View style={styles.btnPrice}>
          <ButtonSurface
            title="edit"
            isSecond={true}
            // event1={() => navigation.navigate('Edit Produk', data)}
          />
        </View>
        <View style={styles.btnQty}>
          <ButtonSurface title="quantity / price" />
        </View>
        <View style={styles.btnDelete}>
          <ButtonSurface icon="trash" buttonColor={dangerColor} />
        </View>
      </View> */}
      <Divider />
      <View>
        <Text style={{fontWeight: 'bold', fontSize: f7}}>Subtotal</Text>
        <View style={{marginLeft: mp4}}>
          <Text style={{fontSize: f6}}>Rp{subTotal.toLocaleString()}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemNameWrapper: {
    marginBottom: mp1,
  },
  container: {
    backgroundColor: primaryColor,
    marginBottom: mp1,
    padding: mp3,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 10,
    elevation: 5,
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: mp1,
  },
  kategoriLabel: {
    fontSize: f3,
    color: 'gray',
    textTransform: 'capitalize',
  },
  kategori: {
    fontSize: f3,
  },
  harga: {
    // fontWeight: 'bold',
  },
  actionWrapper: {
    flexDirection: 'row',
    marginTop: mp1,
  },
  btnPrice: {
    flex: 4,
  },
  btnQty: {
    flex: 4,
    marginHorizontal: mp1,
  },
  btnDelete: {
    flex: 1.25,
  },
});

export default CardDetailSales;
