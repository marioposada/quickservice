import React from "react";
import { View, Text, TouchableOpacity , Image} from "react-native";
import { styles } from "./styles";

const OnBoarding4 = ({navigation}) => {

const onHandlePress = () => {
    navigation.navigate("LogIn1");
  };



  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/onboarding/logoPNG.png")}
        style={styles.image}
      />
       <Image
        source={require("../../../../assets/onboarding/image4.png")}
        style={styles.image1}
      />
      <Text style={styles.text}>Listo! Nunca fue  tan </Text>
      <Text style={styles.text1}>fácil</Text>
      <Image
        source={require("../../../../assets/onboarding/image6.png")}
        style={styles.image2}
      />
      <TouchableOpacity 
      onPress={onHandlePress}
      style={styles.button}>
          <Text style={styles.text2}>Comenzar</Text>
        </TouchableOpacity>

   
    </View>
  );
};

export default OnBoarding4;
