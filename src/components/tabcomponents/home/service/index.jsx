import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";




const Service = ({ navigation, active}) => {


  const handleService = () => {
    navigation.navigate("Service",{ day: active[0] });
  };

  return (
    <TouchableOpacity onPress={handleService} >
      <View style={styles.container}>
        <Text style={styles.text1}>! Tienes contratado un servicio !</Text>
        <Text
          style={styles.text}
        >{`La fecha para que el tecnico vaya a tu domicilio es el dia: ${active[0].dia_pactado}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Service;