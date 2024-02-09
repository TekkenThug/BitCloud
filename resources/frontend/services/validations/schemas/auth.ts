import { z } from "zod";

import { PASSWORD_REGEXP } from "@/data/regExps.ts";

export const loginForm = z.object({
    email: z.string().min(1, "Email is required").email(),
    password: z.string().min(1, "Password is required"),
});

export const registerForm = z
    .object({
        email: z.string().min(1, "Email is required").email(),
        password: z
            .string()
            .min(1, "Password is required")
            .regex(PASSWORD_REGEXP, "Password must"),
        confirmPassword: z.string().min(1, "Password is required"),
        agreement: z.literal(true),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });
