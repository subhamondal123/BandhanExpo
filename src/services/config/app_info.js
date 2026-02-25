import * as Application from 'expo-application';

console.log("App Name:", Application.applicationName);
console.log("Package Name:", Application.applicationId);
console.log("Version:", Application.nativeApplicationVersion);
console.log("Build Number:", Application.nativeBuildVersion);

// get device app id
export const APP_INFO = {
  name: Application.applicationName,
  packageName: Application.applicationId,
  version: Application.nativeApplicationVersion,
  buildNumber: Application.nativeBuildVersion,
};