import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 20,
  
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginVertical: 10, 


  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    fontFamily: "Poppins_Bold",


  }
});
