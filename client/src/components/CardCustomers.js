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
  f5,
  f6,
  f7,
  f8,
  fakePhoto,
  mp1,
  mp2,
  mp4,
  primaryColor,
  surfaceColor,
} from '../helpers';
import {ButtonSurface} from '.';

const CardCustomers = ({navigation, data}) => {
  const {id, name, dom, gender} = data;
  // const date = new Date(createdAt).toLocaleString('id-ID', {
  //   // day: 'long',
  //   dateStyle: 'full',
  //   // timeStyle: 'full',
  //   // month: 'long',
  //   // year: 'long',
  //   // calendar: '',
  // });
  // const {productName} = product[0];
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.itemWrapper}
        onPress={() => navigation.navigate('Detail Pelanggan', data)}>
        <View>
          <Image
            source={{
              uri: fakePhoto,
            }}
            style={styles.img}
          />
        </View>
        <View style={styles.itemRightWrapper}>
          <View>
            <Text style={styles.nama}>{name}</Text>
          </View>
          <View style={styles.detailContentWrapper}>
            <View style={styles.detailItemWrapper}>
              <View style={styles.detailItem1}>
                <Text style={styles.detailTitleItem}>Domisili</Text>
              </View>
              <View style={styles.detailItem2}>
                <Text style={styles.detailItemAt2}>{dom}</Text>
              </View>
            </View>
            <View style={styles.detailItemWrapper}>
              <View style={styles.detailItem1}>
                <Text style={styles.detailTitleItem}>Jenis Kelamin</Text>
              </View>
              <View style={styles.detailItem2}>
                <Text style={styles.detailItemAt2}>{gender}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.actionWrapper}>
        <View style={styles.btnPrice}>
          <ButtonSurface
            boldTitle={true}
            title="lihat detail"
            isSecond={true}
            event1={() => navigation.navigate('Detail Pelanggan', data)}
          />
        </View>
        <View style={styles.btnDelete}>
          <ButtonSurface icon="trash" buttonColor={dangerColor} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  productLengthWrapper: {
    flexDirection: 'row',
    marginVertical: mp1,
  },
  kategoriLabel: {
    fontSize: f3,
    color: 'gray',
  },
  kategori: {
    fontSize: f3,
  },
  harga: {
    fontWeight: 'bold',
  },
  actionWrapper: {
    flexDirection: 'row',
    // marginTop: mp1,
  },
  btnPrice: {
    flex: 4,
    marginRight: mp1,
  },
  btnQty: {
    flex: 4,
  },
  btnDelete: {
    flex: 1.25,
  },
  detailContentWrapper: {paddingLeft: mp2, marginBottom: mp4},
  detailItemWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: alterColor,
    paddingVertical: mp1,
  },
  detailItem1: {flex: 5},
  detailItem2: {flex: 5},
  detailTitleItem: {
    color: 'gray',
  },
  // detailItemAt1: {color: 'gray'},
  detailItemAt2: {
    textTransform: 'capitalize',
    color: surfaceColor,
    fontWeight: 'bold',
  },
});

export default CardCustomers;
