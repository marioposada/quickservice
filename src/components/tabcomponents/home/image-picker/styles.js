import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  preview: {
    flex: 1,
    width: "90%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.primary,
    borderWidth: 1,
    marginVertical: 10,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  button: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    fontFamily: "Poppins_Bold",
    marginLeft: 20,
  },
});
