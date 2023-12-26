interface PaginationLinks {
    total: number;
    lastPage: number;
}

export type WithPagination<T> = { data: T, pagination: PaginationLinks }
