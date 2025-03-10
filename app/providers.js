// app/providers.js
'use client';

import { ThemeProvider } from '@mui/material/styles';
import { payuTheme } from '@/lib/theme';

export function Providers({ children }) {
  return <ThemeProvider theme={payuTheme}>{children}</ThemeProvider>;
}