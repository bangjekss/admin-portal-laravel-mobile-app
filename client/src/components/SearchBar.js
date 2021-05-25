import React from 'react';
import {Item, Icon, Input} from 'native-base';
import {StyleSheet} from 'react-native';
import {alterColor} from '../helpers';

const SearchBar = ({icon, placeholder}) => {
  return (
    <Item style={styles.item}>
      <Icon name={icon || 'ios-search'} style={{color: 'gray', fontSize: 16}} />
      <Input placeholder={placeholder || 'cari produk'} />
    </Item>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: alterColor,
    borderRadius: 10,
    marginBottom: 5,
    height: 50,
    paddingHorizontal: 10,
  },
});

export default SearchBar;
