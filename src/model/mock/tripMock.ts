export function TripListMock() {
    const mockTripList: TripModel[] = [
        {
            tripId: 1,
            brandName: "Toyota 1",
            vehicleType: "16 chỗ",
            tripType: "ads",
            departFrom: "Hà Nội",
            departAt: "8:30",
            arriveTo: "Phú Thọ",
            arriveAt: "10:30",
            seatAmount: "16",
            price: 130,
            createAt: new Date(),
            createBy: "admin_123",
            updatedAt: new Date(),
            updatedBy: "trip_mock_1",
            isDeleted: false
        },
        {
            tripId: 2,
            brandName: "Toyota 2",
            vehicleType: "9 chỗ",
            tripType: "qwe",
            departFrom: "Hải Phòng",
            departAt: "11:00",
            arriveTo: "Nam Định",
            arriveAt: "15:00",
            seatAmount: "5",
            price: 170,
            createAt: new Date(),
            createBy: "admin_123",
            updatedAt: new Date(),
            updatedBy: "trip_mock_2",
            isDeleted: false
        }
    ];
    return mockTripList;
}
