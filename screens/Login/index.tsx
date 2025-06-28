import {
    GoogleSignin,
    isErrorWithCode,
    isSuccessResponse,
    statusCodes,
} from "@react-native-google-signin/google-signin";
import { Button, View } from "react-native";
import StatusBarSpacer from "../../components/StatusBarSpacer";

const LoginScreen = ({ navigation }: any) => {
    const handler = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();
            if (isSuccessResponse(response)) {
                navigation.navigate("HomeOverview");
                console.log(response);
            } else {
                console.log("Google Signin was cancelled.");
            }
        } catch (err) {
            if (isErrorWithCode(err)) {
                switch (err.code) {
                    case statusCodes.IN_PROGRESS:
                        console.log("Google Signin is in progress.");
                        break;
                    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                        console.log("Play services are not available.");
                        break;
                    default:
                        console.log(err.code);
                }
            } else {
                console.log("An error occurred.");
            }
            console.log(err);
        }
    };

    const singout = async () => {
        try {
            await GoogleSignin.signOut();
            console.log("Logout");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <StatusBarSpacer>
            <View>
                <Button title=" Google " onPress={handler} />
                <Button title=" Signout " onPress={singout} />
            </View>
        </StatusBarSpacer>
    );
};

export default LoginScreen;
