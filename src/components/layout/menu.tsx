"use client";
import { UserInfo } from "@/model/auth/AuthModel";
import { AuthService } from "@/service/auth/authService";
import { FormatListBulleted, Add } from "@mui/icons-material";
import { List, ListItem, Box } from "@mui/joy";
import {
  Paper,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Toolbar,
  Drawer,
  ListItemButton,
  AppBar,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Routing{
  url: string;
  label: string;
  icon: React.ReactElement;
}
const routing: Array<Routing> = [
  {
    url: "/brand/trip/add",
    label: "Thêm chuyến",
    icon: <Add />,
  },
  {
    url: "/brand/trip/list",
    label: "Danh sách chuyến",
    icon: <FormatListBulleted />,
  },
  {
    url: "/brand/vehicle/add",
    label: "Thêm phương tiện",
    icon: <Add />,
  },
  {
    url: "/brand/vehicle/list",
    label: "Danh sách phương tiện",
    icon: <FormatListBulleted />,
  },
  {
    url: "/brand/driver/add",
    label: "Thêm tài xế",
    icon: <Add />,
  },
  {
    url: "/brand/driver/list",
    label: "Danh sách tài xế",
    icon: <FormatListBulleted />,
  },
];
const Menu = () => {
  const router = useRouter();
  const authService = new AuthService();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const drawerWidth = 240;
  function handleLogOut() {
    authService.logout();
    setUserInfo(null);
    router.push("/auth/login");
  }
  const handleClick = (url: string) => {
    router.push(url);
  };
  return (
    <Box
      component="nav" aria-label="My site" sx={{ flexGrow: 1 }}
    >
      <List role="menubar" orientation="horizontal">
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
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Menu;