import { Colors, ImageName } from '@/src/enums';
import { PRIVACY_POLICY_URL, TERMS_OF_SERVICE_URL } from '@/src/enums/global-constants';
import { APP_INFO } from '@/src/services/config/app_info';
import BottomModal from '@/src/shared/BottomModal';
import AppDropdown from '@/src/shared/Dropdown';
import { showToast } from '@/src/shared/Toaster';
import TypeWriterText from '@/src/shared/TypeWriterText';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef, useState } from 'react';
import { Image, KeyboardAvoidingView, Linking, Platform, Pressable, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const modalArrData = [
    { id: 1, label: 'Item 1', name: '1' },
    { id: 2, label: 'Item 2', name: '2' },
    { id: 3, label: 'Item 3', name: '3' },
    { id: 4, label: 'Item 4', name: '4' },
    { id: 5, label: 'Item 5', name: '5' },
    { id: 6, label: 'Item 6', name: '6' },
    { id: 7, label: 'Item 7', name: '7' },
    { id: 8, label: 'Item 8', name: '8' },
    { id: 9, label: 'Item 1', name: '9' },
    { id: 10, label: 'Item 2', name: '10' },
    { id: 11, label: 'Item 3', name: '11' },
    { id: 12, label: 'Item 4', name: '12' },
    { id: 13, label: 'Item 5', name: '13' },
    { id: 14, label: 'Item 6', name: '14' },
    { id: 15, label: 'Item 7', name: '15' },
    { id: 16, label: 'Item 8', name: '16' },
]

const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);

    const passwordRef = useRef<TextInput>(null)

    const onPolicy = (type: string) => {
        // this.props.navigation.navigate("PolicyView", { "type": type });
        if (type == "termCondition") {
            Linking.openURL(TERMS_OF_SERVICE_URL)
        } else {
            Linking.openURL(PRIVACY_POLICY_URL)
        }
    }

    const tooglePasswordIcon = () => {
        setShowPassword(!showPassword)
    }
    const modalSec = () => {
        const showToaster = () => {
            showToast("Hello dsfdsfdsfsdf", 'info')

        }

        const onChangeClient = (item: any) => {
            console.log("data", item)
            setSelectedClient(item)
        }

        return (
            <>
                {openModal ?
                    <BottomModal
                        title='Select'
                        visible={openModal}
                        onClose={() => setOpenModal(false)}
                    >
                        <View style={{ justifyContent: "center", alignItems: "center", paddingVertical: 20 }}>
                            <AppDropdown
                                data={modalArrData}
                                value={selectedClient}
                                // labelField="label"
                                // valueField="name"
                                placeholder="Select Client"
                                onChange={(item) => onChangeClient(item)}
                                onClear={() => setSelectedClient(null)}
                            />
                            <View className='flex-row items-center mt-5'>
                                <Pressable onPress={() => onLogin()} className='px-10 py-4 bg-secondary-500 rounded-lg'>
                                    <Text className='font-poppins-semi text-base text-white'>Login</Text>
                                </Pressable>
                            </View>
                        </View>

                    </BottomModal>
                    : null}
            </>
        )
    }

    const onLogin = () => {
        // showToast("Hello hhjsahjashfb sad sah bdhsabd  dsa dsfdsfdsfsdf",'info')
        // router.push("/modal")
        setOpenModal(true)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle={"default"} backgroundColor={"#c30a36"} />
            <LinearGradient
                colors={['#c30a36', '#7f6ca6', '#fadbe3']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                className="flex-1"
            >
                <View className="flex-1">
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        className="flex-1"
                    >
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}>
                            <View className="flex-[0.5] relative overflow-visible">
                                {/* 🔴 TOP LEFT GLOW */}
                                <View className="absolute -top-16 -left-20 w-72 h-72 bg-primary-200 rounded-full opacity-25 blur-3xl" />

                                {/* 🔵 TOP RIGHT GLOW */}
                                <View className="absolute top-10 -right-24 w-80 h-80 bg-secondary-200 rounded-full opacity-20 blur-3xl" />

                                <View className='flex-row items-end px-4 py-6'>
                                    <View className="w-14 h-14 bg-white rounded-lg items-center justify-center">
                                        <Image
                                            source={ImageName.APP_ICON}
                                            resizeMode="contain"
                                            className="w-12 h-12"
                                        />
                                    </View>
                                    <View className=' ml-2'>
                                        <Text className="text-white text-2xl font-poppins-bold tracking-widest ">Bandhan</Text>
                                        <TypeWriterText text={"Strengthening Every Connection"} />
                                    </View>
                                </View>
                                <View className='flex-1' />
                                <View className=' items-center mb-10'>
                                    <View className="w-40 h-40 ">
                                        <Image
                                            source={ImageName.LOGIN_3D_ICON}
                                            resizeMode="contain"
                                            className="w-full h-full"
                                        />
                                    </View>
                                    <View className='justify-center'>
                                        <Text className="text-white text-2xl font-poppins-semi text-center">Welcome Back</Text>
                                        <Text className="text-slate-100 text-sm font-poppins-semi">Login to access your Account</Text>
                                    </View>
                                </View>
                                <View className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-96 h-16 bg-primary-100 rounded-full opacity-30 blur-3xl" />
                            </View>
                            <View className="bg-white pt-10 rounded-t-[40px] mx-2 px-8 shadow-4xl shadow-black flex-[0.5]">
                                <View className="mb-10 px-4 flex-row items-center relative bg-white p-2 rounded-2xl text-gray-800 border border-gray-200 focus:border-orange-500">
                                    <View className='absolute -top-[11px] px-1 left-4 bg-white z-10'>
                                        <Text className="text-gray-800 font-poppins-semi ">User ID</Text>
                                    </View>
                                    <TextInput
                                        value={userId}
                                        returnKeyType='next'
                                        onSubmitEditing={() => passwordRef.current?.focus()}
                                        onChangeText={setUserId}
                                        placeholder="Enter your User ID"
                                        className="flex-1 font-poppins"
                                    />
                                    <View>
                                        <FontAwesome6 name="user-large" size={20} color={Colors.COLOR.RED.PURE_RED} />
                                    </View>
                                </View>
                                <View className=" px-4 flex-row items-center relative bg-white p-2 rounded-2xl text-gray-800 border border-gray-200 focus:border-orange-500">
                                    <View className='absolute -top-[11px] px-1 left-4 bg-white z-10'>
                                        <Text className="text-gray-800 font-poppins-semi">Password</Text>
                                    </View>
                                    <TextInput
                                        value={password}
                                        ref={passwordRef}
                                        onChangeText={setPassword}
                                        placeholder="Enter your Password"
                                        secureTextEntry={showPassword}
                                        className="flex-1 font-poppins"
                                    />
                                    {password.length > 0 ?
                                        <Pressable onPress={() => tooglePasswordIcon()}>
                                            <FontAwesome6 name={showPassword ? "eye" : "eye-slash"} size={20} color={Colors.COLOR.RED.PURE_RED} />
                                        </Pressable>
                                        :
                                        <FontAwesome6 name='key' size={20} color={Colors.COLOR.RED.PURE_RED} />
                                    } 
                                </View>
                                <View className='flex-row items-center mb-6 flex-[0.6] '>
                                    {alertMessage.length > 0 ? <>
                                        <FontAwesome6 name="circle-exclamation" size={14} color="#c30a36" />
                                        <View >
                                            <Text className='font-poppins-semi text-xs text-secondary-500 ml-2'>{alertMessage}</Text>
                                        </View>
                                    </> : null}
                                </View>
                                <TouchableOpacity
                                    className="bg-secondary-500 p-4 rounded-2xl shadow-lg active:bg-secondary"
                                    onPress={() => onLogin()}
                                >
                                    <Text className="text-white text-center font-bold text-xl tracking-wider">Login</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="mt-8">
                                    <Text className="text-gray-400 text-xs text-center tracking-wider">
                                        By logging in, you agree to our
                                    </Text>
                                    <View className='flex-row self-center'>
                                        <Text className="text-secondary-500 font-bold text-xs text-center" onPress={(type) => onPolicy("termCondition")}>Terms </Text>
                                        <Text className="text-gray-400 text-xs text-center">
                                            and
                                        </Text>
                                        <Text className="text-secondary-500 font-bold text-xs text-center" onPress={(type) => onPolicy("policy")}> Privacy Policy</Text>
                                    </View>
                                </TouchableOpacity>
                                <View className='flex-1' />
                                <View>
                                    <Text className='color-secondary-500 text-xs font-poppins-semi text-center'>V-{APP_INFO.version}</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </View>
            </LinearGradient>
            {modalSec()}
        </SafeAreaView>
    )
}

export default Login