'use client';

import { createTheme } from '@mui/material/styles';

export const payuTheme = createTheme({
  palette: {
    primary: {
      main: '#1e8e3e', // PayU green
    },
    secondary: {
      main: '#34a853', // Lighter green
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});