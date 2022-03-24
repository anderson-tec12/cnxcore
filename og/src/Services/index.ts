import axios from "axios";
import { Config } from "../Config/config";

const { environments } = Config;
const URL_APICORE =
  process.env.NODE_ENV === "production"
    ? environments.prod.APICORE
    : environments.dev.APICORE;

export const apiCore = axios.create({
  baseURL: URL_APICORE,
});
