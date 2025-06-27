import {
    GoogleSignin,
    isErrorWithCode,
    isSuccessResponse,
    statusCodes,
} from "@react-native-google-signin/google-signin";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
    useEffect(() => {
        GoogleSignin.configure({
            iosClientId: "504675976112-tieg49s4irut7m67cnaotnr6dd1f09t8.apps.googleusercontent.com",
            webClientId: "504675976112-c39g6dm349m9jcjl7ukcdoe77p1d9350.apps.googleusercontent.com",
            profileImageSize: 150,
        });
    }, []);

    const handler = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();
            if (isSuccessResponse(response)) {
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
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Button title=" Google " onPress={handler} />
            <Button title=" Signout " onPress={singout} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
