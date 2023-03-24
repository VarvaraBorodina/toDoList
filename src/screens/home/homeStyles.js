import {StyleSheet} from "react-native";
import COLORS from "../../constants/colors";

export default StyleSheet.create({
    container: {
      alignItems: 'center',

      height: "100%",

      paddingTop: 60,

      backgroundColor: COLORS.MAIN_COLOR,
    },

    header: {
      flexDirection: 'row'
    }
})