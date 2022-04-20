import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  BalsamiqSans_400Regular,
  BalsamiqSans_400Regular_Italic,
} from "@expo-google-fonts/balsamiq-sans";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import Container from "./Container";

export default function App() {
  // Load Font with Expo
  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
  });

  // Setup Font
  const fontConfig = {
    BalsamiqSans: {
      400: {
        normal: "BalsamiqSans_400Regular",
        italic: "BalsamiqSans_400Regular_Italic",
      },
    },
  };

  const customeColor = {
    primary: {
      50: "#ecfeff",
      200: "#a5f3fc",
      300: "#67e8f9",
      500: "#06b6d4",
      600: "#0891b2",
      800: "#155e75",
      900: "#164e63",
    },
  };

  // Setup Theme
  const theme = extendTheme({
    colors: customeColor,
    fontConfig,
    fonts: {
      header: "BalsamiqSans",
      body: "BalsamiqSans",
      mono: "BalsamiqSans",
    },
    config: { initialColorMode: "dark" },
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <RecoilRoot>
          <Container />
        </RecoilRoot>
      </NativeBaseProvider>
    );
  }
}
