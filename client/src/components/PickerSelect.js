import {Form, Icon, Item} from 'native-base';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import PickerSel from 'react-native-picker-select';

const PickerSelect = ({data, mode, event1}) => {
  const renderItem = arr => {
    return arr.map(item => {
      return <Picker.Item key={item.id} label={item.nama} value={item.id} />;
    });
  };
  return (
    <Picker mode={mode || 'dropdown'} onValueChange={event1}>
      {renderItem(data)}
      {/* <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" /> */}
    </Picker>
  );
};

export default PickerSelect;

const styles = StyleSheet.create({});
