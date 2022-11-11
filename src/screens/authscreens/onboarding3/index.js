import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const OnBoarding3 = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate("OnBoarding4");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/onboarding/logoPNG.png")}
        style={styles.image}
      />
      <Image style={styles.image1} source={require("../../../../assets/onboarding/image3.png")} />
      <Text style={styles.text}>Establece día y hora </Text>
      <Text style={styles.text1}>para el servicio</Text>
      <Image
        source={require("../../../../assets/onboarding/image5.png")}
        style={styles.image2}
      />
      <View style={styles.container1}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text2}>Saltar</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={handlePress} style={styles.button1}>
          <Text style={styles.text2}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding3;
