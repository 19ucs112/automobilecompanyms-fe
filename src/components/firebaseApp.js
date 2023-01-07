import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyDtVsRMtdk0jTowsbb2yF8O7fAYYx5qEPQ",
  authDomain: "automobilecompany-1f56c.firebaseapp.com",
  projectId: "automobilecompany-1f56c",
  storageBucket: "automobilecompany-1f56c.appspot.com",
  messagingSenderId: "621850447171",
  appId: "1:621850447171:web:f17a58049d16429457b3f6",
};

const app = initializeApp(config);
export const authentication = getAuth(app);
