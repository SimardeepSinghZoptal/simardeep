import React from 'react'
import {Text, StyleSheet} from 'react-native'

import {FontName, Colors} from '../../constants'
import {fontScale} from '../../constants/FontSize'

const TextComponent = props => {
  return (
    <Text {...props} style={[styles.content, props.style]}>
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  content: {
    fontSize: fontScale(14),
    fontFamily: FontName.SF_PRO_DISPLAY_MEDIUM,
    color: Colors.LIGHT_BLACK,
  },
})

export default TextComponent
