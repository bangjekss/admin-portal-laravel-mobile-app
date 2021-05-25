import {Container, Content, Header} from 'native-base';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CardDetailSales, HeaderNavigation} from '../../../components';
import {
  alterColor,
  dangerColor,
  f5,
  f6,
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

const SalesDetail = ({route, navigation}) => {
  // const {name, dom, gender, history} = route.params;
  const {id, createdAt, customer, product, sale_item, subTotal} = route.params;
  const date = new Date(createdAt).toLocaleString('id-ID', {dateStyle: 'full'});
  const data = sale_item;

  const RenderDetail = () => {
    return sale_item.map((value, index) => (
      <CardDetailSales data1={value} data2={product[index]} key={value.id} />
    ));
  };

  return (
    <Container style={styles.container}>
      <Header style={styles.header}>
        <HeaderNavigation
          upperCase={true}
          title={id}
          stack={true}
          icon="ellipsis-v"
          event1={() => navigation.goBack()}
        />
      </Header>
      <Content style={styles.contentWrapper}>
        <View style={styles.content1Wrapper}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: mp4,
            }}>
            <Text
              style={{fontSize: f8, fontWeight: 'bold', color: surfaceColor}}>
              {date}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: mp4,
            }}>
            <Text
              style={{fontSize: 40, fontWeight: 'bold', color: dangerColor}}>
              Rp{subTotal.toLocaleString()}
            </Text>
          </View>
          <View style={styles.contentRightWrapper}>
            <View style={styles.detailContentWrapper}>
              <View style={styles.detailItemWrapper}>
                <View style={styles.detailItem1}>
                  <Text style={styles.detailTitleItem}>Nama</Text>
                </View>
                <View style={styles.detailItem2}>
                  <Text style={styles.detailItemAt2}>{customer.name}</Text>
                </View>
              </View>
              <View style={styles.detailItemWrapper}>
                <View style={styles.detailItem1}>
                  <Text style={styles.detailTitleItem}>Domisili</Text>
                </View>
                <View style={styles.detailItem2}>
                  <Text style={styles.detailItemAt2}>{customer.dom}</Text>
                </View>
              </View>
              <View style={styles.detailItemWrapper}>
                <View style={styles.detailItem1}>
                  <Text style={styles.detailTitleItem}>Jenis Kelamin</Text>
                </View>
                <View style={styles.detailItem2}>
                  <Text style={styles.detailItemAt2}>{customer.gender}</Text>
                </View>
              </View>
            </View>
          </View>
          {/* <View style={styles.imageWrapper}>
            <Image source={{uri: fakePhoto}} style={styles.image} />
          </View>
           */}
        </View>
        <View style={styles.content2Wrapper}>
          <View style={{marginBottom: mp4}}>
            <Text
              style={{
                fontSize: f8,
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}>
              detail pembelian
            </Text>
          </View>
          <View>
            <RenderDetail />
          </View>
          {/* <FlatList keyExtractor data= /> */}
          {/* <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: alterColor,
              borderTopWidth: 2,
              borderTopColor: alterColor,
              paddingVertical: mp3,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1.5}}>
                <Text
                  style={{
                    fontSize: f6,
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                  }}>
                  invoice
                </Text>
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    fontSize: f6,
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                  }}>
                  tanggal
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: f6,
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                  }}>
                  total
                </Text>
              </View>
            </View>
          </View> */}
        </View>
      </Content>
    </Container>
  );
};

export default SalesDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: alterColor,
  },
  header: {
    backgroundColor: primaryColor,
    flexDirection: 'column',
    height: 'auto',
    paddingVertical: mp1,
    borderBottomWidth: 2,
    borderBottomColor: alterColor,
    elevation: 5,
  },
  content1Wrapper: {
    paddingVertical: mp5,
    paddingHorizontal: mp4,
    backgroundColor: primaryColor,
    marginBottom: mp1,
  },
  content2Wrapper: {
    paddingVertical: mp5,
    paddingHorizontal: mp4,
    backgroundColor: primaryColor,
    // flexDirection: 'row',
    marginBottom: mp1,
  },
  imageWrapper: {
    // flex: 1,
  },
  bioWrapper: {
    // flex: 1,
  },
  image: {
    height: 125,
    width: 125,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  contentRightWrapper: {
    marginLeft: mp4,
    // flex: 1,
  },
  detailContentWrapper: {
    paddingLeft: mp2,
  },
  detailItemWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: alterColor,
    paddingVertical: mp1,
    width: '100%',
  },
  bioNamaWrapper: {
    marginBottom: mp2,
  },
  nama: {
    fontSize: f8,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  detailItem1: {flex: 1},
  detailItem2: {flex: 1},
  detailTitleItem: {
    color: 'gray',
  },
  detailItemAt2: {
    textTransform: 'capitalize',
    color: surfaceColor,
    fontWeight: 'bold',
  },
});
