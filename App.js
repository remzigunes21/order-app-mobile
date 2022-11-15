import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ padding: 16, backgroundColor: "#324566" }}>
          <Text>Search</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "#876433", padding: 16 }}>
          <Text>Content List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusbar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
