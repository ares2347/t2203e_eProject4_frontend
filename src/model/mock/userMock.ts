export function UserListMock() {
    const mockUserList: UserModel[] = [
        {
            fullName: "User Mock 1",
            email: "user1@mock.com",
            phoneNumber: "012345678",
            userId: "user_mock_1",
            createAt: new Date(),
            createBy: "admin_123",
            updatedAt: new Date(),
            updatedBy: "user_mock_1",
            isDeleted: false
        },
        {
            fullName: "User Mock 3",
            email: "user3@mock.com",
            phoneNumber: "0324134242",
            userId: "user_mock_3",
            createAt: new Date(),
            createBy: "admin_123",
            updatedAt: new Date(),
            updatedBy: "user_mock_3",
            isDeleted: false
        },
        {
            fullName: "User Mock 2",
            email: "user2@mock.com",
            phoneNumber: "0232342342",
            userId: "user_mock_2",
            createAt: new Date(),
            createBy: "admin_123",
            updatedAt: new Date(),
            updatedBy: "user_mock_2",
            isDeleted: false
        }
    ];
    return mockUserList;
}

export function CurrentUserMock() {
    const currentUser: UserModel = {
        fullName: "User Mock 1",
        email: "user1@mock.com",
        phoneNumber: "012345678",
        userId: "user_mock_1",
        createAt: new Date(),
        createBy: "admin_123",
        updatedAt: new Date(),
        updatedBy: "user_mock_1",
        isDeleted: false
    };

    return currentUser;
}