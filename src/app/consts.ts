export const PUBLIC_APP_URL = "https://rezolv.vercel.app";
export const DEV_APP_URL = "https://localhost:3000";

const isDev = process.argv.indexOf("dev") !== -1;

export const APP_URL = isDev ? DEV_APP_URL : PUBLIC_APP_URL;
