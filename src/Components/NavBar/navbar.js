import React, { useState } from 'react';
import { Button, AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, ListItemIcon } from '@material-ui/core';
import { AssignmentInd, Home, Apps, ContactMail, Person } from '@material-ui/icons';
import { makeStyles} from '@material-ui/core/styles';
import ProfilePhoto from '../Images/vardhman.jpg'
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import ContactsIcon from '@material-ui/icons/Contacts';
const userStyles = makeStyles(theme => ({
    menuSliderContainer:{
        width: 300,
        background: "white",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listText: {
        color: "default"
    }

}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home"
    },
    {
        listIcon: <Person/>,
        listText: "About Me"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "My Carrier"
    },
    {
        listIcon: <Apps />,
        listText: "Projects"
    },
    {
        listIcon: <ContactsIcon />,
        listText: "Contact Me"
    }
]



const Navbar = ({onRouteChange}) => {
    const classes = userStyles();
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => () =>{
        setState({...state, [slider]: open})
    };

    const sideList = Slider => (
        <Box className={classes.menuSliderContainer} component="div">
                <Avatar className={classes.avatar} src={ProfilePhoto} alt="ProfilePhoto"  />
                <Divider />
                <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} onClick={() => onRouteChange(lsItem.listText) } >
                        <ListItemIcon >
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listText} primary={lsItem.listText} />
                    </ListItem>
                ))}
                </List>
            </Box>
    );
    
   
    
    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={{background: "transparent", position:"fixed", border: 0, boxShadow: '0 0 0 0 '}}>
                <Toolbar>
                    <IconButton anchor="right" onClick={toggleSlider("right",true)}>
                        <MenuIcon fontSize="large" style={{color: "white"}}/>
                    </IconButton>
                    <MobileRightMenuSlider
                    anchor="left"
                    open={state.right}
                    onClose = {toggleSlider("right",false)}
                    >
                        {sideList("right")}
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>

        </Box>
        </>
    );
}

export default Navbar;