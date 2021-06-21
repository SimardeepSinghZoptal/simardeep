import React, {useState, useEffect, useCallback} from 'react'
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
  ScrollView,
  SafeAreaView,
  FlatList,
  Dimensions,
  StyleSheet,
  Modal,
  BackHandler,
  ToastAndroid,
  useColorScheme,
  ActivityIndicator,
} from 'react-native'

import {Screen, Scaling, FontName, Strings} from '../../../constants'
import {fontScale} from '../../../constants/FontSize'
import {StackActions, useIsFocused} from '@react-navigation/native'

import {Colors} from '../../../constants'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const MessageScreen = props => {
  const colorScheme = useColorScheme()
  const [darkAppearance, setDarkAppearance] = useState('')
  const [showLogoutView, setShowLogoutView] = useState(false)
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [subtitle1, setSubtitle1] = useState('')
  const [isPaid, setIsPaid] = useState('')
  const [isOffline, setOfflineStatus] = useState(false)
  const [showDrawerModal, setShowDrawerModal] = useState(false)
  const isFocused = useIsFocused()
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [loadButton, setLoadButton] = useState(false)
  const [fetchFromServer, updateFetchFromServer] = useState(false)
  const [btnClick, setBtnClick] = useState(false)

  const [pageCurrent, setPageCurrent] = useState(0)
  const [noOfPost, setNoOfPost] = useState('30')
  const [exitApp, setExitApp] = useState(0)

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.BLACK,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
          }}>
          Message Screen
        </Text>
      </SafeAreaView>
    </>
  )
}

export default MessageScreen

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
  loader: {
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: Colors.HERITAGE_COLOR,
    marginBottom: Scaling.HEIGHT_SCALE_10,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: Platform.OS === 'ios' ? 14 : 13,
    textAlign: 'center',
  },
  shubalText: {
    fontSize: fontScale(14),
    fontFamily: FontName.MERRIWEATHER_LIGHT,
  },
  lineImage: {
    width: '100%',
    // height: Scaling.HEIGHT_SCALE_35,
    marginBottom: Scaling.HEIGHT_SCALE_6,
  },
  titleText: {
    fontSize: fontScale(16),
    fontFamily: FontName.MERRIWEATHER_BLACK,
    color: Colors.DARK_BROWN,
  },
  fifteenText: {
    fontSize: fontScale(16),
    fontFamily: FontName.MERRIWEATHER_BLACK,
    color: Colors.RED_MAROON,
    marginRight: Scaling.HEIGHT_SCALE_10,
  },
  fifteenView: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: Scaling.HEIGHT_SCALE_5,
  },
  rightContainer: {
    flex: 7,
    paddingHorizontal: Scaling.HEIGHT_SCALE_10,
  },
  playIcon: {
    // flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: Scaling.HEIGHT_SCALE_75,
    height: Scaling.HEIGHT_SCALE_75,
  },
  playIconView: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
