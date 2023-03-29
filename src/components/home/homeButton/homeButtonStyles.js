import {StyleSheet} from "react-native";
import COLORS from "../../../constants/colors";

export default StyleSheet.create({
    button: {
        justifyContent: 'center',

        width: 320,
        height: 50,

        marginHorizontal: 10,

        borderRadius: 30,

        backgroundColor: COLORS.HOME_BUTTON_BACKGROUND_COLOR,
    },

    text: {
        textAlign: 'center',

        color: COLORS.HOME_BUTTON_TEXT_COLOR,   
        fontSize: 18,
        fontWeight: 600,
    }
})