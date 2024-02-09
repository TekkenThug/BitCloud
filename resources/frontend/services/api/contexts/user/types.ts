export interface RegisterCredentials {
    email: string;
    password: string;
    confirmPassword: string;
    agreement: boolean;
}

export interface User {
    id: number;
    email: string;
    firstName: string | null;
    lastName: string | null;
    avatar: string | null;
}
