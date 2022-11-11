import { Image,View, Animated } from "react-native";
import React, { useRef, useEffect } from "react";
import { styles } from "./styles";

const OnBoarding1 = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      navigation.navigate("OnBoarding2");
    }, 6000);
  }, [fadeAnim]);

  // Initial value for opacity: 0

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image
          source={require("../../../../assets/onboarding/logoPNG.png")}
          style={styles.image}
        />
      </Animated.View>
    </View>
  );
};

export default OnBoarding1;
