import {
  React,
} from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import { useRouter } from 'expo-router'
import {
  COLORS,
} from '../../../constants'
import styles from './nearbyjobs.style'
import NearByJobCard from '../../commons/cards/Nearby/NearByJobCard'
// import { FlatList } from 'react-native-gesture-handler'
import useFetch from '../../../hook/useFetch'
const NearBy = () => {
  const router = useRouter();
  const query = 'React JS'
  const {
    data,
    isLoading,
    error,
  } = useFetch('search', {
    query: 'React developer in Delhi, IN',
    num_page: 1
  })
  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.header}
      >
        <Text
          style={styles.headerTitle}
        >Nearby jobs</Text>
        <TouchableOpacity>
          <Text
            style={styles.headerBtn}
            onPress={() => {
              router.push(`/search/${query}`)
            }}
          >Show all</Text>
        </TouchableOpacity>
      </View>

      <View
        style={styles.cardsContainer}
      >
        {
          isLoading
            ? (
              <ActivityIndicator
                size='large'
                color={COLORS.primary}
              />
            )
            : error
              ? (
                <Text>Something went wrong</Text>
              )
              : (
                data?.map((job) => (
                  <NearByJobCard
                    job={job}
                    key={`nearby-job-${job?.job_id}`}
                    handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
                  />
                ))
              )

        }
      </View>
    </View>
  )
}

export default NearBy
