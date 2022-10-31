import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { LandingPage } from './LandingPage';

import homePageStyle from '../styles/HomePage.module.css'

export const HomePage = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>

      <div className={homePageStyle.myNavBar}>
        <p>Hellow</p>
      </div>

      <AppBar position="static" id={homePageStyle.navBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* This is the body */}
      <LandingPage />
    </Box>
  );
}
