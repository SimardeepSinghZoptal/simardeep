import {StyleSheet, Platform, StatusBar} from 'react-native'
import Colors from './Colors'
import FontName from './FontName'
import {fontScale} from './FontSize'
import Scaling from './Scaling'
import Screen from './Screen'

const CommonStyle = StyleSheet.create({
  skipText: {
    color: Colors.WHITE,
    fontSize: fontScale(16),
    fontFamily: FontName.MERRIWEATHER_REGULAR,

    // borderBottomColor: Colors.WHITE,
    // borderBottomWidth: 1,
    width: Scaling.WIDTH_SCALE_50,
    alignSelf: 'flex-end',
    marginRight: Scaling.HEIGHT_SCALE_20,
    textDecorationLine: 'underline',
  },
  loginViewStyle: {
    width: Screen.width / 1.3,
    backgroundColor: Colors.BLACK,
    height: Scaling.HEIGHT_SCALE_45,
    margin: Scaling.HEIGHT_SCALE_10,
    borderColor: Colors.HERITAGE_COLOR,
    borderWidth: Scaling.HEIGHT_SCALE_1,
  },
  loginViewText: {
    color: Colors.HERITAGE_COLOR,
    fontFamily: FontName.MERRIWEATHER_BLACK,
    fontSize: fontScale(14),
  },
  hideEyeIcon: {
    width: Scaling.HEIGHT_SCALE_20,
    height: Scaling.HEIGHT_SCALE_20,
    marginRight: Scaling.HEIGHT_SCALE_10,
  },
  passwordViewStyle: {
    marginBottom: Scaling.WIDTH_SCALE_10,
    width: Screen.width / 1.3,
    borderRadius: Scaling.HEIGHT_SCALE_10,
    backgroundColor: Colors.WHITE,
  },
  descriptionText: {
    color: Colors.HERITAGE_COLOR,
    marginVertical: Scaling.HEIGHT_SCALE_20,
    alignSelf: 'center',
    marginHorizontal: Scaling.HEIGHT_SCALE_20,
  },
  descriptionView: {
    // height: Screen.height / 2,
    backgroundColor: Colors.RED_MAROON,
    margin: Scaling.HEIGHT_SCALE_20,
    borderRadius: Scaling.HEIGHT_SCALE_20,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  modalCenter: {
    flex: 8,
    backgroundColor: Colors.TRANSPARENT_BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default CommonStyle
