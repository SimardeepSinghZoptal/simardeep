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
import ShowSnack from '../../../constants/ShowSnack'
import {RouteKeys} from '../../../routes/RouteKeys'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const HomeScreen = props => {
  const isFocused = useIsFocused()
  const [loading, setLoading] = useState(false)
  const [shopArray, setShopArray] = useState([
    {
      name: 'Mouse',
      image: AppImages.dummyIcon,
      price: 100,
      quantity: 1,
      totalPrice: 100,
      id: 1,
    },
    {
      name: 'Computer',
      image: AppImages.church2Icon,
      price: 200,
      quantity: 1,
      totalPrice: 200,
      id: 2,
    },
    {
      name: 'Mobile',
      image: AppImages.churchIcon,
      price: 300,
      quantity: 1,
      totalPrice: 300,
      id: 3,
    },
    {
      name: 'LED',
      image: AppImages.dummyIcon,
      price: 400,
      quantity: 1,
      totalPrice: 400,
      id: 4,
    },
    {
      name: 'Keyboard',
      image: AppImages.backgroundImage,
      price: 500,
      quantity: 1,
      totalPrice: 500,
      id: 5,
    },
    {
      name: 'Mac',
      image: AppImages.dummyIcon,
      price: 600,
      quantity: 1,
      totalPrice: 600,
      id: 6,
    },
    {
      name: 'Mini',
      image: AppImages.church2Icon,
      price: 700,
      quantity: 1,
      totalPrice: 700,
      id: 7,
    },
    {
      name: 'Glass gaurd',
      image: AppImages.churchIcon,
      price: 800,
      quantity: 1,
      totalPrice: 800,
      id: 8,
    },
    {
      name: 'Copy',
      image: AppImages.backgroundImage,
      price: 900,
      quantity: 1,
      totalPrice: 900,
      id: 9,
    },
    {
      name: 'Pen',
      image: AppImages.dummyIcon,
      price: 1000,
      quantity: 1,
      totalPrice: 1000,
      id: 10,
    },
  ])
  const [cartArray, setCartArray] = useState([])
  const [checkIndex, setCheckIndex] = useState('')

  const addTocart = (item, index) => {
    if (checkIndex !== index) {
      setCheckIndex(index)
      var temp = cartArray
      temp.push(item)
      setCartArray(temp)
      console.log('-=-=-=cartarray-=-=-=-=-=', cartArray)
      ShowSnack('Added to cart')
    } else {
      ShowSnack('Added to cart')
    }
  }
  const gotoCheckOut = () => {
    props.navigation.navigate(RouteKeys.CART_SCREEN, {
      screen: RouteKeys.CART_SCREEN,
      data: cartArray,
    })
  }

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.HERITAGE_COLOR,
          alignItems: 'center',
        }}>
        {/* <ImageBackground
          style={{
            flex: 1,
            alignItems: 'center',
          }}
          source={AppImages.backgroundImage}> */}
        <FlatList
          data={shopArray}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View
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
                // alignItems: 'center',
                marginBottom:
                  index === shopArray.length - 1 ? Scaling.HEIGHT_SCALE_90 : 0,
              }}>
              <View style={styles.playIconView}>
                <Image style={styles.playIcon} source={item.image}></Image>
              </View>
              <View
                style={{
                  flex: 5,
                  paddingHorizontal: Scaling.HEIGHT_SCALE_5,
                }}>
                <Text style={{}}>{item.name}</Text>
                <Text style={{}}>{'Price: ' + item.price}</Text>
              </View>
              <View
                style={{
                  flex: 2,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: Scaling.HEIGHT_SCALE_5,
                    // height: Scaling.HEIGHT_SCALE_50,
                    marginBottom: Scaling.HEIGHT_SCALE_2,
                  }}
                  onPress={() => addTocart(item, index)}>
                  <Text
                    style={{color: 'white', padding: Scaling.HEIGHT_SCALE_4}}>
                    Add to cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <TouchableOpacity
          style={{
            backgroundColor: Colors.RED_MAROON,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: Scaling.HEIGHT_SCALE_5,
            position: 'absolute',
            height: Scaling.HEIGHT_SCALE_50,
            width: width / 3,
            bottom: Scaling.HEIGHT_SCALE_30,
          }}
          onPress={() => gotoCheckOut()}>
          <Text
            style={{
              color: 'white',
              padding: Scaling.HEIGHT_SCALE_4,
              fontSize: fontScale(18),
            }}>
            Check out
          </Text>
        </TouchableOpacity>
        {/* </ImageBackground> */}
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
    resizeMode: 'contain',
  },
  playIconView: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
