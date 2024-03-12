import Menu from "@/components/layout/menu";
import { Grid } from "@mui/material";

interface LayoutProps{
    children: React.ReactNode
}
const Layout = (props: LayoutProps) => {
  return (
    <>
      <Grid container wrap="nowrap">
      <Grid item xs = {2}><Menu /></Grid>
      <Grid item xs = {10}>{props.children}</Grid>
      </Grid>
    </>
  );
};

export default Layout;
