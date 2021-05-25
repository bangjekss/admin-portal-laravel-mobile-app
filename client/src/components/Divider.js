import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {alterColor, mp2} from '../helpers';

const Divider = () => {
  return <View style={styles.divider}></View>;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    backgroundColor: alterColor,
    height: 2,
    marginVertical: mp2,
  },
});
