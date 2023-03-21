import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Logo from '../assets/Icons.png'
import styles from '../Components/commons/ScreenHeader.style';
export const MenuBtn = () => (
    // <Icon
    //     name='bars'
    //     style={{
    //         fontSize:20,
    //         color:'black',
    //     }}
    // />
    <>
        <TouchableOpacity
            style={[styles.btnContainer, {
                width: 70,
                flex: 1
            }]}
        >
            <Text
                style={[styles.btnImg, {
                    fontWeight: 'bold'
                }]}
            >zerOne</Text>
        </TouchableOpacity>
    </>
)
export const SearchIcon = () => (
    <FontAwesome
        name='search'
        style={{
            fontSize: 18,
            color: 'white',
            fontWeight: '100'
        }}
    />
)
export const BackBtn = ({ handleCardPress }) => (
    <TouchableOpacity
        onPress={() => { handleCardPress() }}
    >

        <FontAwesome
            name='arrow-left'
            style={{
                fontSize: 18,
                color: 'black',
                padding: 5,
                fontWeight: '100'
            }}
        />
    </TouchableOpacity>
)
export const LocationBtn = () => (
    <FontAwesome
        name='map-marker'
        style={{
            fontSize: 10,
            color: 'grey',
            padding: 5,
            fontWeight: '100'
        }}
    />
)
export const ChevronLeft = () => {
    <FontAwesome
        name='chevron-left'
        style={{
            fontSize: 16,
            color: 'white',
            padding: 5,
            fontWeight: '100'
        }}
    />
}
export const ChevronRight = () => {
    <FontAwesome
        name='chevron-right'
        style={{
            fontSize: 16,
            color: 'white',
            padding: 5,
            fontWeight: '100'
        }}
    />
}
export { Logo };