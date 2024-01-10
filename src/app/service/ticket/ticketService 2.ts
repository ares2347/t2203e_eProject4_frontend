import {TicketListMock} from "@/app/model/mock/ticketMock";

export class TicketService implements ITicketService{
   getAllTicket = () => TicketListMock();
}