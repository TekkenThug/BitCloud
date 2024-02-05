import { z } from "zod";

export const loginForm = z.object({
    email: z.string().min( 1, "Email is required").email(),
    password: z.string().min(1, "Password is required")
});
