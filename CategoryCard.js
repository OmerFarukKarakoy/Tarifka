import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({ category, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{ uri: category.strCategoryThumb }} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{category.strCategory}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
