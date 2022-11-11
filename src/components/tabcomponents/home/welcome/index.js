import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const Welcome = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        Hola <Text style={styles.text3}>{name}</Text>,
      </Text>
      <Text style={styles.text}>¿ Qué servicio estás buscando ?</Text>
    </View>
  );
};

export default Welcome;
