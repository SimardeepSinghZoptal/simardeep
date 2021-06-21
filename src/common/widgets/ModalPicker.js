import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
  Platform,
  TouchableOpacity,
  Dimensions,
  Text,
  Image,
} from 'react-native'
// import { Colors, fontName } from "App/Theme";
import TextComponent from './TextComponent'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import moment from 'moment'
import {Button, SignUpAppleButton} from './Button'
import {Colors, FontName, Scaling, Strings} from '../../constants'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
import data from '../../constants/CountryCode'
import {fontScale} from '../../constants/FontSize'
import Images from '../../assets/AppImages'
export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false,
      countryCode: '+91',
      isDatePickerVisible: false,
      countryData: data,
      searchData: data,
      ModalPickerValue: '',
      CommonModalPickerVisible: false,
    }
  }

  componentDidMount () {
    this.setState({
      countryData: data,
    })
  }
  showModal () {
    this.setState({modalVisible: true})
  }

  hideModal () {
    this.setState({
      modalVisible: false,
      countryData: data,
    })
  }

  showCommonModalPicker () {
    this.setState({CommonModalPickerVisible: true})
  }
  hideModalPickerValueModal () {
    this.setState({CommonModalPickerVisible: false})
  }

  showDateModal = () => {
    this.setState({isDatePickerVisible: true})
  }
  hideDateModal () {
    this.setState({isDatePickerVisible: false})
  }

  async selectCountry (country) {
    // const countryData = await data;
    try {
      const countryCode = await this.state.countryData.filter(
        obj => obj.name === country,
      )[0].dial_code
      this.setState({countryCode: countryCode})
      this.props.onChangePhone(this.state.phone, countryCode)
      this.hideModal()
    } catch (err) {
      console.log(err)
    }
  }

  CommonModalPicker = ModalPickerValue => {
    console.log(
      '-------CommonModalPicker----' + JSON.stringify(ModalPickerValue),
    )
    this.setState({
      ModalPickerValue,
    })

    this.props.onChangeCommonModalPickerData(ModalPickerValue)
    this.hideModalPickerValueModal()
  }

  handleConfirm = date => {
    var dateYear = date.toString().substring(11, 15)
    if (dateYear > '2000') {
      alert('Age must be above 20')
      return
    } else console.warn('A date has been picked: ', moment(date).format('L'))
    this.setState({
      dob: moment(date).format('L'),
      isDatePickerVisible: false,
    })
    this.props.onChangeDob(moment(date).format('L'))
    this.hideDateModal()
  }
  onSearch = value => {
    this.setState({
      countryData: this.state.searchData.filter(i =>
        i.name.toLowerCase().includes(value.toLowerCase()),
      ),
    })
  }
  render () {
    const props = this.props

    return (
      <View
        style={[
          {
            backgroundColor: Colors.LIGHT_GRAY,
            padding: Platform.OS === 'ios' ? 15 : 0,
            height: props.multiline ? null : 50,
            justifyContent: props.multiline ? 'flex-start' : 'center',
          },
          props.componentStyle,
        ]}>
        <Modal
          animationType='fade'
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => this.hideModal()}>
          <View style={styles.modalPhoneContainer}>
            <View style={styles.modalPhoneContent}>
              {/* Render the list of countries */}
              <TextInput
                placeholder={'Search country code'}
                returnKeyType={'done'}
                onChangeText={this.onSearch}
                style={{
                  padding: 10,
                  marginBottom: 10,
                  // margin: 10,
                  borderWidth: 1,
                  borderColor: 'gray',
                  borderRadius: 30,
                  // height: 50,
                }}
                // underlineColorAndroid={'gray'}
              />
              <FlatList
                showsVerticalScrollIndicator={false}
                style={{marginBottom: 10}}
                data={this.state.countryData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <TouchableWithoutFeedback
                    onPress={() => this.selectCountry(item.name)}>
                    <View>
                      <TextComponent>
                        {item.flag} {item.name} ({item.dial_code})
                      </TextComponent>
                    </View>
                  </TouchableWithoutFeedback>
                )}
                ItemSeparatorComponent={() => (
                  <View style={styles.itemSeprator} />
                )}
              />

              <Button
                text='Cancel'
                onButtonPress={() => {
                  this.hideModal()
                }}
              />
            </View>
          </View>
        </Modal>

        <Modal
          animationType='fade'
          transparent={true}
          visible={this.state.CommonModalPickerVisible}
          onRequestClose={() => this.hideModalPickerValueModal()}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={{position: 'relative'}}>
                <Text
                  style={{
                    color: Colors.WHITE,
                    fontSize: fontScale(20),
                    //backgroundColor: Colors.BLACK,
                    width: width - 80,
                    textAlign: 'center',
                  }}>
                  {props.type === 'language'
                    ? Strings.SELECT_YOUR_LANGUAGE
                    : props.type === 'typeOfUser'
                    ? Strings.JOIN_US_AS
                    : props.type === 'select_Category/Tags'
                    ? Strings.ADD_CATEGORY_TAGS
                    : props.type === 'SellerType'
                    ? Strings.JOIN_US_AS
                    : props.type === 'cityName'
                    ? Strings.SELECT_CITY
                    : 'no type sent'}
                </Text>
                <TouchableOpacity
                  onPress={() => this.hideModalPickerValueModal()}
                  style={{
                    position: 'absolute',
                    top: -Scaling.HEIGHT_SCALE_15,
                    right: -Scaling.HEIGHT_SCALE_15,
                  }}>
                  {/* <Image
                    source={Images.cancelIcon}
                    style={{
                      height: Scaling.HEIGHT_SCALE_25,
                      width: Scaling.HEIGHT_SCALE_25,
                      resizeMode: 'cover',
                      tintColor: Colors.WHITE,
                    }}
                  /> */}
                </TouchableOpacity>
              </View>
              <View style={styles.itemSeprator} />

              <FlatList
                showsVerticalScrollIndicator={false}
                style={{marginBottom: 10}}
                data={props.array}
                // data={["Plumbing", "tyjtyj", "tyjtyj", "tyjtyj"]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <TouchableWithoutFeedback
                    onPress={() => this.CommonModalPicker(item)}>
                    <View
                      style={{
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{color: Colors.WHITE, fontSize: fontScale(20)}}>
                        {item}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                )}
                ItemSeparatorComponent={() => (
                  <View style={styles.itemSeprator} />
                )}
              />
            </View>
          </View>
        </Modal>

        <DateTimePickerModal
          isVisible={this.state.isDatePickerVisible}
          mode='date'
          onConfirm={this.handleConfirm}
          onCancel={() => this.hideDateModal()}
          maximumDate={new Date()}
        />

        {props.type === 'phone' ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextComponent
              onPress={() => this.showModal()}
              style={{color: Colors.LIGHT_GRAY}}>
              {this.state.countryCode} ▼ |{' '}
            </TextComponent>
            <TextInput
              onChangeText={text => this.setPhone(text)}
              style={{fontFamily: FontName.SF_PRO_DISPLAY_REGULAR}}
              returnKeyType={'done'}
              {...props}
              keyboardType={'phone-pad'}
            />
          </View>
        ) : props.type === 'date' ? (
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => this.showDateModal()}>
            <TextComponent
              style={{
                fontFamily: FontName.SF_PRO_DISPLAY_REGULAR,
                color: Colors.LIGHT_GRAY,
              }}
              {...props}>
              {' '}
              {this.props.placeholder}{' '}
            </TextComponent>
          </TouchableOpacity>
        ) : props.type === 'ModalPickerValue' ||
          // 'subCategory' ||
          'typeOfUser' ||
          'Available' ||
          'SellerType' ||
          'language' ||
          'cityName' ||
          'select_Category/Tags' ||
          '1-per-week' ? (
          <View>
            <TouchableOpacity
              onPress={() => this.showCommonModalPicker()}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextComponent
                style={{
                  fontFamily: FontName.SF_PRO_DISPLAY_REGULAR,
                  color: Colors.BLACK,
                  paddingLeft: 3,
                }}
                {...props}>
                {this.props.placeholder}
              </TextComponent>

              <TextComponent
                style={{
                  color: Colors.BLACK,
                  position: 'absolute',
                  right: 0,
                }}>
                {' '}
                ▼{' '}
              </TextComponent>
            </TouchableOpacity>
            {/* <View style={styles.itemSepratorFor_Pro_category} /> */}
          </View>
        ) : (
          <TextInput
            style={{fontFamily: FontName.SF_PRO_DISPLAY_REGULAR}}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            {...props}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // modalContainer: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: Platform.OS === 'ios' ? 200 : 180,
  //   width: width,
  //   backgroundColor: Colors.SMOKY,
  //   backgroundColor: Colors.SMOKY,
  //   //  justifyContent:'center',
  // },
  // modalContent: {
  //   // height: height - 100,
  //   width: width -80,
  //   backgroundColor: Colors.WHITE,
  //   padding: 10,
  //   borderRadius: 5,
  //   justifyContent: 'center',
  //   height: height / 3,
  //   maxHeight: height - 100,
  //   // alignItems: 'center',
  //   //marginTop: Platform.OS == 'ios' ? 40 : 10,
  // },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Platform.OS === 'ios' ? 200 : 180,
    width: width,
    position: 'relative',

    backgroundColor: Colors.TRANSPARENT_BLACK,
    // backgroundColor:'#696969',
    //  justifyContent:'center',
  },
  modalContent: {
    // height: height - 100,
    width: width - 80,
    // backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    height: height / 3,
    maxHeight: height - 100,
    backgroundColor: Colors.BLACK,
    // alignItems: 'center',
    //marginTop: Platform.OS == 'ios' ? 40 : 10,
  },
  modalPhoneContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Platform.OS === 'ios' ? height - 40 : '100%',
    width: '100%',
    backgroundColor: Colors.SMOKY,
    marginTop: Platform.OS === 'ios' ? 40 : 30,
  },
  modalPhoneContent: {
    //height: height - 100,
    height: '100%',
    width: '100%',
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 5,
  },
  itemSeprator: {
    backgroundColor: Colors.WHITE,
    height: 0.5,
    width: '100%',
    marginVertical: 10,
  },
  itemSepratorFor_Pro_category: {
    backgroundColor: Colors.SMOKY,
    height: 0.5,
    width: '100%',
    marginVertical: 10,
    // margin: -15,
  },
})
