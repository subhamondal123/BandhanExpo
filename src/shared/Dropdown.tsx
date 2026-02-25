import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

interface DropdownProps {
    data: { label: string; name: string }[];
    value: Record<string, any> | null;
    placeholder?: string;
    labelField?: string;   // ← add these
    valueField?: string;
    onChange: (item: any) => void;
    onClear?: () => void; 
}

const AppDropdown = ({
    data,
    value,
    placeholder = "Select",
    labelField = "label",   // ← with defaults
    valueField = "name",
    onChange,
    onClear
}: DropdownProps) => {

    // const renderItem = (item: any,selected?:boolean) => {
    //     console.log("item--===",item)
    //     console.log("value--===",selected)
    //     return (
    //         <View style={styles.item}>
    //             <Text style={styles.textItem}>
    //                 {item[labelField]}
    //             </Text>

    //             {value?.id === item.id && ( 
    //                <FontAwesome name="check-circle" size={14} color="#c30a36" />
    //             )}
    //         </View>
    //     );
    // };

    return (
        <Dropdown
            mode='modal'
            containerStyle={styles.listContainer}
            itemContainerStyle={styles.listItem}
            itemTextStyle={styles.listItemText}
            style={styles.dropdown}
            placeholderStyle={styles.placeholder}
            selectedTextStyle={styles.selectedText}
            inputSearchStyle={styles.inputSearchStyle}
            activeColor={"#ffddd9"}
            data={data}
            labelField={labelField}
            valueField={valueField}
            placeholder={placeholder}
            value={value}
            search
            searchPlaceholder="Search..."
            onChange={onChange}
            renderRightIcon={() => (
                value && Object.keys(value).length > 0 ? (  // ← check if object has keys
                    <AntDesign
                        name="close-circle"
                        size={18}
                        color="#999"
                        onPress={onClear}
                    />
                ) : (
                    <AntDesign name="down-circle" size={18} color="#999" />
                )
            )}
        // renderItem={renderItem}
        />
    );
};

export default AppDropdown;

const styles = StyleSheet.create({
    dropdown: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 12,
    },
    listContainer: {
        borderRadius: 10,
        height: 400,
    },
    listItem: {
        marginVertical: 2,
        borderWidth: 0.5,
        marginHorizontal: 5,
        borderRadius: 10,
        borderColor: "#ffddd9"
    },
    listItemText: {
        color: "#999",
        fontWeight: "600",
    },
    placeholder: {
        color: "#999",
        fontWeight: "600",
    },

    selectedText: {
        color: "#c30a36",
        fontWeight: "600",
    },
    inputSearchStyle: {
        // height: 40,
        fontSize: 14,
        fontWeight: "600",
        borderColor: "gray",
        borderRadius: 10
    },
    // ====================
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
});