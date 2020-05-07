import React from 'react';
import './header.css';
import {AppBar, Toolbar, IconButton} from 'material-ui';
import { Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const header = () => {

    return (
            <AppBar >
                <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h4">
                    News
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
    
    );
}

export default header;

