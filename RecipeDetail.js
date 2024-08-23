import React from 'react';
import { ScrollView, Text, Linking, Image, View, TouchableOpacity } from 'react-native';
import useFetch from '../hooks/useFetch';
import Loading from '../components/loading/Loading';
import Error from '../components/error/Error';
import styles from './RecipeDetail.style';

const RecipeDetail = ({ route }) => {
  const { recipeId } = route.params;
  const { error, loading, data } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
  const recipe = data?.meals[0];

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <ScrollView>
      <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />
      <View>
        <Text style={styles.title}>{recipe.strMeal}</Text>
        <Text style={styles.title_area}>{recipe.strArea}</Text>
        <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginVertical: 3 }} />
        <Text style={styles.instructions}>{recipe.strInstructions}</Text>
        <View style={styles.linkButtonContainer}>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => Linking.openURL(recipe.strYoutube)}
          >
            <Text style={styles.linkButtonText}>Watch on Youtube</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipeDetail;
