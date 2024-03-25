import NavBrand from "@/components/sidebar/brand";
import { AppBar, Grid, Toolbar } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode
}
const Layout = (props: LayoutProps) => {
  return (
    <>
      <Grid>
        <NavBrand />
        <Grid width='fullwidth'>{props.children}</Grid>
      </Grid>
    </>
  );
};

export default Layout;
