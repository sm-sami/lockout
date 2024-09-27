import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function RootLayout() {
  SplashScreen.preventAutoHideAsync();

  const [loaded, error] = useFonts({
    "MonaSans-Bold": require("../assets/fonts/MonaSans-Bold.otf"),
    "MonaSans-Medium": require("../assets/fonts/MonaSans-Medium.otf"),
    "MonaSans-SemiBold": require("../assets/fonts/MonaSans-SemiBold.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
