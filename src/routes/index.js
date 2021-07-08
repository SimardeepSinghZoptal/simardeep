import 'react-native-gesture-handler'
import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {RouteKeys, SCREEN_TITLE} from './RouteKeys'
import SplashScreen from '../screens/OnBoardingScreens/SplashScreen'
import HomeScreen from '../screens/HomeContainer/homeScreen/index'
import CartScreen from '../screens/HomeContainer/cartScreen/CartScreen'
const RootNavigator = createStackNavigator()

const HomeNavigator = createStackNavigator()
const HomeScreenNaviagtor = () => {
  return (
    <HomeNavigator.Navigator>
      <HomeNavigator.Screen
        name={RouteKeys.HOME_SCREEN}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeNavigator.Screen
        name={RouteKeys.CART_SCREEN}
        component={CartScreen}
        options={{headerShown: false}}
      />
    </HomeNavigator.Navigator>
  )
}

export const Router = () => {
  return (
    <NavigationContainer>
      <RootNavigator.Navigator initialRouteName={RouteKeys.SPLASH}>
        <RootNavigator.Screen
          name={RouteKeys.SPLASH}
          component={SplashScreen}
          options={{headerShown: false}}
        />

        <RootNavigator.Screen
          name={RouteKeys.HOME_SCREEN}
          component={HomeScreenNaviagtor}
          options={{headerShown: false}}
        />
      </RootNavigator.Navigator>
    </NavigationContainer>
  )
}
