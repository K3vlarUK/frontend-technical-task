import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { useLoadedAssets } from "./src/utils/use-loaded-resources";
import { DogContextProvider } from "./src/context/DogContext";
import {ThemeProvider} from '@emotion/react'
import { NavStack } from "./src/components/navigation/NavStack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const isLoadingComplete = useLoadedAssets();

  if (!isLoadingComplete) {
    return null;
  }

  const theme = {
    color: 'hotpink',
    backgroundColor: 'purple'
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <DogContextProvider>
          <NavigationContainer>
              <NavStack />
          </NavigationContainer>
          <StatusBar />
        </DogContextProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
