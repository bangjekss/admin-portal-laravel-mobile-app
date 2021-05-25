import {Form, Input, Item, Label} from 'native-base';
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {f6, mp3, mp4} from '../helpers';

const InputSecond = ({placeholder, event1, value, label, model, type}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={e => event1(e)}
        placeholder={placeholder}
        keyboardType={type || 'default'}
      />
    </View>
  );
};

export default InputSecond;

const styles = StyleSheet.create({
  input: {
    paddingVertical: mp3,
    paddingHorizontal: mp4,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 10,
    fontSize: f6,
    width: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
