import {Button, Icon} from 'native-base';
import React, {createRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {FlatList} from 'react-native-gesture-handler';
import {f5, f6, f8, mp2, mp4, surfaceColor} from '../helpers';

const actionSheetRef = createRef();

const BottomSheet = ({children, data, ref}) => {
  let actionSheet;
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
      }}>
      <TouchableOpacity
        style={{
          // backgroundColor: 'red',
          borderRadius: 100,
          width: 30,
          height: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
        onPress={() => {
          actionSheetRef.current?.show();
        }}>
        <Icon
          name="ellipsis-v"
          type="FontAwesome5"
          style={{color: 'gray', fontSize: f8}}
        />
      </TouchableOpacity>

      <ActionSheet
        defaultOverlayOpacity={0.5}
        overlayColor={surfaceColor}
        indicatorColor={surfaceColor}
        ref={actionSheetRef}
        gestureEnabled={true}
        bounceOnOpen={true}>
        <FlatList
          data={data}
          keyExtractor={data => data.text}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={item.func}
              key={item.text}
              style={{
                flexDirection: 'row',
                paddingHorizontal: mp4,
                paddingVertical: mp2,
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <Icon
                  name={item.icon}
                  type="FontAwesome5"
                  style={{color: item.colorItem || 'gray', fontSize: f6}}
                />
              </View>
              <View style={{flex: 9}}>
                <Text style={{textTransform: 'capitalize', fontSize: f5}}>
                  {item.text}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ActionSheet>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({});
