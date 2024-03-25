import { RootState } from "@/store";

export const isAuthSelector = (state: RootState) => state.auth.isAuth;
export const userSelector = (state: RootState) => state.auth.user;
export const fullNameSelector = (state: RootState) =>
    `${state.auth.user?.first_name} ${state.auth.user?.last_name}`;
export const emailSelector = (state: RootState) => state.auth.user?.email;
export const avatarSelector = (state: RootState) => state.auth.user?.avatar;
