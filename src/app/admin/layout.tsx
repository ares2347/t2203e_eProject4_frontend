import NavAdmin from "@/components/sidebar/admin";
import { Grid } from "@mui/material";

interface LayoutProps {
    children: React.ReactNode
}
const Layout = (props: LayoutProps) => {
    return (
        <>
            <Grid>
                <NavAdmin />
                <Grid width='fullwidth'>{props.children}</Grid>
            </Grid>
        </>
    );
};

export default Layout;
