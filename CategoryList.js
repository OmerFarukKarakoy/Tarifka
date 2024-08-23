import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import useFetch from '../hooks/useFetch';
import Loading from '../components/loading/Loading';
import Error from '../components/error/Error'

const CategoryList = ({ navigation }) => {
  const { error, loading, data } = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const categories = data?.categories || [];

  const renderItem = ({ item }) => (
    <CategoryCard
      category={item}
      onPress={() => navigation.navigate('RecipeList', { category: item.strCategory })}
    />
  );

  if (loading){
    return <Loading />};

  if (error) return <Error />;

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.idCategory}
      />
    </View>
  );
};

export default CategoryList;
