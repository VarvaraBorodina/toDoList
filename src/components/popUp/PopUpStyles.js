import {StyleSheet} from "react-native";
import COLORS from "../../constants/colors";

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',

        height: '100%',

        backgroundColor: '#00000066',
    },
    modal: {
        alignItems: 'center',

        height: 200,
        width: '90%',

        paddingVertical: 40,

        borderRadius: 30,

        backgroundColor: COLORS.MAIN_COLOR,
    },

    input: {
        height: 50,
        width: '85%',

        paddingHorizontal: 20,

        fontSize: 18,

        borderRadius: 20,

        color: COLORS.TASK_TEXT_COLOR,
        backgroundColor: COLORS.TASK_BACKGROUND_COLOR,
    },

    buttons: {
        width: '85%',

        marginTop: 30,

        flexDirection: 'row',
        justifyContent: 'space-around',

    },

    button: {
        alignItems: 'center',

        width: '40%',
        paddingVertical: 10,

        backgroundColor: COLORS.TASK_BACKGROUND_COLOR,
        borderRadius: 15,
    },

    text: {
        fontSize: 16,
        color: COLORS.TASK_TEXT_COLOR,
    }
})