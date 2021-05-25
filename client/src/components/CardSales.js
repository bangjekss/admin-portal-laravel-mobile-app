import React from 'react';
import {View, Text, Content, Icon} from 'native-base';
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
  storagePublic,
  surfaceColor,
} from '../helpers';
import {ActionModal, ButtonSurface, Divider} from '.';

const CardSales = ({navigation, data, actionOpen, handleAction}) => {
  const BottomSheet = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          // flex: 1,
        }}>
        <TouchableOpacity
          style={{
            borderRadius: 100,
            width: 30,
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
          onPress={handleAction}>
          <Icon
            name="ellipsis-v"
            type="FontAwesome5"
            style={{color: 'gray', fontSize: f8}}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const {id, subTotal, createdAt, customer, sale_item, product} = data;
  const date = new Date(createdAt).toLocaleString('id-ID', {dateStyle: 'full'});
  const {productName} = product[0];
  const handleDetail = data => {
    navigation.navigate('Detail Penjualan', data);
    // return cb();
  };
  const handleEdit = () => {
    navigation.navigate('Detail Penjualan');
  };
  const handleDelete = () => {
    return navigation.navigate('Detail Penjualan');
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <View>
            <Text
              style={{fontWeight: 'bold', color: surfaceColor, fontSize: f6}}>
              {id}
            </Text>
          </View>
          <View>
            <Text style={{color: 'gray', fontSize: f4}}>{date}</Text>
          </View>
        </View>
        {/* <View><BottomSheet /></View> */}
      </View>
      <Divider />
      <TouchableOpacity
        style={styles.itemWrapper}
        onPress={() => handleDetail(data, handleAction)}>
        <View>
          <Image
            source={{uri: `${storagePublic}/${product[0].imagepath}`}}
            style={styles.img}
          />
        </View>
        <View style={styles.itemRightWrapper}>
          <View>
            <Text style={styles.nama}>{productName}</Text>
          </View>
          <View style={styles.productLengthWrapper}>
            <Text style={styles.kategoriLabel}>
              {product.length === 1
                ? '1 barang'
                : `+${product.length - 1} barang lainnya`}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: 'bold', fontSize: f5}}>Total Harga</Text>
            <Text style={{fontSize: f5}}>Rp{subTotal.toLocaleString()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheetTextWrapper: {flex: 8.5},
  bottomSheetText: {textTransform: 'capitalize', fontSize: f5},
  bottomSheetIconWrapper: {flex: 1.5},
  bottomSheetIcon: {color: 'gray', fontSize: f6},
  bottomSheetContentWrapper: {
    flexDirection: 'row',
    paddingHorizontal: mp2,
    paddingVertical: mp2,
    alignItems: 'center',
  },
  container: {
    backgroundColor: primaryColor,
    marginBottom: mp1,
    padding: mp4,
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

export default CardSales;
