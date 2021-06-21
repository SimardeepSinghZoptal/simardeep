import React, {useState, useEffect, Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  LogBox,
  Platform,
  ImageBackground,
} from 'react-native'

import {StackActions, useIsFocused} from '@react-navigation/native'
import {Colors, Screen, Scaling} from '../../constants'
import AppImages from '../../assets/AppImages'
import {RouteKeys} from '../../routes/RouteKeys'

LogBox.ignoreAllLogs(true)

const SplashScreen = props => {
  const isFocused = useIsFocused()
  useEffect(() => {
    if (isFocused) {
      getData()
    }
  }, [isFocused])
  const getData = async () => {
    setTimeout(() => {
      props.navigation.dispatch(
        StackActions.replace(RouteKeys.TAB_SCREEN, {
          screen: RouteKeys.HOME_SCREEN,
        }),
      )
    }, 2000)
  }
  return (
    <>
      <ImageBackground
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        source={AppImages.backgroundImage}>
        <View style={styles.body}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
            }}>
            Splash Screen
          </Text>
        </View>
      </ImageBackground>
    </>
  )
}
export default SplashScreen

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: Screen.height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //padding: 20,
  },
})
