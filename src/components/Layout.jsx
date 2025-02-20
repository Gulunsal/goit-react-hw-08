import React from "react";
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from './Navbar/Navigation';
import { Box, CircularProgress } from '@mui/material';

export default function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation />
      <Box component="main" sx={{ flexGrow: 1, mt: { xs: 7, sm: 8 } }}>
        <Suspense fallback={
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
          </Box>
        }>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
}
