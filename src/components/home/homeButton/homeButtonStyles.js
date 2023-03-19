import {StyleSheet} from "react-native";
import COLORS from "../../../constants/colors";

export default StyleSheet.create({
    button: {
        justifyContent: "center",
        textAlign: "center",

        width: 200,

        paddingVertical: 10,

        borderRadius: 30,
        backgroundColor: COLORS.MAIN,
        color: "#fff",

        fontSize: 20,
        fontWeight: 600,        
    },
})