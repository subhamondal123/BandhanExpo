import { CryptoDecoder, CryptoEncoder } from "../../auth";
import { APP_LAST_URI } from "./apiConfigUrl";
import axiosInstance from "./axiosInstance";

export const ApiCall = async (uriName, payload = {}) => {

    const config = APP_LAST_URI[uriName];

    // let requestPayload = payload;

    try {
        if (config.isEncrypt) {
            payload = { payload: CryptoEncoder.CryptoEncode(payload) }

        }
        let response;

        if (config.method === "POST") {
            response = await axiosInstance.post(config.path, payload);
        } else {
            response = await axiosInstance.get(config.path);
        }

        let data = response.data;
        console.log("data---", data)
        if (config.isEncrypt) {
            data = CryptoDecoder.CryptoDecode(data);
        }

        return data

    } catch (error) {
        console.log("err===", error)
        return true
    } finally {
        console.log(`✅ API Finished → ${uriName}`);
    }
};