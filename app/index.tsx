import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Dimension, ImageName } from './../src/enums';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login")
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={ImageName.BANDHAN_LANDING}
          style={{
            height: Dimension.height,
            width: Dimension.width,
            resizeMode: "stretch",
          }}
        />
      </SafeAreaView>
    </SafeAreaProvider>

  );
}
