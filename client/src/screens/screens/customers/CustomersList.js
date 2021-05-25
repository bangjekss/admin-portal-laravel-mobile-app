import {Container, Content, Header} from 'native-base';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {
  ButtonSurface,
  CardCustomers,
  CardSales,
  HeaderNavigation,
  Loader1,
  PickerSelect,
  SearchBar,
} from '../../../components';
import {alterColor, mp1, primaryColor, sort} from '../../../helpers';
import {getCustomers} from '../../../store/actions';

const customersList = ({navigation}) => {
  const dispatch = useDispatch();
  const {customers, isLoading} = useSelector(state => state.customerReducer);

  useEffect(() => {
    if (customers.length === 0) {
      dispatch(getCustomers());
    }
  }, []);

  if (isLoading) return <Loader1 when={isLoading} />;

  return (
    <Container style={styles.container}>
      <Header style={styles.header}>
        <HeaderNavigation
          title="Daftar Pelanggan"
          icon="plus"
          event2={() => navigation.navigate('Tambah Pelanggan')}
        />
        <SearchBar placeholder="cari nama" />
        <View style={styles.optionsWrapper}>
          <View style={styles.filterBtn}>
            <ButtonSurface
              title="filter"
              titleModel="lowercase"
              // event1={openFilter}
              width="100%"
            />
          </View>
          <View style={styles.sortBtn}>
            <PickerSelect data={sort} mode="dialog" />
          </View>
        </View>
      </Header>
      <View>
        <FlatList
          data={customers}
          // keyExtractor={data => data.id.toString()}
          refreshing={true}
          renderItem={({item}) => (
            <CardCustomers data={item} key={item.id} navigation={navigation} />
          )}
        />
        {/* <Text>salse</Text> */}
      </View>
    </Container>
  );
};

export default customersList;

const styles = StyleSheet.create({
  container: {backgroundColor: alterColor},
  header: {
    backgroundColor: primaryColor,
    flexDirection: 'column',
    height: 'auto',
    paddingVertical: mp1,
    borderBottomWidth: 2,
    borderBottomColor: alterColor,
    elevation: 5,
  },
  optionsWrapper: {
    flexDirection: 'row',
  },
  filterBtn: {
    flex: 0.875,
  },
  sortBtn: {
    flex: 0.125,
  },
});
