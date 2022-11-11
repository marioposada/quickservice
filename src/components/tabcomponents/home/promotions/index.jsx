import React from "react";
import { View, Text, FlatList, SafeAreaView,Alert } from "react-native";
import { styles } from "./styles";
import { promocionados } from "../../../../constants/data/promocionados";
import PromotionItem from "../promotionItem";

const Promotion = () => {

  const onHandlePress = (item) => {
    Alert.alert('Funcionalidad no implementada aun');
  }
  return (
    <SafeAreaView style={styles.wraper}>
      <View style={styles.container}>
        <Text style={styles.text}>Promocionados</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={promocionados}
          renderItem={({ item }) => (
            <PromotionItem item={item} onPress={onHandlePress} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Promotion;


