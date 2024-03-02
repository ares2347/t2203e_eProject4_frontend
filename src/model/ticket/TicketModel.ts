interface TicketModel extends IBaseModel {
  ticketID: string | null;
  tripID: string;
  ticketConfigId: string;
  userID: number;
  customerName: string;
  customerGender: string;
  customerAge: number;
  customerPhone: number;
  total: number | null;
  pickupPoint: string;
  dropoffPoint: string;
}

interface TicketConfigModel extends IBaseModel {
  ticketConfigId: string;
  ticketType: string;
  price: number;
  seat: string;
  coach: string;
  ticketDescription: string;
}
