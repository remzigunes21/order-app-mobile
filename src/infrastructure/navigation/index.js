import React, { useContext } from "react";
import { Text, View } from "react-native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AppNavigator } from "./app.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return isAuthenticated ? (
    <AppNavigator />
  ) : (
    <View>
      <Text>Login</Text>
    </View>
  );
};
