import Menu from "@/components/layout/menu";
import { AppBar, Grid, Toolbar } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode
}
const Layout = (props: LayoutProps) => {
  return (
    <>
      <Grid>
        <Menu />
        <Grid width='fullwidth'>{props.children}</Grid>
      </Grid>
    </>
  );
};

export default Layout;
