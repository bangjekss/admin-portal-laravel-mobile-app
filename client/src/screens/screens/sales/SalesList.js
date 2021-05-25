import {Container, Content, Header} from 'native-base';
import React, {createRef, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {
  ButtonSurface,
  CardSales,
  HeaderNavigation,
  Loader1,
  PickerSelect,
  SearchBar,
} from '../../../components';
import {alterColor, mp1, primaryColor, sort} from '../../../helpers';
import {getSales} from '../../../store/actions';

const SalesList = ({navigation}) => {
  const dispatch = useDispatch();
  const {sales, isLoading} = useSelector(state => state.saleReducer);
  // console.log(sales);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sales.length === 0) {
      dispatch(getSales());
    }
  }, []);

  const handleOpen = () => {
    setOpen(prev => !prev);
  };

  if (isLoading) return <Loader1 when={isLoading} />;

  return (
    <Container style={styles.container}>
      <Header style={styles.header}>
        <HeaderNavigation
          title="Daftar Penjualan"
          icon="plus"
          event2={() => navigation.navigate('Tambah Penjualan')}
        />
        <SearchBar />
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
          data={sales}
          // keyExtractor={data => data.id.toString()}
          // refreshing={true}
          renderItem={({item}) => (
            <CardSales
              data={item}
              key={item.id}
              navigation={navigation}
              actionOpen={open}
              handleAction={handleOpen}
            />
          )}
        />
        {/* <Text>salse</Text> */}
      </View>
    </Container>
  );
};

export default SalesList;

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
