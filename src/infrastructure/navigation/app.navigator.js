import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsNavigator } from "./restaurant.navigator";
import MapScreen from "../../features/map/screen/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
const Tab = createBottomTabNavigator();

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  );
};

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
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen
      options={() => ({
        headerShown: false,
      })}
      name="Restaurant"
      component={RestaurantsNavigator}
    />
    <Tab.Screen name="Settings" component={Settings} />
    <Tab.Screen
      options={() => ({
        headerShown: false,
      })}
      name="Map"
      component={MapScreen}
    />
  </Tab.Navigator>
);
