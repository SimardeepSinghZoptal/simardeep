import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

//import { ifIphoneX } from 'react-native-iphone-x-helper'

import {Colors, Scaling, Screen, Strings, FontName} from '../../constants'
import {ifIphoneX, isIphoneX} from 'react-native-iphone-x-helper'
import AppImages from '../../assets/AppImages'
import {fontScale} from '../../constants/FontSize'
import {RouteKeys} from '../../routes/RouteKeys'

const CustomHeader = props => {
  return (
    <>
      <View
        style={{
          width: Screen.width,
          justifyContent: 'center',
          height: Scaling.HEIGHT_SCALE_50,

          // marginTop: Platform.OS === 'ios' ? Scaling.HEIGHT_SCALE_30 : 10,
        }}>
        <View style={{}}>
          <View
            style={{
              //flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              //justifyContent: 'space-evenly'
              marginLeft: Scaling.WIDTH_SCALE_15,
              marginRight: Scaling.WIDTH_SCALE_15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                // alignItems: 'center',
                // justifyContent: 'center',
              }}>
              {props.onPressDrawer ? (
                <TouchableOpacity onPress={props.onPressDrawer}>
                  <Image
                    source={AppImages.menuIcon}
                    style={{
                      height: Scaling.HEIGHT_SCALE_20,
                      width: Scaling.HEIGHT_SCALE_20,
                      tintColor: Colors.WHITE,
                      resizeMode: 'contain',
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={props.onPressBack}>
                  <Image
                    source={AppImages.backIcon}
                    style={{
                      height: Scaling.HEIGHT_SCALE_30,
                      width: Scaling.HEIGHT_SCALE_20,
                      //tintColor: Colors.BLACK,
                      tintColor: Colors.WHITE,
                      resizeMode: 'contain',
                      // backgroundColor:Colors.BLACK
                    }}
                  />
                </TouchableOpacity>
              )}
            </View>
            <View>
              <Text
                style={{
                  fontSize: fontScale(16),
                  color: Colors.WHITE,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: Scaling.HEIGHT_SCALE_4,
                }}>
                {props.headerTitle}
              </Text>
            </View>

            {props.notificationIcon ? (
              <TouchableOpacity onPress={props.onPressNotificationIcon}>
                <Image
                  source={AppImages.notiicationIcon}
                  style={{
                    height: Scaling.HEIGHT_SCALE_25,
                    width: Scaling.HEIGHT_SCALE_20,
                    tintColor: Colors.WHITE,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            ) : (
              <View
                style={{
                  height: Scaling.HEIGHT_SCALE_25,
                  width: Scaling.HEIGHT_SCALE_20,
                  // tintColor: Colors.WHITE,
                  // resizeMode: 'contain',
                }}
              />
            )}
          </View>
        </View>
      </View>
    </>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // padding: 16,
    backgroundColor: 'white',
    //height: 60,
    width: Screen.width,
    height: 57,
    paddingTop: 0,
    // ...ifIphoneX(
    //   {
    //     height: 80,
    //     paddingTop: 30,
    //   },
    //   {
    //     height: 57,
    //     paddingTop: 0,
    //   },
    // ),
  },
  image: {height: 80, width: 80},
  sub_container: {flex: 1, paddingLeft: 8},
  name_view: {flexDirection: 'row', alignItems: 'center', marginTop: 8},
  text1: {color: 'black', fontSize: fontScale(14), flex: 1, fontWeight: 'bold'},
  notification_text: {
    color: 'black',
    fontSize: fontScale(12),
    flex: 1,
    marginTop: 8,
  },
  date_text: {
    color: 'black',
    fontSize: fontScale(12),
    flex: 1,
    textAlign: 'right',
  },
})
