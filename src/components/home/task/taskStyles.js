import {StyleSheet} from "react-native";
import COLORS from "../../../constants/colors";

export default StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "space-between",

        width: 320,

        marginBottom: 10,
        marginHorizontal: 10,
        padding: 15,

        borderRadius: 20,

        fontSize: 20,
        fontWeight: 600,
    },

    button: {
        width: 30,
        height: 30,

        marginLeft: 5,

        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 15,
        backgroundColor: COLORS.TASK_BUTTON_BACKGROUND_COLOR,
    },
    text: {
        marginLeft: 10,
        marginTop: 5,

        fontSize: 14,
        fontWeight: 400,
    },

    task: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    title: {
        textAlign: "center",

        flexDirection: "row",
        width: 200,
    },

    buttons: {
        flexDirection: "row",
    },

    date: {
        marginTop: 5,
        marginLeft: 7,

        fontSize: 12,
        fontWeight: 400,
    },

    mark: {
        fontSize: 18,
        fontWeight: 400,
    }
})