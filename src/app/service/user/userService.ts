import {UserListMock, CurrentUserMock} from "@/app/model/mock/userMock";

export class UserService implements IUserService{
    getAllUser = () => UserListMock();
    getCurrentUser = () => CurrentUserMock();
}
