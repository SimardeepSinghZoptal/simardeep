import React, {useEffect, useState} from 'react'
import {
  Text,
  StyleSheet,
  Modal,
  View,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  Platform,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native'

import {FontName, Colors, Scaling, Strings} from '../../constants'
import {fontScale} from '../../constants/FontSize'
import TextComponent from './TextComponent'
import {Button} from './Button'
import Images from '../../assets/AppImages'
import {RouteKeys} from '../../routes/RouteKeys'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const SimpleModal = props => {
  return (
    <View>
      <Modal
        animationType='none'
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => props.setModalVisible(false)}>
        <View style={styles.modalOuterView}>
          <View style={styles.modalInnerView}>
            <TouchableOpacity
              onPress={() => {
                props.setModalVisible(false)
              }}
              style={{
                // backgroundColor: 'red',
                flex: 7,
              }}></TouchableOpacity>
            <View
              style={{
                flex: 3,
                backgroundColor: Colors.BLACK,
              }}>
              <View
                style={{
                  alignItems: 'flex-end',
                  padding: Scaling.HEIGHT_SCALE_10,
                  // paddingRight: Scaling.HEIGHT_SCALE_10,
                }}>
                <TouchableOpacity
                  onPress={() => props.setModalVisible(false)}
                  style={{}}>
                  {/* <Image
                    source={Images.cancelIcon}
                    style={{
                      height: Scaling.HEIGHT_SCALE_15,
                      width: Scaling.HEIGHT_SCALE_15,
                      resizeMode: 'cover',
                      tintColor: Colors.WHITE,
                    }}
                  /> */}
                </TouchableOpacity>
              </View>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={props.data}
                contentContainerStyle={{
                  alignItems: 'center',
                }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  console.log('-=-=-=-=-=-=-=-=-=-' + item.text),
                  (
                    <TouchableOpacity
                      onPress={() => {
                        item.text === Strings.CREATE_SALE
                          ? props.setModalVisible(false)
                          : item.text === Strings.EDIT
                          ? props.setModalVisible(false)
                          : item.text === Strings.SELL_FASTER
                          ? props.setModalVisible(false)
                          : item.text === Strings.PIN_TO_TOP
                          ? props.setModalVisible(false)
                          : null
                        item.text === Strings.CREATE_SALE
                          ? props.navigation.navigate(
                              RouteKeys.CREATE_SALE_SCREEN,
                            )
                          : item.text === Strings.SELL_FASTER
                          ? props.navigation.navigate(
                              RouteKeys.SELL_FASTER_SCREEN,
                            )
                          : item.text === Strings.PIN_TO_TOP
                          ? props.navigation.navigate(
                              RouteKeys.PIN_TOP_TOP_SCREEN,
                            )
                          : item.text === Strings.EDIT
                          ? props.navigation.navigate(
                              RouteKeys.EDIT_MY_PRODUCT_SCREEN,
                            )
                          : null
                      }}>
                      {/* <TouchableOpacity onPress={props.onPressNavigation}> */}
                      <Text
                        style={{
                          fontSize: fontScale(16),
                          color: Colors.WHITE,
                          paddingVertical: Scaling.HEIGHT_SCALE_5,
                          // backgroundColor: 'green',
                        }}>
                        {item.text}
                      </Text>
                    </TouchableOpacity>
                  )
                )}
                //   ItemSeparatorComponent={() => (
                //     <View style={styles.itemSeprator} />
                //   )}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default SimpleModal
const styles = StyleSheet.create({
  modalOuterView: {
    alignItems: 'center',
    // justifyContent: 'flex-end',
    // height: '100%',
    // width: '100%',
    backgroundColor: Colors.SMOKY,
    flex: 1,
  },
  modalInnerView: {
    // height: '30%',
    width: '100%',
    backgroundColor: Colors.TRANSPARENT_BLACK,
    // backgroundColor: Colors.WHITE,
    // paddingVertical: Scaling.HEIGHT_SCALE_10,
    borderTopRightRadius: Scaling.HEIGHT_SCALE_5,
    borderTopLeftRadius: Scaling.HEIGHT_SCALE_5,
    // minHeight: '20%',
    // maxHeight: '30%',
    // paddingBottom: Scaling.HEIGHT_SCALE_30,
    flex: 1,
    // alignItems: 'center',
  },
  itemSeprator: {
    backgroundColor: Colors.WHITE,
    height: 0.5,
    width: '100%',
    marginVertical: 5,
  },
})
