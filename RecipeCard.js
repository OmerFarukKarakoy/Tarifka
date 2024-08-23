import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './RecipeCard.style';

const RecipeCard = ({ recipe, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{ uri: recipe.strMealThumb }} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{recipe.strMeal}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;
