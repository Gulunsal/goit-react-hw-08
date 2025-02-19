import React from 'react'
import { NavLink } from 'react-router'
import { Button, Stack } from '@mui/material'

export default function AuthNav() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        component={NavLink}
        to="/login"
        color="inherit"
        sx={{
          '&.active': {
            backgroundColor: 'rgba(255, 255, 255, 0.12)'
          }
        }}
      >
        Giriş
      </Button>
      <Button
        component={NavLink}
        to="/register"
        color="inherit"
        sx={{
          '&.active': {
            backgroundColor: 'rgba(255, 255, 255, 0.12)'
          }
        }}
      >
        Kayıt Ol
      </Button>
    </Stack>
  )
}
