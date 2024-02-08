import { RootState } from "@/store";

export const isAuthSelector = (state: RootState) => state.auth.isAuth;
export const userSelector = (state: RootState) => state.auth.user;
