

import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/view/HomePage';
import ShopPage from './src/view/ShopPage';
import ProfilePage from './src/view/ProfilePage';
import ProductDetail from './src/view/ProductDetail';

import { Provider } from 'mobx-react'
import store from './src/store/mainStore';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <StatusBar
          backgroundColor="#f2f2f2"
          animated={true}
          barStyle='dark-content' />
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomePage" >
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="ShopPage" component={ShopPage} />
          <Stack.Screen name="ProfilePage" component={ProfilePage} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>




  )
}

export default App

const styles = StyleSheet.create({})