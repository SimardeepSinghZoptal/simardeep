import React, {useState, useEffect, useCallback} from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  SafeAreaView,
  FlatList,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Text,
} from 'react-native'
import AppImages from '../../../assets/AppImages'
import {Screen, Scaling, FontName, Strings} from '../../../constants'
import {fontScale} from '../../../constants/FontSize'
import {StackActions, useIsFocused} from '@react-navigation/native'
import {Colors} from '../../../constants'
import axios from 'axios'
import {FlatGrid} from 'react-native-super-grid'
import CommonLoader from '../../../common/widgets/CommonLoader'
import {FlatListSlider} from 'react-native-flatlist-slider'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {StorageKey} from '../../../constants/AsyncStorageService'
import Urls from '../../../constants/Urls'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const HomeScreen = props => {
  const isFocused = useIsFocused()
  const [loading, setLoading] = useState(false)
  const [shopArray, setShopArray] = useState([])

  useEffect(() => {
    if (isFocused) {
      callHomeApi()
    }
  }, [props.homeAction, isFocused])
  const callHomeApi = async () => {
    var token = await AsyncStorage.getItem(StorageKey.ACCESS_TOKEN)
    setLoading(true)
    props.homeAction('86', token)
  }
  useEffect(() => {
    let responseData = getHomeResponse()
    if (responseData != null) {
      setTimeout(() => {}, 500)
    }
  }, [props.homeReducer.response])
  const getHomeResponse = async () => {
    if (props.homeReducer.loading == false) {
      if (props.homeReducer.response != null) {
        setShopArray(props.homeReducer.response.data.data.containerDetail)
        setLoading(false)
      } else if (props.homeReducer.error != null) {
        setLoading(false)
        return 'error message'
      } else {
        setLoading(false)

        return null
      }
    }
    return null
  }

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.BLACK,
        }}>
        <CommonLoader loading={loading} />
        <ImageBackground
          style={{
            flex: 1,
            alignItems: 'center',
          }}
          source={AppImages.backgroundImage}>
          <FlatList
            data={shopArray}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{}}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: 'row',
                  // flex: 1,
                  backgroundColor: Colors.WHITE,
                  padding: Scaling.HEIGHT_SCALE_10,
                  height: Scaling.HEIGHT_SCALE_100,
                  width: Screen.width / 1.14,
                  alignSelf: 'center',
                  marginTop: Scaling.HEIGHT_SCALE_30,
                  borderRadius: Scaling.HEIGHT_SCALE_8,
                  alignItems: 'center',
                }}
                onPress={() => {}}>
                <View style={styles.playIconView}>
                  <Image
                    style={styles.playIcon}
                    source={{uri: Urls.IMAGE_URL + item.photo}}></Image>
                </View>
                <View
                  style={{
                    flex: 7,
                  }}>
                  <Text style={{}}>{item.name}</Text>
                  <Text style={{}}>
                    {'Total containers: ' + item.total_container}
                  </Text>
                  <Text style={{}}>
                    {'Containers available: ' + item.available_container}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </ImageBackground>
      </SafeAreaView>
    </>
  )
}

export default HomeScreen

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

class SkeletonView extends React.Component {
  render () {
    return (
      <SkeletonPlaceholder>
        <View
          style={{
            flexDirection: 'row',
            // flex: 1,
            backgroundColor: Colors.WHITE,
            padding: Scaling.HEIGHT_SCALE_10,
            height: Scaling.HEIGHT_SCALE_100,
            width: Screen.width / 1.14,
            alignSelf: 'center',
            marginTop: Scaling.HEIGHT_SCALE_30,
            borderRadius: Scaling.HEIGHT_SCALE_8,
            marginBottom: Scaling.HEIGHT_SCALE_30,

            // alignItems:"center"
          }}>
          <View
            style={{
              flex: 3,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                // flex: 3,
                alignItems: 'center',
                justifyContent: 'center',
                width: Scaling.HEIGHT_SCALE_75,
                height: Scaling.HEIGHT_SCALE_75,
              }}
              source={AppImages.playIcon}></Image>
          </View>
          <View
            style={{
              flex: 7,
              paddingHorizontal: Scaling.HEIGHT_SCALE_10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'space-between',
                marginBottom: Scaling.HEIGHT_SCALE_5,
              }}>
              {/* <Image
            source={AppImages.fivethIcon}
            style={{
              // width: Scaling.HEIGHT_SCALE_35,
              // height: Scaling.HEIGHT_SCALE_35,
              marginRight: Scaling.HEIGHT_SCALE_10,
            }}
          /> */}
              <SkeletonPlaceholder.Item
                style={{
                  fontSize: fontScale(16),
                  fontFamily: FontName.MERRIWEATHER_BLACK,
                  color: Colors.RED_MAROON,
                  marginRight: Scaling.HEIGHT_SCALE_10,
                }}
              />

              <SkeletonPlaceholder.Item
                style={{
                  fontSize: fontScale(16),
                  fontFamily: FontName.MERRIWEATHER_BLACK,
                  color: Colors.DARK_BROWN,
                }}
              />
            </View>

            <Image
              source={AppImages.lineIcon}
              style={{
                width: '100%',
                // height: Scaling.HEIGHT_SCALE_35,
                marginBottom: Scaling.HEIGHT_SCALE_6,
              }}
            />
            <SkeletonPlaceholder.Item
              style={{
                fontSize: fontScale(14),
                fontFamily: FontName.MERRIWEATHER_LIGHT,
              }}
            />
            <SkeletonPlaceholder.Item
              style={{
                fontSize: fontScale(14),
                fontFamily: FontName.MERRIWEATHER_LIGHT,
              }}
            />
          </View>
        </View>
      </SkeletonPlaceholder>
    )
  }
}
