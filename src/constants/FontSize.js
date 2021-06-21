import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import {Platform, TouchableWithoutFeedback, Keyboard} from 'react-native'

export function fontScale (size) {
  return RFValue(size)
}
export function fontScaleStandard (size) {
  return RFPercentage(size)
}
