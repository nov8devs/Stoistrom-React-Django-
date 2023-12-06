// This will be the navigator for the bottom Tab

import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { mainStyle } from '../Styles/Styles';
import ProfileScreen from '../Screens/ProfileScreen'
import HomeStackNavigator from './HomeStackNavigator';

const s = StyleSheet.create(mainStyle);

const Nav = createBottomTabNavigator();

const TabNavigator = () => {
    options = {
        headerShown: false,
    }

    return (
        <>
        <Nav.Navigator>
            <Nav.Screen name="HomePage" options={options} component={HomeStackNavigator} />
            <Nav.Screen name="Profile" component={ProfileScreen} />
        </Nav.Navigator>
        </>
    )
}

export default TabNavigator;