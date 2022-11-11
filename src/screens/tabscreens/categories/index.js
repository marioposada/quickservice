import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView } from "react-native";






const CategoriesScreen = ({ navigation }) => {
  const [categori, setCategori] = useState(null);

  const dispatch = useDispatch();
  const categorieSelected = useSelector((state) => state.category.selected);
  const categories = useSelector((state) => state.category.categorie);


const onHandle = (item) => {
  Alert.alert('Funcionalidad no implementada aun. Disculpe las molestias');
   
}


  useEffect(() => {
    setCategori(categorieSelected);
  }, [categorieSelected]);

  return (
    <ScrollView style={styles.containerUp}>
      {categories.map((item) => (
        <TouchableOpacity 
         onPress={() => onHandle(item)}
         style={styles.container1}>
          <View style={styles.container2}>
            <Image source={{uri: 'https://placeimg.com/640/480/tech'}} style={styles.image} />
            <View style={styles.container3}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text1}>{item.description}</Text>
            <Text style={styles.text2}>Valoracion: {item.rating}</Text>
            <Text style={styles.text2}>Comentarios: {item.reviews}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoriesScreen;
