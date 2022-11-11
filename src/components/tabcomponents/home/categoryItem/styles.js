import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.15,
    borderRadius: 5,
    width: 120,
    height: 120,
    marginVertical: 15,
    padding: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  text: {
    fontFamily: "Poppins_Regular",
    fontSize: 12,
    color: colors.black,
    paddingVertical: 5,
  },
  wraper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
  },
  iconstyle: {
    fontSize: 68,
    color: colors.primary,
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
    borderRadius: 3,
  },
});
