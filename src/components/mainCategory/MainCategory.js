import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import {icons, images, SIZES, COLORS, FONTS} from '../../constants';

const MainCategory = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  setRestaurants,
  restaurantData,
}) => {
  function onSelectCategory(category) {
    let restaurantList = restaurantData.filter((a) =>
      a.categories.includes(category.id),
    );
    setRestaurants(restaurantList);
    setSelectedCategory(category);
  }
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          padding: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
          backgroundColor:
            selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
          borderRadius: SIZES.radius,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: SIZES.padding,
          ...styles.shadow,
        }}
        onPress={() => onSelectCategory(item)}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.white : COLORS.lightGray,
          }}>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>

        <Text
          style={{
            marginTop: SIZES.padding,
            color:
              selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
            ...FONTS.body5,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={{padding: SIZES.padding * 2}}>
        <Text style={{fontWeight: 'bold', ...FONTS.h1}}>
          <Text style={{color: COLORS.primary}}>M</Text>ain
        </Text>
        <Text style={{fontWeight: 'bold', ...FONTS.h1}}>Category</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: SIZES.padding * 2}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default MainCategory;
