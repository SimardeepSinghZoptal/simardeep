import {Dimensions} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
export default {
  // width: Dimensions.get("window").width,
  // height: Dimensions.get("window").height,
  width: wp('100%'),
  height: hp('100%'),
}
