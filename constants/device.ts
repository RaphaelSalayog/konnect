import { Dimensions, StatusBar } from "react-native";

export const SCREEN_HEIGHT = Dimensions.get("screen").height;
export const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
export const WINDOW_HEIGHT = Dimensions.get("window").height;
