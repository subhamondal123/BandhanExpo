import { Platform } from "react-native";
import { ApiConfigUrl } from "../api/models";
import { ApiCall } from "../api/models/apiModule";
import {
    DateConvert
} from "../common-view-function";

export const MiddlewareCheck = async (
    uriName,
    payload = {},
    props
) => {

    try {

        /** Unauthorized Device Check */
        // const allowed = await userWarning.actionUnauthorizedDeviceWorning(props);

        // if (!allowed) return false;

        /** Internet Check */
        // const isConnected = await DeviceInfo.CheckConnection();

        // if (!isConnected) {
        //     props?.navigation.navigate("NetworkError");
        //     return false;
        // }

        /** Base Payload */
        let finalPayload = {
            currentDateTime: DateConvert.fullDateFormat(new Date()),
            platform: Platform.OS,
            ...payload,
        };

        /** User Data */
        // const userInfo = await StorageDataModification.userCredential({}, "get");

        // if (userInfo) {
        //     finalPayload = {
        //         ...finalPayload,
        //         ...(await GetUserData.getUserData()),
        //     };
        // }

        /** Location */
        // if (
        //     ApiConfigUrl.APP_LAST_URI[uriName]?.isPicLocation
        // ) {
        //     finalPayload = {
        //         ...finalPayload,
        //         ...(await GetUserData.getUserLocation()),
        //     };
        // }

        if (ApiConfigUrl.APP_LAST_URI[uriName]) {
            const response = await ApiCall(uriName, finalPayload);
            console.log("response middleware==", response)
            return response;
        }
        /** API CALL */


    } catch (error) {
        console.log("Middleware Error:", error);
        return {
            success: false,
            error,
        };
    } finally {
        console.log("🔥 Middleware Finished");
    }
};