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