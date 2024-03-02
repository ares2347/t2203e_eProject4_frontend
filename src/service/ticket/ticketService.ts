import { TicketListMock } from "@/model/mock/ticketMock";
import { httpPost } from "../http/httpService";
import { HttpResponse } from "@/model/http/httpEnum";
import { ITicketService } from "./ticketServiceInterface";


export class TicketService implements ITicketService{

   readonly userUrl = "user/ticket"
   getAllTicket = () => TicketListMock();

   bookTicketAsync = async (request: BookTicketRequest[]): Promise<HttpResponse<TicketModel[]>> => {
      return await httpPost<TicketModel[]>(request, `${this.userUrl}/book`, null, true);
   }
}