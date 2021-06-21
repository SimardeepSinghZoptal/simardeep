import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageStore,
} from 'react-native'

//import { Screen, Colors, Scaling } from '../../constants';

//import Urls from '../../constants/Urls';
import {useState} from 'react'
import TextComponent from '../widgets/TextComponent'
import {Screen, Colors, Scaling} from '../../constants'
import {fontScale} from '../../constants/FontSize'
import Images from '../../assets/AppImages'

const MyFlatList = props => {
  const [click, setClick] = useState(true)
  const [seletedArray, setSelectedArray] = useState([])

  const onSkillClick = id => {
    // setClick(pr)
    //  alert(id)
    setClick(previousState => !previousState)
  }

  return (
    <>
      <View
        style={{
          flex: 1,
          // marginLeft: Scaling.WIDTH_SCALE_10,
          // marginRight: Scaling.WIDTH_SCALE_10,
          marginBottom: Scaling.WIDTH_SCALE_10,
          resizeMode: 'cover',
          borderRadius: 6,
          backgroundColor: Colors.WHITE,
          //  justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          //  key={props.imageID}
          style={{
            flex: 1,
            borderRadius: 6,
            backgroundColor: Colors.WHITE,
            //  height: Screen.height / 5 - 5,
            height: Screen.height / 6,
            width: Screen.width / 2 - Scaling.WIDTH_SCALE_12,
            alignSelf: 'center',
            justifyContent: 'center',
            //   width: Screen.width / 2,
            marginHorizontal: Scaling.HEIGHT_SCALE_5,
            // justifyContent: 'center',
            // alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 6.0,
            elevation: 6,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                height: Scaling.HEIGHT_SCALE_20,
                width: Scaling.HEIGHT_SCALE_20,
                marginLeft: Scaling.WIDTH_SCALE_10,
              }}
            />
            <Image
              //source={{uri: props.imageURi}}
              source={props.imageURi}
              style={{
                resizeMode: 'contain',
                height: Screen.height / 5 - 80,
                marginTop: Scaling.HEIGHT_SCALE_5,
                width: Screen.width / 4,
                //  tintColor: Colors.BLACK,
              }}
            />
            <TouchableOpacity
              onPress={() => {
                props.onSkillPress
                props.onAddArr(click, props.skillName, props.imageID)
                onSkillClick(props.imageID)
              }}
              style={{
                height: Scaling.HEIGHT_SCALE_20,
                width: Scaling.HEIGHT_SCALE_20,
                backgroundColor: Colors.LIGHT_GRAY_2,
                borderRadius: Scaling.HEIGHT_SCALE_10,
                marginRight: Scaling.WIDTH_SCALE_5,
                marginTop: Scaling.HEIGHT_SCALE_5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* <Image
                source={Images.tickIcon_simple}
                style={{
                  height: Scaling.HEIGHT_SCALE_15,
                  width: Scaling.HEIGHT_SCALE_15,
                  tintColor: click ? Colors.WHITE : Colors.BLACK,
                }}
              /> */}
            </TouchableOpacity>
          </View>
          <TextComponent
            style={{
              textAlign: 'center',
              color: Colors.BLACK,
              paddingBottom: Scaling.PADDING_SCALE_10,
              paddingTop: Scaling.PADDING_SCALE_20,
              fontSize: fontScale(16),
            }}>
            {props.skillName}
          </TextComponent>
        </View>
      </View>
    </>
  )
}
export default MyFlatList

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    // flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
})

{
  /* <TouchableOpacity
onPress={() => {
  props.onSkillPress;
  props.onAddArr(click, props.skillName, props.imageID);
  onSkillClick(props.imageID);
}}
style={{
  marginLeft: Scaling.WIDTH_SCALE_10,
  marginRight: Scaling.WIDTH_SCALE_10,
  marginBottom: Scaling.WIDTH_SCALE_16,
  resizeMode: 'cover',
  borderRadius: 6,
  backgroundColor: Colors.WHITE,
}}>
<View
  key={props.imageID}
  style={{
    borderRadius: 6,
    backgroundColor: click ? Colors.WHITE : Colors.BRIGHT_BLUE,
    //  height: Screen.height / 5 - 5,
    height: Screen.height / 5,
    width: Screen.width / 2 - Scaling.WIDTH_SCALE_19,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 6.0,
    elevation: 6,
  }}>
  <View style={{}}>
    <Image
      source={{uri: props.imageURi}}
      style={{
        resizeMode: 'contain',
        height: Screen.height / 5 - 80,

        width: Screen.width / 2 - Scaling.WIDTH_SCALE_8,
        tintColor: click ? Colors.BLACK : Colors.WHITE,
      }}
    />
  </View>

  <TextComponent
    style={{
      textAlign: 'center',
      color: click ? Colors.BLACK : Colors.WHITE,
      paddingBottom: Scaling.PADDING_SCALE_10,
      paddingTop: Scaling.PADDING_SCALE_20,
      fontSize: fontScale(16),
    }}>
    {props.skillName}
  </TextComponent>
</View>
</TouchableOpacity> */
}
