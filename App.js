import React from "react";
import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurant.screen";
function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusbar style="auto" />
    </>
  );
}
export default App;
