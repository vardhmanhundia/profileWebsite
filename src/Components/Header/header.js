import React from 'react';
import './header.css';
import { Typography, Box, Button, Avatar, Grid} from '@material-ui/core';
import ProfilePhoto from '../Images/vardhman.jpg'
import MenuIcon from '@material-ui/icons/Menu';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
import { gray } from 'color-name';

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title:{
        color: "gray"
    },
    subtitle:{
        color: "tan",
        margin: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%}",
        textAlign: "center",
        zIndex: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
            <Box className= {classes.typedContainer}>
                <Grid container justify="center">
                    <Avatar
                        alt="ProfilePhoto"
                        className= {classes.avatar}
                        src= {ProfilePhoto}
                    />
                </Grid>
                
                <Typography className= {classes.title} variant="h4" >
                    <Typed strings={["Vardhman Hundia"]} typeSpeed={40} />
                </Typography>
                <br/>
                <Typography className= {classes.subtitle} variant="h5" >
                    <Typed strings={["IoT Engineer","MERN Developer","Web Developer"]} typeSpeed={40} loop/>
                </Typography>
            </Box>
    
    );
}

export default Header;

