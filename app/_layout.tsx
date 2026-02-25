import '@/global.css';
import { toastConfig } from '@/src/shared/ToastConfig';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts
} from '@expo-google-fonts/poppins';
import { Stack } from "expo-router";
import { RootSiblingParent } from "react-native-root-siblings";
import Toast from 'react-native-toast-message';


export default function RootLayout() {
  const [loaded] = useFonts({
    Poppins_400Regular, // The key here...
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  if (!loaded) {
    return null;
  }

  // return <Stack />;
  return (
    <>
      <RootSiblingParent>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" />
        </Stack>
        <Toast config={toastConfig} topOffset={60}/>
      </RootSiblingParent>
    </>
  )
}
