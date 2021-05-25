import React, {useState} from 'react';
import {View, Text, Container, Header, Content, Footer} from 'native-base';
import {Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ButtonSurface, HeaderNavigation} from '../../../components';
import {
  alterColor,
  f6,
  f7,
  f8,
  fakePhoto,
  mp1,
  mp2,
  mp3,
  mp4,
  mp5,
  primaryColor,
  surfaceColor,
} from '../../../helpers';

const ProductDetail = ({navigation, route}) => {
  const {id, productName, price, stock, imagepath, category, description} =
    route.params;

  const [readMore, setReadMore] = useState(true);

  return (
    <Container>
      <Header style={styles.header}>
        <HeaderNavigation
          title={`Preview ${productName}`}
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
            <View style={{marginBottom: mp1}}>
              <Text style={styles.price}>Rp{price.toLocaleString()}</Text>
            </View>
            <View>
              <Text style={styles.productName}>{productName}</Text>
            </View>
          </View>
          <View style={styles.content2SubWrapper}>
            <View style={styles.detailTitleWrapper}>
              <Text style={styles.detailTitle}>Detail Produk</Text>
            </View>
            <View style={styles.detailContentWrapper}>
              <View style={styles.detailItemWrapper}>
                <View style={styles.detailItem1}>
                  <Text>Stok</Text>
                </View>
                <View style={styles.detailItem2}>
                  <Text style={styles.detailItemAt1}>{stock}</Text>
                </View>
              </View>
              <View style={styles.detailItemWrapper}>
                <View style={styles.detailItem1}>
                  <Text>Kategori</Text>
                </View>
                <View style={styles.detailItem2}>
                  <Text style={styles.detailItemAt2}>{category}</Text>
                </View>
              </View>
            </View>
            {readMore && description.length > 200 ? (
              <View>
                <View style={{marginBottom: mp2}}>
                  <Text>{description.substring(0, 200)} ...</Text>
                </View>
                <TouchableOpacity onPress={() => setReadMore(prev => !prev)}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: surfaceColor,
                      textTransform: 'capitalize',
                    }}>
                    baca selengkapnya
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <View style={{marginBottom: mp2}}>
                  <Text>{description}</Text>
                </View>
                <TouchableOpacity onPress={() => setReadMore(prev => !prev)}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: surfaceColor,
                      textTransform: 'capitalize',
                    }}>
                    baca sedikit
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Content>
      <Footer style={styles.footer}>
        <View style={styles.footerContent1}>
          <ButtonSurface title="beli" />
        </View>
        <View style={styles.footerContent2}>
          <ButtonSurface
            icon="cart-plus"
            isSecond={true}
            iconColor={surfaceColor}
          />
        </View>
      </Footer>
    </Container>
  );
};

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
  footer: {
    flexDirection: 'row',
    height: Dimensions.get('screen').height / 13,
    maxHeight: 70,
    paddingHorizontal: mp3,
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContent1: {
    flex: 8,
    marginRight: mp1,
  },
  footerContent2: {
    flex: 2,
  },
});

export default ProductDetail;
