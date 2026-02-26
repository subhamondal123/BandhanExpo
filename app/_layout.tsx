import '@/global.css';
import { toastConfig } from '@/src/shared/ToastConfig';
import { store } from "@/src/store";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts
} from '@expo-google-fonts/poppins';
import { Stack } from "expo-router";
import { RootSiblingParent } from "react-native-root-siblings";
import Toast from 'react-native-toast-message';
import { Provider } from "react-redux";


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
      <Provider store={store}>
        <RootSiblingParent>
          <Stack screenOptions={{ headerShown: false }} />
          <Toast config={toastConfig} />
        </RootSiblingParent>
      </Provider>
    </>
  )
}
