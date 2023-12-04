// This will be the navigator for the main Tab

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Nav = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Nav.Navigator>
            {/* Bottom tab navigation goes here! */}
        </Nav.Navigator>
    )
}

export default TabNavigator;