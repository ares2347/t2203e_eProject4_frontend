interface IUserService {
    getAllUser: () => UserModel[];
    getCurrentUser: ()=> UserModel;
}