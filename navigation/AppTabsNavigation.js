import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Search from "../components/Search";
import Contact from "../components/Contact";
import { NavigationContainer } from "@react-navigation/native";

const AppTabNavigation = createMaterialTopTabNavigator();

const AppTabsNavigation = () => {
  return (
    <NavigationContainer>
      <AppTabNavigation.Navigator>
        <AppTabNavigation.Screen name="Contact" component={Contact} />
        <AppTabNavigation.Screen name="Search" component={Search} />
      </AppTabNavigation.Navigator>
    </NavigationContainer>
  );
};

export default AppTabsNavigation;
