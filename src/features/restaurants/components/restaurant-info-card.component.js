import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
  font-size: 16px;
`;
const RestaurantCard = styled(Card)``;
const RestaurantCardCover = styled(Card.Cover)``;
const RestaurantInfoCard = ({ restaurant = {} }) => {
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
    <RestaurantCard elevation={5} style={styles.card}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff" },
  cover: { padding: 20, backgroundColor: "#fff" },
  title: { padding: 16, textAlign: "center" },
});
