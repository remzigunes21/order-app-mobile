import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Text, View } from "react-native";

const Stack = createStackNavigator();

export const AccountsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Main"
        component={() => (
          <View>
            <Text>Login</Text>
          </View>
        )}
      />
    </Stack.Navigator>
  );
};
