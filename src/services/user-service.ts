import { requestBackEnd } from "../utils/requests";
import * as authService from './auth-service';

export function findMe() {

    const headers = {
        Authorizaton: "Bearer "+ authService.getAccessToken()
    }

    return requestBackEnd({url: `/user/me`,headers});
}