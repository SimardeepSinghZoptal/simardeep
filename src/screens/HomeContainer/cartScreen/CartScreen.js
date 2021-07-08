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
import AsyncStorage from '@react-native-async-storage/async-storage'
import {StorageKey} from '../../../constants/AsyncStorageService'
import {RouteKeys} from '../../../routes/RouteKeys'
import AppImages from '../../../assets/AppImages'
import update from 'immutability-helper'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const CartScreen = props => {
  const [cartArray, setCartArray] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [grandTotal, setGrandTotal] = useState(0)
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('-=-=-=-data-=-=-=-=-=-', props.route.params.data)
    setCartArray(props.route.params.data)
    // getGrandTotal()
  }, [])

  const increaseDecreaseQuantity = (type, item, index) => {
    setCount(count + 1)
    console.log('-=-=-==-item-=-=-=', item)
    var temp = cartArray
    cartArray.forEach((e, i) => {
      console.log('-=-=-=i-=-=-=-', e)
      if (index === i) {
        var calPrice = type === 1 ? e.quantity + 1 : e.quantity - 1
        temp[index] = {
          id: e.id,
          image: e.image,
          name: e.name,
          price: e.price,
          quantity: type === 1 ? e.quantity + 1 : e.quantity - 1,
          totalPrice: e.price * calPrice,
        }
        // setGrandTotal(e.price * calPrice)
      }
    })

    setCartArray(temp)
    console.log('-=--==temp-=-=-=-=-', temp)
    console.log('-=-=-==-=cartArray-=-=-=-=-=', cartArray)
  }
  useEffect(() => {}, [count])
  const deleteItem = (item, index) => {
    var temp = cartArray
    temp.splice(index, 1)
    setCount(count + 1)
    console.log('=-=-=-=-=-3434=3-=-=-=-=-=-=', temp)
  }

  return (
    setTimeout(async () => {
      var temp = []
      await cartArray.forEach(e => {
        temp.push(e.totalPrice)
      })
      var aarayOfPrices = temp
      console.log('-=-=-=-=-=-aarayOfPrices-=-o=', aarayOfPrices)
      var sum = await aarayOfPrices.reduce((a, b) => {
        return a + b
      }, 0)

      console.log('-=-=-=-=-=-=o-=o-=o-=o-o=-o=o-=o-=o-=o-=-=-o=', sum)
      setGrandTotal(sum)
      setCount(count + 1)
    }, 500),
    (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.HERITAGE_COLOR,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {cartArray.length === 0 ? (
          <Text style={{color: 'white', padding: Scaling.HEIGHT_SCALE_4}}>
            No products added yet
          </Text>
        ) : (
          <FlatList
            data={cartArray}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <View
                key={index}
                style={{
                  backgroundColor: Colors.WHITE,
                  padding: Scaling.HEIGHT_SCALE_10,
                  width: Screen.width / 1.14,
                  // alignSelf: 'center',
                  marginTop: Scaling.HEIGHT_SCALE_30,
                  borderRadius: Scaling.HEIGHT_SCALE_8,
                  // alignItems: 'center',
                  marginBottom:
                    index === cartArray.length - 1
                      ? Scaling.HEIGHT_SCALE_30
                      : 0,
                }}>
                <Image style={styles.playIcon} source={item.image}></Image>

                <View
                  style={{
                    paddingHorizontal: Scaling.HEIGHT_SCALE_5,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{}}>{'Product:  ' + item.name}</Text>
                    <TouchableOpacity
                      style={{}}
                      onPress={() => deleteItem(item, index)}>
                      <Text style={{}}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={{marginVertical: Scaling.HEIGHT_SCALE_5}}>
                    {'Price per unit: ' + item.price}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{color: 'black', padding: Scaling.HEIGHT_SCALE_4}}>
                      Quantity:
                    </Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: Scaling.HEIGHT_SCALE_5,
                      }}>
                      <TouchableOpacity
                        style={{
                          borderWidth: 1,
                          borderColor: 'black',
                          padding: Scaling.HEIGHT_SCALE_1,
                          borderRadius: Scaling.HEIGHT_SCALE_100,
                        }}
                        onPress={() =>
                          increaseDecreaseQuantity(1, item, index)
                        }>
                        <Image
                          style={{
                            height: Scaling.HEIGHT_SCALE_15,
                            width: Scaling.HEIGHT_SCALE_15,
                          }}
                          source={AppImages.plusIcon}></Image>
                      </TouchableOpacity>
                      <Text
                        style={{
                          color: 'black',
                          padding: Scaling.HEIGHT_SCALE_4,
                          marginHorizontal: Scaling.HEIGHT_SCALE_10,
                        }}>
                        {item.quantity}
                      </Text>

                      <TouchableOpacity
                        style={{}}
                        onPress={() =>
                          increaseDecreaseQuantity(2, item, index)
                        }>
                        <Image
                          style={{
                            height: Scaling.HEIGHT_SCALE_15,
                            width: Scaling.HEIGHT_SCALE_15,
                            padding: Scaling.HEIGHT_SCALE_10,
                          }}
                          source={AppImages.minusIcon}></Image>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Text
                    style={{padding: Scaling.HEIGHT_SCALE_4, color: 'black'}}>
                    Total Price: {item.totalPrice}
                  </Text>
                </View>
              </View>
            )}
          />
        )}
        {cartArray.length !== 0 ? (
          <Text
            style={{
              padding: Scaling.HEIGHT_SCALE_4,
              height: Scaling.HEIGHT_SCALE_40,
              color: 'black',
              alignSelf: 'center',
              textAlignVertical: 'center',
            }}>
            Total Price:{grandTotal}
          </Text>
        ) : null}
      </SafeAreaView>
    )
  )
}

export default CartScreen

const styles = StyleSheet.create({
  playIcon: {
    // flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 1.2,
    height: height / 3,
    resizeMode: 'contain',
  },
  playIconView: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
