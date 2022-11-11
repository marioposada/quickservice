import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        justifyContent: "center",
        paddingVertical: 15,
        marginVertical: 15,
        marginHorizontal: 10,
        borderRadius: 10,
      },
      text: {
        fontFamily: "Poppins_Bold",
        fontSize: 18,
        color: colors.black,
        marginVertical: 5,
        marginHorizontal: 10,
      },
      text1: {
        fontFamily: "Poppins_Regular",
        fontSize: 14,
        alignSelf: "center",
        marginVertical: 5,
      },
    });