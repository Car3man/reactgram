import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Contacts from "../screens/Contacts";
import Chats from "../screens/Chats";
import Settings from "../screens/Settings";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers'
import { faComments } from '@fortawesome/free-solid-svg-icons/faComments'
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog'

const Tab = createBottomTabNavigator();

const NavigationIOS = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="Contacts" 
                    component={Contacts} 
                    options={{
                        tabBarIcon: ({color, size}) => (
                                <FontAwesomeIcon icon={faUsers} color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="Chats"
                    component={Chats}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <FontAwesomeIcon icon={faComments} color={color} size={size} />
                        ),
                    }} 
                />
                <Tab.Screen 
                    name="Settings"
                    component={Settings} 
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <FontAwesomeIcon icon={faCog} color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default NavigationIOS;