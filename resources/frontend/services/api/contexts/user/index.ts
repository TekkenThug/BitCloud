import { api, ApiError } from "@/services/api";
import { RegisterCredentials, User } from "@/services/api/contexts/user/types.ts";
import { WithMessage } from "@/services/api/types.ts";

export const getCurrentUser = async () => {
    const REQUEST_URL = "/users/me";

    const { data } = await api.get<User>(REQUEST_URL);

    return data;
};

export const registerUser = async (credentials: RegisterCredentials) => {
    const REQUEST_URL = "/users/register";

    try {
        const { data } = await api.post<WithMessage<never>>(REQUEST_URL, credentials);

        return data;
    } catch (e) {
        const err = e as ApiError;
        throw err.response?.data;
    }
};
