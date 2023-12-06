import HomeScreen from '../Screens/HomeScreen';
import JournalingScreen from '../Screens/JournalingScreen';
import ViewJournalsScreen from '../Screens/ViewJournalsScreen';
import { createStackNavigator } from '@react-navigation/stack'

const Nav = createStackNavigator();

options = {
    headerShown: false,
}

const HomeStackNavigator = ({navigation}) => {
    return (
        <Nav.Navigator initialRouteName="Home">
            <Nav.Screen name="Home" component={HomeScreen} />
            <Nav.Screen name="Journaling" component={JournalingScreen} />
            <Nav.Screen name="View Journals" component={ViewJournalsScreen} />
        </Nav.Navigator> 
    )
}

export default HomeStackNavigator;