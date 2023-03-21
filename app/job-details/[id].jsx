import React from 'react'
import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    RefreshControl
} from 'react-native'
import {
    Stack,
    useRouter,
    useSearchParams
} from 'expo-router'
import {
    useCallback,
    useState
} from 'react'
import { COLORS, SIZES } from '../../constants'
import useFetch from '../../hook/useFetch'
import { BackBtn } from '../../constants/Icons'
import { About, Company, Footer, Specifics, Tabs } from '../../Components'

const tabs = ['About', 'Qualifications', 'Responsibities']

const JobDetails = () => {
    const params = useSearchParams();
    const router = useRouter();

    const {
        data,
        isLoading,
        error,
        reFetch
    } = useFetch(
        'job-details',
        {
            job_id: params.id
        }
    );
    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0])
    const onRefresh = () => {

    }
    const handleCardPress = () =>{
        router.push('/')
    }

    const displayTabContent = () => {
        switch (activeTab) {
            case 'About':
                return <About
                    info={data[0].job_description ?? 'No data provided'}
                />
            case 'Qualifications':
                return <Specifics
                    title='Qualifications'
                    points={data[0].job_highlights?.Qualifications ?? ['N/A']}
                />

            case 'Responsibities':
                return <Specifics
                    title='Responsibilities'
                    points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
                />

            default:
                break;
        }
    }
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.lightWhite
            }}
        >
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite
                    },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <>
                            <BackBtn 
                                handleCardPress={handleCardPress}
                            />
                        </>
                    ),
                    headerTitle: ''
                }}
            />
            <>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    {
                        isLoading
                            ? <ActivityIndicator
                                size='large'
                                color={COLORS.primary}
                            />
                            : error
                                ? (
                                    <Text>Something went wrong</Text>
                                )
                                : data.length === 0
                                    ? (
                                        <Text>No Data</Text>
                                    )
                                    : (
                                        <View
                                            style={{
                                                padding: SIZES.medium,
                                                paddingBottom: 100
                                            }}
                                        >
                                            <Company
                                                companyLogo={data[0].employer_logo}
                                                jobTitle={data[0].job_title}
                                                companyName={data[0].employer_name}
                                                Location={data[0].job_country}
                                            />
                                            <Tabs
                                                activeTab={activeTab}
                                                setActiveTab={setActiveTab}
                                                tabs={tabs}
                                            />
                                            {displayTabContent()}
                                        </View>
                                    )
                    }
                </ScrollView>
                <Footer
                    url={data[0]?.job_google_link??'https://careers.google.com/jobs/results'}
                />
            </>
        </SafeAreaView>
    )
}

export default JobDetails
