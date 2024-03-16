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
        <Toolbar>
          <Grid width='fullwidth'>{props.children}</Grid>
        </Toolbar>
      </Grid>
    </>
  );
};

export default Layout;
