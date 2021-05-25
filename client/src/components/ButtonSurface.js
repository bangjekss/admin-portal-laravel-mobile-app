import React from 'react';
import {View, Text, Button, Icon} from 'native-base';
import {primaryColor, surfaceColor, whiteColor} from '../helpers';
import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';

const ButtonSurface = ({
  title,
  titleModel,
  width,
  event1,
  borderRadius,
  icon,
  iconSize,
  iconColor,
  buttonColor,
  isSecond,
  boldTitle,
  height,
}) => {
  return (
    <Button
      style={{
        ...styles.btn,
        backgroundColor: buttonColor
          ? buttonColor
          : isSecond
          ? primaryColor
          : surfaceColor,
        width: width || '100%',
        height: height || 50,
        borderRadius: borderRadius || 10,
        borderWidth: isSecond ? 3 : null,
        borderColor: isSecond ? surfaceColor : null,
      }}
      onPress={event1}>
      {icon ? (
        <Icon
          name={icon}
          type="FontAwesome5"
          style={{fontSize: iconSize || 18, color: iconColor || whiteColor}}
        />
      ) : (
        <Text
          style={{
            ...styles.text,
            textTransform: titleModel || 'capitalize',
            color: isSecond ? surfaceColor : primaryColor,
            fontWeight: boldTitle ? 'bold' : 'normal',
          }}>
          {title}
        </Text>
      )}
    </Button>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default ButtonSurface;
