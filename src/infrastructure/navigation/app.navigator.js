import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeArea } from "../../components/utility/safe-area.component";
import RestaurantsScreen from "../../features/restaurants/screens/restaurant.screen";
import { RestaurantsNavigator } from "./restaurant.navigator";
const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const TAB_ICON = {
  Restaurant: "md-restaurant",
  Settings: "md-settings",
  Map: "md-map",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen
        options={() => ({
          headerShown: false,
        })}
        name="Restaurant"
        component={RestaurantsNavigator}
      />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
  </NavigationContainer>
);
