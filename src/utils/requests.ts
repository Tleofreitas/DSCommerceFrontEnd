import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";
import * as authService from '../services/auth-service';

export function requestBackEnd(config: AxiosRequestConfig) {

    const headers = config.withCredentials
        ? { // config.withCredentials == true, acrescenta o cabeçalho de autorização na requisiçao
            ...config.headers,
            Authorizaton: "Bearer "+ authService.getAccessToken()
        } // config.withCredentials == false, manter o que já tinha
        : config.headers;

    return axios({...config, baseURL: BASE_URL, headers});
}