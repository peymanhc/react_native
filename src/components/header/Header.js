import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, icons, FONTS, SIZES} from '../../constants';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
        paddingVertical: 5,
      }}>
      <TouchableOpacity
        style={{
          width: 50,
          paddingLeft: SIZES.padding * 2,
          justifyContent: 'center',
        }}>
        <Image
          resizeMode="contain"
          source={icons.nearby}
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            width: '70%',
            height: '100%',
            backgroundColor: COLORS.lightGray3,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: SIZES.radius,
          }}>
          <Text style={{...FONTS.h3}}>Location</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 50,
          paddingRight: SIZES.padding * 2,
          justifyContent: 'center',
        }}>
        <Image
          resizeMode="contain"
          source={icons.basket}
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
