import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const OnBoarding2 = ({navigation}) => {

  const handlePress = () => {
    navigation.navigate("OnBoarding3");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/onboarding/logoPNG.png")}
        style={styles.image}
      />
      <Image
        source={require("../../../../assets/onboarding/image1.png")}
        style={styles.image1}
      />
      <Text style={styles.text}>Elige un técnico desde </Text>
      <Text style={styles.text1}> tu hogar</Text>
      <Image
        source={require("../../../../assets/onboarding/image2.png")}
        style={styles.image2}
      />
      <View style={styles.container1}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text2}>Saltar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={handlePress}
        style={styles.button1}>
          <Text style={styles.text2}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding2;
