import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  // Modal,
} from 'react-native'

//import { Screen, Colors, Scaling } from '../../constants';

//import Urls from '../../constants/Urls';

import Modal from 'react-native-modal'

const Button = ({children, ...props}) => {
  return (
    <>
      <TouchableOpacity style={styles.button} {...props}>
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
    </>
  )
}
const NoInternetModal = ({show, onRetry, isRetrying, showButton}) => {
  return (
    <>
      <Modal isVisible={show} style={styles.modal} animationInTiming={600}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Connection Error</Text>
          <Text style={styles.modalText}>
            Oops! Looks like your device is not connected to the Internet.
          </Text>
          {showButton ? (
            <Button onPress={onRetry} disabled={isRetrying}>
              Try Again
            </Button>
          ) : null}
        </View>
      </Modal>
    </>
  )
}

export default NoInternetModal
const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  modalText: {
    fontSize: 18,
    color: '#555',
    marginTop: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
})
