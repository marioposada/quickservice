import React from "react";
import { View, Text, FlatList , SafeAreaView} from "react-native";
import { styles } from "./styles";
import CategoryItem from "../categoryItem";

const Categories = ({ navigation, tecnicos, onSelected }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Categorias</Text>

      <FlatList
        scrollEnabled={true}
        numColumns={3}
        data={tecnicos}
        horizontal={false}
        renderItem={({ item }) => (
          <CategoryItem item={item} onPress={onSelected} />
        )}
        keyExtractor={(item) => item.id}
      />

    </View>
  );
};

export default Categories;
