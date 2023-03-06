import { Platform } from "react-native";
import NavigationAndroid from "./NavigationAndroid";
import NavigationIOS from "./NavigationIOS";

const Navigation = Platform.select({
    ios: NavigationIOS,
    android: NavigationAndroid
});
export default Navigation;