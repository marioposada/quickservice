import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";

const Kebab = ({ navigation, route }) => {
  const [isActiveUser, setIsActiveUser] = useState(false);
  const [userDescription, setUserDescription] = useState("");
  const user = useSelector((state) => state.user.user_selected);
  const dispatch = useDispatch();



  // if (user) {
  //   setIsActiveUser(true);
  //   setUserDescription(user);
  // }

  const onHandlePress = () => {
    navigation.navigate("User");
  };
  
  // useEffect(() => {
  //   dispatch(getUser());
  // }, []);

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onHandlePress}>
        <Text style={styles.text}>UserScreen</Text>
      </TouchableOpacity>
      {isActiveUser ? (
        <Text>
          {userDescription.id}
          {userDescription.nombre}
          {userDescription.imagen}
        </Text>
      ) : null}
    </View>
  );
};




export default Kebab;
