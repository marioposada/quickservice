import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

const DiscountItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.wraper} onPress={onPress}>
      <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://placeimg.com/760/480/tech'}} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DiscountItem;