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
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const HomeScreen = props => {
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
  const [bannerImages, setBannerImages] = useState([])
  const [gridImages, setGridImages] = useState([])

  useEffect(() => {
    if (isFocused) {
      setLoading(true)
      props.homeAction()
    }
  }, [props.homeAction, isFocused, bannerImages.length])

  useEffect(() => {
    let responseData = getHomeResponse()
    if (responseData != null) {
      setTimeout(() => {}, 500)
    }
  }, [props.homeReducer.response])
  const getHomeResponse = async () => {
    if (props.homeReducer.loading == false) {
      console.log('-=-=-=-1-=-=-=-=-=-=-')
      if (props.homeReducer.response != null) {
        console.log('-=-=-=-2-=-=-=-=-=-=-', props.homeReducer.response)
        let data = props.homeReducer.response
        // setBannerImages(data)
        var temp = []
        data.forEach((e, i) => {
          if (i < 5) {
            temp.push({banner: e})
            // temp.push(e)
            console.log('-=-=-=temp-==-=-=-=-', temp)
          }
        })
        if (temp) {
          setBannerImages(temp)
        }

        var temp2 = []
        data.forEach((e, i) => {
          if (i < 40) {
            temp2.push(e)
            console.log('-=-=-=temp2-==-=-=-=-', temp2)
          }
        })

        if (temp2) {
          setGridImages(temp2)
        }
        setLoading(false)
        console.log('-=-=-=-3-=-=-=-=-=-=-', JSON.stringify(bannerImages))
        console.log('-=-=-=-grid-=-=-=-=-=-=-', JSON.stringify(gridImages))
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
  const pressLoad = () => {
    setLoading(true)
    props.homeAction()
  }
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.BLACK,
          // alignItems: 'center',
        }}>
        <CommonLoader loading={loading} />
        <ImageBackground
          style={{
            flex: 1,
            alignItems: 'center',
          }}
          source={AppImages.backgroundImage}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {bannerImages.length ? (
              <FlatListSlider
                data={bannerImages}
                imageKey={'banner'}
                local={false}
                autoscroll={false}
                uri={true}
                timer={3000}
                onPress={() => {
                  // alert('Yet To Implement');
                }}
                height={Scaling.HEIGHT_SCALE_200}
                width={Screen.width / 1.1}
                imageHeight={Scaling.HEIGHT_SCALE_200}
                // borderRadius={Scaling.HEIGHT_SCALE_20}
                contentContainerStyle={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                }}
                // indicator={bannerImages.length > 1 ? true : false}
                indicatorContainerStyle={{
                  bottom: Scaling.HEIGHT_SCALE_30,
                  left: Scaling.HEIGHT_SCALE_30,
                  position: 'absolute',
                }}
                indicatorStyle={{
                  height: Scaling.HEIGHT_SCALE_10,
                  // width: Scaling.HEIGHT_SCALE_10,
                  borderRadius: Scaling.HEIGHT_SCALE_20,
                  // backgroundColor: 'red',
                }}
                indicatorActiveColor={Colors.WHITE}
                indicatorInActiveColor={Colors.WHITE}
                indicatorActiveWidth={Scaling.HEIGHT_SCALE_10}
              />
            ) : (
              <Text
                style={{
                  // height: '100%',
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  fontSize: 16,
                }}>
                Loading... banner images
              </Text>
            )}
            {gridImages ? (
              <FlatGrid
                itemDimension={Screen.width / 2.5}
                data={gridImages}
                numColumns={2}
                spacing={20}
                renderItem={({item, index}) => (
                  <Image
                    source={{uri: item}}
                    style={{
                      // marginLeft: 5,
                      marginRight: 5,
                      marginBottom: 5,
                      resizeMode: 'cover',
                      height: Screen.height / 3 - 5,
                      width: Screen.width / 2 - 30,
                    }}
                  />
                )}
              />
            ) : (
              <Text
                style={{
                  // height: '100%',
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  fontSize: 16,
                }}>
                Loading... grid images
              </Text>
            )}
          </ScrollView>
          <TouchableOpacity
            style={{
              height: Scaling.HEIGHT_SCALE_50,
              width: Screen.width / 3,
              // alignSelf: 'center',
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              bottom: Scaling.HEIGHT_SCALE_40,
              borderRadius: Scaling.HEIGHT_SCALE_20,
            }}
            onPress={() => {
              pressLoad()
            }}>
            <Text
              style={{
                // height: '100%',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: 16,
              }}>
              Load
            </Text>
          </TouchableOpacity>
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
