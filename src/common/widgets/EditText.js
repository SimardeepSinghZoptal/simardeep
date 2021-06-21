/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
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
import {Colors, Scaling, FontName, Screen} from '../../constants'
// import Feather from 'react-native-vector-icons/Feather';
// import Animatable from 'react-native-animatable';
import {fontScale, fontScaleStandard} from '../../constants/FontSize'
import Images from '../../assets/AppImages'
// Feather.loadFont();

const EditText = props => {
  return (
    <View style={[styles.container, props.style]}>
      {props.text ? (
        <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
      ) : null}
      <TextInput
        autoCapitalize='none'
        style={[styles.textInputStyle, props.textInputStyle]}
        underlineColorAndroid='transparent'
        placeholder={props.placeholder}
        placeholderTextColor={Colors.GRAY}
        value={props.value}
        maxLength={props.maxLength}
        onChangeText={props.onChangeText}
        {...props}
      />
    </View>
  )
}

const EditTextView = props => {
  const [isFocusedTextInput, setIsFocusedTextInput] = React.useState(false)

  const handleFocus = () => {
    setIsFocusedTextInput(true)
  }
  const handleBlur = () => {
    setIsFocusedTextInput(false)
  }
  return (
    <View style={[styles.containerEditTextView, props.style]}>
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
      <View
        style={[
          {
            // height: Scaling.HEIGHT_SCALE_45,
            backgroundColor: Colors.LIGHT_GRAY,
            justifyContent: 'center',
            paddingTop: Scaling.HEIGHT_SCALE_8,
            paddingBottom: Scaling.HEIGHT_SCALE_5,
            paddingLeft: Scaling.WIDTH_SCALE_4,
          },
          {
            borderColor: isFocusedTextInput ? Colors.ORANGE : null,
            borderWidth: isFocusedTextInput ? 0.6 : 0,
          },
        ]}>
        <TextInput
          autoCapitalize='none'
          style={[styles.textInputStyle]}
          underlineColorAndroid='transparent'
          placeholder={props.placeholder}
          placeholderTextColor={Colors.GRAY}
          value={props.value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={props.onChangeText}
          {...props}
        />
      </View>
    </View>
  )
}
const EditTextDescriptionView = props => {
  const [isFocusedTextInput, setIsFocusedTextInput] = React.useState(false)

  const handleFocus = () => {
    setIsFocusedTextInput(true)
  }
  const handleBlur = () => {
    setIsFocusedTextInput(false)
  }
  return (
    <View style={[styles.containerEditTextView, props.style]}>
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
      <View
        style={{
          // height: Scaling.HEIGHT_SCALE_45,
          backgroundColor: Colors.LIGHT_GRAY,
          justifyContent: 'center',
          paddingTop: Scaling.HEIGHT_SCALE_8,
          paddingBottom: Scaling.HEIGHT_SCALE_5,
          paddingLeft: Scaling.WIDTH_SCALE_4,
          borderColor: isFocusedTextInput ? Colors.ORANGE : null,
          borderWidth: isFocusedTextInput ? 0.6 : 0,
        }}>
        <TextInput
          autoCapitalize='none'
          style={[
            styles.textInputMultilineStyle,
            props.descriptionTextInputStyle,
          ]}
          underlineColorAndroid='transparent'
          placeholder={props.placeholder}
          placeholderTextColor={Colors.GRAY}
          value={props.value}
          blurOnSubmit={true}
          onFocus={handleFocus}
          onBlur={handleBlur}
          returnKeyType='done'
          multiline={true}
          numberOfLines={4}
          onChangeText={props.onChangeText}
          {...props}
        />
      </View>
    </View>
  )
}
const EditTextPasswordLogin = props => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  })
  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      })
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      })
    }
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    })
  }
  return (
    <View
      style={{
        marginBottom: Scaling.WIDTH_SCALE_10,
        width: Screen.width / 1.3,
        borderRadius: Scaling.HEIGHT_SCALE_10,
        backgroundColor: Colors.WHITE,
      }}>
      <View style={styles.action}>
        <TextInput
          placeholder={props.placeHolder}
          placeholderTextColor={Colors.BLACK}
          secureTextEntry={data.secureTextEntry ? true : false}
          style={[
            styles.textInput,
            {
              color: Colors.BLACK,
            },
          ]}
          autoCapitalize='none'
          keyboardType='email-address'
          onChangeText={props.onChangeText}
          value={props.value}
          {...props}
        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
          {data.secureTextEntry ? (
            <Image
              source={Images.eyeIcon}
              style={{
                width: Scaling.HEIGHT_SCALE_20,
                height: Scaling.HEIGHT_SCALE_20,
                marginRight: Scaling.HEIGHT_SCALE_10,
              }}
            />
          ) : (
            <Image
              source={Images.hideEyeIcon}
              style={{
                width: Scaling.HEIGHT_SCALE_20,
                height: Scaling.HEIGHT_SCALE_20,
                marginRight: Scaling.HEIGHT_SCALE_10,
              }}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}
const EditTextLogin = props => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    // secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  })
  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      })
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      })
    }
  }

  return (
    <View
      style={[
        {
          marginBottom: Scaling.WIDTH_SCALE_10,
          width: Screen.width / 1.3,
          borderRadius: Scaling.HEIGHT_SCALE_10,
          backgroundColor: Colors.WHITE,
        },
        props.style,
      ]}>
      <TextInput
        placeholder={props.placeHolder}
        // placeholderTextColor={
        //   props.placeholderTextColor ? props.placeHolderColor : Colors.WHITE
        // }
        // placeholderTextColor={Colors.RED_MAROON}
        placeholderTextColor={props.appTheme ? props.appTheme : Colors.BLACK}
        secureTextEntry={props.secureTextEntry}
        maxLength={props.maxLength}
        style={[styles.textInput, props.textStyle]}
        autoCapitalize='none'
        keyboardType={'email-address'}
        returnKeyType={props.returnKeyType}
        onChangeText={props.onChangeText}
        value={props.value}
        multiline={props.multiline}
        {...props}
      />
    </View>
  )
}
export {
  EditText,
  EditTextLogin,
  EditTextPasswordLogin,
  EditTextView,
  EditTextDescriptionView,
}

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
    // flex: 1,
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
})
