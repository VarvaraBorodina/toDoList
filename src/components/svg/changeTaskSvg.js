import * as React from "react"
import Svg, { Path } from "react-native-svg"
import COLORS from "../../constants/colors";

const ChangeTaskSvg = () => {
  return (
    <Svg
      viewBox="0 0 20 20"
      width="20px"
      height="20px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M86.457 2175.583l13.173-13.634 1.424 1.473-13.173 13.635-1.424-1.474zM99.826 2159L84 2175.583V2179h3.881L104 2162.92l-4.174-3.92z"
        transform="translate(-140 -2319) translate(56 160)"
        fill={COLORS.TASK_BUTTON_COLOR}
        stroke="none"
        strokeWidth={2}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default ChangeTaskSvg;