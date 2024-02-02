import { api, ApiError } from "@/services/api";
import { AuthCredentials, User } from "@/services/api/contexts/auth/types";
import { WithMessage } from "@/services/api/types.ts";

// const getCSRFProtection = async () => {
//     const REQUEST_URL = "/sanctum/csrf-cookie";
//
//     await api.get(REQUEST_URL, { baseURL: "/" });
// };

export const login = async (credentials: AuthCredentials) => {
    // await getCSRFProtection();

    const REQUEST_URL= "/login";

    try {
        const { data } = await api.post<WithMessage<User>>(REQUEST_URL, credentials);

        return data;
    } catch (e) {
        const err = e as ApiError;
        throw err.response?.data;
    }
};

export const getUser = async () => {
    const REQUEST_URL = "/users/me";

    const { data } = await api.get<User>(REQUEST_URL);

    return data;
};