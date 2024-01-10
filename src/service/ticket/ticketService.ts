import { TicketListMock } from "@/model/mock/ticketMock";


export class TicketService implements ITicketService{
   getAllTicket = () => TicketListMock();
}