import {Icon} from 'native-base';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {f8, mp1, mp2, primaryColor, surfaceColor} from '../helpers';

const HeaderNavigation = ({
  navigation,
  stack,
  title,
  icon,
  event1,
  event2,
  upperCase,
}) => {
  return (
    <View style={styles.headerNavigation}>
      <View style={styles.headerNavigationTitleWrapper}>
        {stack ? (
          <TouchableOpacity onPress={event1}>
            <Icon
              type="FontAwesome5"
              name="chevron-left"
              style={styles.previous}
            />
          </TouchableOpacity>
        ) : null}
        <Text
          style={{
            ...styles.headerTitle,
            textTransform: upperCase ? 'uppercase' : 'capitalize',
          }}>
          {title}
        </Text>
      </View>
      <TouchableOpacity style={styles.iconWrapper} onPress={event2}>
        <Icon type="FontAwesome5" name={icon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderNavigation;

const styles = StyleSheet.create({
  headerNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 55,
    maxHeight: Dimensions.get('screen').height / 14,
    backgroundColor: primaryColor,
  },
  headerNavigationTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: '700',
    fontSize: f8,
    textTransform: 'capitalize',
    marginLeft: mp1,
  },
  previous: {
    fontSize: f8,
    color: surfaceColor,
    marginHorizontal: mp2,
  },
  iconWrapper: {
    paddingHorizontal: mp1,
    justifyContent: 'center',
  },
  icon: {
    fontSize: f8,
    color: surfaceColor,
  },
});
