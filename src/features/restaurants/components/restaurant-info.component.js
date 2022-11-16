import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-paper";

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Şirvan Cafe",
    icon,
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-w/05/ea/ea/a3/breakfast-in-sirvan-sofrasi.jpg",
    ],
    address = "100 some random street",
    openingHours,
    rating = 4,
    isOpenNow = true,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card style={styles.card}>
      <Card.Cover style={styles.cover} key={name} source={{ uri: photos[0] }} />
      <Text>{name}</Text>
    </Card>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff" },
  cover: { padding: 20, backgroundColor: "#fff" },
});
