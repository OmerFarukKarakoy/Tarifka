import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack/lib/module';

import CategoryList from './pages/CategoryList';
import RecipeList from './pages/RecipeList';
import RecipeDetail from './pages/RecipeDetail';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CategoryList">
        <Stack.Screen
          name="CategoryList"
          component={CategoryList}
          options={{ title: 'Categories', headerTintColor: 'orange', headerTitleAlign:'center',
            headerStyle:{backgroundColor:'white'}
           }}
        />
        <Stack.Screen
          name="RecipeList"
          component={RecipeList}
          options={({ route }) => ({
            title: route.params.category,
            headerTintColor: 'orange',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerBackTitle: 'Categories',
          })}
        />
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetail}
          options={{ title: 'Detail', headerTintColor: 'orange',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerBackTitle: 'Meals', }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

