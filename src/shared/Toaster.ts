import Toast from "react-native-toast-message";

export type ToastType =
  | 'default'
  | 'success'
  | 'error'
  | 'info'
  | 'tomatoToast';

export const showToast = (
  message: string,
  type: ToastType = 'default'
) => {
  Toast.show({
    type: type ?? 'default',
    text1: message,
    position: 'top',
    visibilityTime: 2500,
  });
};