import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from 'react-native'


import {Screen, Colors, Scaling} from '../../constants'
import Images from '../../assets/AppImages'
import {fontScale} from '../../constants/FontSize'
import {ifIphoneX, isIphoneX} from 'react-native-iphone-x-helper'

const Button = ({onButtonPress, text, viewStyle, textStyle}) => {
  return (
    <TouchableOpacity
      onPress={onButtonPress}
      style={[styles.subContainer, viewStyle]}>
      <Text style={[styles.signUpbuttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  )
}

export {Button}

const styles = StyleSheet.create({
  subContainer: {
    borderRadius: Scaling.HEIGHT_SCALE_30,
    alignItems: 'center',
    // paddingVertical:
    //   Platform.OS === 'android'
    //     ? Scaling.HEIGHT_SCALE_5
    //     : Scaling.HEIGHT_SCALE_5,
    // paddingHorizontal: Scaling.WIDTH_SCALE_24,
    // marginHorizontal: Scaling.WIDTH_SCALE_8,
    justifyContent: 'center',
    // backgroundColor: Colors.SMOKY,
  },
  subEmailContainer: {
    borderRadius: 8,
    alignItems: 'center',
    // paddingVertical: Platform.OS==='android'?Scaling.HEIGHT_SCALE_6:Scaling.HEIGHT_SCALE_6,
    paddingHorizontal: Scaling.WIDTH_SCALE_20,
    marginHorizontal: Scaling.WIDTH_SCALE_8,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: fontScale(14),
    fontWeight: 'bold',
    marginLeft: Scaling.WIDTH_SCALE_10,
  },
  buttonFbText: {
    color: Colors.WHITE,
    fontSize: fontScale(14),
    fontWeight: 'bold',
    marginLeft: Scaling.WIDTH_SCALE_10,
  },
  signUpbuttonText: {
    color: Colors.WHITE,
    fontSize: fontScale(14),
    // fontWeight: 'bold',
    // marginLeft: Scaling.WIDTH_SCALE_10,
    padding: Scaling.PADDING_SCALE_6,
  },
  facebookButton: {
    flexDirection: 'row',
    height: Scaling.HEIGHT_SCALE_40,
    justifyContent: 'center',
    backgroundColor: Colors.FACEBOOK_BLUE,
    borderRadius: Scaling.HEIGHT_SCALE_30,
    alignItems: 'center',
    paddingVertical:
      Platform.OS === 'android'
        ? Scaling.HEIGHT_SCALE_6
        : Scaling.HEIGHT_SCALE_4,
    paddingHorizontal: Scaling.WIDTH_SCALE_24,
    marginHorizontal: Scaling.WIDTH_SCALE_8,
  },
  gmailButton: {
    flexDirection: 'row',
    height: Scaling.HEIGHT_SCALE_40,
    justifyContent: 'center',
    backgroundColor: Colors.LIGHT_BLUE,
    borderRadius: Scaling.HEIGHT_SCALE_30,
    alignItems: 'center',
    paddingVertical:
      Platform.OS === 'android'
        ? Scaling.HEIGHT_SCALE_6
        : Scaling.HEIGHT_SCALE_6,
    paddingHorizontal: Scaling.WIDTH_SCALE_24,
    marginHorizontal: Scaling.WIDTH_SCALE_8,
  },
  appleButton: {
    height: Scaling.HEIGHT_SCALE_40,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.BLACK,
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical:
      Platform.OS === 'android'
        ? Scaling.HEIGHT_SCALE_8
        : Scaling.HEIGHT_SCALE_6,
    paddingHorizontal: Scaling.WIDTH_SCALE_24,
    marginHorizontal: Scaling.WIDTH_SCALE_8,
  },
  fbIconStyle: {
    height: Scaling.HEIGHT_SCALE_28,
    width: Scaling.WIDTH_SCALE_28,
  },
  gmailIconStyle: {
    ...ifIphoneX(
      {
        height: Scaling.HEIGHT_SCALE_24,
        width: Scaling.WIDTH_SCALE_24,
      },
      {
        height:
          Platform.OS === 'ios'
            ? Scaling.HEIGHT_SCALE_24
            : Scaling.HEIGHT_SCALE_24,
        width: Scaling.WIDTH_SCALE_24,
      },
    ),
    // tintColor:'red'
    //  resizeMode:'contain'
  },
  appleIconStyle: {
    height: Scaling.HEIGHT_SCALE_26,
    resizeMode: 'contain',
    width: Scaling.WIDTH_SCALE_26,
    tintColor: Colors.WHITE,
  },
  appleSignUpText: {
    color: Colors.WHITE,
    fontSize: fontScale(14),
    marginLeft: Scaling.WIDTH_SCALE_10,
    fontWeight: 'bold',
  },
  gmailSignUpText: {
    color: Colors.WHITE,
    fontSize: fontScale(14),
    marginLeft: Scaling.WIDTH_SCALE_10,
    fontWeight: 'bold',
  },
  gmailIcon: {
    ...ifIphoneX(
      {
        height: Scaling.HEIGHT_SCALE_26,
        width: Scaling.WIDTH_SCALE_26,
      },
      {
        height:
          Platform.OS === 'ios'
            ? Scaling.HEIGHT_SCALE_28
            : Scaling.HEIGHT_SCALE_26,
        width: Scaling.WIDTH_SCALE_26,
      },
    ),
  },
})
