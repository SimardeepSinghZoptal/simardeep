import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native'
import {Colors, FontName, Scaling} from '../../constants'

const CommonLoader = props => {
  const {loading} = props
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal')
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            size='large'
            style={{flex: 1}}
            color={Colors.RED_MAROON}
          />
        </View>
      </View>
    </Modal>
  )
}

export default CommonLoader

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    // height: wp('45%'),
    // width: wp('40%'),
    height: Scaling.HEIGHT_SCALE_100,
    width: Scaling.HEIGHT_SCALE_100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Scaling.HEIGHT_SCALE_8,
  },
})
