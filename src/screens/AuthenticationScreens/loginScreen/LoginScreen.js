/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
  StatusBar,
  Text,
  PermissionsAndroid,
  Platform,
  TextInput,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  useColorScheme,
} from 'react-native'
import {Strings, Scaling, FontName, Colors, Screen} from '../../../constants'
import {fontScale} from '../../../constants/FontSize'
import AppImages from '../../../assets/AppImages'
import ShowSnack from '../../../constants/ShowSnack'
import {
  Button,
  SignUpFacebookButton,
  SignUpGmailButton,
} from '../../../common/widgets/Button'
import {RouteKeys} from '../../../routes/RouteKeys'
import {
  EditTextLogin,
  // EditTextPasswordLogin,
} from '../../../common/widgets/EditText'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {StackActions} from '@react-navigation/native'
import {StorageKey} from '../../../constants/AsyncStorageService'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CommonLoader from '../../../common/widgets/CommonLoader'
import CommonStyle from '../../../constants/CommonStyle'
import MyStatusBar from '../../../common/components/MyStatusBar'

const LoginScreen = props => {
  const [loading, setLoading] = useState(false)
  const [secureText, setSecureText] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLoginPress = async () => {
    console.log('-=-=-=-YOOOO-=-=-=-=-')
    Keyboard.dismiss()
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!email) {
      ShowSnack(Strings.EMAIL_SNACK)
    } else if (!reg.test(email)) {
      ShowSnack(Strings.VALID_EMAIL_SNACK)
    } else if (password.length === 0) {
      ShowSnack(Strings.PASSWORD_SNACK)
    } else {
      setLoading(true)
      props.login(email, password)
    }
  }
  useEffect(() => {
    let responseData = loginResponse()
    if (responseData != null) {
      setTimeout(() => {}, 500)
    }
  }, [props.dataLogin.response])

  const loginResponse = async () => {
    if (props.dataLogin.loading === false) {
      if (props.dataLogin.response != null) {
        console.log(
          'login =============>' + JSON.stringify(props.dataLogin.response),
        )
        if (props.dataLogin.response.data.data) {
          console.log('-=-=-=4-=-=-=-=-=-=-=', props.dataLogin)
          let data = props.dataLogin.response.data.data
          // console.log('data =======login======>' + JSON.stringify(data))
          await AsyncStorage.setItem(StorageKey.ACCESS_TOKEN, data.bearer_token)

          setLoading(false)
          props.navigation.dispatch(StackActions.replace(RouteKeys.TAB_SCREEN))
          return null
        } else {
          setLoading(false)
          console.log(
            'login else.=============>' +
              JSON.stringify(props.dataLogin.response.data.message),
          )
          ShowSnack(props.dataLogin.response.data.message)

          return props.dataLogin.response.data.data
        }
      } else if (props.dataLogin.error != null) {
        ShowSnack(props.dataLogin.error.message)

        return 'error message'
      } else {
        return null
      }
    }
    return null
  }

  const updateSecureTextEntry = () => {
    setSecureText(previousState => !previousState)
  }

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <ImageBackground
          style={{
            flex: 1,
          }}
          source={AppImages.backgroundImage}>
          <CommonLoader loading={loading} />
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps='handled'
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flex: 1}}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <View style={{alignItems: 'center'}}>
                <EditTextLogin
                  maxLength={30}
                  placeholder={Strings.ENTER_EMAIL}
                  onChangeText={e => setEmail(e)}
                  value={email}
                  returnKeyType={'next'}
                />

                <View
                  style={{
                    marginBottom: Scaling.WIDTH_SCALE_10,
                    width: Screen.width / 1.3,
                    borderRadius: Scaling.HEIGHT_SCALE_10,
                    backgroundColor: Colors.WHITE,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    placeholder={Strings.ENTER_PASSWORD}
                    placeholderTextColor={Colors.BLACK}
                    secureTextEntry={secureText ? true : false}
                    style={[
                      styles.textInput,
                      {
                        color: Colors.BLACK,
                      },
                    ]}
                    autoCapitalize='none'
                    onChangeText={e => setPassword(e)}
                    value={password}
                  />
                  <TouchableOpacity onPress={updateSecureTextEntry}>
                    {secureText ? (
                      <Image
                        source={AppImages.eyeIcon}
                        style={CommonStyle.hideEyeIcon}
                      />
                    ) : (
                      <Image
                        source={AppImages.hideEyeIcon}
                        style={CommonStyle.hideEyeIcon}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{alignItems: 'center'}}>
                <Button
                  text={Strings.LOGIN}
                  textStyle={styles.loginButtonText}
                  viewStyle={styles.loginButton}
                  onButtonPress={() => {
                    onLoginPress()
                  }}
                />
              </View>
            </View>
          </KeyboardAwareScrollView>
        </ImageBackground>
      </SafeAreaView>
    </>
  )
}
export default LoginScreen

const styles = StyleSheet.create({
  container: {
    marginVertical: Scaling.HEIGHT_SCALE_10,
    borderBottomColor: Colors.GRAY,
    borderBottomWidth: 0.6,
  },
  containerEditTextView: {
    marginVertical: Scaling.HEIGHT_SCALE_10,
    // backgroundColor:Colors.GRAY,
    // borderBottomColor: Colors.GRAY,
    // borderBottomWidth: 0.6,
  },
  text: {
    fontSize: fontScale(15),
    color: Colors.LIGHT_TEXT_BLACK,
    marginBottom: Platform.OS === 'ios' ? 15 : 10,
  },
  textInputStyle: {
    fontSize: fontScale(13),
    marginTop: Platform.OS === 'ios' ? 5 : -10,
    marginBottom: Platform.OS === 'ios' ? 10 : -5,
    paddingHorizontal: Scaling.PADDING_SCALE_10,
  },
  textInputMultilineStyle: {
    fontSize: fontScale(14),
    marginTop: Platform.OS === 'ios' ? 0 : -10,
    marginBottom: Platform.OS === 'ios' ? 10 : -5,
    height: Scaling.HEIGHT_SCALE_100,
    textAlignVertical: 'top',
  },
  text_footer: {
    color: '#05375a',
    fontSize: fontScale(18),
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionError: {
    flexDirection: 'row',
    marginTop: Scaling.HEIGHT_SCALE_10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: Scaling.HEIGHT_SCALE_8,
  },
  textInput: {
    padding: Scaling.HEIGHT_SCALE_10,
    flex: 1,
    // color: '#05375a',
    fontSize: fontScale(14),
    // backgroundColor: Colors.WHITE,
    // width: '100%',
    color: Colors.BLACK,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: fontScale(14),
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  modalText: {
    fontSize: 18,
    color: '#555',
    marginTop: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  skipText: {
    color: Colors.WHITE,
    fontSize: fontScale(16),
    fontFamily: FontName.MERRIWEATHER_REGULAR,
    // width: Scaling.WIDTH_SCALE_35,
    alignSelf: 'center',
    textDecorationLine: 'underline',
    // marginRight: Scaling.HEIGHT_SCALE_30,
  },
  skipButton: {
    height: Scaling.HEIGHT_SCALE_60,
    width: Scaling.HEIGHT_SCALE_70,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  loginButton: {
    width: Screen.width / 1.3,
    backgroundColor: Colors.BLACK,
    height: Scaling.HEIGHT_SCALE_45,
    margin: Scaling.HEIGHT_SCALE_10,
    borderColor: Colors.HERITAGE_COLOR,
    borderWidth: Scaling.HEIGHT_SCALE_1,
  },
  loginButtonText: {
    color: Colors.HERITAGE_COLOR,
    fontFamily: FontName.MERRIWEATHER_BLACK,
    fontSize: fontScale(14),
  },

  logoIcon: {
    width: '100%',
    height: Scaling.HEIGHT_SCALE_100,
  },
  logoIconView: {
    height: Scaling.HEIGHT_SCALE_100,
    backgroundColor: Colors.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Scaling.HEIGHT_SCALE_30,
  },

  // statusBar: {
  //   height: STATUSBAR_HEIGHT,
  // },
  // appBar: {
  //   backgroundColor: '#79B45D',
  //   height: APPBAR_HEIGHT,
  // },
  // content: {
  //   flex: 1,
  //   backgroundColor: '#33373B',
  // },
})
