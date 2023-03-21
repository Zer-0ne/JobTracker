import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native'
import { checkImageURL } from '../../../../utils'
import styles from './NearByJobCard.style'

const NearByJobCard = ({ job, handleNavigate }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={handleNavigate}
        >
            <TouchableOpacity
                style={styles.logoContainer}
            >
                <Image
                    source={{
                        uri: checkImageURL(job.employer_logo)
                            ? job.employer_logo
                            : 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Job_Search-512.png'
                    }}
                    resizeMode='contain'
                    style={styles.logImage}
                />
            </TouchableOpacity>
            

            <View
                style={styles.textContainer}
            >
                <Text
                    style={styles.jobName}
                    numberOfLines={1}
                >
                    {job.job_title}
                </Text>
                <Text
                    style={styles.jobType}
                >
                    {job.job_employment_type}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default NearByJobCard
