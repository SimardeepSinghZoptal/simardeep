import React from 'react'
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native'
import {Colors, Scaling, FontName, Screen, Strings} from '../../constants'
// import Feather from 'react-native-vector-icons/Feather';
// import Animatable from 'react-native-animatable';
import {fontScale, fontScaleStandard} from '../../constants/FontSize'
import Images from '../../assets/AppImages'
import CommonStyle from '../../constants/CommonStyle'
const CustomAlert = props => {
  return (
    <View style={{flex: 1}}>
      <View style={CommonStyle.modalCenter}>
        <View
          style={[
            {
              backgroundColor:
                props.appTheme === 'light' ? Colors.WHITE : Colors.BLACK,
              width: Screen.width - Scaling.WIDTH_SCALE_80,
              borderRadius: Scaling.HEIGHT_SCALE_4,
              //padding: Scaling.HEIGHT_SCALE_10,
              // borderBottomWidth: 0.6,
            },
            //props.backgoundStyle,
          ]}>
          <Text
            style={[
              {
                alignSelf: 'center',
                marginTop: Scaling.HEIGHT_SCALE_10,
                marginBottom: Scaling.HEIGHT_SCALE_10,
                color: props.appTheme === 'light' ? Colors.BLACK : Colors.WHITE,
                fontSize: fontScale(16),
                fontWeight: 'bold',
              },
              // props.titleColor,
            ]}>
            {props.title}
          </Text>
          <View
            style={[
              {
                borderBottomWidth: 0.6,
                borderBottomColor:
                  props.appTheme === 'light' ? Colors.BLACK : Colors.WHITE,
              },
              //props.borderColor
            ]}>
            <Text
              style={[
                {
                  alignSelf: 'center',
                  fontSize: fontScale(14),
                  marginBottom: Scaling.HEIGHT_SCALE_10,
                  color:
                    props.appTheme === 'light' ? Colors.BLACK : Colors.WHITE,
                },
                //props.descriptionColor,
              ]}>
              {props.description}
            </Text>
          </View>
          {props.showSessionOk ? (
            <View>
              <TouchableOpacity
                onPress={() => {
                  props.onLogoutPress()
                }}
                style={{
                  marginRight: Scaling.WIDTH_SCALE_10,

                  //flex: 0.5,
                  //borderLeftWidth: 0.6
                }}>
                <Text
                  style={[
                    {
                      alignSelf: 'center',
                      padding: Scaling.HEIGHT_SCALE_10,
                      color:
                        props.appTheme === 'light' ? Colors.BLACK : Colors.BLUE,
                    },
                    //props.buttonTextColor,
                  ]}>
                  {Strings.OK}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: Scaling.HEIGHT_SCALE_40,

                // marginTop: Scaling.HEIGHT_SCALE_10,
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.5,
                  //borderRightWidth: 0.6
                }}
                onPress={() => {
                  props.showLogoutView()
                }}
                //style={{ marginVertical: Scaling.HEIGHT_SCALE_10 }}
              >
                <Text
                  style={[
                    {
                      alignSelf: 'center',
                      color:
                        props.appTheme === 'light' ? Colors.BLACK : Colors.BLUE,
                    },
                    //  props.buttonTextColor,
                  ]}>
                  {Strings.CANCEL}
                </Text>
              </TouchableOpacity>
              <View
                style={[
                  {
                    // borderLeftWidth: 0.6,
                    flex: 0.004,
                    backgroundColor:
                      props.appTheme === 'light' ? Colors.BLACK : Colors.WHITE,
                    //backgroundColor: 'red',
                    height: Scaling.HEIGHT_SCALE_40,
                  },
                  // props.lineColor,
                ]}></View>
              <TouchableOpacity
                onPress={() => {
                  props.onLogoutPress()
                }}
                style={{
                  flex: 0.5,

                  //borderLeftWidth: 0.6
                }}>
                <Text
                  style={[
                    {
                      alignSelf: 'center',
                      color:
                        props.appTheme === 'light' ? Colors.BLACK : Colors.BLUE,
                    },
                    // props.buttonTextColor,
                  ]}>
                  {Strings.OK}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}
export {CustomAlert}
