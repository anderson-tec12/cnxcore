import axios from "axios";

export const apiCore = axios.create({
  baseURL: "https://appluxottica.brazilsouth.cloudapp.azure.com:44333",
});
