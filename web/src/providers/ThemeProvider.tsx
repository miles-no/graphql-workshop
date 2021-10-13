import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
