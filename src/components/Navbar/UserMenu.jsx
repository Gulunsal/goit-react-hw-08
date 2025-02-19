import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { useNavigate } from "react-router";
import { Button, Typography, Stack, Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export default function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await dispatch(logout(token)).unwrap();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar sx={{ bgcolor: 'secondary.main' }}>
        {user.name?.charAt(0).toUpperCase()}
      </Avatar>
      <Typography variant="subtitle1" color="inherit">
        {user.name}
      </Typography>
      <Button 
        color="inherit"
        onClick={handleLogout}
        startIcon={<LogoutIcon />}
        sx={{ ml: 2 }}
      >
        Çıkış
      </Button>
    </Stack>
  );
}
