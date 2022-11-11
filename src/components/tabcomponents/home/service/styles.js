import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 0.2,
    paddingVertical: 10,
    paddingHorizontal: 45,
    marginVertical: 15,
    borderRadius: 10,
    backgroundColor: "rgba(237, 106, 54, 0.3)",
  },
  text: {
    fontFamily: "Poppins_Regular",
    fontSize: 12,
    color: colors.grey,
  },
  text1: {
    fontFamily: "Poppins_Regular",
    fontSize: 14,
    alignSelf: "center",
    marginVertical: 5,
  },
});
