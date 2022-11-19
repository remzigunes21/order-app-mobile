import { StyleSheet } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.bg.primary}; ;
`;
const Title = styled.Text`
  padding: 16px;
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

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
    <RestaurantCard elevation={5}>
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
