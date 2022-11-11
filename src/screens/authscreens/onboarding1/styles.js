import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.text,
    alignSelf: "center",
  },
  image: {
    alignSelf: "center",
    width: 200,
    height: 200,
  },

});
