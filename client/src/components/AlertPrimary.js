import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {dangerColor, f7, f8, surfaceColor} from '../helpers';

const AlertPrimary = ({
  when,
  event1,
  event2,
  event3,
  info,
  confirmText,
  cancelText,
  infoText,
  message,
  title,
}) => {
  return (
    <View>
      <AwesomeAlert
        show={when}
        showProgress={true}
        title={title}
        message={message}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={cancelText ? true : false}
        showConfirmButton={infoText || confirmText ? true : false}
        cancelText={cancelText}
        cancelButtonColor={dangerColor}
        confirmText={infoText ? infoText : confirmText}
        confirmButtonColor={surfaceColor}
        titleStyle={{fontWeight: 'bold', fontSize: f8}}
        onCancelPressed={event1}
        onConfirmPressed={event3 ? event3 : event2}
      />
    </View>
  );
};

export default AlertPrimary;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#fff',
  },
  button: {
    // margin: 10,
    // paddingHorizontal: 10,
    // paddingVertical: 7,
    // borderRadius: 5,
    // backgroundColor: '#AEDEF4',
  },
  text: {
    // color: '#fff',
    // fontSize: 15,
  },
});
