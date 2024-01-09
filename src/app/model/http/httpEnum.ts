interface HttpStatusInterface {
    code: number;
    message: string;
}

class HttpStatus{
    public InternalServerError: HttpStatusInterface = {code: 500, message: "Internal Server Error"};
    public BadRequest: HttpStatusInterface = {code: 400, message: "Bad Request"};
    public Unauthorized: HttpStatusInterface = {code: 40, message: "Unauthorized"};
    public Success: HttpStatusInterface = {code: 200, message: "Success"};
}

export const HttpStatusEnum = new HttpStatus();

export enum SortEnum {
    ASC = "asc",
    DESC = "desc"
}

export interface HttpResponse<T> {
    code: number;
    message?: string | undefined;
    data : T | null;
}

export interface HttpPaginationResponse<T>{
    content: Array<T>,
    pageable: {
        pageNumber: number,
        pageSize: number,
        sort: {
            empty: boolean,
            sorted: boolean,
            unsorted: boolean
        },
        offset: number,
        paged: boolean,
        unpaged: boolean
    },
    last: boolean,
    totalPages: number,
    totalElements: number,
    size: number,
    number: number,
    sort: {
        empty: boolean,
        sorted: boolean,
        unsorted: boolean
    },
    first: boolean,
    numberOfElements: number,
    empty: boolean
}