import DeviceInfo from 'react-native-device-info'
import {Platform} from 'react-native'
let type = DeviceInfo.getDeviceType()
//  generate_token=(length)=>{
//     //edit the token allowed characters
//     var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
//     var b = [];
//     for (var i=0; i<length; i++) {
//         var j = (Math.random() * (a.length-1)).toFixed(0);
//         b[i] = a[j];
//     }
//     return b.join("");
// }

export default {
  // DEVICE_TYPE: Platform.OS === 'android' ? 'ANDROID' : 'iOS',
  DEVICE_TYPE: DeviceInfo.getDeviceType(),
  APP_VERSION: DeviceInfo.getVersion(),
  DEVICE_MODEL: DeviceInfo.getModel(),
  GOOGLE_MAP_KEY: 'AIzaSyBq16ekrXE3LHeDIwu3KDk0O9s-rMjZpqc',
  //DEVICE_TOKEN:generate_token(32),
}
