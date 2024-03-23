/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface User {
    id: number;
    /** @format email */
    email: string;
    first_name: string;
    last_name: string;
    avatar?: string;
}

export interface Article {
    id: number;
    title: string;
    author: string;
    /** @format date-time */
    date: string;
    /** @format uri */
    cover_url: string;
    tag: string;
}

export interface ErrorMessage {
    message: string;
    /** @example {"email":["Required","Must be email"],"password":["Required"]} */
    errors?: Record<string, string[]>;
}

export interface RegisterCredentials {
    /**
     * User's first name
     * @example "Larry"
     */
    first_name?: string;
    /**
     * User's last name
     * @example "King"
     */
    last_name?: string;
    /**
     * Must be a valid email address.
     * @example "aracely.luettgen@example.com"
     */
    email: string;
    /**
     * User password
     * @example "minus"
     */
    password: string;
    /**
     * The value and <code>password</code> must match.
     * @example "sapiente"
     */
    confirmPassword: string;
    /**
     * Must be accepted.
     * @example true
     */
    agreement: boolean;
    /**
     * User's birthdate, must be more than 18 years
     * @format date
     * @example "2001-01-25"
     */
    birthdate: string;
}

export interface Currency {
    /** @format uri */
    icon?: string;
    id: number;
    /** @format double */
    marketCap: number;
    name: string;
    /** @format double */
    percentageForDay: number;
    /** @format double */
    percentageForWeek: number;
    /** @format double */
    price: number;
    /** @format double */
    volume: number;
    shortName: string;
    quote: {
        /** @format date */
        date: string;
        /** @format double */
        value: number;
    }[];
}

export interface Pagination {
    /** Total items count */
    total: number;
    /** Number of last page */
    last_page: number;
}
