import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealsNavigator from "./navigation/MealsNavigator";

const FetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoades] = useState(false);
  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={FetchFonts}
        onFinish={() => setFontsLoades(true)}
      />
    );
  }

  return <MealsNavigator />;
}
