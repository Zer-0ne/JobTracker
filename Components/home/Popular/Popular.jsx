import {
  React,
  useState
} from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList
} from 'react-native'
import { useRouter } from 'expo-router'
import {
  COLORS,
  SIZES
} from '../../../constants'
import styles from './popularjobs.style'
import PopularJobCard from '../../commons/cards/popular/PopularJobCard'
// import { FlatList } from 'react-native-gesture-handler'
import useFetch from '../../../hook/useFetch'
const Popular = () => {
  const router = useRouter();
  const {
    data,
    isLoading,
    error,
    reFetch
  } = useFetch('search', {
    query: 'React developer in Delhi, IN',
    num_page: 1
  })
  const query = 'React JS'
  const [selectedJob, setSelectedJob] = useState()
  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`)
    setSelectedJob(item.job_id)

  }
  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.header}
      >
        <Text
          style={styles.headerTitle}
        >Popular jobs</Text>
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
                <FlatList
                  data={data}
                  renderItem={
                    ({ item }) => (
                      <PopularJobCard
                        item={item}
                        handleCardPress={handleCardPress}
                        selectedJob={selectedJob}
                      />
                    )
                  }
                  keyExtractor={(item) => item?.id}
                  contentContainerStyle={{
                    columnGap: SIZES.medium
                  }}
                  horizontal
                />
              )

        }
      </View>
    </View>
  )
}

export default Popular
