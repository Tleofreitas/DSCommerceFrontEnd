import { AxiosRequestConfig } from "axios";
import { requestBackEnd } from "../utils/requests";
import { BASE_URL } from "../utils/system";

// Buscar TUDO anterior a Search Bar
// export function findAll() {
//     return axios.get(`${BASE_URL}/products?size=12`);
// }

export function findPageRequest(page: number, name: string, size = 12, sort = "name") {
    const config: AxiosRequestConfig = {
        // Parâmetros de pesquisa
        method: "GET",
        baseURL: BASE_URL,
        url: "/products",
        params: {
            page, name, size, sort
        }
    }
    return requestBackEnd(config);
}

export function findById(id: number) {
    return requestBackEnd({ url: `/products/${id}` });
}

export function deleteById(id: number) {
    const config: AxiosRequestConfig = {
        method: "DELETE",
        url: `/products/${id}`,
        withCredentials: true
    }
    return requestBackEnd(config);
}