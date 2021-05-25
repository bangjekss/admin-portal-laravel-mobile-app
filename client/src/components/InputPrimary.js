import {Form, Input, Item, Label} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const InputPrimary = ({placeholder, event1, value, label, model, type}) => {
  return (
    <Form>
      <Item
        floatingLabel={model === 'floating' ? true : false}
        stackedLabel={model === 'stacked' ? true : false}
        inlineLabel={model === 'inline' ? true : false}
        fixedLabel={model === 'fixed' ? true : false}>
        <Label>{label || ''}</Label>
        <Input
          placeholder={placeholder || label}
          onChangeText={e => event1(e)}
          styles={{...styles.input, backgroundColor: 'red'}}
          keyboardType={type || 'default'}
          defaultValue={value || ''}
        />
      </Item>
    </Form>
  );
};

export default InputPrimary;

const styles = StyleSheet.create({
  input: {},
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
