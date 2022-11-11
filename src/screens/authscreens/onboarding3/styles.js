import { StyleSheet } from "react-native";
import { colors } from '../../../constants/theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 30,
    marginTop: 120,

  },
  text: {
    fontFamily: "Poppins_Bold",
    color: colors.text,
    alignSelf: "center",
    fontSize: 30,
    alignSelf: "center",
    color: colors.primary,
    marginTop: 40,
  },
  text1: {
    fontFamily: "Poppins_Bold",
    color: colors.text,
    alignSelf: "center",
    fontSize: 30,
    alignSelf: "center",
    color: colors.primary,
  },
  text2: {
    fontFamily: "Poppins_Medium",
    color: colors.primary,
    alignSelf: "center",
    fontSize: 16,
  },

  image: {
    width: 200,
    height: 100,
    marginTop: 10,
  },
  image1: {
    marginTop: 30,
  },
  image2: {
    marginTop: 50,
  },
  button: {
  },
  button1: {
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 5,
    borderRadius: 8,
    backgroundColor: colors.primary_light,
  },
});
