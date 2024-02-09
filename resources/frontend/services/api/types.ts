interface PaginationLinks {
    total: number;
    lastPage: number;
}

export type WithPagination<T> = { data: T; pagination: PaginationLinks };
export type WithMessage<T> = { data: T; message: string };
export interface ErrorMessage<T = string> {
    message: string;
    errors: {
        [field in T extends string ? T : keyof T]: string[];
    };
}
