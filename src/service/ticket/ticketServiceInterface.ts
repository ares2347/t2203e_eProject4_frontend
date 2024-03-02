import { HttpResponse } from "@/model/http/httpEnum";

export interface ITicketService {
    getAllTicket: () => TicketModel[];
    bookTicketAsync: (request: BookTicketRequest[]) => Promise<HttpResponse<TicketModel[]>>;
}