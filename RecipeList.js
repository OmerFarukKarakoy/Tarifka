import React from 'react';
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import useFetch from '../hooks/useFetch';
import Loading from '../components/loading/Loading';
import Error from '../components/error/Error';
import styles from './RecipeList.style';

const RecipeList = ({ route, navigation }) => {
    const { category } = route.params;
    const { error, loading, data } = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const recipes = data?.meals || [];

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.recipeContainer}
            onPress={() => navigation.navigate('RecipeDetail', { recipeId: item.idMeal })}
        >
            <Image source={{ uri: item.strMealThumb }} style={styles.recipeImage} />
            <View style={styles.inner_container}>
                <Text style={styles.recipeTitle}>{item.strMeal}</Text>
            </View>
        </TouchableOpacity>
    );

    if (loading) return <Loading />;
    if (error) return <Error />;

    return (
        <View style={styles.container}>
            <FlatList
                data={recipes}
                renderItem={renderItem}
                keyExtractor={item => item.idMeal}
            />
        </View>
    );
};

export default RecipeList;
