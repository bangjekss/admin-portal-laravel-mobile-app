import {Container, Content, Header} from 'native-base';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {HeaderNavigation} from '../../../components';
import {
  alterColor,
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

const CustomersDetail = ({route, navigation}) => {
  const {name, dom, gender, history} = route.params;

  return (
    <Container style={styles.container}>
      <Header style={styles.header}>
        <HeaderNavigation
          title={name}
          stack={true}
          event1={() => navigation.goBack()}
        />
      </Header>
      <View style={styles.contentWrapper}>
        <View style={styles.content1Wrapper}>
          <View style={styles.imageWrapper}>
            <Image source={{uri: fakePhoto}} style={styles.image} />
          </View>
          <View style={styles.contentRightWrapper}>
            <View style={styles.bioNamaWrapper}>
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
        </View>
        <View style={styles.content2Wrapper}>
          <View style={{marginBottom: mp4}}>
            <Text style={{fontSize: f8, fontWeight: 'bold'}}>
              Riwayat Pembelian
            </Text>
          </View>
          <View
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
          </View>
          <View>
            <FlatList
              refreshing={true}
              data={history}
              // keyExtractor={data => data.id.toString()}
              renderItem={({item}) => {
                const date = new Date(item.createdAt).toLocaleDateString();
                return (
                  <View
                    key={item.id}
                    style={{
                      flexDirection: 'row',
                      paddingVertical: mp2,
                      borderBottomColor: alterColor,
                      borderBottomWidth: 2,
                    }}>
                    <View style={{flex: 1.5}}>
                      <Text>{item.id}</Text>
                    </View>
                    <View style={{flex: 1}}>
                      <Text>{date}</Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                      }}>
                      <Text>Rp{item.subTotal.toLocaleString()}</Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default CustomersDetail;

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
    flexDirection: 'row',
    marginBottom: mp1,
  },
  content2Wrapper: {
    paddingVertical: mp5,
    paddingHorizontal: mp4,
    backgroundColor: primaryColor,
    // flexDirection: 'row',
    marginBottom: mp1,
    height: 500,
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
    flex: 1,
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
  detailItem1: {flex: 1.5},
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
