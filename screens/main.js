import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./login";
import MapScreen from "./map";
import Details from "./details";

const NativeStack = createNativeStackNavigator()

const Main = () => {
    return (
        <NavigationContainer>
            <NativeStack.Navigator screenOptions={{headerShown: false, statusBarHidden: true}}>
                <NativeStack.Screen name="Login" component={Login} />
                <NativeStack.Screen name='Map' component={MapScreen} />
                <NativeStack.Screen name="Details" component={Details} />
            </NativeStack.Navigator>
        </NavigationContainer>
    )
}

export default Main;