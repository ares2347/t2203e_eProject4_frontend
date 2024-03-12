"use client";
import { FormatListBulleted, Add } from "@mui/icons-material";
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
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { useRoutes } from 'react-router-dom';
import { useRouter } from "next/navigation";

interface Routing{
  url: string;
  label: string;
  icon: React.ReactElement;
}
const routing: Array<Routing> = [
  {
    url: "/content/overview/Hero",
    label: "Add New Trip",
    icon: <Add />,
  },
  {
    url: "/brand/trip/list",
    label: "Trip List",
    icon: <FormatListBulleted />,
  },
  {
    url: "/brand/vehicle/add",
    label: "Add New Vehicle",
    icon: <Add />,
  },
  {
    url: "/brand/vehicle/list",
    label: "Vehicle List",
    icon: <FormatListBulleted />,
  },
];
const Menu = () => {
  const router = useRouter();
  const drawerWidth = 240;
  console.log(router)
  const handleClick = (url: string) => {
    router.push(url);
  };
  //var ContentFill = useRoutes(routess);
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {routing.map((item, index) => (
            <ListItem
              key={item.label}
              disablePadding
              onClick={() => handleClick(item.url)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Paper>
  );
};

export default Menu;