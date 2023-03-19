import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",

        width: 320,

        marginTop: 15,
        marginHorizontal: 15,
        padding: 15,

        borderRadius: 20,
        color: "#fff",

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
        backgroundColor: "#fff"
    },

    buttons: {
        flexDirection: "row",
    },

    task: {
        marginBottom: 20,
        fontSize: 20,
    }
})