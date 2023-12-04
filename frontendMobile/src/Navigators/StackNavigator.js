import HomeScreen from '../Screens/HomeScreen';
import JournalingScreen from '../Screens/JournalingScreen';

const Nav = createStackNavigator();

const AppNavigator = () => {
    return (
        <Nav.Navigator initialRouteName='Home'>
            <Nav.Screen name="Home" component={HomeScreen} />
            <Nav.Screen name="Journaling" component={JournalingScreen} />
        </Nav.Navigator>
    )
}

export default AppNavigator;