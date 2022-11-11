import React from "react";
import { View, Text, FlatList, SafeAreaView,Alert } from "react-native";
import { styles } from "./styles";
import { promocionados } from "../../../../constants/data/promocionados";
import DiscountItem from "../discountItem";

const Discount = () => {

  const onHandlePress = (item) => {
    Alert.alert('Funcionalidad no implementada aun');
  }

  return (
  
      <View style={styles.container}>
        <Text style={styles.text}>Descuentos y Cupones</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={promocionados}
          renderItem={({ item }) => (
            <DiscountItem item={item} onPress={onHandlePress} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
 
  );
};

export default Discount;