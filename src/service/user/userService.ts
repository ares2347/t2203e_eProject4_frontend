import { CurrentUserMock, UserListMock } from "@/model/mock/userMock";

export class UserService implements IUserService{
    getAllUser = () => UserListMock();
    getCurrentUser = () => CurrentUserMock();
}
