import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { styles } from "./styles";
import { colors } from "../../../constants/theme";
import { ImageSelector } from "../../../components/tabcomponents";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setNewUser } from "../../../store/actions/user.actions";


export const UserScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [userSelected, setUserSelected] = useState({});
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.users);
  const user_selected = useSelector((state) => state.user.user_selected);
  
  

  const onHandleText = (title) => {
    setTitle(title);
  };

  const onHandleImage = (imageUri) => {
    setImage(imageUri);
    console.log(image);
  };

  const onHandleSave = () => {
    dispatch(setNewUser(title, image));
    setUserSelected(user_selected);
    navigation.goBack("Kebab");
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);


  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Introduzca su nombre"
          onChangeText={(title) => onHandleText(title)}
          value={title}
        />
        <Button
          title="Save"
          onPress={() => navigation.navigate("Kebab")}
          color={colors.primary}
        />
      </View>
      <ImageSelector onImage={onHandleImage} />
      <Button title="Guardar usuario" onPress={onHandleSave} />
      {userSelected ? <Text>{userSelected.id}</Text> : null}
    </ScrollView>
  );
};

export default UserScreen;
