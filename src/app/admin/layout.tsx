"use client"
import NavAdmin from "@/components/sidebar/admin";
import { Grid } from "@mui/material";
import "@/components/sidebar/css.css";
import { useTheme } from "styled-components";

interface LayoutProps {
    children: React.ReactNode
}
const Layout = (props: LayoutProps) => {
    const theme = useTheme();
    console.log(theme)
    return (
        <>
            <NavAdmin />
            <Grid px={4} py={2} className="home" width='fullwidth'>{props.children}</Grid>
        </>
    );
};

export default Layout;
