import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Contact from "../components/Contact";
import Search from "../components/Search";

const Stack = createStackNavigator();

function AppStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            title: "Contact",
            headerStyle: { backgroundColor: "#ac0a07" },
            headerTitleStyle: { color: "#FFFFFF" },
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: "Search",
            headerStyle: { backgroundColor: "#ac0a07" },
            headerTitleStyle: { color: "#FFFFFF" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStackNavigation;