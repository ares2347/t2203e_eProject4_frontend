export function TicketListMock() {
    const mockTicketList: TicketModel[] = [
        {
            ticketID:1,
            tripID: 1,
            userID:1,
            customerName:"Nguyen Thai",
            customerAge:21,
            customerGender:"Nam",
            customerPhone:987654321,
            total:200,
            createAt: new Date(),
            createBy: "admin_123",
            updatedAt: new Date(),
            updatedBy: "trip_mock_1",
            isDeleted: true
        },
        
    ];
    return mockTicketList;
}
