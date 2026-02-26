import axios from "axios";
import { StorageDataModification } from "../../common-view-function";

const axiosInstance = axios.create({
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * REQUEST INTERCEPTOR
 */
axiosInstance.interceptors.request.use(
  async config => {
    const token = await StorageDataModification.authTokenData({}, "get");

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error)
);

/**
 * RESPONSE INTERCEPTOR
 */
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.log("GLOBAL API ERROR =>", error?.response || error);
    return Promise.reject(error);
  }
);

export default axiosInstance;