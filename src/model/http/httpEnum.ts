export interface HttpStatusInterface {
    code: number;
    message: string;
}

export class HttpStatus{
    public InternalServerError: HttpStatusInterface = {code: 500, message: "Internal Server Error"};
    public BadRequest: HttpStatusInterface = {code: 400, message: "Bad Request"};
    public Unauthorized: HttpStatusInterface = {code: 401, message: "Unauthorized"};
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
    data : T | null | undefined;
}

export interface HttpPaginationResponse<T>{
    data: Array<T>,
    page: number,
    size: number,
    total: number,
    totalPage: number,
}