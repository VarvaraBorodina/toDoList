import {StyleSheet} from "react-native";
import COLORS from "../../../constants/colors";

export default StyleSheet.create({
    section: {
        justifyContent: 'center',

        width: 320,
    },
    title: {
        paddingVertical: 20,
        paddingHorizontal: 10,

        color: COLORS.TASK_SECTION_TEXT_COLOR, 

        fontSize: 14,
        fontWeight: 600,
    },
})