import HomeScreen from '../Screens/HomeScreen';
import JournalingScreen from '../Screens/Journaling/JournalingScreen';
import ViewJournalsScreen from '../Screens/Journaling/ViewJournalsScreen';
import ViewPagesScreen from '../Screens/Journaling/ViewPagesScreen';
import SaveJournalingScreen from '../Screens/Journaling/SaveJournalScreen';
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
            <Nav.Screen name="Save Journal" component={SaveJournalingScreen} />
            <Nav.Screen name="View Journals" component={ViewJournalsScreen} />
            <Nav.Screen name="My Journal" component={ViewPagesScreen} />
        </Nav.Navigator> 
    )
}

export default HomeStackNavigator;