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
    marginTop: 190,

  },
  text: {
    fontFamily: "Poppins_Bold",
    color: colors.text,
    alignSelf: "center",
    fontSize: 30,
    alignSelf: "center",
    color: colors.primary,
    marginTop: 20,
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
    color: colors.white,
    alignSelf: "center",
    fontSize: 16,
    
  },
  image: {
    width: 200,
    height: 100,
    marginTop: 10,
  },
  image2: {
    marginTop: 60,
  },
  button: {
    marginTop: 100,
    width: 370,
    height: 50,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    justifyContent: "center",
  },
});
