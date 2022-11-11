import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/theme/colors";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    height: 52,
    width: 370,
    margin: 5,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    borderColor: colors.grey_placeholder,
    fontFamily: "Poppins_Medium",
    fontSize: 16,
    marginBottom: 20,
  },
  helperText: {
    color: colors.red,
    fontFamily: "Poppins_Medium",
    fontSize: 12,
    marginLeft: 8,
    marginTop: 5,
  },
});
