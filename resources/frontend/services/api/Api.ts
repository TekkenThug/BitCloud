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

import {
    Article,
    Currency,
    ErrorMessage,
    Pagination,
    RegisterCredentials,
    User,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Articles
     * @name GetArticles
     * @summary Get articles
     * @request GET:/api/articles
     */
    getArticles = (
        query?: {
            /** The numbers of articles to return */
            limit?: number;
            /** Page number */
            page?: number;
        },
        params: RequestParams = {},
    ) =>
        this.request<
            {
                data: Article[];
                pagination?: Pagination;
            },
            any
        >({
            path: `/api/articles`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
    /**
     * No description
     *
     * @tags Authentication
     * @name LogoutFromApplication
     * @summary Logout from application
     * @request POST:/api/logout
     */
    logoutFromApplication = (params: RequestParams = {}) =>
        this.request<any, any>({
            path: `/api/logout`,
            method: "POST",
            ...params,
        });
    /**
     * No description
     *
     * @tags Authentication
     * @name LoginInApplication
     * @summary Login in application
     * @request POST:/api/login
     */
    loginInApplication = (
        data?: {
            /**
             * User email
             * @example "vaughn84@example.org"
             */
            email?: string;
            /**
             * User password
             * @example "fgDO'$e!A$aWj%iJ9Wyi"
             */
            password?: string;
        },
        params: RequestParams = {},
    ) =>
        this.request<
            {
                data: User;
                /** @example "Successfully login" */
                message: string;
            },
            ErrorMessage
        >({
            path: `/api/login`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    /**
     * No description
     *
     * @tags Currency
     * @name GetCurrencies
     * @summary Get currencies
     * @request GET:/api/currencies
     */
    getCurrencies = (
        query?: {
            /** The numbers of currencies to return */
            limit?: number;
        },
        params: RequestParams = {},
    ) =>
        this.request<
            {
                data: Currency[];
            },
            {
                /** @example "Unauthenticated." */
                message?: string;
            }
        >({
            path: `/api/currencies`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
    /**
     * No description
     *
     * @tags Subscribing
     * @name SubscribeToNewsletter
     * @summary Subscribe to newsletter
     * @request POST:/api/subscribers
     */
    subscribeToNewsletter = (
        data: {
            /**
             * Must be a valid email address. Must be at least 6 characters. Must not be greater than 64 characters.
             * @example "white.felix@example.net"
             */
            email: string;
        },
        params: RequestParams = {},
    ) =>
        this.request<any, any>({
            path: `/api/subscribers`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags Subscribing
     * @name UnsubscribeFromNewsletter
     * @summary Unsubscribe from newsletter
     * @request DELETE:/api/subscribers
     */
    unsubscribeFromNewsletter = (
        data: {
            /**
             * Must be a valid email address.
             * @example "zgislason@example.org"
             */
            email: string;
        },
        params: RequestParams = {},
    ) =>
        this.request<any, any>({
            path: `/api/subscribers`,
            method: "DELETE",
            body: data,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags User
     * @name GetCurrentAuthenticatedUser
     * @summary Get current authenticated user
     * @request GET:/api/users/me
     */
    getCurrentAuthenticatedUser = (params: RequestParams = {}) =>
        this.request<
            {
                data: User;
            },
            void
        >({
            path: `/api/users/me`,
            method: "GET",
            format: "json",
            ...params,
        });
    /**
     * No description
     *
     * @tags User
     * @name RegisterUser
     * @summary Register new user
     * @request POST:/api/users/register
     */
    registerUser = (data: RegisterCredentials, params: RequestParams = {}) =>
        this.request<
            {
                message: string;
            },
            ErrorMessage
        >({
            path: `/api/users/register`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
}
