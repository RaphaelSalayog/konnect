import { View } from "react-native";
import { STATUS_BAR_HEIGHT } from "../constants/device";

const StatusBarSpacer = ({ children }: any) => {
    return <View style={{ flex: 1, paddingTop: STATUS_BAR_HEIGHT }}>{children}</View>;
};

export default StatusBarSpacer;
