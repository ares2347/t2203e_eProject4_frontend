"use client";
import Overview from "@/app/admin/overview/page";
import "./css.css";
import { UserInfo } from "@/model/auth/AuthModel";
import { AuthService } from "@/service/auth/authService";
import { List, ListItem, Box } from "@mui/joy";
import {
    ListItemText,
    ListItemButton,
    Grid,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import theme from "@/app/theme";

interface Routing {
    url: string;
    label: string;
}
const routing: Array<Routing> = [
    {
        url: "/admin/usermanager/form",
        label: "Quản Lý Nhân Viên",
    },

];
const NavAdmin = () => {
    const router = useRouter();
    const authService = new AuthService();
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    function handleLogOut() {
        authService.logout();
        setUserInfo(null);
        router.push("/auth/login");
    }
    const handleClick = (url: string) => {
        router.push(url);
    };
    const [toggleSidebar, setToggleSidebar] = useState(false);

    const modeTextRef = useRef();

    const toggle = () => {
        setToggleSidebar(!toggleSidebar);
    };

    return (
            <nav className={toggleSidebar ? "sidebar close" : "sidebar"}>
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src="logo.png" alt="" />
                        </span>

                        <div className="text logo-text">
                            <span className="name">Codinglab</span>
                            <span className="profession">Web developer</span>
                        </div>
                    </div>

                    <i className="bx bx-chevron-right toggle" onClick={toggle}></i>
                </header>

                <div className="menu-bar">
                    <div className="menu">
                        <List role="menubar" >
                            {routing.map((item, index) => (
                                <ListItem
                                    role="none"
                                    key={index}
                                >
                                    <ListItemButton
                                        role="menuitem"
                                        component="a"
                                        href={item.url}
                                    >
                                        <ListItemText primary={item.label}/>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <div>
                        <li className="">
                            <a>
                                <i className="bx bx-log-out icon"></i>
                                <span onClick={handleLogOut} className="text nav-text">Logout</span>
                            </a>
                        </li>
                    </div>
                </div>
            </nav>
    );
};

export default NavAdmin;
