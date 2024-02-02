import axios, { AxiosError,AxiosResponse } from "axios";
import { camelizeKeys } from "humps";

const api = axios.create({
    baseURL: "/api",
    withCredentials: true,
    withXSRFToken: true,
});

api.interceptors.response.use((response: AxiosResponse) => {
    if (
        response.data &&
        response.headers["content-type"] === "application/json"
    ) {
        response.data = camelizeKeys(response.data);
    }

    return response;
});

export {
    api,
    AxiosError as ApiError,
};
