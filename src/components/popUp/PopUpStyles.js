import {StyleSheet} from "react-native";
import COLORS from "../../constants/colors";

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',

        height: '100%',

        backgroundColor: '#00000099',
    },
    modal: {
        alignItems: 'center',

        height: 200,
        width: '90%',

        paddingVertical: 40,

        borderRadius: 30,

        backgroundColor: COLORS.MAIN_COLOR,
    },
})