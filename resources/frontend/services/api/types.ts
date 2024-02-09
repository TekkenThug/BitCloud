interface PaginationLinks {
    total: number;
    lastPage: number;
}

export type APIResponse<T> = { data: T };
export type WithPagination<T> = { pagination: PaginationLinks } & APIResponse<T>;
export type WithMessage<T = never> = { message: string } & APIResponse<T>;

export interface ErrorMessage<T = string> {
    message: string;
    errors: {
        [field in T extends string ? T : keyof T]: string[];
    };
}
