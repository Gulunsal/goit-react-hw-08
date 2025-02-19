import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { Button, Stack } from '@mui/material';

export default function Navigation() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Stack direction="row" spacing={2}>
      <Button
        component={NavLink}
        to="/"
        color="inherit"
        sx={{
          '&.active': {
            backgroundColor: 'rgba(255, 255, 255, 0.12)'
          }
        }}
      >
        Ana Sayfa
      </Button>
      
      {isLoggedIn && (
        <Button
          component={NavLink}
          to="/contacts"
          color="inherit"
          sx={{
            '&.active': {
              backgroundColor: 'rgba(255, 255, 255, 0.12)'
            }
          }}
        >
          Kişiler
        </Button>
      )}
    </Stack>
  );
}
