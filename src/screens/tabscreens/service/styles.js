import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "start",
  },
  wraper: {
    backgroundColor: "rgba(237, 106, 54, 0.3)",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 15,
    borderRadius: 10,
    alignSelf: "center",
    width: "90%",
    height: "auto",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
    fontFamily: "Poppins_Regular",
    color: "#000",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textBold: {
    fontSize: 14,
    fontFamily: "Poppins_Bold",
    color: "#000",
  },
  title: {
    fontFamily: "Roboto_Bold",
    fontSize: 20,
    color: "#000",
    marginHorizontal: 10,
    marginVertical: 10,
    alignSelf: "center",

  },
  Button: {
    backgroundColor: "green",
    width: 250,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 15,
  },
  textButton: {
    color: "white",
    fontFamily: "Poppins_Bold",
    fontSize: 20,
  },
});
