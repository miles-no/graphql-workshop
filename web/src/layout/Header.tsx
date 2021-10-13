import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className="home" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/"> Jukebox</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
