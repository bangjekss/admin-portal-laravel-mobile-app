import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProgressLoader from 'rn-progress-loader';
import {primaryColor, surfaceColor} from '../helpers';

const Loader1 = ({when, isModal, color, isHUD, hudColor, barHeight}) => {
  return (
    <View>
      <ProgressLoader
        visible={when}
        isModal={isModal || true}
        barHeight={barHeight || 200}
        color={color || surfaceColor}
        isHUD={isHUD || true}
        hudColor={hudColor || primaryColor}
      />
    </View>
  );
};

export default Loader1;

const styles = StyleSheet.create({});
