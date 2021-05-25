import {Form, Textarea} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {alterColor, surfaceColor} from '../helpers';

const TextArea = ({row, placeholder, event1, value}) => {
  return (
    <Form>
      <Textarea
        defaultValue={value || ''}
        bordered
        rowSpan={row || 10}
        placeholder={placeholder}
        style={styles.textArea}
        onChangeText={e => event1(e)}
      />
    </Form>
  );
};

export default TextArea;

const styles = StyleSheet.create({
  textArea: {
    borderRadius: 10,
  },
});
