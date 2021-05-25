import {Container, Content, Header} from 'native-base';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {
  ButtonSurface,
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

const CustomersAdd = ({route, navigation}) => {
  const imagepath = false;
  return (
    <Container>
      <Header style={styles.header}>
        <HeaderNavigation
          title={`Tambah Pelanggan Baru`}
          stack={true}
          event1={() => navigation.goBack()}
        />
      </Header>
      <Content>
        <TouchableOpacity style={styles.imageWrapper}>
          <Image source={{uri: fakePhoto}} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.content2Wrapper}>
          <View style={styles.content2SubWrapper}>
            <View>
              {imagepath ? (
                <ButtonSurface
                  title="remove picture"
                  buttonColor={dangerColor}
                />
              ) : (
                <ButtonSurface
                  isSecond={true}
                  title="tambah gambar"
                  boldTitle={true}
                />
              )}
            </View>
          </View>
          <View style={styles.content2SubWrapper}>
            <View style={styles.detailTitleWrapper}>
              <Text style={styles.detailTitle}>data pelanggan</Text>
            </View>
            <View>
              <InputPrimary
                model="stacked"
                placeholder="Masukkan nama anda"
                label="Nama"
              />
            </View>
            <View>
              <InputPrimary
                model="stacked"
                placeholder="ex: Jakarta"
                label="Tempat Tinggal"
              />
            </View>
            <View>
              <PickerSelect data={kategori} />
            </View>
          </View>
          {/* <View style={styles.content2SubWrapper}>
            <View style={styles.detailTitleWrapper}>
              <Text style={styles.detailTitle}>Description</Text>
            </View>
            <View>
              <TextArea placeholder={lorem} />
            </View>
          </View> */}
          <View>
            <View>
              <ButtonSurface
                title="Tambah Pelanggan"
                borderRadius={1}
                boldTitle={true}
              />
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default CustomersAdd;

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
