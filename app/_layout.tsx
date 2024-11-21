import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Image, View } from "react-native";
import { Text } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "black", display: "flex" }}>
      <View style={{ flex: 1.8 }}>
        <Image
          style={{ flex: 1.8, resizeMode: "cover" }}
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
        ></Image>
      </View>

      <View
        style={{
          flex: 0.5,
          backgroundColor: "#90EE90",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "green",
            borderRadius: 6,
            width: 98,
            height: 40,
            zIndex: 1,
          }}
        >
          <Text style={{ color: "#ffff" }}>Con-1</Text>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "green",
            borderRadius: 6,
            width: 98,
            height: 40,
            zIndex: 1,
          }}
        >
          <Text style={{ color: "#ffff" }}>Con-2</Text>
        </View>
      </View>

      <View
        style={{
          flex: 4,
          backgroundColor: "green",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            gap: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#2dc653",
              width: 150,
              height: 136,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#90EE90",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#2dc653",
              width: 150,
              height: 136,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#90EE90",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#2dc653",
              width: 150,
              height: 136,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#90EE90",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#2dc653",
              width: 150,
              height: 136,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#90EE90",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#2dc653",
              width: 150,
              height: 136,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#90EE90",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#2dc653",
              width: 150,
              height: 136,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#90EE90",
            }}
          ></View>
        </View>
      </View>
    </View>
  );
}
