import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
   
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    marginVertical: 10,

  },
  text: {
    fontSize: 14,
    fontFamily: "Poppins_Regular",
    marginVertical: 10,
    
  },
});
