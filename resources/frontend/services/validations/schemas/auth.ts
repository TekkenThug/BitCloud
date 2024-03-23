import { z } from "zod";

import { ADULT_DATE } from "@/data/common.ts";
import { PASSWORD_REGEXP, USER_NAME_REGEXP } from "@/data/regExps.ts";

export const loginForm = z.object({
    email: z.string().min(1, "Email is required").email(),
    password: z.string().min(1, "Password is required"),
});

export const registerForm = z
    .object({
        first_name: z
            .string()
            .min(2, "Name is shorten than 2")
            .regex(USER_NAME_REGEXP, "Must be only letters"),
        last_name: z
            .string()
            .min(2, "Name is shorten than 2")
            .regex(USER_NAME_REGEXP, "Must be only letters"),
        email: z.string().min(1, "Email is required").email(),
        password: z.string().min(1, "Password is required").regex(PASSWORD_REGEXP, "Password must"),
        confirmPassword: z.string().min(1, "Password is required"),
        agreement: z.literal(true),
        birthdate: z
            .date()
            .max(ADULT_DATE, { message: "User must be a adult (18 years old and more)" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });
