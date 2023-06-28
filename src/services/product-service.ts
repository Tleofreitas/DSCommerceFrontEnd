import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";

// Buscar TUDO anterior a Search Bar
// export function findAll() {
//     return axios.get(`${BASE_URL}/products?size=12`);
// }

export function findPageRequest(page: number, name: string, size = 12, sort = "name") {
    const config : AxiosRequestConfig = {
        // Parâmetros de pesquisa
        method: "GET",
        baseURL: BASE_URL,
        url: "/products",
        params: {
            page, name, size, sort
        }
    }
    return axios(config);
}

export function findById(id: number) {
    return axios.get(`${BASE_URL}/products/${id}`);
}