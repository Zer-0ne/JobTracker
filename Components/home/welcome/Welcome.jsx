import { React, useState } from 'react'
import {
  Text,
  ScrollView,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { SIZES } from '../../../constants'
import { SearchIcon } from '../../../constants/Icons'
const jobTypes = ['Full-time', 'Part-time', 'Contractor']


const Welcome = ({
  searchTerm,
  setSearchTerm,
  handleClick
}) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time')

  return (
    <View>
      <View
        style={styles.container}
      >
        <Text
          style={styles.userName}
        >Hello Seekers</Text>
        <Text
          style={styles.welcomeMessage}
        >Find your prefect job</Text>
      </View>

      <View
        style={styles.searchContainer}
      >
        <View
          style={styles.searchWrapper}
        >
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => { setSearchTerm(text) }}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={handleClick}
        >
          <SearchIcon />
        </TouchableOpacity>
      </View>

      <View
        style={styles.tabsContainer}
      >
        <FlatList
          data={jobTypes}
          renderItem={
            ({ item }) => (
              <TouchableOpacity
                style={styles.tab(activeJobType, item)}
                onPress={() => {
                  setActiveJobType(item);
                  router.push(`/search/${item}`)
                }}
              >
                <Text
                  style={styles.tabText(activeJobType, item)}
                >{item}</Text>
              </TouchableOpacity>
            )
          }
          keyExtractor={(item) => item}
          contentContainerStyle={{
            columnGap: SIZES.small
          }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome
