import React from "react";
import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusbar style="auto" />
    </>
  );
}
export default App;
