import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking
} from 'react-native'
import styles from './Footer.style'
const Footer = ({ url }) => {
  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text
          style={styles.applyBtnText}
        >Apply for job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer
