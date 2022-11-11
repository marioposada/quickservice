import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    marginVertical: 10,
    borderBottomWidth: 0.4,
  },
  container2: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
   },
  text: {
    fontFamily: "Roboto_Bold",
    fontSize: 18,
    marginLeft: 10,
    color: colors.black,
  },
  text1: {
    fontFamily: "Roboto_Regular",
    fontSize: 14,
    marginLeft: 10,
    marginTop: 5,
    color: colors.black,
  },
  text2: {
    fontFamily: "Roboto_Regular",
    fontSize: 14,
    marginLeft: 10,
    marginTop: 5,
    color: colors.black,
  },
  containerUp: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 100,
    height: 80,
    resizeMode: "cover",

    }
  

  
});
