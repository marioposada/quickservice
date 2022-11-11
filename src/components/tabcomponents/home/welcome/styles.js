import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
 
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
  },
  text: {
    fontFamily: "Poppins_Medium",
    fontSize: 20,
    color: colors.primary,
    width: "100%",

  },
  text1: {
    fontFamily: "Poppins_Medium",
    fontSize: 20,
    marginVertical: 5,
    marginVertical: 10,
    color: colors.primary
  },
  text3: {
    fontFamily: "Poppins_Extrabold",
    fontSize: 25,
    marginVertical: 5,
    color: colors.primary
  },

});
