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

interface BookTicketRequest {
  tripId: string;
  tripConfigId: string;
  pickupPoint: string;
  dropoffPoint: string;
  customerName: string;
  customerDob: string;
  customerIc: string;
  customerEmail: string;
  customerPhone: string;
  seat: string;
}
