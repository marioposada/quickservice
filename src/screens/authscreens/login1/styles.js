import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme/colors";

export const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",

  },
  container: {
    backgroundColor: colors.white,
    alignContent: "center",
  },
  title: {
    color: colors.black,
    alignSelf: "center",
    fontSize: 32,
    fontFamily: "Poppins_Bold",
    marginBottom: 60,
  },
  label: {
    color: colors.black,
    fontFamily: "Poppins_Medium",
    fontSize: 16,
    marginLeft: 8,
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
  button: {
    backgroundColor: colors.primary,
    width: 370,
    borderRadius: 5,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonForgot: {
    alignSelf: "flex-end",
    marginTop: 10,
    marginRight: 20,
    marginBottom: 20,
  },
  textForgot: {
    marginTop: 30,
    color: colors.primary,
    fontFamily: "Poppins_Medium",
    fontSize: 12,
    alignContent: "center",
  },
  buttonText: {
    color: colors.white,
    alignSelf: "center",
    padding: 15,
    fontFamily: "Poppins_Bold",
    fontSize: 15,
  },
  containerLine: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textLine: {
    color: colors.grey_line,
    fontFamily: "Poppins_Medium",
    fontSize: 12,
    marginHorizontal: 15,

  },
  containerSocial: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 40,
  },
  buttonSocial: {
    backgroundColor: colors.grey_background,
    borderColor: colors.gray_background_social,
    borderWidth: 1,
    borderRadius: 5,
    width: 60,
    height: 60,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  imageSocial: {
    alignSelf: "center",
    width: 40,

    height: 40,
  },
  containerRegister: {
    flexDirection: "row",
    marginTop: 70,
    width:"100%",
    alignSelf: "center",



  },
  textRegister: {
    color: colors.grey_line,
    fontFamily: "Poppins_Medium",
    fontSize: 12,
    marginTop: 11,

  },
  textRegisterBold: {
    color: colors.primary,
    fontFamily: "Poppins_Medium",
    fontSize: 12,
    marginHorizontal: 15,
  
  },
  buttonRegister: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 15,

  },
  helperText: {
    color: colors.red,
    fontFamily: "Poppins_Medium",
    fontSize: 12,
    marginLeft: 8,
    marginBottom: 10,
    
  },

});
