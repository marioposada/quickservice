import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const ServiceScreen = ({ navigation, route }) => {
  
const data = route.params.day





 

  return (
    <View style={styles.container}>
        <View  style={styles.wraper}>
            <Text style={styles.title}>DETALLES DEL SERVICIO</Text>
      <Text style={styles.text}>El dia pactado para el servicio es: <Text style={styles.textBold}>{data.dia_pactado}</Text></Text>

      <Text style={styles.text}>La fecha de contratacion es: <Text style={styles.textBold}>   {data.fecha_contratacion}</Text></Text>
      <Text style={styles.text}>La hora de contratacion es:<Text style={styles.textBold}>   {data.hora_contratacion}</Text> </Text>
      <Text style={styles.text}>El servicion contratado es: <Text style={styles.textBold}> {data.nombre_servicio}</Text></Text>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.textButton}>Cancelar servicio</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default ServiceScreen;
