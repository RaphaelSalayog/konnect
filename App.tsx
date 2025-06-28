import { Ionicons } from "@expo/vector-icons";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/Home";
import ItemDetailsScreen from "./screens/ItemDetails";
import LoginScreen from "./screens/Login";
import UserScreen from "./screens/User";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomOverview = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="Home"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={18} color={color} />,
                }}
                component={HomeScreen}
            />
            <BottomTab.Screen
                name="User"
                options={{
                    title: "Me",
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons name="person" size={18} color={color} />,
                }}
                component={UserScreen}
            />
        </BottomTab.Navigator>
    );
};

export default function App() {
    useEffect(() => {
        GoogleSignin.configure({
            iosClientId: "504675976112-tieg49s4irut7m67cnaotnr6dd1f09t8.apps.googleusercontent.com",
            webClientId: "504675976112-c39g6dm349m9jcjl7ukcdoe77p1d9350.apps.googleusercontent.com",
            profileImageSize: 150,
        });
    }, []);

    return (
        <>
            <StatusBar style="auto" />
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Login"
                            options={{ headerShown: false }}
                            component={LoginScreen}
                        />
                        <Stack.Screen
                            name="HomeOverview"
                            options={{ headerShown: false }}
                            component={BottomOverview}
                        />
                        <Stack.Screen
                            name="ItemDetails"
                            options={{ headerShown: false }}
                            component={ItemDetailsScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </>
    );
}
