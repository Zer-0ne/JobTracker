import { React, useState } from 'react'
import { Text, ScrollView,TouchableOpacity, SafeAreaView, View, Linking } from 'react-native'
import { Stack, useRouter } from 'expo-router';
import { NearBy, Popular, ScreenHeaderBtn, Welcome } from '../Components';
import { SIZES, COLORS } from '../constants';
import { Logo, MenuBtn } from '../constants/Icons';


const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <>
            <SafeAreaView
                flex={1}
                style={{
                    backgroundColor: COLORS.lightWhite,
                }}
            >
                <Stack.Screen
                    options={{
                        headerStyle: {
                            backgroundColor: COLORS.lightWhite,
                        },
                        headerShadowVisible: false,
                        headerLeft: () => (
                            <>
                                <TouchableOpacity
                                    onPress={()=> Linking.openURL('https://zer-0ne.github.io/zer0ne/')}
                                >
                                    <MenuBtn />

                                </TouchableOpacity>
                            </>
                        ),
                        headerRight: () => (
                            <>
                                <ScreenHeaderBtn
                                    iconUrl={Logo}
                                    dimension='60%'
                                />
                            </>
                        ),
                        headerTitle: ''
                    }}
                />

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View
                        style={{
                            flex: 1,
                            padding: SIZES.medium
                        }}
                    >
                        <Welcome
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            handleClick={
                                () => {
                                    if (searchTerm) {
                                        router.push(`/search/${searchTerm}`)
                                    }
                                }
                            }
                        />

                        <Popular />

                        <NearBy />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Home
