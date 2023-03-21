import React from 'react'
import {
    Text,
    View,
    Image
} from 'react-native'
import { LocationBtn } from '../../../constants/Icons'
import { checkImageURL } from '../../../utils'
import styles from './Company.style'
const Company = ({
    companyLogo,
    jobTitle,
    companyName,
    Location
}) => {
    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.logoBox}
            >
                <Image
                    source={{
                        uri: checkImageURL(companyLogo)
                            ? companyLogo
                            : 'https://cdn2.iconfinder.com/data/icons/employment-business/256/Job_Search-512.png'
                    }}
                    style={styles.logoImage}
                />
            </View>

            <View
                style={styles.jobTitleBox}
            >
                <Text
                    style={styles.jobTitle}
                >{jobTitle}</Text>
            </View>

            <View
                style={styles.companyInfoBox}
            >
                <Text
                    style={styles.companyName}
                >{companyName} / </Text>
                <View
                    style={styles.locationBox}
                >
                    <LocationBtn/>
                    <Text
                        style={styles.locationName}
                    >
                        {Location}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Company
