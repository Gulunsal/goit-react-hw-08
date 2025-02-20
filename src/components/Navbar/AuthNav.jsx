import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Box } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import LoginIcon from '@mui/icons-material/Login'

export default function AuthNav() {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Button
        component={Link}
        to="/register"
        variant="outlined"
        color="inherit"
        startIcon={<PersonAddIcon />}
        sx={{
          borderColor: 'rgba(255, 255, 255, 0.5)',
          '&:hover': {
            borderColor: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        Kayıt Ol
      </Button>
      
      <Button
        component={Link}
        to="/login"
        variant="contained"
        color="secondary"
        startIcon={<LoginIcon />}
        sx={{
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: 'secondary.dark',
          },
        }}
      >
        Giriş Yap
      </Button>
    </Box>
  )
}
