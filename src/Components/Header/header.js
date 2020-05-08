import React from 'react';
import './header.css';
import { Typography, Box, Button, Avatar, Grid} from '@material-ui/core';
import ProfilePhoto from '../Images/vardhman.jpg'
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';

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
        top: "20%",
        left: "50%",
        right: "50%",
        transform: "translate(-50%,-50%}",
        textAlign: "center",
        zIndex: 1
    },
    pariclesCanva: {
        position: "absolute",
        opacity: "0.3"
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <>
            
            <Box className= {classes.typedContainer}>
                <Grid container justify="center">
                    <Avatar
                        alt="ProfilePhoto"
                        className= {classes.avatar}
                        src= {ProfilePhoto}
                    />
                    <Typography className= {classes.title} variant="h2" >
                        <Typed strings={["Vardhman Hundia"]} typeSpeed={40} />
                    </Typography>
                    <Typography className= {classes.subtitle} variant="h4" >
                        <Typed strings={["IoT Engineer","MERN Developer","Web Developer"]} typeSpeed={40} loop/>
                    </Typography>
                    <Button width="20px" variant="contained" color="primary" disableElevation>
                        Read More
                    </Button>
                </Grid>
            </Box>
        </>
    
    );
}

export default Header;

