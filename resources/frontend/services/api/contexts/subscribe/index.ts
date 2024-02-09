import { api, ApiError } from "@/services/api";
import { WithMessage } from "@/services/api/types";

import { Subscriber } from "./types";

const REQUEST_URL = "/subscribers";

export const subscribeToNewsletter = async (email: string) => {
    try {
        const { data } = await api.post<WithMessage<Subscriber>>(REQUEST_URL, {
            email,
        });
        return data;
    } catch (e) {
        const err = e as ApiError;
        throw err.response?.data;
    }
};
