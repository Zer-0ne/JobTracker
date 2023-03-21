import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native'
import { checkImageURL } from '../../../../utils'
import styles from './PopularJobCard.style'

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
    return (
        <TouchableOpacity
            style={styles.container(selectedJob, item)}
            onPress={() => { handleCardPress(item) }}
        >
            <TouchableOpacity
                style={styles.logoContainer(selectedJob, item)}
            >
                <Image
                    source={{ uri: checkImageURL(item.employer_logo) 
                        ? item.employer_logo
                        : 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Job_Search-512.png'
                    }}
                    resizeMode='contain'
                    style={styles.logoImage}
                />
            </TouchableOpacity>
            <Text
                style={styles.companyName}
                numberOfLines={1}
            >{item.employer_name}</Text>

            <View
                style={styles.infoContainer}
            >
                <Text
                    style={styles.jobName(selectedJob, item)}
                    numberOfLines={1}
                >
                    {item.job_title}
                </Text>
                <Text
                    style={styles.location}
                >
                    {item.job_country}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default PopularJobCard
