import React from 'react'
import {
  Text,
  View
} from 'react-native'
import styles from './Specific.style'
const Specifics = ({ title, points }) => {
  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.title}
      >{title}</Text>
      <View
        style={styles.pointsContainer}
      >
        {
          points.map((point, index) => (
            <View
              key={point + index}
              style={styles.pointWrapper}
            >
              <View style={styles.pointDot} />
              <Text style={styles.pointText}>{point}</Text>
            </View>
          ))
        }
      </View>
    </View>
  )
}

export default Specifics
