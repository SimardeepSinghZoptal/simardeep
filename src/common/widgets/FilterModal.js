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

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const FilterModal = props => {
  // props.cameFromArchiveList
  const [sideBarArray, setSideBarArray] = useState([
    {
      text: Strings.BRAND,
      onPress: '',
      selected: false,
    },
    {
      text: Strings.PRICE_RANGE,
      onPress: '',
      selected: false,
    },
    {
      text: Strings.CATEGORY,
      onPress: '',
      selected: false,
    },
    {
      text: Strings.SUBCATEGORY,
      onPress: '',
      selected: false,
    },
    {
      text: Strings.VERIFIED_SELLERS,
      onPress: '',
      selected: false,
    },
    {
      text: Strings.FEATURED_PRODUCTS,
      onPress: '',
      selected: false,
    },
    {
      text: Strings.RETAIL_RESELLING_PRODUCTS,
      onPress: '',
      selected: false,
    },
    {
      text: Strings.WHOLESALE_PRODUCTS,
      onPress: '',
      selected: false,
    },
  ])

  const [categoryArray, setCategoryArray] = useState([
    {
      text: 'hhtrthrt',
      onPress: '',
      quantity: 10,
      selected: false,
    },
    {
      text: 'bnvvbn',
      onPress: '',
      quantity: 198,
      selected: false,
    },
    {
      text: '3445645',
      onPress: '',
      quantity: 198,
      selected: false,
    },
    {
      text: 'kjljk',
      onPress: '',
      quantity: 98,
      selected: false,
    },
    {
      text: 'asaad',
      onPress: '',
      quantity: 448,
      selected: false,
    },
    {
      text: 'hhtrthrt',
      onPress: '',
      quantity: 10,
      selected: false,
    },
    {
      text: 'bnvvbn',
      onPress: '',
      quantity: 198,
      selected: false,
    },
    {
      text: '3445645',
      onPress: '',
      quantity: 198,
      selected: false,
    },
    {
      text: 'kjljk',
      onPress: '',
      quantity: 98,
      selected: false,
    },
    {
      text: 'asaad',
      onPress: '',
      quantity: 448,
      selected: false,
    },
  ])

  const [count, setCount] = useState(1)
  const [serachText, setSerachText] = useState('')
  const [serachedArray, setSerachedArray] = useState([])
  const [sideBarArrayForArchiveList, setSideBarArrayForArchiveList] = useState([
    {
      text: Strings.BRAND,
      onPress: '',
      selected: false,
    },
    {
      text: Strings.PRICE_RANGE,
      onPress: '',
      selected: false,
    },
    {
      text: Strings.CATEGORY,
      onPress: '',
      selected: false,
    },
  ])

  const select_Category = index => {
    var tempArray = categoryArray
    tempArray[index].selected = !tempArray[index].selected
    setCategoryArray(tempArray)
    console.log(
      '-=-=-=-=-=-=tempArray-=-=--=-=-=-=-=-=-' + JSON.stringify(tempArray),
    )
    console.log(
      '-=-=-=-=-=-=-categoryArray=-=--=-=-=-=-=-=-' +
        JSON.stringify(categoryArray),
    )
    setCount(1 + count)
  }
  useEffect(() => {
    console.log(
      '-=-=-=-=-=-=-=-useEffect=--=-=-=-=-=-=-' + JSON.stringify(props),
    )
    setSerachedArray(categoryArray)
    props.cameFromArchiveList
      ? setSideBarArray(sideBarArrayForArchiveList)
      : null
  }, [count])
  const onSearch = value => {
    console.log(
      '-=-=-=-=-=-=-=-=value=-=-=-=-=-=-=' + JSON.stringify(value.length),
    )

    setCategoryArray(
      serachedArray.filter(i => {
        console.log('-=-=-=-=-=-=-=-=filter=-=-=-=-=-=-=' + JSON.stringify(i))
        return i.text.toLowerCase().includes(value.toLowerCase())
      }),
    )
    setSerachText(value)
    // setCount(2 * value.length);
  }
  const select_Sidebar = index => {
    console.log('-=-=-=-=-=-=index-=-=--=-=-=-=-=-=-' + JSON.stringify(index))

    var tempArray = sideBarArray
    tempArray[index].selected = !tempArray[index].selected
    setSideBarArray(tempArray)
    console.log(
      '-=-=-=-=-=-=tempArray-=-=--=-=-=-=-=-=-' + JSON.stringify(tempArray),
    )
    console.log(
      '-=-=-=-=-sideBarArray=-=-=-=--=-=-=-=-=-=-' +
        JSON.stringify(sideBarArray),
    )
    setCount(count + 5)
  }
  const clearAllFilter = () => {
    var tempArray = []
    categoryArray.forEach(e => {
      tempArray.push({
        text: e.text,
        quantity: e.quantity,
        selected: false,
      })
      console.log('-=-=-=-=-=-clear all=-=' + JSON.stringify(e))
    })
    console.log(
      '-=-=-=-tempArray=-=-=-=-=-=-tempArray-=-=-=-=-=' +
        JSON.stringify(tempArray),
    )
    setCategoryArray(tempArray)
    // ----------------------------------SIDEBAR ARRAY-------------------------------------------
    var tempArraySideBar = []
    sideBarArray.forEach(e => {
      tempArraySideBar.push({
        text: e.text,
        selected: false,
      })
      console.log(
        '-=-=-=-=-=-clear all=-==-=-=-=fortempArraySideBar' + JSON.stringify(e),
      )
    })
    console.log(
      '-=-=-=-tempArraySideBar=-=-=-=-=-=-tempArraySideBar-=-=-=-=-=' +
        JSON.stringify(tempArraySideBar),
    )
    setSideBarArray(tempArraySideBar)
    // setCount(count + 5);
  }
  return (
    <View>
      <Modal
        animationType='none'
        transparent={true}
        visible={props.showFilterModal}
        onRequestClose={() => props.setShowFilterModal(false)}>
        <View style={styles.modalOuterView}>
          <View style={styles.modalInnerView}>
            {/* ----------------HEADER----------------FILTER AND CLEAR All---------- */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: Scaling.HEIGHT_SCALE_10,
                backgroundColor: Colors.LIGHT_GRAY,
                height: Scaling.HEIGHT_SCALE_50,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: fontScale(16),
                }}>
                {Strings.FILTER}
              </Text>
              <TouchableOpacity onPress={() => clearAllFilter()}>
                <Text
                  style={{
                    fontSize: fontScale(16),
                  }}>
                  {Strings.CLEAR_ALL}
                </Text>
              </TouchableOpacity>
            </View>
            {/* --------END OF----------HEADER--------------FILTER AND CLEAR All---------- */}

            <View
              style={{
                flexDirection: 'row',
                // backgroundColor: 'green',
              }}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={sideBarArray}
                scrollEnabled={false}
                contentContainerStyle={{
                  //   backgroundColor: 'ORANGE',
                  width: width / 2.5,
                  padding: Scaling.HEIGHT_SCALE_10,
                }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() => {
                      select_Sidebar(index)
                    }}
                    style={{
                      backgroundColor: item.selected
                        ? Colors.DARK_GRAY
                        : Colors.LIGHT_GRAY,
                      alignItems: 'center',
                      padding: Scaling.HEIGHT_SCALE_5,
                    }}>
                    <Text
                      style={{
                        fontSize: fontScale(14),
                        padding: Scaling.HEIGHT_SCALE_5,
                      }}>
                      {item.text}
                    </Text>
                  </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => (
                  <View style={styles.itemSeprator} />
                )}
              />
              <View
                style={{
                  width: width / 1.5,
                  padding: Scaling.HEIGHT_SCALE_10,
                }}>
                <View
                  style={{
                    backgroundColor: Colors.GRAY,
                    height:
                      Platform.OS === 'ios'
                        ? Scaling.HEIGHT_SCALE_30
                        : Scaling.HEIGHT_SCALE_40,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: Scaling.HEIGHT_SCALE_5,
                  }}>
                  <TextInput
                    style={{
                      paddingLeft: Scaling.HEIGHT_SCALE_10,
                      flex: 9,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    placeholderTextColor={Colors.BLACK}
                    value={serachText}
                    placeholder={'Search...'}
                    onChangeText={e => onSearch(e)}
                  />
                  <View
                    style={{
                      flex: 1,
                      paddingRight: Scaling.HEIGHT_SCALE_5,
                    }}>
                    {/* <Image
                      style={{
                        width: Scaling.HEIGHT_SCALE_15,
                        height: Scaling.HEIGHT_SCALE_15,
                        tintColor: Colors.BLACK,
                      }}
                      source={Images.searchIcon}
                    /> */}
                  </View>
                </View>
                {categoryArray.length > 0 ? (
                  <FlatList
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    data={categoryArray}
                    scrollEnabled={false}
                    contentContainerStyle={{
                      marginTop: Scaling.HEIGHT_SCALE_10,
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                      // console.log(
                      //   '-=-=--=-=-=--item-=-=-=-=-=' + JSON.stringify(item),
                      // ),
                      // <View>
                      //   {item ? (
                      <TouchableOpacity
                        onPress={() => {
                          select_Category(index)
                        }}
                        style={{
                          backgroundColor: Colors.LIGHT_GRAY,
                          alignItems: 'center',
                          padding: Scaling.HEIGHT_SCALE_5,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View
                          style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          {/* <Image
                            source={Images.tickIcon_simple}
                            style={{
                              height: Scaling.HEIGHT_SCALE_15,
                              width: Scaling.HEIGHT_SCALE_15,
                              tintColor: item.selected
                                ? Colors.BLACK
                                : Colors.GRAY,
                            }}
                          /> */}
                          <Text
                            style={{
                              fontSize: fontScale(14),
                              paddingHorizontal: Scaling.HEIGHT_SCALE_8,
                            }}>
                            {item.text}
                          </Text>
                        </View>
                        <Text
                          style={{
                            fontSize: fontScale(14),
                            paddingRight: Scaling.HEIGHT_SCALE_5,
                          }}>
                          {item.quantity}
                        </Text>
                      </TouchableOpacity>
                      //   ) : (
                      //     <Text
                      //       style={{
                      //         fontSize: fontScale(16),
                      //         alignSelf: 'center',
                      //         marginTop: Scaling.HEIGHT_SCALE_20,
                      //       }}>
                      //       No results found
                      //     </Text>
                      //   )}
                      // </View>
                    )}
                    ItemSeparatorComponent={() => (
                      <View
                        style={{
                          backgroundColor: Colors.WHITE,
                          height: Scaling.HEIGHT_SCALE_3,
                          width: '100%',
                        }}
                      />
                    )}
                  />
                ) : (
                  <Text
                    style={{
                      fontSize: fontScale(16),
                      alignSelf: 'center',
                      marginTop: Scaling.HEIGHT_SCALE_20,
                    }}>
                    No results found
                  </Text>
                )}
              </View>
            </View>

            {/* --------------------------------CLOSE AND APPLY BUTTONS---------- */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                position: 'absolute',
                bottom: 0,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.ORANGE,
                  height: Scaling.HEIGHT_SCALE_50,
                  width: width / 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => props.setShowFilterModal(false)}>
                <Text
                  style={{
                    fontSize: fontScale(16),
                    color: Colors.WHITE,
                  }}>
                  {Strings.CLOSE}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  height: Scaling.HEIGHT_SCALE_50,
                  backgroundColor: Colors.WHITE,
                  width: Scaling.HEIGHT_SCALE_2,
                }}></View>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.ORANGE,
                  height: Scaling.HEIGHT_SCALE_50,
                  alignItems: 'center',
                  width: width / 2,
                  justifyContent: 'center',
                }}
                onPress={() => props.setShowFilterModal(false)}>
                <Text
                  style={{
                    fontSize: fontScale(16),
                    color: Colors.WHITE,
                  }}>
                  {Strings.APLLY}
                </Text>
              </TouchableOpacity>
            </View>
            {/* -----------END OF---------------------CLOSE AND APPLY BUTTONS---------- */}
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default FilterModal
const styles = StyleSheet.create({
  modalOuterView: {
    flex: 1,
    backgroundColor: Colors.SMOKY,
  },
  modalInnerView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingTop:
      Platform.OS === 'ios' ? Scaling.HEIGHT_SCALE_40 : Scaling.HEIGHT_SCALE_10,
  },
  itemSeprator: {
    backgroundColor: Colors.WHITE,
    height: Scaling.HEIGHT_SCALE_5,
    width: '100%',
  },
})
