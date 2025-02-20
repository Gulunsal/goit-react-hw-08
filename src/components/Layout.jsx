import React from "react";
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from './Navbar/Navigation';
import { Box, CircularProgress } from '@mui/material';

export default function Layout() {
  return (
    <Box>
      <Navigation />
      <Suspense fallback={
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      }>
        <Outlet />
      </Suspense>
    </Box>
  );
}
