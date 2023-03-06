import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contacts from "../screens/Contacts";
import Chats from "../screens/Chats";
import Settings from "../screens/Settings";

const Drawer = createDrawerNavigator();

const NavigationAndroid = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Contacts" component={Contacts} />
                <Drawer.Screen name="Chats" component={Chats} />
                <Drawer.Screen name="Settings" component={Settings} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default NavigationAndroid;