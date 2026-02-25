import AntDesign from '@expo/vector-icons/AntDesign';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import Toast from "react-native-toast-message";
import { toastConfig } from "./ToastConfig";

interface BottomModalProps {
    title?: string;
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const BottomModal = ({
    title,
    visible,
    onClose,
    children,
}: BottomModalProps) => {
    return (
        <Modal
            isVisible={visible}
            // onBackdropPress={onClose}
            onBackButtonPress={onClose}
            // swipeDirection="down"
            // onSwipeComplete={onClose}
            style={styles.modal}
            backdropTransitionOutTiming={0}
            avoidKeyboard
            useNativeDriver
            hideModalContentWhileAnimating
        >
            <View style={styles.container}>
                {/* Drag Indicator */}
                {/* <View style={styles.dragHandle} /> */}

                <View style={styles.header}>
                    {title && title?.length > 0 ?
                        <View style={styles.headerTxtView}>
                            <Text className='font-poppins-bold text-2xl text-secondary-500'>{title}</Text>
                        </View> : <View style={{ flex: 1 }} />}
                    <TouchableOpacity onPress={onClose}>
                        <AntDesign name="close-circle" size={24} color="#c30a36" />
                    </TouchableOpacity>
                </View>

                {children}
            </View>
            <Toast config={toastConfig} />
        </Modal>
    );
};

export default BottomModal;

const styles = StyleSheet.create({
    modal: {
        justifyContent: "flex-end",
        margin: 0,
    },

    container: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingHorizontal: 20,
        // minHeight: 250,
    },

    dragHandle: {
        width: 40,
        height: 5,
        backgroundColor: "#ccc",
        borderRadius: 3,
        alignSelf: "center",
        marginBottom: 10,
    },
    headerTxtView: {
        justifyContent: "center",
        alignItems: "center"
    },
    // headerTxt:{
    //     color:"#fff",
    //     fontWeight:
    // },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        // paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#420c0c"
    }
});