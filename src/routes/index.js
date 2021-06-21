import 'react-native-gesture-handler'
import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Image, Text} from 'react-native'
import {RouteKeys, SCREEN_TITLE} from './RouteKeys'
import SplashScreen from '../screens/OnBoardingScreens/SplashScreen'
// import LoginScreen from '../screens/AuthenticationScreens/loginScreen'
import HomeScreen from '../screens/HomeContainer/homeScreen/index'
import Images from '../assets/AppImages'
import {Colors, Strings, Scaling} from '../constants'
import MessageScreen from '../screens/HomeContainer/message/MessageScreen'
// import signupScreen from '../screens/AuthenticationScreens/signupScreen'
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
    </HomeNavigator.Navigator>
  )
}

const MessageNavigator = createStackNavigator()
const MessageScreenNaviagtor = () => {
  return (
    <MessageNavigator.Navigator>
      <MessageNavigator.Screen
        name={RouteKeys.MESSAGE_SCREEN}
        component={MessageScreen}
        options={{headerShown: false}}
      />
    </MessageNavigator.Navigator>
  )
}

//TAB NAVIGATOR BOTTOM TAB MANUFECTURER
const Tab = createBottomTabNavigator()
const TabScreenNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={RouteKeys.HOME_SCREEN}
      tabBarOptions={{
        activeTintColor: Colors.HERITAGE_COLOR,
        inactiveTintColor: Colors.WHITE,
        labelStyle: {
          fontSize: 15,
        },
        style: {
          backgroundColor: Colors.BLACK,
          height: Scaling.HEIGHT_SCALE_60,
          borderTopLeftRadius: Scaling.HEIGHT_SCALE_10,
          borderTopRightRadius: Scaling.HEIGHT_SCALE_10,
          marginTop: -Scaling.HEIGHT_SCALE_20,
          borderTopColor: Colors.BLACK,
        },
      }}>
      <Tab.Screen
        name={RouteKeys.HOME_SCREEN}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={Images.homeIcon}
              style={{
                height:
                  color === Colors.HERITAGE_COLOR
                    ? Scaling.HEIGHT_SCALE_28
                    : Scaling.HEIGHT_SCALE_20,
                width:
                  color === Colors.HERITAGE_COLOR
                    ? Scaling.HEIGHT_SCALE_28
                    : Scaling.HEIGHT_SCALE_20,
                resizeMode: 'contain',
                tintColor: color,
              }}
            />
          ),
          tabBarLabel: () => {
            ;<Text></Text>
          },
        }}
        component={HomeScreenNaviagtor}
      />
      <Tab.Screen
        name={RouteKeys.MESSAGE_SCREEN}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={Images.messageIcon}
              style={{
                height:
                  color === Colors.HERITAGE_COLOR
                    ? Scaling.HEIGHT_SCALE_25
                    : Scaling.HEIGHT_SCALE_20,
                width:
                  color === Colors.HERITAGE_COLOR
                    ? Scaling.HEIGHT_SCALE_25
                    : Scaling.HEIGHT_SCALE_20,
                resizeMode: 'contain',
                tintColor: color,
              }}
            />
          ),
          tabBarLabel: () => {
            ;<Text></Text>
          },
        }}
        component={MessageScreenNaviagtor}
      />
    </Tab.Navigator>
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
          name={RouteKeys.TAB_SCREEN}
          component={TabScreenNavigator}
          options={{headerShown: false}}
        />
      </RootNavigator.Navigator>
    </NavigationContainer>
  )
}
