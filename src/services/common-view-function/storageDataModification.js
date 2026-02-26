import { getData, multipleRemove, singleRemove, storeData } from "../async-storage";

const Keys = {
    authToken: "NH5Wm3aCaYnuahmal1",
    userCredential: "@H5Wm1aCaY-uahlal2",
}
//  Here define all the storage data key
export const allStorageVariable = [
    Keys.authToken,
    Keys.userCredential
]
// for remove the data which is stored in login
export async function removeLoginData() {
    await multipleRemove([
        Keys.authToken,
        Keys.userCredential
    ]);
}

export async function authTokenData(data, type) {
    switch (type) {
        case "store":
            if (data) {
                await storeData(Keys.authToken, data);
            }
            return true;
        case "get":
            return await getData(Keys.authToken);

        case "clear":
            return await singleRemove(Keys.authToken);

        default:
            return true;
    }
}
export async function userCredential(data, type) {
    switch (type) {
        case "store":
            if (data) {
                await storeData(Keys.userCredential, data);
            }
            return true;
        case "get":
            return await getData(Keys.userCredential);

        case "clear":
            return await singleRemove(Keys.userCredential);

        default:
            return true;
    }
}

