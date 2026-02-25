import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ToastConfigParams } from 'react-native-toast-message';


const styles = StyleSheet.create({
  base: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 14,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 12,
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
    zIndex:50
    // padding: 15,
    // borderRadius: 10,
    // elevation: 5,
    // opacity: 0.96, flexDirection: "row", alignItems: "flex-start"
  },
});
export const toastConfig = {
  default: ({ text1 }: ToastConfigParams<any>) => (
    <View style={[styles.base, { backgroundColor: '#000', borderColor: "" }]}>
      <MaterialCommunityIcons name="message-reply-text" size={18} color={"#fff"} />
      <Text style={{ color: '#fff', fontWeight: '400', fontSize: 14, marginLeft: 8 }}>
        {text1}
      </Text>
    </View>
  ),

  /* ✅ SUCCESS */
  success: ({ text1 }: ToastConfigParams<any>) => (
    <View style={[styles.base, { backgroundColor: '#f0faf4', borderColor: "#c3e6d0", }]}>
      <FontAwesome6 name="circle-check" size={18} color={"#22c55e"} />
      <Text style={{ color: '#374151', fontWeight: '400', fontSize: 14 }}>
        {text1}
      </Text>
    </View>
  ),

  /* ❌ ERROR */
  error: ({ text1 }: ToastConfigParams<any>) => (
    <View style={[styles.base, { backgroundColor: '#fff1f2', borderColor: "#fecdd3" }]}>
      <Entypo name="circle-with-cross" size={18} color="#ef4444" />
      <Text style={{ color: '#374151', fontWeight: '400', fontSize: 14, }}>
        {text1}
      </Text>
    </View>
  ),

  /* ℹ️ INFO */
  info: ({ text1 }: ToastConfigParams<any>) => (
    <View style={[styles.base, { backgroundColor: '#fffbeb', borderColor: "#fde68a" }]}>
      <AntDesign name="info-circle" size={18} color="#f59e0b" />
      <Text style={{ color: '#374151', fontWeight: '400', top: -3, fontSize: 14, }}>
        {text1}
      </Text>
    </View>
  ),

  /* 🍅 TOMATO */
  tomatoToast: ({ text1 }: ToastConfigParams<any>) => (
    <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
      <Text>{text1}</Text>
    </View>
  ),
};