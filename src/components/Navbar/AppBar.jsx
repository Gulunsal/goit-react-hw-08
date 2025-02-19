import { AppBar as MuiAppBar, Toolbar, Typography, Box } from '@mui/material';
import Navigation from "./Navigation";
import { useSelector } from "react-redux";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";

export default function NavBar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Kişi Yönetimi
        </Typography>
        <Box>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}
