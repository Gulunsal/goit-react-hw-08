import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { useNavigate } from "react-router";
import { Button, Typography, Stack, Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export default function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Avatar için kullanıcı adının baş harfini alma
  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : 'K';  // Eğer isim yoksa 'K' göster
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar 
        sx={{ 
          bgcolor: 'secondary.main',
          width: 40,
          height: 40,
          fontSize: '1.2rem'
        }}
      >
        {getInitials(user?.name)}
      </Avatar>
      <Typography 
        variant="subtitle1" 
        color="inherit"
        sx={{ display: { xs: 'none', sm: 'block' } }}  // Mobilde gizle
      >
        {user?.name || 'Kullanıcı'}
      </Typography>
      <Button 
        color="inherit"
        onClick={handleLogout}
        startIcon={<LogoutIcon />}
        sx={{ ml: { xs: 1, sm: 2 } }}
      >
        Çıkış
      </Button>
    </Stack>
  );
}
