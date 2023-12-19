import { UserService } from "@/app/service/user/userService"

const Ticket = () => {
    const userService = new UserService();
    const userList = userService.getAllUser();
    return (
        <div>
            
        </div>
    )
}
export default Ticket